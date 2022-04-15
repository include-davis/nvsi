import Image from 'next/image'
import styles from '../../styles/about/pillarCard.module.css'

export default function PillarCard ({ CardTitle, IconPicPath }) {
    return (
        <div className={styles.cardContainer}>
            <div className = {styles.cardTitle}>{CardTitle}</div>
            {/* <div className = {styles.cardIcon}></div> */}
            <div className = {styles.cardIcon}>
                <Image  src={IconPicPath} layout='fill'></Image>
            </div>
        </div>

    )
}