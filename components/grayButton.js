import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/graybutton/GrayButton.module.css'
// import grayButton from "../gray_button.js";


export default function GrayButton() {
  return (
    <div className={styles.grayButton}>
      <div className={styles.ContactUs}>
        Contact us if you are interested in getting support for your projects or ideas
      </div>
      <div className={styles.getAdded}>
        If there are the types of events you are interested in
        having us co-create, promote, and support contact us.
      </div>
      <div className={styles.ButtonCircle}>
        <div className={styles.arrowHead}>
          <Image src="/right_arrow.svg" alt="right_arrow" width="39.67px" height="39.67px" />
        </div>
      </div>


    </div>
  )
}