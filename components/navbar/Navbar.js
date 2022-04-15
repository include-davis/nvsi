import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../../styles/Navbar/Navbar.module.css'
import Logo from '../../public/images/Navbar/logo.svg'

export default function Navbar() {
  const router = useRouter()
  const isHome = router.pathname === "/"
  const isAbout = router.pathname.startsWith("/about")
  const isEvents = router.pathname.startsWith("/events")
  const isCommunity = router.pathname.startsWith("/community")
  const isWhitePapers = router.pathname.startsWith("/white-papers")
  const isGetInvolved = router.pathname.startsWith("/get-involved")

  const [open, setOpen] = useState(false)

  const burgerClass = !open ? [styles.mobile, styles.hidden].join(" ") : styles.mobile
  
  return (
    <>
      <nav className={styles.container}>
        <img onClick={() => router.push("/")} className={styles.logo} src="/images/Navbar/logo.svg" alt="NVSI logo" />
        <img onClick={() => router.push("/")} className={styles.logoSmall} src="/images/Navbar/logoSmall.svg" alt="NVSI logo" />
        <div className={styles.links}>
          <Link href="/"><a className={isHome ? styles.current : undefined}>Home</a></Link>
          <Link href="/about"><a className={isAbout ? styles.current : undefined}>About</a></Link>
          <Link href="/events"><a className={isEvents ? styles.current : undefined}>Events</a></Link>
          <Link href="/community"><a className={isCommunity ? styles.current : undefined}>Community</a></Link>
          <Link href="/white-papers"><a className={isWhitePapers ? styles.current : undefined}>White Papers</a></Link>
          <Link href="/get-involved"><a className={isGetInvolved ? styles.current : undefined}>Get Involved</a></Link>
        </div>
        <img onClick={() => setOpen(open => !open)} className={styles.burger} src="/images/Navbar/burger.svg" alt="menu button" />
        {/* <Menu styles={burger} className={styles.burger} right>
      </Menu> */}
      </nav>
      <div className={burgerClass} onClick={() => setOpen(open => !open)}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/events"><a>Events</a></Link>
        <Link href="/community"><a>Community</a></Link>
        <Link href="/white-papers"><a>White Papers</a></Link>
        <Link href="/get-involved"><a>Get Involved</a></Link>
      </div>
    </>
  )
}
