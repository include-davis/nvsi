import Image from 'next/image'
import styles from '../../styles/associateProfile.module.css'

export default function AssociateProfile ({ associateName, description, pfpPath }) {
    return (
        <div className={styles.profileContainer}>
            <div className = {styles.associateName}>{associateName}</div>
            <div className = {styles.associateDescription}>{description}</div>
            {/* <div>
                <Image className = {styles.cardIcon} src={IconPicPath} layout='fill'></Image>
            </div> */}
        </div>
    )
}