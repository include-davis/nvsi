import Navbar from './Navbar' 
import styles from '../styles/Home.module.css' 

export default function Home() {
  return (
    <div>
      <img src = "/vercel.svg"/>
    <div>
      <div className={styles.height}>
        <Navbar />
      </div>
      <div className = {styles.Events}>
        <h1>EVENTS</h1>
      </div>
    </div>
    </div>
  )
}

