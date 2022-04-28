import styles from "./Footer.module.css"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"

const blueRoutes = new Set(["about", "white-papers", "get-involved"])

export default function Footer() {
  const router = useRouter()

  let path = router.pathname.substring(1)
  if (path.includes("/")) {
    path = path.substring(0, path.indexOf("/"))
  }

  // blue footer
  if (blueRoutes.has(path)) {
    return (
      <footer className={[styles.footer, styles.blue].join(" ")}>
        <div className={[styles.box, styles.blueText].join(" ")}>
          <div className={styles.grid}>
            <div className={styles.socialmedia}>
              <Image
                src="/icons/icon-facebook.svg"
                alt="Facebook Icon"
                width="24px"
                height="24px"
              />
              <Image
                src="/icons/icon-youtube.svg"
                alt="Youtube Icon"
                width="24px"
                height="24px"
              />
            </div>
            <h1>KEEP POSTED WITH NVSI</h1>
            <p>Update on events | How to get involved | Contact us directly</p>
            {/* Link to the Google Form */}
            <button className={styles.orangeButton}>Subscribe</button>
          </div>
        </div>
      </footer>
    )
  }

  // orange footer
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <div className={styles.grid}>
          <div className={styles.socialmedia}>
            <Image
              src="/icons/icon-facebook-dark_grey.svg"
              alt="Facebook Icon"
              width="24px"
              height="24px"
            />
            <Image
              src="/icons/icon-youtube-darkgrey.svg"
              alt="Youtube Icon"
              width="24px"
              height="24px"
            />
          </div>
          <h1>KEEP POSTED WITH NVSI</h1>
          <p>Update on events | How to get involved | Contact us directly</p>
          {/* Link to the Google Form */}
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  )
}
