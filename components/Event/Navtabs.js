import Eventcard from './Eventcard'
import styles from './Navtabs.module.css'
import upcoming_events from "./eventData"
import past_events from "./eventData2"
import { useState } from 'react'
import Image from 'next/image'

export default function Navtabs() {
    const upcoming = upcoming_events.map(event => 
        <Eventcard
            key={event.id}
            title={event.title}
            timestamp={event.timestamp}
            desc={event.desc}
            image={event.image}
        />)
    const past = past_events.map(event => 
        <Eventcard
            key={event.id}
            title={event.title}
            timestamp={event.timestamp}
            desc={event.desc}
            image={event.image}
        />)

    const [showUpcomingEvents, setUpcomingEvents] = useState(true)
    const [showPastEvents, setPastEvents] = useState(false)
    function toggleUpcoming() {
        if (!showUpcomingEvents && showPastEvents) {
            setUpcomingEvents(!showUpcomingEvents)
            setPastEvents(!showPastEvents)
        }
    }
    function togglePast() {
        if (!showPastEvents && showUpcomingEvents) {
            setUpcomingEvents(!showUpcomingEvents)
            setPastEvents(!showPastEvents)
        }
    }

    return(
        <div className={styles.navtabs}>
            <div>
                <button className={styles.upcoming_events} onClick={toggleUpcoming}>Upcoming Events</button>
                <button className={styles.past_events} onClick={togglePast}>Past Events</button>
            </div>
            
            <div style={{display: showUpcomingEvents?"block":"none"}} id="upcomingEvents" className={styles.tabname}>
                {upcoming}
            </div>

            <div style={{display: showPastEvents?"block":"none"}}id="pastEvents" className={styles.tabname}>
                {past}
            </div>
        </div>
    )
}