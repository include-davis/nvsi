import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/whitepapers/WhitePapers.module.css'
import { getWhitePapers } from '../api-lib/apiOps';

function openCity(cityName, cityNameLink) {
  var tabcontent = ["Abstracts", "WhitePapers"];
  for (var i = 0; i < tabcontent.length; i++) {
    var curtab = document.getElementById(tabcontent[i]);
    curtab.style.display = "none";
  }

  var tablinks = ["AbstractsLink", "WhitePapersLink"];
  for (var i = 0; i < tablinks.length; i++) {
    var curtablink = document.getElementById(tablinks[i]);
    curtablink.className = "styles.tablinks";
  }

  document.getElementById(cityName).style.display = "block";
  document.getElementById(cityNameLink).className = "styles.tablinksactive";
}

function Abstract({ Title, Topic, keyword, Content }, id) {
  const router = useRouter()

  return (
    <div className={styles.white_papers} onClick={() => router.push(`/white-papers/${id}`)}>
      <div className={styles.test_paper}>
        <div className={styles.content}>
          <div className={styles.paper_title}>
            <div className={styles.abstract_title}>{Title}</div>
            <div className={styles.topic_id}>
              <div className={styles.indiv_topic}>
                <div className={styles.diversity}>{keyword}</div>
              </div>
              {/* <div className={styles.indiv_topic}>
                <div className={styles.environment}> Environment</div>
              </div>
              <div className={styles.indiv_topic}>
                <div className={styles.APPI_tab}> APPI</div>
              </div> */}
            </div>
          </div>
          <div className={styles.topic}>
            <p>{Topic}</p>
          </div>
          <div className={styles.paper_description}>
            <p>{Content}</p>
          </div>
          <div className={styles.get_involved}>
            <button className={styles.get_involved_button}>Get Involved</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WhitePapers({ papers }) {
  // use Effects basically run at the start, this one will only run once
  // use this to set one of the functions to open on default
  useEffect(() => {
    openCity('Abstracts', 'AbstractsLink');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>White Papers | NVSI</title>
        <meta name="description" content="NVSI: White papers" />
        <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>

      <div className={styles.main}>
        <img src={"about_background.svg"}></img>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>WHITE PAPERS</h1>
          </div>
          <div id={styles.description}><h3>Featured Papers</h3></div>
        </div>
      </div>


      <div className={styles.main2}>
        {/* search bar */}
        <div className={styles.search_bar}>
          <div className={styles.search_icon}></div>
          <input className={styles.search_input} placeholder="Search for a Title or Topic" type="text" />
        </div>

        {/* tabs */}
        <div className={styles.tab}>
          <button id="AbstractsLink" className={styles.tablinks} onClick={() => openCity('Abstracts', 'AbstractsLink')}>Abstracts</button>
          <button id="WhitePapersLink" className={styles.tablinks} onClick={() => openCity('WhitePapers', 'WhitePapersLink')}>White Papers</button>
        </div>


        {/* Abstract */}
        <div id="Abstracts" className={styles.tabcontent}>
          {papers.map(paper => Abstract(paper.attributes, paper.id))}

          <div className={styles.white_papers}>
            <div className={styles.test_paper}>
              <div className={styles.content}>
                <div className={styles.paper_title}>
                  <div className={styles.abstract_title}>Title of Abstract</div>
                  <div className={styles.topic_id}>
                    <div className={styles.indiv_topic}>
                      <div className={styles.diversity}> Diversity</div>
                    </div>
                    <div className={styles.indiv_topic}>
                      <div className={styles.environment}> Environment</div>
                    </div>
                    <div className={styles.indiv_topic}>
                      <div className={styles.APPI_tab}> APPI</div>
                    </div>
                  </div>
                </div>
                <div className={styles.topic}>
                  <p>Topic</p>
                </div>
                <div className={styles.paper_description}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Egestas diam in arcu cursus. Cras pulvinar
                    mattis nunc sed blandit libero volutpat. Aliquam sem fringilla ut morbi tincidunt augue. Eget aliquet nibh praesent tristique
                    magna sit amet purus gravida. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Egestas purus viverra
                    accumsan in nisl. Non arcu risus quis varius quam quisque id diam vel. Nisi lacus sed viverra tellus in hac habitasse platea
                    dictumst. Lobortis elementum nibh tellus molestie nunc. Gravida neque convallis a cras semper auctor. Tincidunt lobortis
                    feugiat vivamus at augue eget arcu dictum varius. Pharetra et ultrices neque ornare aenean euismod elementum. Arcu vitae
                    elementum curabitur vitae nunc sed velit dignissim sodales. Urna cursus eget nunc scelerisque viverra mauris in aliquam.
                    Nisi vitae suscipit tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Rhoncus
                    urna neque viverra justo nec ultrices dui. Venenatis urna cursus eget nunc scelerisque viverra mauris.</p>
                </div>
                <div className={styles.get_involved}>
                  <button className={styles.get_involved_button}>Get Involved</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="WhitePapers" className={styles.tabcontent}>
          <div className={styles.white_papers}>
            <div className={styles.test_paper}>
              <div className={styles.content}>
                <div className={styles.paper_title}>
                  <div className={styles.abstract_title}>Title of White Papers</div>
                  <div className={styles.topic_id}>
                    <div className={styles.indiv_topic}>
                      <div className={styles.diversity}> Diversity</div>
                    </div>
                    <div className={styles.indiv_topic}>
                      <div className={styles.environment}> Environment</div>
                    </div>
                    <div className={styles.indiv_topic}>
                      <div className={styles.APPI_tab}> APPI</div>
                    </div>
                  </div>
                </div>
                <div className={styles.topic}>
                  <p>Topic</p>
                </div>
                <div className={styles.paper_description}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Egestas diam in arcu cursus. Cras pulvinar
                    mattis nunc sed blandit libero volutpat. Aliquam sem fringilla ut morbi tincidunt augue. Eget aliquet nibh praesent tristique
                    magna sit amet purus gravida. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Egestas purus viverra
                    accumsan in nisl. Non arcu risus quis varius quam quisque id diam vel. Nisi lacus sed viverra tellus in hac habitasse platea
                    dictumst. Lobortis elementum nibh tellus molestie nunc. Gravida neque convallis a cras semper auctor. Tincidunt lobortis
                    feugiat vivamus at augue eget arcu dictum varius. Pharetra et ultrices neque ornare aenean euismod elementum. Arcu vitae
                    elementum curabitur vitae nunc sed velit dignissim sodales. Urna cursus eget nunc scelerisque viverra mauris in aliquam.
                    Nisi vitae suscipit tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Rhoncus
                    urna neque viverra justo nec ultrices dui. Venenatis urna cursus eget nunc scelerisque viverra mauris.</p>
                </div>
                <div className={styles.get_involved}>
                  <button className={styles.get_involved_button}>Get Involved</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.white_papers}>
            <div className={styles.test_paper}>
              <div className={styles.content}>
                <div className={styles.paper_title}>
                  <div className={styles.abstract_title}>Title of White Papers</div>
                  <div className={styles.topic_id}>
                    <div className={styles.indiv_topic}>
                      <div className={styles.diversity}> Diversity</div>
                    </div>
                    <div className={styles.indiv_topic}>
                      <div className={styles.environment}> Environment</div>
                    </div>
                    <div className={styles.indiv_topic}>
                      <div className={styles.APPI_tab}> APPI</div>
                    </div>
                  </div>
                </div>
                <div className={styles.topic}>
                  <p>Topic</p>
                </div>
                <div className={styles.paper_description}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Egestas diam in arcu cursus. Cras pulvinar
                    mattis nunc sed blandit libero volutpat. Aliquam sem fringilla ut morbi tincidunt augue. Eget aliquet nibh praesent tristique
                    magna sit amet purus gravida. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Egestas purus viverra
                    accumsan in nisl. Non arcu risus quis varius quam quisque id diam vel. Nisi lacus sed viverra tellus in hac habitasse platea
                    dictumst. Lobortis elementum nibh tellus molestie nunc. Gravida neque convallis a cras semper auctor. Tincidunt lobortis
                    feugiat vivamus at augue eget arcu dictum varius. Pharetra et ultrices neque ornare aenean euismod elementum. Arcu vitae
                    elementum curabitur vitae nunc sed velit dignissim sodales. Urna cursus eget nunc scelerisque viverra mauris in aliquam.
                    Nisi vitae suscipit tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Rhoncus
                    urna neque viverra justo nec ultrices dui. Venenatis urna cursus eget nunc scelerisque viverra mauris.</p>
                </div>
                <div className={styles.get_involved}>
                  <button className={styles.get_involved_button}>Get Involved</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export async function getStaticProps() {
  try {
    const papers = await getWhitePapers()
    // console.log(papers)
    return {
      props: { papers }
    }
  } catch (err) {
    console.error(err)
    return {
      props: {}
    }
  }
}
