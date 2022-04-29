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

export default function WhitePaper({ link, title, author, topic }) {
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
          <a href={link}>Download {title}</a>
          <div className={styles.wrapper}>
            <Document file={link} onLoadSuccess={onLoad}>
              <Page className={styles.page} pageNumber={pageNumber} />
            </Document>
            <div>
              <button
                onClick={() => setPageNumber((num) => Math.max(1, num - 1))}
              >
                {"<"}
              </button>
              <button
                onClick={() =>
                  setPageNumber((num) => Math.min(numPages, num + 1))
                }
              >
                {">"}
              </button>
            </div>
          </div>
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

  return {
    props: {
      link: paper.attributes.File.data.attributes.url,
      title: paper.attributes.Title,
      author: paper.attributes.Author,
      topic: paper.attributes.Topic,
    },
  }
}
