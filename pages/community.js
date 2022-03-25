import styles from '../styles/Community.module.css'

const Community = () => {
    return (
        <div className={styles.community}>
            <div className={styles.communityHeader}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Community</h1>
                    <h3 className={styles.subtitle}>Get access to our NVSI Network</h3>
                </header>

                <div className={styles.getAdded}>
                    <div className={styles.addedText}>
                        <h5 className={styles.addedHeading}>Get added into our network</h5>
                        <p className={styles.addedDescription}>Fill and submit the application on the right and 
                        get connected to NVSI’s network of students, scholars, advocates and more!</p>
                    </div>
                    <div className={styles.addedVector}>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src='right_arrow.svg' alt='next' /></a>
                    </div>
                </div>
            </div>

            <div className={styles.main}>
                <div class={styles.search}>
                    <input className={styles.searchBar} type="text" placeholder="search key terms or names to find community members"></input>
                </div>
            
                <div className={styles.group}>
                    <div className={styles.groupHeader}>
                        <h5 className={styles.groupHeading}>Scholars</h5>
                        <img src='right_chevron.svg' alt='next' />
                    </div>
                    <div className={styles.profiles}>
                        <div className={styles.profile}>
                            <img className={styles.avatar} src='valverde.png' alt='avatar'/>
                            <div className={styles.info}>
                            <h6 className={styles.name}>Caroline Kieu Linh Valverde</h6>
                                <p className={styles.bio}>New Viet Nam Studies Initiative, Director Fight the Tower, Co-founder</p>
                                <div className={styles.email}>
                                    <img className={styles.emailIcon} src='fluent_mail-20-filled.svg' alt='mail icon' />
                                    <a className={styles.address} href="mailto:cvalverde@ucdavis.edu">cvalverde@ucdavis.edu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    );
}
 
export default Community;