import styles from '../../styles/Event/Eventcard.module.css'
import Image from 'next/image'

export default function Eventcard(props) {
    return (
        <article className={styles.container}>
            <img src={props.image} alt="event image" />
            <div className={styles.info}>
                <h2>{props.title}</h2>
                <h3>{props.timestamp}</h3>
                <p>{props.desc}</p>
                <div className={styles.tags}>
                    {props.tags.map(tag => <p>{tag}</p>)}
                </div>
                <button>Event Details {">"}</button>
            </div>
        </article>
    )
}