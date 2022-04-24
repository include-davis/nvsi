import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/graybutton/GrayButton.module.css'


export default function GrayButton( { GreyButtonTitle, GreyButtonSubtitle, ArrowPath}) {
  return (
    <div className={styles.grayButton}>
      
      <div className={styles.addedText}>
        <div className={styles.addedHeading}> {GreyButtonTitle} </div>
        <div className={styles.addedDescription}> {GreyButtonSubtitle} </div>
      </div>

        <div className={styles.arrowVector}>
          <img className={styles.arrow} src={ArrowPath} />
      </div>

    </div>
  )

}