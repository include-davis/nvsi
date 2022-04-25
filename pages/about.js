import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/about/aboutPage.module.css'

import PillarCard from '../components/about/pillarCard'
import AssociateProfile from '../components/about/associateProfile'
import PopupInfo from '../components/about/popupWindow'

import Associates from '../components/about/Associates'

import GreyButton from '../components/grayButton'


import placepic from '../public/images/about/placeholder.png'

function AssociateCard(person) {
  const { name, desc, pic } = person

  console.log(person)
  return (
    <AssociateProfile associateName={name} description={desc} pfp={"/default.jpeg"} />
  )
}

export default function About() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.headerTitle}>MISSION</h1>
        <p className={styles.headerBody}>
          The New Viet Nam Studies Initiative at UC Davis promotes research in the sciences and social sciences on contemporary Viet Nam – domestically, and internationally – with a focus on economic and political development in addition to arts and culture. We bring together scholars from around the world for collaborative research, symposia, conferences, forums, performances, curricula, and publications. Academic programming and activities focus on the reformation of Viet Nam’s cultural-political identity as it moves towards having a greater role economically in the world.
        </p>
        <a className={styles.pillarHeader}>OUR PILLARS</a>
      </div>

      <div className={styles.pillarContainer}>
        <div className={styles.pillarColumn1} id="column1">
          <PillarCard CardTitle={'Student-Partnered Initiative'} IconPicPath={'/images/about/pillar1.svg'} />
          <PillarCard CardTitle={'Promote Research & Publication'} IconPicPath={'/images/about/pillar2.svg'} />
        </div>
        <div className={styles.pillarColumn2}>
          <PillarCard CardTitle={'Provide Innovative Programming'} IconPicPath={'/images/about/pillar3.svg'} />
          <PillarCard CardTitle={'Bring together scholars, industry experts, government officials, activists, and artists '} IconPicPath={'/images/about/pillar4.svg'} />
        </div>
      </div>

      <div className={styles.whiteSpaceContainer}>
        {/* <div className={styles.donateRectangle}>
          <div className={styles.textGroup}>
            <div className={styles.Donate}>DONATE</div>
            <div className={styles.toOurMission}>TO OUR MISSION</div>
          </div>
          <div className={styles.Where}>Where the money can go to or do...</div>
          <a href="https://www.google.com" className="styles.Donate-Button"></a>
        </div> */}

        {/* <div className={styles.getAdded}>
        <div className={styles.addedText}>
            <h5 className={styles.addedHeading}> DONATE TO OUR MISSION </h5>
            <p className={styles.addedDescription}> where the money go to and do ...</p>
        </div>
        <div className={styles.addedVector}>
            <a href="/"><img id='arrow' src='right_arrow.svg' alt='next' /></a>
        </div>
      </div> */}

        <GreyButton
          GreyButtonTitle={'Contact us if you are interested in getting support for your projects or ideas'}
          GreyButtonSubtitle={'If there are the types of events you are interested in having us co-create, promote, and support contact us.'}
          ArrowPath={'/right_arrow.svg'}
        />

        <div className={styles.associatesListTitle}>ASSOCIATES LIST</div>

        <div className={styles.associatesListSectionContainer}>
          {Associates.map(person => AssociateCard(person))}
        </div>
      </div>

    </div>
  )
}
