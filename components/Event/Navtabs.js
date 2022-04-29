import Eventcard from "./Eventcard"
import styles from "../../styles/Event/Navtabs.module.css"
import upcoming_events from "./testing/eventData"
import past_events from "./testing/eventData2"
import { useState, useEffect } from "react"

import { getUpcomingEvents, getPastEvents } from "../../api-lib/apiOps"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function shorten(str) {
  if (str.length <= 250) return str
  return str.substring(0, 250) + "..."
}

// https://stackoverflow.com/questions/29206453/best-way-to-convert-military-time-to-standard-time-in-javascript
function twelveTime(time) {
  time = time.split(":") // convert to array

  // fetch
  const hours = Number(time[0])
  const minutes = Number(time[1])

  // calculate
  let timeValue = ""

  if (hours > 0 && hours <= 12) {
    timeValue = "" + hours
  } else if (hours > 12) {
    timeValue = "" + (hours - 12)
  } else if (hours == 0) {
    timeValue = "12"
  }

  timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes // get minutes
  timeValue += hours >= 12 ? "pm" : "am" // get AM/PM

  return timeValue
}

export function generateTimestamp(date, start, end) {
  date = date.split("-")
  let dateString = months[Number(date[1]) - 1] + " " + date[2] + ", " + date[0]

  if (start) {
    dateString += " @ " + twelveTime(start)
  }

  if (end) {
    dateString += " - " + twelveTime(end)
  }
  return dateString
}

export default function Navtabs({ upcoming, past }) {
  const upcomingEvents =
    upcoming &&
    upcoming.map((event) => {
      return (
        <Eventcard
          id={event.id}
          key={event.id}
          title={event.attributes.Title}
          timestamp={generateTimestamp(
            event.attributes.Date,
            event.attributes.StartTime,
            event.attributes.EndTime
          )}
          desc={shorten(event.attributes.Summary)}
          image={
            event.attributes.Image.data
              ? event.attributes.Image.data.attributes.url
              : "/default.png"
          }
          tags={event.attributes.Tags.split(";")}
        />
      )
    })

  const pastEvents =
    past &&
    past.map((event) => {
      return (
        <Eventcard
          id={event.id}
          key={event.id}
          title={event.attributes.Title}
          timestamp={generateTimestamp(
            event.attributes.Date,
            event.attributes.StartTime,
            event.attributes.EndTime
          )}
          desc={shorten(event.attributes.Summary)}
          image={
            event.attributes.Image.data
              ? event.attributes.Image.data.attributes.url
              : "/right_arrow.svg"
          }
          tags={event.attributes.Tags.split(";")}
        />
      )
    })

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

  if (!upcoming) return null

  return (
    <div className={styles.navtabs}>
      <div className={styles.tabs}>
        <button
          className={styles.upcoming_events}
          onClick={toggleUpcoming}
          style={{ textDecoration: showUpcomingEvents ? "underline" : "none" }}
        >
          Upcoming Events
        </button>
        <button
          className={styles.past_events}
          onClick={togglePast}
          style={{ textDecoration: showPastEvents ? "underline" : "none" }}
        >
          Past Events
        </button>
      </div>
      <div
        style={{ display: showUpcomingEvents ? "block" : "none" }}
        id="upcomingEvents"
        className={styles.tabname}
      >
        {upcomingEvents}
      </div>

      <div
        style={{ display: showPastEvents ? "block" : "none" }}
        id="pastEvents"
        className={styles.tabname}
      >
        {pastEvents}
      </div>
    </div>
  )
}
