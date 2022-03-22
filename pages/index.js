import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div className = "About-Page">
    <div className = "Mission-Statement">
      <div className = "Mission-Title">MISSION</div>
      <div className ="Mission-Paragraph">
      <p> 
      The New Viet Nam Studies Initiative at UC Davis promotes research in the sciences and social sciences on contemporary Viet Nam – domestically and internationally – with a focus on economic and political development in addition to arts and culture. We bring together scholars from around the world for collaborative research, symposia, conferences, forums, performances, curricula, and publications. Academic programming and activities focus on the reformation of Viet Nam’s cultural-political identity as it moves towards having a greater role economically in the world.
      </p>
      </div>
      <div className = "Our-Pillars-Title">OUR PILLARS</div>
    </div>

    <div className = "Pillar-Container">
        <div className ="pillar-1">Student-<br></br>Partnered<br></br>Initiative</div>
        <div className ="pillar-2">Promote <br></br>Research &<br></br> Publication</div>
        <div className ="pillar-3">Provide <br></br>Innovative<br></br> Programming</div>
        <div className ="pillar-4">Bring Together<br></br>Scholars, Industry<br></br>Experts,<br></br>Government Officials, Activists,<br></br>and Artists</div>
    </div>
    
    <div className ="Donate-rectangle">
      <div className = "Donate">DONATE</div>
          <div className ="To-our-mission">TO OUR MISSION</div>
          <div className ="Where">Where the money can go to or do...</div>
    </div>
    
    <div className ="Associates_list">ASSOCIATES LIST</div>
            <div className="Kieu">Kieu Linh Valeverde</div>
            <h3>Professor of Asian American Studies and Founding Director of the New Viet Nam Studies Initiative</h3>
        <div className="Iris">Iris Vang</div>
            <h2>Research Assistant | Senior studying Psychology @ UC Davis</h2>
      <div className="Angie">Angie Pham</div>
            <h4>Research Assistant | Junior studying Psychology, Asian American Studies, Physics @ UC Davis</h4>

    <div className= "contact_rectangle">
      <div className="keep">Keep posted  with NVSI</div>
      <div className ="update"> Update on events | How to get involve | Contact us directly</div>
      <div className="emailname_rectangle">
        <div className ="email_rectangle"></div>       
      </div>
    </div>
  </div>
  )
}
