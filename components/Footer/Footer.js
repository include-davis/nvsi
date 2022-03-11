import styles from './Footer.module.css'
import Image from 'next/image'    

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.box}>
                <div className={styles.grid}>
                    <div className={styles.socialmedia}>
                        <Image src="/icons/icon-facebook-dark_grey.svg" alt="Facebook Icon" width='24px' height='24px'/>
                        <Image src="/icons/icon-youtube-darkgrey.svg" alt="Youtube Icon" width='24px' height='24px'/>                    
                    </div> 
                    <h1>KEEP POSTED WITH NVSI</h1>
                    <p>Update on events | How to get involved | Contact us directly</p>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}