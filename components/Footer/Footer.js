import styles from './Footer.module.css'
import Image from 'next/Image'    

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.left}>
                    <h1>KEEP POSTED WITH NVSI</h1>
                    <p>Update on events | How to get involved | Contact us directly</p>
                    <div className={styles.socialmedia}>
                        <Image src="/icon-facebook-dark_grey.svg" alt="Facebook Icon" width='24px' height='24px'/>
                        <Image src="/icon-youtube-darkgrey.svg" alt="Youtube Icon" width='24px' height='24px'/>                    
                    </div>
                </div> 
                <button>Subscribe</button>
            </div>
            
        </div>
    )
}