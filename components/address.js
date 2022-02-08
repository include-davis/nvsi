import styles from './homeAddress.module.css'

export default function Address ({ PhysAddress, ContactInfo }) {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <ul className={styles.list}>
                    {
                        PhysAddress.map((elem) => {
                            return <li className={styles.listItem} key={elem}>
                                {elem}
                            </li>
                        })
                    }
                </ul>
                <ul className={styles.list}>
                    {
                        ContactInfo.map((item) => {
                            return <li className={styles.listItem} key={item}>
                                {item}
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}