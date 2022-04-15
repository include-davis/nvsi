import Head from 'next/head'
import Footer from '/components/Footer/Footer.js'
import Navtabs from '../components/Event/Navtabs'
import GrayButton from '../components/grayButton'

import styles from '../styles/Event/Events.module.css'

import { getPastEvents, getUpcomingEvents } from '../api-lib/apiOps'

import { useState, useEffect } from 'react'

export default function Event({ upcoming, past }) {
    // console.log({ upcoming, past })
    return (
        <>
            <Head>
                <title>Events | NVSI</title>
            </Head>

            <h1 className={styles.header}>EVENTS</h1>

            {/* <Nav />
        Event Page Title
        Grey Button Component */}
            {/* <GrayButton /> */}
            <Navtabs upcoming={upcoming} past={past} />
        </>
    )
}

export async function getStaticProps() {
    try {
        const upcoming = await getUpcomingEvents()
        const past = await getPastEvents()

        return {
            props: { upcoming, past }
        }
    } catch (err) {
        console.error(err)
        return {
            props: {}
        }
    }
}
