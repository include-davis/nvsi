import Head from 'next/head'
import Footer from '/components/Footer.js'
import Eventcard from '/components/Event/Eventcard.js'

export default function Event() {
    return (
        <>
        <Head>
            <title>Events | NVSI</title>
        </Head>
        {/* <Nav />
        Event Page Title
        Grey Button Component */}
        <Eventcard />
        <Footer /> 
        </>   
    )
}