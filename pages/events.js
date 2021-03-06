import Head from "next/head"
import Image from "next/image"
import Footer from "/components/Footer/Footer.js"
import Navtabs from "../components/Event/Navtabs"

import styles from "../styles/Event/Events.module.css"

import { getPastEvents, getUpcomingEvents } from "../api-lib/apiOps"

import GrayButton from "../components/grayButton"

import { useState, useEffect } from "react"

export default function Event({ upcoming, past }) {
  // console.log({ upcoming, past })
  return (
    <>
      <Head>
        <title>Events | NVSI</title>
        <meta name="description" content="Events" />
        <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>

      <div className={styles.eventHeader}>
        <header className={styles.header}>
          {/* <img src = {"welcome_background.svg"}/> */}
          <h1 className={styles.title}>EVENTS</h1>

          <GrayButton
            GreyButtonTitle={
              "Contact us if you are interested in getting support for your projects or ideas"
            }
            GreyButtonSubtitle={
              "If there are the types of events you are interested in having us co-create, promote, and support contact us."
            }
            ArrowPath={"/right_arrow.svg"}
            LinkPath={
              "https://docs.google.com/forms/d/e/1FAIpQLSeyUMGKQ5OBrHkFEK94cyHntJfyGQQFLBzWaYn-VTuRzHs69A/viewform?usp=sf_link"
            }
          />
        </header>
      </div>
      <Navtabs upcoming={upcoming} past={past} />
    </>
  )
}

export async function getStaticProps() {
  try {
    const upcoming = await getUpcomingEvents()
    const past = await getPastEvents()

    return {
      props: { upcoming, past },
      revalidate: 60,
    }
  } catch (err) {
    console.error(err)
    return {
      props: {},
    }
  }
}
