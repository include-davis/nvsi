import Image from "next/image"
import styles from "../../styles/about/associateProfile.module.css"

import { useState, useEffect } from "react"

export default function AssociateProfile({ associateName, description, pfp }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset"
  }, [open])

  return (
    <>
      <div className={styles.profileContainer} onClick={() => setOpen(true)}>
        {/* Image placeholder */}
        <div className={styles.pfpIcon}></div>
        <div className={styles.associateTextGroup}>
          <div className={styles.associateName}>{associateName}</div>
          <div className={styles.associateDescription}>{description}</div>
        </div>
      </div>
      <div
        className={open ? styles.modal : styles.hidden}
        onClick={() => setOpen(false)}
      >
        <article
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.column1}>
            <img src={pfp} alt="profile picture" />
            <h4>Email:</h4>
            <p>placeholder@email.com</p>
          </div>
          <div className={styles.column2}>
            <h3>{associateName}</h3>
            <p>{description}</p>
          </div>
        </article>
      </div>
    </>
  )
}
