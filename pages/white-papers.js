import React, { useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../styles/whitepapers/WhitePapers.module.css"
import { getAbstracts, getWhitePapers } from "../api-lib/apiOps"
import Link from "next/link"

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
  const router = useRouter()

  return (
    <div className={styles.white_papers}>
      <div className={styles.test_paper}>
        <div className={styles.content}>
          <div className={styles.paper_title}>
            <div className={styles.abstract_title}>{Title}</div>
            <div className={styles.topic_id}>
              {Tags.split(";")
                .slice(0, 3)
                .map((tag) => (
                  <p>{tag}</p>
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

export default function WhitePapers({ papers }) {
  // use Effects basically run at the start, this one will only run once
  // use this to set one of the functions to open on default
  useEffect(() => {
    openCity("Abstracts", "AbstractsLink")
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>White Papers | NVSI</title>
        <meta name="description" content="NVSI: White papers" />
        <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>

      <div className={styles.main}>
        <img src={"about_background.svg"}></img>
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
          />
        </div>

        {/* tabs */}
        <div className={styles.tab}>
          <button
            id="AbstractsLink"
            className={styles.tablinks}
            onClick={() => openCity("Abstracts", "AbstractsLink")}
          >
            Abstracts
          </button>
          <button
            id="WhitePapersLink"
            className={styles.tablinks}
            onClick={() => openCity("WhitePapers", "WhitePapersLink")}
          >
            White Papers
          </button>
        </div>

        {/* Abstract */}
        <div id="Abstracts" className={styles.tabcontent}>
          {/* {papers.map((paper) => Abstract(paper.attributes, paper.id))} */}
        </div>

        <div id="WhitePapers" className={styles.tabcontent}>
          {papers.map((paper) => Abstract(paper.attributes, paper.id))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const papers = await getWhitePapers()
    const abstracts = await getAbstracts()
    // console.log(papers)
    return {
      props: { papers, abstracts },
    }
  } catch (err) {
    console.error(err)
    return {
      props: { papers: [], abstracts: [] },
    }
  }
}
