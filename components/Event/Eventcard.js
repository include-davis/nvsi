import styles from './Eventcard.module.css'
import Image from 'next/image'

export default function Eventcard() {
    return (
        <div className={styles.event}>
            <div className={styles.image}>
                <Image src="/fubuki.jpg" alt="Fubuki" width="500" height="500" layout='intrinsic'/>
            </div>
            <div className={styles.desc}>
                {/* TODO: Fill in data with props*/}
                <h3>Viet Nam and the Diaspora Silicon Valley Connections</h3>
                <b>Feb 23, 2018 @ 12:00 - 1:00pm</b>
                <p>Vietnamese and Vietnamese Americans have an important part of the Silicon Valley since its early development. It began with the thousands of Vietnamese refugees and immigrant assembly workers in companies like IBM and Hewlett Packard.</p>
                <button id="eventbutton">Event Details {">"}</button>
            </div>
        </div>
    )
}