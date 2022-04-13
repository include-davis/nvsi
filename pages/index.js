import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div>
      <img src = "/vercel.svg"/>
        <div>
          <div>
            <Navbar/>
          </div>
        </div>
    </div>
  )
}
