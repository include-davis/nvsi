import styles from "../styles/community/Community.module.css"
import { getCommunityAll } from "../api-lib/apiOps"

import { useState, useEffect } from "react"
import Link from "next/link"

import GrayButton from "../components/grayButton"

function Card({ name, headline, email, imgSrc, id }) {
  return (
    <article className={styles.card}>
      <Link href="/">
        <a>
          <img src="valverde.png" alt={`picture of ${name}`} />
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

const Community = () => {
  useEffect(() => {
    async function getData() {
      const response = await getCommunityAll()
      console.log(response)
    }
    getData()
  }, [])

  return (
    <div className={styles.community}>
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
        />
      </div>

      <div className={styles.container}>
        <div className={styles.search}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="search key terms or names to find community members"
          ></input>
        </div>

        <h2>
          Scholars <img src="right_chevron.svg" alt="right chevron" />
        </h2>
        <div className={styles.group}>
          <Card
            name="Caroline Kieu Linh Valverde Even Longer"
            headline="this is an even longer random headline that should wrap"
            email="cvalverde@ucdavis.edu"
          />
          <Card
            name="Caroline Kieu Linh Valverde"
            headline="this is a random headline"
            email="cvalverde@ucdavis.edu"
          />
          <Card
            name="Caroline Kieu Linh Valverde"
            headline="this is a random headline"
            email="cvalverde@ucdavis.edu"
          />
          <Card
            name="Caroline Kieu Linh Valverde"
            headline="this is a random headline"
            email="cvalverde@ucdavis.edu"
          />
        </div>
        <h2>
          Graduates <img src="right_chevron.svg" alt="right chevron" />
        </h2>
        <div className={styles.group}>
          <Card
            name="Caroline Kieu Linh Valverde"
            headline="this is a random headline"
            email="cvalverde@ucdavis.edu"
          />
          <Card
            name="Caroline Kieu Linh Valverde"
            headline="this is a random headline"
            email="cvalverde@ucdavis.edu"
          />
          <Card
            name="Caroline Kieu Linh Valverde"
            headline="this is a random headline"
            email="cvalverde@ucdavis.edu"
          />
        </div>
        <h2>
          Undergraduates <img src="right_chevron.svg" alt="right chevron" />
        </h2>
        <h2>
          Industry <img src="right_chevron.svg" alt="right chevron" />
        </h2>

        <h2>
          Non-Profit Organizations
          <img src="right_chevron.svg" alt="right chevron" />
        </h2>

        <h2>
          Others <img src="right_chevron.svg" alt="right chevron" />
        </h2>
      </div>
    </div>
  )
}

export default Community
