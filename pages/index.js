import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = "about_page">
      <div className= "Mission_Statement_Group">
        <div className = "Mission_Title">MISSION</div>
        <div className = "Mission_paragraph">
          <p>  The new viet nam studies initative at UC Davis    
              promotes research and sciences in contemporary 
              viet nam - domestically and internationally 
              with a focus on economic and political development
              in addition to arts and culture. we bring scholars from around the world for 
              collaborative research, symposia, conferences, 
              forums, performances, curricula and publication. Academic 
              programming  and activities focus on the reformation of Viet 
              Nam's cultural- political identity as it moves towards having 
              a great role economically in the world. 
          </p>
      </div>
           
      <div className = "our_pillars">
        <h2>OUR PILLARS</h2>
        <div className = "pillar1">
          <h3>Student-Partnered Initiative</h3>
        </div>
        <div className = "pillar2">
          <h3>Promote Research & Publication</h3>
        </div>
        <div className = "pillar3">
          <h3>Provide Innovative Programming</h3>
        </div>
        <div className = "pillar4">
          <h3>Bring Together Scholars, Industry Experts,     
            Government Officials, Activists, and Artists
          </h3>
        </div>
      </div>
            
      <div className = "donate_to_our_mission">
        <h3>DONATE</h3>
        <h3>To Our Mission</h3>
        <p>Where the money can go to or do...</p>
        <button type = "Button"> arrow </button>
      </div>
            
    </div>    
  </div>
  )
}
