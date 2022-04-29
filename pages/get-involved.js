import Link from "next/link"
import React from "react"
import TestimonialCard from "../components/get-involved/TestimonialCard"
import styles from "../styles/getinvolved/get-involved.module.css"
import Head from 'next/head'

function Card({ name, group, quote }) {
  return (
    <article className={styles.card}>
      <img src="default.jpeg" alt={`picture of ${name}`} />
      <div className={styles.cardInfo}>
        <h3>{name}</h3>
        <h4>{group}</h4>
        <br />
        <p>{quote}</p>
      </div>
    </article>
  )
}

export default function GetInvolved() {
  return (
    <>
        <Head>
          <title>Get Involved | NVSI</title>
          <meta name="description" content="Get Involved" />
          <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>

      <div className={styles.headerSection}>
        <h1>GET INVOLVED</h1>
        <p>Volunteer with us!</p>
      </div>
      <div className={styles.container}>
        <div className={styles.testimonials}>
          <h2>Testimonials</h2>
          <div className={styles.group}>
            <Card
              name="A random name that will surely wrap"
              group="UC Davis"
              quote="Lorem Ipsum"
            />
            <Card name="A random name" group="UC Davis" quote="Lorem Ipsum" />
            <Card name="A random name" group="UC Davis" quote="Lorem Ipsum" />
          </div>
        </div>
        <div className={styles.description}>
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pretium nec urna in aliquam. Suspendisse at convallis nibh, sed
            fermentum urna. Maecenas congue viverra ornare. Proin convallis
            lorem imperdiet enim egestas mollis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pretium nec urna in aliquam. Suspendisse at convallis nibh, sed
            fermentum urna. Maecenas congue viverra ornare. Proin convallis
            lorem imperdiet enim egestas mollis.
          </p>
          <Link href="#">
            <a>
              <button>Apply Here</button>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
