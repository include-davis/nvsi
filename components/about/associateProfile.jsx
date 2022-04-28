import Image from "next/image"
import styles from "../../styles/about/associateProfile.module.css"

import { useState, useEffect } from "react"

export default function AssociateProfile({ associateName, headline, pfp }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset"
  }, [open])

  return (
    <>
      <div className={styles.container} onClick={() => setOpen(true)}>
        {/* Image placeholder */}
        <img src="default.jpeg" alt={`picture of ${associateName}`} />
        <div className={styles.associateTextGroup}>
          <h3>{associateName}</h3>
          <p>{headline}</p>
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
            <p>{headline}</p>
          </div>
        </article>
      </div>
    </>
  )
}
