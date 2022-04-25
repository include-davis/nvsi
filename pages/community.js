import styles from '../styles/community/Community.module.css'
import { getCommunityAll } from '../api-lib/apiOps'

import { useState, useEffect } from 'react'

import GrayButton from '../components/grayButton'

const Community = () => {

    useEffect(() => {
        async function getData() {
            const response = await getCommunityAll()
            console.log(response)
        } 
        getData()
    }, [])

    return (
        <div className={styles.community}>
            <div className={styles.communityHeader}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Community</h1>
                    <h3 className={styles.subtitle}>Get access to our NVSI Network</h3>
                </header>

                <GrayButton
                    GreyButtonTitle = {'Get added into our network'} 
                    GreyButtonSubtitle = {'Fill and submit the application on the right and get connected to NVSI’s network of students, scholars, advocates and more!'}
                    ArrowPath = {'/right_arrow.svg'} 
                />

            </div>

            <div className={styles.main}>
                <div className={styles.search}>
                    <input className={styles.searchBar} type="text" placeholder="search key terms or names to find community members"></input>
                </div>
            
                <div className={styles.group}>
                    <div className={styles.groupHeader}>
                        <h5 className={styles.groupHeading}>Scholars</h5>
                        <img src='right_chevron.svg' alt='next' />
                    </div>
                    <div className={styles.profiles}>
                        <div className={styles.left}>
                            <div className={styles.profile}>
                                <div className={styles.profilePic}>
                                    <img className={styles.avatar} src='valverde.png' alt='avatar'/>
                                </div>
                                <div className={styles.info}>
                                <h6 className={styles.name}>Caroline Kieu Linh Valverde</h6>
                                    <p className={styles.bio}>New Viet Nam Studies Initiative, Director Fight the Tower, Co-founder</p>
                                    <div className={styles.email}>
                                        <img className={styles.emailIcon} src='fluent_mail-20-filled.svg' alt='mail icon' />
                                        <a className={styles.address} href="mailto:cvalverde@ucdavis.edu">cvalverde@ucdavis.edu</a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.profile}>
                                <div className={styles.profilePic}>
                                    <img className={styles.avatar} src='taninguyen.png' alt='avatar'/>
                                    </div>
                                <div className={styles.info}>
                                <h6 className={styles.name}>Tani Nguyen</h6>
                                    <p className={styles.bio}>Hoa Sen University</p>
                                    <div className={styles.email}>
                                        <img className={styles.emailIcon} src='fluent_mail-20-filled.svg' alt='mail icon' />
                                        <a className={styles.address} href="mailto:btnghi@gmail.com">btnghi@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profile}>
                            <div className={styles.profilePic}>
                                <img className={styles.avatar} src='thithanhlelu.png' alt='avatar'/>
                                </div>
                            <div className={styles.info}>
                            <h6 className={styles.name}>Thi Thanh Le Lu</h6>
                                <p className={styles.bio}>Vietnam National University, Hanoi (University of Social Sciences and Humanities)</p>
                                <div className={styles.email}>
                                    <img className={styles.emailIcon} src='fluent_mail-20-filled.svg' alt='mail icon' />
                                    <a className={styles.address} href="mailto:thanhle0512@gmail.com">thanhle0512@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.group}>
                    <div className={styles.groupHeader}>
                        <h5 className={styles.groupHeading}>Graduates</h5>
                        <img src='right_chevron.svg' alt='next' />
                    </div>
                    <div className={styles.profiles}>
                        <div className={styles.profile}>
                            <div className={styles.profilePic}>
                                <img className={styles.avatar} src='quangchau.png' alt='avatar'/>
                            </div>
                            <div className={styles.info}>
                            <h6 className={styles.name}>Quang Chau</h6>
                                <p className={styles.bio}>SUNY Albany</p>
                                <div className={styles.email}>
                                    <img className={styles.emailIcon} src='fluent_mail-20-filled.svg' alt='mail icon' />
                                    <a className={styles.address} href="mailto:chauquang789@gmail.com">chauquang789@gmail.com</a>
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