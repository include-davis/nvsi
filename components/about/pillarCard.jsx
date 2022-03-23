import Image from 'next/image'
import styles from '../../styles/pillarCard.module.css'

export default function PillarCard ({ CardDesc, IconPicPath }) {
    return (
        <div className={styles.cardContainer}>
            <p className={styles.cardDesc}>{CardDesc}</p>
            <div className={styles.cardIcon}>
                <Image src={IconPicPath} layout='fill'></Image>
            </div>
        </div>
    )
}