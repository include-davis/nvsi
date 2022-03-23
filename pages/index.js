// import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/aboutPage.module.css'
import PillarCard from '../components/about/pillarCard'

export default function Home () {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.headerTitle}>MISSION</h1>
        <p className={styles.headerBody}>
          The New Viet Nam Studies Initiative at UC Davis promotes research in the sciences and social sciences on contemporary Viet Nam – domestically and internationally – with a focus on economic and political development in addition to arts and culture. We bring together scholars from around the world for collaborative research, symposia, conferences, forums, performances, curricula, and publications. Academic programming and activities focus on the reformation of Viet Nam’s cultural-political identity as it moves towards having a greater role economically in the world.
        </p>
      </div>

      <div className={styles.pillarContainer}>
        <div className={styles.pillarHeader}>
          <Link href="/">
            <a>
              <h2 className={styles.pillarHeaderText}>OUR PILLARS</h2>
            </a>
          </Link>
        </div>

        {/* <div className="pillar-1">Student-<br></br>Partnered<br></br>Initiative</div>
        <div className="pillar-2">Promote <br></br>Research &<br></br> Publication</div>
        <div className="pillar-3">Provide <br></br>Innovative<br></br> Programming</div>
        <div className="pillar-4">Bring Together<br></br>Scholars, Industry<br></br>Experts,<br></br>Government Officials, Activists,<br></br>and Artists</div> */}
        <div className={styles.cardsContainer}>
          <PillarCard CardDesc={'Student-Partnered Initiative'} IconPicPath={'/images/about/pillar1.svg'} />
          <PillarCard CardDesc={'Promote Research & Publication'} IconPicPath={'/images/about/pillar2.svg'} />
          <PillarCard CardDesc={'Provide Innovative Programming'} IconPicPath={'/images/about/pillar3.svg'} />
          <PillarCard CardDesc={'Bring together scholars, industry experts, government officials, activists, and artists '} IconPicPath={'/images/about/pillar4.svg'} />
        </div>
      </div>

      <div className="Donate-Rectangle">
        <div className="Donate">DONATE
          <div className="To-our-mission">TO OUR MISSION</div>
        </div>
        <div className="Where">Where the money can go to or do...</div>
        <a href="https://www.google.com" className="Donate-Button"></a>
      </div>

      <div className="Associates_list">ASSOCIATES LIST</div>
      <div className="Kieu">Kieu Linh Valeverde</div>
      <h3>Professor of Asian American Studies and Founding Director of the New Viet Nam Studies Initiative</h3>
      <div className="Iris">Iris Vang</div>
      <h2>Research Assistant | Senior studying Psychology @ UC Davis</h2>
      <div className="Angie">Angie Pham</div>
      <h4>Research Assistant | Junior studying Psychology, Asian American Studies, Physics @ UC Davis</h4>

      <div className="contact_rectangle">
        <div className="keep">Keep posted  with NVSI</div>
        <div className="update"> Update on events | How to get involve | Contact us directly</div>
        <div className="emailname_rectangle">
          <div className="email_rectangle"></div>
        </div>
      </div>
    </div>
  )
}
