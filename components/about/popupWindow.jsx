import Image from 'next/image'

import styles from '../../styles/popupWindow.module.css'

export default function PopupInfo ({ Name, PicPath, colorHexCode, Email, Info }) {
    return (
        <div className={styles.popupBackground}>
            <div className={styles.popupContainer}>
                <div className={styles.left}>
                    <div className={styles.profilePic}>
                        <Image src={PicPath} layout="fill" />
                    </div>
                    <p className={styles.email}><span style={{ color: colorHexCode }}>Email:</span><br />{Email}</p>
                </div>

                <div className={styles.right}>
                    <h2 className={styles.name} style={{ color: colorHexCode }}>{Name}</h2>
                    <p className={styles.details}>{Info}</p>
                </div>
            </div>
        </div>
    )
}