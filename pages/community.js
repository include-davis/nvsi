import styles from "../styles/community/Community.module.css"
import { getCommunity } from "../api-lib/apiOps"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Head from "next/head"
import GrayButton from "../components/grayButton"

function Card({ name, headline, email, imgSrc, id }) {
  return (
    <article className={styles.card}>
      <Link href="/">
        <a>
          <img src={imgSrc ?? "default.jpeg"} alt={`picture of ${name}`} />
        </a>
      </Link>
      <div className={styles.cardInfo}>
        <Link href="/">
          <a>
            <h3>{name}</h3>
          </a>
        </Link>
        <p>{headline}</p>
        <a href={`mailto:${email}`}>
          <img src="fluent_mail-20-filled.svg" alt="mail icon" />
          {email}
        </a>
      </div>
    </article>
  )
}

const Community = ({
  Scholars,
  Graduates,
  Undergraduates,
  Industry,
  Npo,
  Others,
}) => {
  const [scholars, setScholars] = useState(Scholars)
  const [graduates, setGraduates] = useState(Graduates)
  const [undergraduates, setUndergraduates] = useState(Undergraduates)
  const [industry, setIndustry] = useState(Industry)
  const [npo, setNpo] = useState(Npo)
  const [others, setOthers] = useState(Others)

  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)

  function onQueryChange(e) {
    if (e.target.value === "") {
      setScholars(Scholars)
      setGraduates(Graduates)
      setUndergraduates(Undergraduates)
      setIndustry(Industry)
      setNpo(Npo)
      setOthers(Others)
      return
    }

    setScholars(
      Scholars.filter((scholar) => {
        return scholar.attributes.Name.toLowerCase().includes(e.target.value)
      })
    )
    setGraduates(
      Graduates.filter((grad) => {
        return grad.attributes.Name.toLowerCase().includes(e.target.value)
      })
    )
    setUndergraduates(
      Undergraduates.filter((undergrad) => {
        return undergrad.attributes.Name.toLowerCase().includes(e.target.value)
      })
    )
    setIndustry(
      Industry.filter((ind) => {
        return ind.attributes.Name.toLowerCase().includes(e.target.value)
      })
    )
    setNpo(
      Npo.filter((np) => {
        return np.attributes.Name.toLowerCase().includes(e.target.value)
      })
    )
    setOthers(
      Others.filter((other) => {
        return other.attributes.Name.toLowerCase().includes(e.target.value)
      })
    )
  }

  useEffect(() => {
    if (!ref.current) {
      ref.current = true
      setMounted(true)
    }
  }, [useRef])

  if (!mounted) return null

  return (
    <div className={styles.community}>
      <Head>
        <title>Community | NVSI</title>
        <meta name="description" content="Community" />
        <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>
      <div className={styles.communityHeader}>
        <header className={styles.header}>
          <h1 className={styles.title}>Community</h1>
          <h3 className={styles.subtitle}>Get access to our NVSI Network</h3>
        </header>

        <GrayButton
          GreyButtonTitle={"Get added into our network"}
          GreyButtonSubtitle={
            "Fill and submit the application on the right and get connected to NVSI’s network of students, scholars, advocates and more!"
          }
          ArrowPath={"/right_arrow.svg"}
          LinkPath={
            "https://docs.google.com/forms/d/e/1FAIpQLSffDFKtF6Wh3a9oysx7a87BAK2_EIX-5KqR0030tZZFMdeQxg/viewform?usp=sf_link"
          }
        />
      </div>

      <div className={styles.container}>
        <div className={styles.search}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="search key terms or names to find community members"
            onChange={onQueryChange}
          ></input>
        </div>

        <h2>
          Scholars <img src="right_chevron.svg" alt="right chevron" />
        </h2>
        <div className={styles.group}>
          {scholars.map((scholar) => {
            return (
              <Card
                key={scholar.id}
                name={scholar.attributes.Name}
                headline={scholar.attributes.Headline}
                email={scholar.attributes.Email}
                imgSrc={scholar.attributes.Image.data.attributes.url}
              />
            )
          })}
        </div>
        <h2>
          Graduates <img src="right_chevron.svg" alt="right chevron" />
        </h2>
        <div className={styles.group}>
          {graduates.map((graduate) => {
            return (
              <Card
                key={graduate.id}
                name={graduate.attributes.Name}
                headline={graduate.attributes.Headline}
                email={graduate.attributes.Email}
                imgSrc={graduate.attributes.Image.data.attributes.url}
              />
            )
          })}
        </div>
        <h2>
          Undergraduates <img src="right_chevron.svg" alt="right chevron" />
        </h2>
        <div className={styles.group}>
          {undergraduates.map((undergraduate) => {
            return (
              <Card
                key={undergraduate.id}
                name={undergraduate.attributes.Name}
                headline={undergraduate.attributes.Headline}
                email={undergraduate.attributes.Email}
                imgSrc={undergraduate.attributes.Image.data.attributes.url}
              />
            )
          })}
        </div>
        <h2>
          Industry <img src="right_chevron.svg" alt="right chevron" />
        </h2>
        <div className={styles.group}>
          {industry.map((ind) => {
            return (
              <Card
                key={ind.id}
                name={ind.attributes.Name}
                headline={ind.attributes.Headline}
                email={ind.attributes.Email}
                imgSrc={ind.attributes.Image.data.attributes.url}
              />
            )
          })}
        </div>
        <h2>
          Non-Profit Organizations
          <img src="right_chevron.svg" alt="right chevron" />
        </h2>
        <div className={styles.group}>
          {npo.map((np) => {
            return (
              <Card
                key={np.id}
                name={np.attributes.Name}
                headline={np.attributes.Headline}
                email={np.attributes.Email}
                imgSrc={np.attributes.Image.data.attributes.url}
              />
            )
          })}
        </div>
        <h2>
          Others <img src="right_chevron.svg" alt="right chevron" />
        </h2>
        <div className={styles.group}>
          {others.map((other) => {
            return (
              <Card
                key={other.id}
                name={other.attributes.Name}
                headline={other.attributes.Headline}
                email={other.attributes.Email}
                imgSrc={other.attributes.Image.data.attributes.url}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const community = await getCommunity()

  const Scholars = community.filter((member) => {
    return member.attributes.Group === "Scholars"
  })
  const Graduates = community.filter((member) => {
    return member.attributes.Group === "Graduates"
  })
  const Undergraduates = community.filter((member) => {
    return member.attributes.Group === "Undergraduates"
  })
  const Industry = community.filter((member) => {
    return member.attributes.Group === "Industry"
  })
  const Npo = community.filter((member) => {
    return member.attributes.Group === "NonProfitOrganizations"
  })
  const Others = community.filter((member) => {
    return member.attributes.Group === "Others"
  })

  return {
    props: { Scholars, Graduates, Undergraduates, Industry, Npo, Others },
  }
}

export default Community
