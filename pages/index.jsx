import styles from "../styles/index.module.css";
import Address from "../components/Address";
import EventPic from "../components/EventPic";
import Link from "next/link"

const address = [
  "New Viet Nam Studies Initiative",
  "3113 Hart Hall",
  "University of California Davis",
  "One Shields Avenue",
  "Davis, CA 95616",
];

const contact = [
  "Contact Us",
  "newvietnamstudies@gmail.com",
  "Phone: (530) 333 3137",
];

export default function Home () {
  return (
    <div>
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
        <img id={styles.spinningLogo} src={"/images/spinning-logo.svg"} />
        <img id={styles.arrowIcon} src={"/images/arrow-icon.svg"} />
      </div>
      <div className={styles.eventSection}>
        <div className={styles.eventHeader}>
          <Link
            href='/'>
            <a><h2>UPCOMING EVENTS</h2></a>
          </Link>
        </div>
        <EventPic
          imgSrc='/images/welcome-background.svg' nextLink="/" />
        <EventPic
          imgSrc='/images/welcome-background.svg' nextLink="/" />
        <EventPic
          imgSrc='/images/welcome-background.svg' nextLink="/" />
      </div>
      <div id={styles.addressSection}>
        <Address PhysAddress={address} ContactInfo={contact} />
        <img id={styles.leftLogo} src={"/images/round-logo.svg"} />
        <img id={styles.rightLogo} src={"/images/round-logo.svg"} />
      </div>
      <div id={styles.formSection}>
        <div id={styles.formBody}>
          <h2 id={styles.formHeader}>KEEP POSTED WITH NVSI</h2>
          <p id={styles.formText}>
            Update on events | How to get involved | Contact us directly
          </p>
          <div id={styles.formIcons}>
            <img id={styles.facebookIcon} src={"/images/facebook-icon.svg"} />
            <img id={styles.youtubeIcon} src={"/images/youtube-icon.svg"} />
            <img id={styles.instagramIcon} src={"/images/instagram-icon.svg"} />
          </div>
        </div>
        <div id={styles.formInput}>
          <input
            id={styles.emailField}
            type={"email"}
            placeholder={"EMAIL"}
            required
          />
          <input
            id={styles.nameField}
            type={"name"}
            placeholder={"NAME"}
            required
          />
          <input id={styles.submitBtn} type={"submit"} value={"Submit"} />
        </div>
      </div>
    </div >
  );
}
