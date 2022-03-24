import Link from 'next/link';
import styles from '../styles/Home.module.css' 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <img src = "https://lh3.googleusercontent.com/PgacuOOq5JLBwdFKtz5Mo4H9O5B6VFjDbrw-yYuXqqndQ55GVousoIjpIlFI9-GG-wycsI0Ojdx7S1dsh5If_y9mYXecyEWagyEuxV7H0ysvt5vzajHNdx_oSiCLaVUlUuVeciPM=w2400" alt = "box" width = "300"/>
      <div className= {styles.navlink}>
      <Link href="/"><a className= {styles.link}>Home</a></Link>
      <Link href="/about"><a className= {styles.link} >About</a></Link>
      <Link href="/events"><a className= {styles.link}>Events</a></Link>
      <Link  href="/community"><a className= {styles.link}>Community</a></Link>
      <Link href="/whitepapers"><a className= {styles.link} >White Papers</a></Link>
      <Link href="/getinvolved"><a className= {styles.link} >Get Involved</a></Link>
      </div>
    </nav>
);
}
 
export default Navbar;