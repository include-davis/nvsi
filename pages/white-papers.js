import React, { useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../styles/whitepapers/WhitePapers.module.css"
import { getAbstracts, getWhitePapers } from "../api-lib/apiOps"
import Link from "next/link"
import { useState, useRef } from "react"

function openCity(cityName, cityNameLink) {
  var tabcontent = ["Abstracts", "WhitePapers"]
  for (var i = 0; i < tabcontent.length; i++) {
    var curtab = document.getElementById(tabcontent[i])
    curtab.style.display = "none"
  }

  var tablinks = ["AbstractsLink", "WhitePapersLink"]
  for (var i = 0; i < tablinks.length; i++) {
    var curtablink = document.getElementById(tablinks[i])
    curtablink.className = "styles.tablinks"
  }

  document.getElementById(cityName).style.display = "block"
  document.getElementById(cityNameLink).className = "styles.tablinksactive"
}

function Abstract({ Title, Topic, Tags, Summary }, id) {
  return (
    <div className={styles.white_papers} key={id}>
      <div className={styles.test_paper}>
        <div className={styles.content}>
          <div className={styles.paper_title}>
            <div className={styles.abstract_title}>{Title}</div>
            <div className={styles.topic_id}>
              {Tags.split(";")
                .slice(0, 3)
                .map((tag) => (
                  <p key={tag}>{tag}</p>
                ))}
            </div>
          </div>
          <div className={styles.topic}>
            <p>{Topic}</p>
          </div>
          <div className={styles.paper_description}>
            <p>{Summary}</p>
          </div>
          <div className={styles.get_involved}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyUMGKQ5OBrHkFEK94cyHntJfyGQQFLBzWaYn-VTuRzHs69A/viewform?usp=sf_link">
              <button className={styles.get_involved_button}>
                Get Involved
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function WhitePaper({ Title, Topic, Tags, Summary }, id) {
  return (
    <div className={styles.white_papers} key={id}>
      <div className={styles.test_paper}>
        <div className={styles.content}>
          <div className={styles.paper_title}>
            <div className={styles.abstract_title}>{Title}</div>
            <div className={styles.topic_id}>
              {Tags.split(";")
                .slice(0, 3)
                .map((tag) => (
                  <p key={tag}>{tag}</p>
                ))}
            </div>
          </div>
          <div className={styles.topic}>
            <p>{Topic}</p>
          </div>
          <div className={styles.paper_description}>
            <p>{Summary}</p>
          </div>
          <div className={styles.get_involved}>
            <Link href={`/white-papers/${id}`}>
              <a>
                <button className={styles.get_involved_button}>
                  Read More
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WhitePapers({ Papers, Abstracts }) {
  const a = 0
  const w = 1
  const [tab, setTab] = useState(a)
  const [papers, setPapers] = useState(Papers)
  const [abstracts, setAbstracts] = useState(Abstracts)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) {
      ref.current = true
      setMounted(true)
    }
  }, [])

  function onSearch(e) {
    if (e.target.value === "") {
      setPapers(Papers)
      setAbstracts(Abstracts)
      return
    }

    setPapers(
      Papers.filter((paper) => {
        return paper.attributes.Title.toLowerCase().includes(e.target.value)
      })
    )
    setAbstracts(
      Abstracts.filter((paper) => {
        return paper.attributes.Title.toLowerCase().includes(e.target.value)
      })
    )
  }

  const abstractsButton =
    tab === a ? [styles.underline, styles.tablinks].join(" ") : styles.tablinks
  const wpButton =
    tab === w ? [styles.underline, styles.tablinks].join(" ") : styles.tablinks

  if (!mounted) return null

  return (
    <div className={styles.container}>
      <Head>
        <title>White Papers | NVSI</title>
        <meta name="description" content="NVSI: White papers" />
        <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>

      <div className={styles.main}>
        <img alt="about background" src={"about_background.svg"}></img>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>WHITE PAPERS</h1>
          </div>
          <div id={styles.description}>
            <h3>Featured Papers</h3>
          </div>
        </div>
      </div>

      <div className={styles.main2}>
        {/* search bar */}
        <div className={styles.search_bar}>
          <div className={styles.search_icon}></div>
          <input
            className={styles.search_input}
            placeholder="Search for a Title or Topic"
            type="text"
            onChange={onSearch}
          />
        </div>

        {/* tabs */}
        <div className={styles.tab}>
          <button
            id="AbstractsLink"
            className={abstractsButton}
            onClick={() => setTab(a)}
          >
            Abstracts
          </button>
          <button
            id="WhitePapersLink"
            className={wpButton}
            onClick={() => setTab(w)}
          >
            White Papers
          </button>
        </div>

        {/* Abstract */}
        <div hidden={tab === w} id="Abstracts" className={styles.tabcontent}>
          {abstracts.map((paper) => Abstract(paper.attributes, paper.id))}
        </div>

        <div hidden={tab === a} id="WhitePapers" className={styles.tabcontent}>
          {papers.map((paper) => WhitePaper(paper.attributes, paper.id))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const papers = await getWhitePapers()
    const abstracts = await getAbstracts()
    return {
      props: { Papers: papers, Abstracts: abstracts },
      revalidate: 60,
    }
  } catch (err) {
    console.error(err)
    return {
      props: { Papers: [], Abstracts: [] },
    }
  }
}
