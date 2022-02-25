import Eventcard from './Eventcard'
import useScript from './utils'
import styles from './Navtabs.module.css'
import upcoming_events from "./eventData"
import past_events from "./eventData2"
import { useEffect } from 'react'

// TODO: Hide past events when clicking on current events tab
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

        useEffect(() => {
            function useScript(tabName) {
                var i;
                var x = document.getElementsByClassName("tabname");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  
                }
                document.getElementById(tabName).style.display = "block";
            }
        },[])

    return(
        <div>
            <div className={styles.tabs}>
                <button className={styles.upcoming_events} onClick={useScript('upcomingEvents')}>Upcoming Events</button>
                <button className={styles.past_events} onClick={useScript('pastEvents')}>Past Events</button>
            </div>
            
            <div id="upcomingEvents" className="tabname">
                {upcoming}
            </div>

            <div id="pastEvents" className="tabname">
                {past}
            </div>
        </div>
        

        
    )
}