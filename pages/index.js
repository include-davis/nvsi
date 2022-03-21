import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = "Mission-Statement">
    <div className = "Mission-Title">MISSION</div>
    <div className ="Mission-paragraph">
    <p> 
    The New Viet Nam Studies Initiative at UC Davis promotes research in the sciences and social sciences on contemporary Viet Nam – domestically and internationally – with a focus on economic and political development in addition to arts and culture. We bring together scholars from around the world for collaborative research, symposia, conferences, forums, performances, curricula, and publications. Academic programming and activities focus on the reformation of Viet Nam’s cultural-political identity as it moves towards having a greater role economically in the world.
    </p>
    </div>
    <div className = "Container">
        <div className ="pillar-1">
           <div className="Student">Student-Partnered Initiative</div>
        </div>
        <div className ="pillar-2">
          <div className = "promote">Promote Research & Publication</div>
        </div>
        <div className ="pillar-3">
          <div className ="provide">Provide Innovative Programming</div>
        </div>
        <div className ="pillar-4">
            <div className="Bring">Bring Together Scholars, 
            Industry
           Experts,Government Officials, Activists, and 
           Artists
            </div>
        </div>
    </div>
    <div className ="Donate-rectangle">
    <div className = "Donate">DONATE</div>
         <div className ="To-our-mission">TO OUR MISSION</div>
         <div className ="Where">Where the money can go to or do...</div>
    </div>
    <div className ="Associates_list">Associates List</div>
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
