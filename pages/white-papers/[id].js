import React from "react"
import {
  getWhitePaper,
  getWhitePaperById,
  getWhitePaperLink,
  getWhitePapers,
} from "../../api-lib/apiOps"
import { Document, Page } from "react-pdf"

import { useState } from "react"
import Head from "next/head"

import styles from "../../styles/whitepapers/WhitePapersDoc.module.css"

// const PdfViewer = dynamic(() => import('../../components/PdfViewer'), {
//   ssr: false
// })

export default function WhitePaper({ size, link, title, author, tags }) {
  const [pageNumber, setPageNumber] = useState(1)
  const [numPages, setNumPages] = useState(null)

  function onLoad({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/Navbar/logoSmall.svg" />
      </Head>
      <div className={styles.head}>
        <h1>{title}</h1>
      </div>
      <section className={styles.container}>
        <div className={styles.file}>
          <a href={link}>
            Download {title} ({size}MB)
          </a>
          <div className={styles.wrapper}>
            <Document
              className={styles.document}
              file={link}
              onLoadSuccess={onLoad}
              // renderMode="svg"
            >
              <Page className={styles.page} pageNumber={pageNumber} />
            </Document>
            <div className={styles.buttons}>
              <button
                disabled={pageNumber === 1}
                onClick={() => setPageNumber((num) => Math.max(1, num - 1))}
              >
                {"< Prev"}
              </button>
              <button
                disabled={pageNumber === numPages}
                onClick={() =>
                  setPageNumber((num) => Math.min(numPages, num + 1))
                }
              >
                {"Next >"}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <h2>Author(s)</h2>
          <ul className={styles.authors}>
            {author.map((auth) => (
              <li key={auth}>{auth}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  try {
    const papers = await getWhitePapers()
    const paths = papers.map((post) => {
      return {
        params: {
          id: post.id.toString(),
        },
      }
    })

    return {
      paths,
      fallback: false,
    }
  } catch (err) {
    return
  }
}

export async function getStaticProps({ params }) {
  const paper = await getWhitePaperById(params.id)
  // console.log(paper.attributes.Tags.split(";").slice(0, 3))

  return {
    props: {
      link: paper.attributes.File.data.attributes.url,
      size: Math.round(paper.attributes.File.data.attributes.size) / 100,
      title: paper.attributes.Title,
      author: paper.attributes.Author.split(";"),
      tags: paper.attributes.Tags.split(";").slice(0, 3),
    },
  }
}
