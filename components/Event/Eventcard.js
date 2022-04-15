import styles from '../../styles/Event/Eventcard.module.css'
import Image from 'next/image'

export default function Eventcard(props) {


    return (
        <div className={styles.event}>
                <div className={styles.container}>
                    <div className={styles.event_image}>
                        <Image src={props.image} alt="Fubuki" width={500} height={500} layout='responsive'/>
                        {/* <img src={props.image} alt="Fubuki" width="500px" height="498px"/> */}
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.desc}>
                        <h3>{props.title}</h3>
                        <b>{props.timestamp}</b>
                        <p className={styles.eventDesc}>{props.desc}</p>
                        <div className={styles.tag}>
                            <div className={styles.orange}><p>{props.tag1}</p></div>
                            {/* <div className={styles.orange}><p>{props.tag2}</p></div>
                            <div className={styles.orange}><p>{props.tag3}</p></div> */}
                    </div>
                </div>
                {/* TODO: Add link here */}
                <button>Event Details {">"}</button>
                </div>
        </div>
    )
}