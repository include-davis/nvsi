import styles from "../styles/header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div >
      {/* <Navbar></Navbar> */}
      <div className={styles.Header}>
        <div className={styles.EventTitle}>
           VIET NAM AND THE DIASPORA SILICON VALLEY CONNECTIONS
        </div>
      </div>
    </div>
  );
}
