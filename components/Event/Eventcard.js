import styles from "../../styles/Event/Eventcard.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Eventcard(props) {
  return (
    <article className={styles.container} key={props.title}>
      <img src={props.image} alt="event image" />
      <div className={styles.info}>
        <h2>{props.title}</h2>
        <h3>{props.timestamp}</h3>
        <p>{props.desc}</p>
        <div className={styles.tags}>
          {props.tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
        <Link href={`/events/${props.id}`}>
          <a>
            <button>Event Details {">"}</button>
          </a>
        </Link>
      </div>
    </article>
  )
}
