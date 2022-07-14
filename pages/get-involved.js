import React from "react"
import styles from "../styles/getinvolved/get-involved.module.css"
import Head from "next/head"
import { getTestimonials } from "../api-lib/apiOps"

function Card({ name, group, quote, pfp }) {
  return (
    <article className={styles.card}>
      <img src={pfp ?? "default.jpeg"} alt={`picture of ${name}`} />
      <div className={styles.cardInfo}>
        <h3>{name}</h3>
        {group && <h4>{group}</h4>}
        <br />
        <p>{quote}</p>
      </div>
    </article>
  )
}

export default function GetInvolved({ testimonials }) {
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
            {testimonials.map((test) => {
              return (
                <Card
                  key={test.id}
                  name={test.attributes.Name}
                  group={test.attributes.Group}
                  quote={test.attributes.Quote}
                  pfp={test.attributes.Image.data.attributes.url}
                />
              )
            })}
          </div>
        </div>
        <div className={styles.description}>
          <h2>Description</h2>
          <p>
            Apple ipsum dolor sit amet, consectetur adipiscing elit. Morbi
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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyUMGKQ5OBrHkFEK94cyHntJfyGQQFLBzWaYn-VTuRzHs69A/viewform">
            <button>Apply Here</button>
          </a>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const testimonials = await getTestimonials()

  return {
    props: { testimonials },
    revalidate: 60,
  }
}
