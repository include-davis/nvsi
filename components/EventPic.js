import styles from './EventPic.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function EventPic ({ nextLink, imgSrc}) {
    return (
        <div className={styles.container}>
            <div>
                <Link href={nextLink}>
                    <a className={styles.circle}>
                        <Image className={styles.pic}
                            layout="fill"   // If don't know the width of image then have to use this
                            objectFit="cover"   // Make circle thingy
                            src={imgSrc}
                            alt="Picture of the event"
                        />
                    </a>
                </Link>
            </div>
        </div>
    )
}