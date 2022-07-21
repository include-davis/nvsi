import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/about/aboutPage.module.css"
import PillarCard from "../components/about/pillarCard"
import AssociateProfile from "../components/about/associateProfile"
import PopupInfo from "../components/about/popupWindow"
import Associates from "../components/about/Associates"
import GreyButton from "../components/grayButton"
import placepic from "../public/images/about/placeholder.png"
import { getAssociates } from "../api-lib/apiOps"
import Head from "next/head"

function AssociateCard({ id, attributes }) {
  const { Name, Headline, Email, Biography } = attributes
  const pfp = attributes.Image.data.attributes.url

  return (
    <AssociateProfile
      key={id}
      associateName={Name}
      headline={Headline}
      email={Email}
      bio={Biography}
      pfp={pfp ?? "/default.jpeg"}
    />
  )
}

export default function About({ associates }) {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>About | NVSI</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>
      <div className={styles.headerSection}>
        <h1 className={styles.headerTitle}>MISSION</h1>
        <p className={styles.headerBody}>
          The New Viet Nam Studies Initiative at UC Davis promotes research in
          the sciences and social sciences on contemporary Viet Nam –
          domestically, and internationally – with a focus on economic and
          political development in addition to arts and culture. We bring
          together scholars from around the world for collaborative research,
          symposia, conferences, forums, performances, curricula, and
          publications. Academic programming and activities focus on the
          reformation of Viet Nam’s cultural-political identity as it moves
          towards having a greater role economically in the world.
        </p>
        <a className={styles.pillarHeader}>OUR PILLARS</a>
      </div>

      <div className={styles.pillarContainer}>
        <div className={styles.pillarColumn1} id="column1">
          <PillarCard
            CardTitle={"Student-Partnered Initiative"}
            IconPicPath={"/images/about/pillar1.svg"}
          />
          <PillarCard
            CardTitle={"Promote Research & Publication"}
            IconPicPath={"/images/about/pillar2.svg"}
          />
        </div>
        <div className={styles.pillarColumn2}>
          <PillarCard
            CardTitle={"Provide Innovative Programming"}
            IconPicPath={"/images/about/pillar3.svg"}
          />
          <PillarCard
            CardTitle={"Create Opportunities for Collaborative Projects"}
            IconPicPath={"/images/about/pillar4.svg"}
          />
        </div>
      </div>

      <div className={styles.whiteSpaceContainer}>
        <GreyButton
          GreyButtonTitle={"DONATE TO OUR MISSION"}
          GreyButtonSubtitle={"where the money can go to or do ..."}
          ArrowPath={"/right_arrow.svg"}
          LinkPath={"https://give.ucdavis.edu/clas/vnsigft"}
        />

        <h2 className={styles.associatesListTitle}>ASSOCIATES LIST</h2>

        <div className={styles.associatesListSectionContainer}>
          {associates.map((person) => AssociateCard(person))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const associates = await getAssociates()
    return {
      props: { associates },
      revalidate: 60,
    }
  } catch (err) {
    console.error(err)
    return {
      props: { associates: [] },
    }
  }
}
