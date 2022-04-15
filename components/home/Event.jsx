import styles from "../../styles/home/event.module.css";
import Link from "next/link";

export default function Event({ nextLink, imgSrc, date, title }) {
  return (
    <div className={styles.eventContainer}>
      <Link href={nextLink}>
        <img className={styles.pic} src={imgSrc} alt="Picture of the event" />
      </Link>
      <div className={styles.desc}>
        <p
          style={{
            fontSize: "16px",
            color: "white",
            margin: "30px 30px 10px 30px"
          }}
        >
          {date}
        </p>
        <p
          style={{
            fontSize: "24px",
            color: "white",
            fontWeight: "bold",
            margin: "10px 30px 30px 30px",
            overflowWrap: "break-word",
            textAlign: "center",
            lineHeight: "25px"
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
