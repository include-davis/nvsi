import Eventcard from './Eventcard'
import styles from '../../styles/Event/Navtabs.module.css'
import upcoming_events from "./testing/eventData"
import past_events from "./testing/eventData2"
import { useState } from 'react'

export async function getServerSideProps() {

}

export default function Navtabs() {
  const upcoming = upcoming_events.map(event =>
    <Eventcard
      key={event.id}
      title={event.title}
      timestamp={event.timestamp}
      desc={event.desc}
      image={event.image}
      tag1={event.tag1}
      tag2={event.tag2}
      tag3={event.tag3}
    />)
  const past = past_events.map(event =>
    <Eventcard
      key={event.id}
      title={event.title}
      timestamp={event.timestamp}
      desc={event.desc}
      image={event.image}
      tag1={event.tag1}
      tag2={event.tag2}
      tag3={event.tag3}
    />)

  const [showUpcomingEvents, setUpcomingEvents] = useState(true)
  const [showPastEvents, setPastEvents] = useState(false)
  const [underlinePast, setUnderlinePast] = useState(false)
  const [underlineUpcoming, setUnderlineUpcoming] = useState(false)
  function toggleUpcoming() {
    if (!showUpcomingEvents && showPastEvents) {
      setUpcomingEvents(!showUpcomingEvents)
      setPastEvents(!showPastEvents)
      setUnderlineUpcoming(!underlineUpcoming)
      setUnderlinePast(!underlinePast)
    }
  }
  function togglePast() {
    if (!showPastEvents && showUpcomingEvents) {
      setUpcomingEvents(!showUpcomingEvents)
      setPastEvents(!showPastEvents)
      setUnderlineUpcoming(!underlineUpcoming)
      setUnderlinePast(!underlinePast)
    }
  }


  return (
    <div className={styles.navtabs}>
      <div className={styles.tabs}>
        <button className={styles.upcoming_events} onClick={toggleUpcoming} style={{ textDecoration: showUpcomingEvents ? "underline" : "none" }}>Upcoming Events</button>
        <button className={styles.past_events} onClick={togglePast} style={{ textDecoration: showPastEvents ? "underline" : "none" }}>Past Events</button>
      </div>
      <div style={{ display: showUpcomingEvents ? "block" : "none" }} id="upcomingEvents" className={styles.tabname}>
        {upcoming}
      </div>

      <div style={{ display: showPastEvents ? "block" : "none" }} id="pastEvents" className={styles.tabname}>
        {past}
      </div>
    </div>
  )
}