import styles from '../../styles/about/donateBanner.module.css'
import Image from 'next/image'

export default function DonateBanner ({ Title, SubTitle, Details, IconPath }) {
    return (
        <div className={styles.bannerContainer}>
            <h2 className={styles.title}>{Title}</h2>
            <h3 className={styles.subTitle}>{SubTitle}</h3>
            <p className={styles.details}>{Details}</p>
            <div className={styles.icon}>
                <Image src={IconPath} layout="fill"></Image>
            </div>
        </div>
    )
}