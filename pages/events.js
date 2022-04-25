import Head from 'next/head'
import Footer from '/components/Footer/Footer.js'
import Navtabs from '../components/Event/Navtabs'

import styles from '../styles/Event/Events.module.css'

import { getPastEvents, getUpcomingEvents } from '../api-lib/apiOps'

import GrayButton from '../components/grayButton'

import { useState, useEffect } from 'react'

export default function Event({ upcoming, past }) {
    // console.log({ upcoming, past })
    return (
        <>
            <Head>
                <title>Events | NVSI</title>
            </Head>

            <div className={styles.eventHeader}>
                <header className={styles.header}>
                    {/* <img src = {"welcome_background.svg"}/> */}
                    <h1 className={styles.title}>EVENTS</h1>


                    <GrayButton
                        GreyButtonTitle={'Contact us if you are interested in getting support for your projects or ideas'}
                        GreyButtonSubtitle={'If there are the types of events you are interested in having us co-create, promote, and support contact us.'}
                        ArrowPath={'/right_arrow.svg'}
                    />

                </header>

                {/* <div className={styles.getAdded}>
                <div className={styles.addedText}>
                    <h5 className={styles.addedHeading}> Contact us if you are interested in getting support for your projects or ideas </h5>
                    <p className={styles.addedDescription}>If there are the types of events you are interested in
            having us co-create, promote, and support contact us.</p>
                </div>
                <div className={styles.addedVector}>
                    <a href="/"><img id='arrow' src='right_arrow.svg' alt='next' /></a>
                </div>
            </div> */}

            </div>
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
        console.log({ upcoming: upcoming[0].attributes.Image.data, past: past[0].attributes })

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
