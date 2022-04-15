import React from 'react'
import { getWhitePaperLink, getWhitePapers } from '../../api-lib/apiOps'
import { Document } from 'react-pdf'

export default function WhitePaper({ link }) {
  console.log(link)
  return (
    <div>
      <Document file={link} />
    </div>
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
  const link = getWhitePaperLink(papers, params.id)
  return {
    props: {
      link
    }
  }
}
