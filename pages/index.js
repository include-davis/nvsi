import Navbar from './Navbar' 
import styles from '../styles/Home.module.css' 

export default function Home() {
  return (
    <div className = {styles.background}>
      <div className={styles.height}>
      <Navbar />
      </div>
      <h1 className = {styles.Events}>EVENTS</h1>
    </div>
  )
}

