import Head from "next/head"
import styles from "../../styles/community/profile/profile.module.css"
import reactMarkdown from "react-markdown"

import { getCommunity, getCommunityMember } from "../../api-lib/apiOps"
import ReactMarkdown from "react-markdown"

// profiles (???): https://docs.google.com/document/d/14leefSVmyeYsbMMTYy-4jyE-PXSf8aw_i3nb04CTYGU/edit

// TEMPLATE
export default function Profile({ profile }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{profile.Name} | NVSI</title>
        {/* <meta name="NVSI" content="NVSI" /> */}
        <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>
      <div className={styles.circlesBGOverlay}></div>

      <main className={styles.main}>
        <div className={styles.headlineContainer}>
          <div className={styles.subheadlineContainer}>
            <div className={styles.h2}> {profile.Name} </div>
            <span id={styles.subtitle}>{profile.Headline}</span>
          </div>
          <div className={styles.tagContainer}>
            {profile.Keywords.split(";")
              .slice(0, 3)
              .map((keyword) => {
                return (
                  <span key={keyword} className={styles.tag}>
                    {keyword}
                  </span>
                )
              })}
          </div>
        </div>

        <div className={styles.bodyContainer}>
          <div className={styles.articleContainer}>
            <div className={styles.article} id={styles.leftArticle}>
              <div className={styles.h2}> Bio </div>
              <p>{profile.Biography}</p>
            </div>

            <div className={styles.article} id={styles.rightArticle}>
              <img
                className={styles.profilePhoto}
                src={profile.Image.data.attributes.url}
              />

              <div className={styles.h2} id={styles.contactTitle}>
                {" "}
                Contact
              </div>

              <ul id={styles.links}>
                {profile.Link && (
                  <li>
                    <svg
                      width="15"
                      height="15"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z" />
                    </svg>
                    <a href={profile.Link}> {profile.Link} </a>
                  </li>
                )}
                <li>
                  <svg
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
                  </svg>
                  <a href={`mailto:${profile.Email}`}> {profile.Email} </a>
                </li>
              </ul>
              <div className={styles.h2}> Expertise</div>
              <ReactMarkdown children={profile.Expertise} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// BACK END CODE TO ROUTE AND RENDER PROFILES

export async function getStaticPaths() {
  // Call an external API endpoint to get profiles
  const profiles = await getCommunity()
  // console.log(profiles)

  // Get the paths we want to pre-render based on posts
  const paths = profiles.map((profile) => {
    // console.log("PROFILE", profile.id)
    return {
      params: {
        id: profile.id.toString(),
      },
    }
  })

  // console.log("PATHS", paths)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  console.log(params)
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const profile = await getCommunityMember(params.id)
  // console.log("MEMBER", profile.data)

  // Pass post data to the page via props
  return {
    props: {
      profile: profile.attributes,
    },
  }
}
