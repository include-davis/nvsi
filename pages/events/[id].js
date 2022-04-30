import React from "react"
import ReactMarkdown from "react-markdown"
import Head from "next/head"

import {
  getEventById,
  getPastEvents,
  getUpcomingEvents,
} from "../../api-lib/apiOps"
import { generateTimestamp } from "../../components/Event/Navtabs"

import styles from "../../styles/Event/eventPage.module.css"

export default function Event({ event }) {
  return (
    <>
      <Head>
        <title>{event.attributes.Title}</title>
        <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>
      <div className={styles.head}>
        <h1>{event.attributes.Title}</h1>
      </div>
      <section className={styles.container}>
        <div className={styles.summary}>
          <ReactMarkdown children={event.attributes.Summary} />
        </div>
        <div className={styles.info}>
          <p>
            <img className={styles.clock} src="/clock.svg" alt="clock icon" />
            {generateTimestamp(
              event.attributes.Date,
              event.attributes.StartTime,
              event.attributes.EndTime
            )}
          </p>
          <p>
            <img className={styles.pin} src="/pin.svg" alt="pin icon" />
            {event.attributes.Location}
          </p>
        </div>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const past = await getPastEvents()
  const upcoming = await getUpcomingEvents()
  const events = [...past, ...upcoming]
  // console.log(events)

  const paths = events.map((event) => {
    // console.log(event)
    return {
      params: {
        id: event.id.toString(),
      },
    }
  })

  // console.log(paths)

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  const event = await getEventById(params.id)
  console.log(event)

  return {
    props: { event },
    revalidate: 60,
  }
}
