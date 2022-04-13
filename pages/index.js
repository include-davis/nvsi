//libraries installed before running:
//npx create-next-app -e with-tailwindcss responsive-navigation
//npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
//npx tailwindcss init -p

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
