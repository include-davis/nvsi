import Head from 'next/head'
import Footer from '/components/Footer/Footer.js'
import Navtabs from '../components/Event/Navtabs'

export default function Event() {
    return (
        <>
        <Head>
            <title>Events | NVSI</title>
        </Head>

        {/* <Nav />
        Event Page Title
        Grey Button Component */}
        <Navtabs /> 
        <Footer /> 
        </>   
    )
}