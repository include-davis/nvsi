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

const MyImage = (props) => {
  return (
    <Image
      src={placepic}
      className={AssociateProfile.pfpIcon}
      layout="responsive"
    />
  )
}

const PopUp = (setPopUp, { name, pic, colorHexCode = '#345707', email, desc }) => {
  console.log({ name, desc })
  return (
    <>
      {/* <div className={styles.colorBG} style={{ backgroundColor: colorHexCode }} onMouseDown={() => setPopUp(false)} /> */}
      <div className={styles.modal}>
        <PopupInfo Name={name} PicPath={placepic} colorHexCode={colorHexCode} Email={email}
          Info={desc}
        />

      </div>
    </>
  )
}


const person1Data = {
  Name: "Kieu Linh Valverde",
  PicPath: '/images/about/placeholder.png',
  colorHexCode: '#345707',
  Email: "cvalverde@ucdavis.edu",
  Info: "Dr. Kieu-Linh Caroline Valverde is Associate Professor of Asian American Studies and Founding Director of the New Viet Nam Studies Initiative at the University of California, Davis. She was a Fulbright, Rockefeller, and Luce scholar. Her teaching, research, and organizing interests include: Higher Education, Southeast Asian American history and contemporary issues, Mixed Race and Gender theories, Social Movements, Fashionology, National Branding, Spirit Realm, Diaspora, and Transnationalism studies. She authored Transnationalizing Viet Nam: Community, Culture, and Politics in the Diaspora (Temple University Press 2012). She founded the movement Fight the Tower with women of color and in the academy and co-edited the anthology, Fight the Tower: Asian American Women Scholars’ Resistance and Renewal in the Academy (Rutgers University Press 2020). Professor Valverde is working on curating an exhibit on youth culture and development in contemporary Viet Nam through the lens of Viet Nam’s national dress, the ao dai. She is also working on her third manuscript, which will examine national (re)branding projects with a focus on Viet Nam’s development in the area of sustainability and sovereignty. Her future research project looks at spirit realm beliefs and the history of its exclusion from the US academy, as well as the importance of its return."
}

function AssociateCard(person, isPopUp, setPopUp) {
  const { name, desc, pic } = person
  console.log(person)
  return (
    <div key={name} className={styles.associatesclick} onClick={(e) => {
      e.stopPropagation()
      setPopUp(true)
    }}>
      <AssociateProfile associateName={name} description={desc} iconPicPath={placepic} />
      {isPopUp && PopUp(setPopUp, person)}
    </div>
  )
}

export default function About() {
  const [isPopUp, setPopUp] = useState(false);


  return (
    <div className={styles.pageContainer} onClick={() => { setPopUp(false) }}>
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

      <div className={isPopUp ? styles.whiteSpaceContainerBGColor : styles.whiteSpaceContainer}>
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
        GreyButtonTitle = {'Contact us if you are interested in getting support for your projects or ideas'} 
        GreyButtonSubtitle = {'If there are the types of events you are interested in having us co-create, promote, and support contact us.'}
        ArrowPath = {'/right_arrow.svg'}
        />

        <div className={styles.associatesListTitle}>ASSOCIATES LIST</div>

        <div className={styles.associatesListSectionContainer}>
          {Associates.map(person => AssociateCard(person, isPopUp, setPopUp))}
          {/* <div className={styles.associatesclick} onClick={(e) => {
            e.stopPropagation()
            setPopUp(true)
          }}>
            <AssociateProfile associateName={'Kieu Linh Valverde'} description={'Professor of Asian American Studies and Founding Director of the New Viet Nam Studies Initiative'} iconPicPath={placepic}></AssociateProfile>
            {isPopUp && PopUp(setPopUp, person1Data)}
          </div>
          <AssociateProfile associateName={'Angie Pham'} description={'Research Assistant | Junior studying Psychology, Asian American Studies, Physics @ UC Davis'} iconPicPath={'/'}></AssociateProfile>
          <AssociateProfile associateName={'Iris Vang'} description={'Research Assistant | Senior studying Psychology @ UC Davis'} iconPicPath={'/'}></AssociateProfile>
          <AssociateProfile associateName={'Lorem ipsum'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio nunc commodo quam metus.'} iconPicPath={'/'}></AssociateProfile>
          <AssociateProfile associateName={'Lorem ipsum'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio nunc commodo quam metus.'} iconPicPath={'/'}></AssociateProfile>
          <AssociateProfile associateName={'Lorem ipsum'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio nunc commodo quam metus.'} iconPicPath={'/'}></AssociateProfile>
          <AssociateProfile associateName={'Lorem ipsum'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio nunc commodo quam metus.'} iconPicPath={'/'}></AssociateProfile>
          <AssociateProfile associateName={'Lorem ipsum'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor odio nunc commodo quam metus.'} iconPicPath={'/'}></AssociateProfile> */}
        </div>
      </div>

    </div>
  )
}
