import styles from "../../styles/event.module.css";
import Link from "next/link";

export default function Event({ nextLink, imgSrc }) {
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
          Month, Day, Year
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </div>
  );
}
