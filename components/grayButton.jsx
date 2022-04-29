import Head from "next/head"
import Image from "next/image"
import styles from "../styles/graybutton/GrayButton.module.css"

export default function GrayButton({
  GreyButtonTitle,
  GreyButtonSubtitle,
  ArrowPath,
  LinkPath,
}) {
  return (
    <div className={styles.grayButton}>
      <div className={styles.greyText}>
        <div className={styles.greyHeading}> {GreyButtonTitle} </div>
        <div className={styles.greyDescription}> {GreyButtonSubtitle} </div>
      </div>

      <div className={styles.arrowCircle}>
        <a href={LinkPath}>
          <img className={styles.arrow} src={ArrowPath} alt="arrow" />
        </a>
      </div>
    </div>
  )
}
