import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.left}>
                <h1>KEEP POSTED WITH NVSI</h1>
                <p>Update on events | How to get involved | Contact us directly</p>
                <div className={styles.socialmedia}>
                    {/* <Image/>
                    <Image/>
                    <Image/> */}
                </div>
            </div>
            <button>Subscribe</button>
            </div> 
        </div>
    )
}