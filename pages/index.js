import styles from "../styles/home/index.module.css"
import Address from "../components/home/Address"
import Event from "../components/home/Event"
import Link from "next/link"
import Head from "next/head"
import { getUpcomingEvents } from "../api-lib/apiOps"
import { generateTimestamp } from "../components/Event/Navtabs"

const address = [
  "New Viet Nam Studies Initiative",
  "3113 Hart Hall",
  "University of California Davis",
  "One Shields Avenue",
  "Davis, CA 95616",
]

const contact = [
  "Contact Us",
  "newvietnamstudies@gmail.com",
  "Phone: (530) 333 3137",
]

export default function Home({ upcoming }) {
  return (
    <div>
      <Head>
        <title> NVSI </title>
        <meta
          name="description"
          content="Welcome to the New Viet Nam Studies Initiative where we bring together scholars, industry experts, government officials, scientists, activists, and artists to lend their knowledge of the many contemporary dimensions of Viet Nam and its diasporic population. Highlighting the economic reconstruction and cultural renewal through programing and publication directly engages with the challenges and successes of this dynamic nation."
        />
        <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>
      <div id={styles.welcomeSection}>
        <h1 id={styles.welcomeHeader}>WELCOME</h1>
        <p id={styles.welcomeBody}>
          Welcome to the New Viet Nam Studies Initiative where we bring together
          scholars, industry experts, government officials, scientists,
          activists, and artists to lend their knowledge of the many
          contemporary dimensions of Viet Nam and its diasporic population.
          Highlighting the economic reconstruction and cultural renewal through
          programing and publication directly engages with the challenges and
          successes of this dynamic nation.
        </p>
        <img
          id={styles.spinningLogo}
          src={"/images/index/spinning-logo.svg"}
          alt="spinning logo"
        />
        <Link href="about">
          <img
            alt="arrow"
            id={styles.arrowIcon}
            src={"/images/index/arrow-icon.svg"}
          />
        </Link>
      </div>
      <div className={styles.eventSection}>
        <div className={styles.eventHeader}>
          <Link href="/events">
            <a>
              <h2 className={styles.eventHeaderText}>UPCOMING EVENTS</h2>
            </a>
          </Link>
        </div>
        <div className={styles.eventBody}>
          {upcoming.map((event) => {
            return (
              <Event
                key={event.id}
                title={event.attributes.Title}
                date={generateTimestamp(event.id, event.attributes.Date)}
                imgSrc={
                  event.attributes.Image.data
                    ? event.attributes.Image.data.attributes.url
                    : "/right_arrow.svg"
                }
                nextLink={`/events/${event.id}`}
              />
            )
          })}
        </div>
      </div>
      <div id={styles.addressSection}>
        <Address PhysAddress={address} ContactInfo={contact} />
        <img
          alt="round logo"
          id={styles.leftLogo}
          src={"/images/index/round-logo.svg"}
        />
        <img
          alt="round logo"
          id={styles.rightLogo}
          src={"/images/index/round-logo.svg"}
        />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const upcoming = await getUpcomingEvents()
    console.log(upcoming)
    return {
      props: { upcoming: upcoming.slice(0, 3) },
      revalidate: 60,
    }
  } catch (err) {
    console.error(err)
    return {
      props: {},
    }
  }
}
