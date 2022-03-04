import styles from '../../styles/Eventcard.module.css'
import Image from 'next/image'

export default function Eventcard(props) {


    return (
        <div className={styles.event}>
            <div className={styles.image}>
                <Image src={props.image} alt="Fubuki" width="500px" height="500px" layout='responsive'/>
            </div>
            <div className={styles.desc}>
                <h3>{props.title}</h3>
                <b>{props.timestamp}</b>
                <p>{props.desc}</p>
                <button>Event Details {">"}</button>
            </div>
        </div>
    )
}