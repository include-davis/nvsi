import React from 'react'
import { getWhitePaper, getWhitePaperLink, getWhitePapers } from '../../api-lib/apiOps'
// import dynamic from 'next/dynamic'
import { Document, Page } from 'react-pdf'
import { useState } from 'react'
import Head from 'next/head'

import styles from '../../styles/whitepapers/WhitePapersDoc.module.css'

// const PdfViewer = dynamic(() => import('../../components/PdfViewer'), {
//   ssr: false
// })

export default function WhitePaper({ link, title, author, topic }) {
  const [pageNumber, setPageNumber] = useState(1)
  const [numPages, setNumPages] = useState(null)

  function onLoad({ numPages }) {
    setNumPages(numPages)
  }

  console.log(link)
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.main}>
          <img src={"/about_background.svg"}></img>
          <div className={styles.header}>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
          </div>
        </div>

        <div className={styles.circle}>
          {/* <div className={styles.flyer}>Flyer</div> */}
        </div>


        <div className={styles.main2}>
          <div className={styles.paper_side}>
            <a href={link} className={styles.download_file}>Download (title of white paper)</a>
            <div className={styles.document}>
              <Document file={link} onLoadSuccess={onLoad}>
                <Page className={styles.page} pageNumber={pageNumber} />
              </Document>
              <div>
                <button onClick={() => setPageNumber(num => Math.max(1, num - 1))}>{"<"}</button>
                <button onClick={() => setPageNumber(num => Math.min(numPages, num + 1))}>{">"}</button>
              </div>
            </div>
          </div>

          <div className={styles.tabs_container}>
            <div className={styles.diversity}>{topic}</div>
            <div className={styles.environment}>{topic}</div>
            <div className={styles.APPI_tab}>{topic}</div>
          </div>

          <div className={styles.authors_container}>
            <div className={styles.authors_title}>Author</div>
            <div className={styles.authors_names}>
              <li className={styles.authors_list}>{author}</li>
              {/* <li className={styles.authors_list}>Name</li> */}
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  try {
    const papers = await getWhitePapers()
    // console.log(papers)
    const paths = papers.map(post => {
      const link = getWhitePaperLink(papers, post.id)
      // console.log(link)
      return {
        params: {
          id: post.id.toString(),
          link
        }
      }
    })
    // console.log(paths)

    return {
      paths, fallback: false
    }
  } catch (err) {
    return
  }
}

export async function getStaticProps({ params }) {
  const papers = await getWhitePapers()
  const paper = getWhitePaper(papers, params.id)
  const link = getWhitePaperLink(papers, params.id)
  return {
    props: {
      link,
      title: paper.attributes.Title,
      author: paper.attributes.Author,
      topic: paper.attributes.Topic
    }
  }
}
