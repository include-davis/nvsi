/* eslint-disable @next/next/no-img-element */
import "../../styles/Event/Eventcard.module.css"
import Image from 'next/image'

export default function Eventcard() {
    return (
        <div className='event1-container'>
            <div className='image-container'>
                <img src="fubuki.jpg" alt="Fubuki"/>
            </div>
            <div className='desc-container'>
                <h3>Viet Nam and the Diaspora Silicon Valley Connections</h3>
                <b>Feb 23, 2018 @ 12:00 - 1:00pm</b>
                <p>Vietnamese and Vietnamese Americans have an important part of the Silicon Valley since its early development. It began with the thousands of Vietnamese refugees and immigrant assembly workers in companies like IBM and Hewlett Packard.</p>
                <button>Event Details {">"}</button>
            </div>
        </div>
    )
}