import styles from "../styles/Middle.module.css";
import Image from "next/image";

export default function Middle() {
  return (
    <div>
      <div className={styles.Background}> 
        <Image src="/circles.svg" alt="circle" width="1768px" height="2428px"/>
      </div>
        
      <div className={styles.Bodytext}>
        Vietnamese and Vietnamese Americans have been an important part of the
        Silicon Valley since its early development. It began with the thousands
        of Vietnamese refugees and immigrant assembly workers in companies like
        IBM and Hewlett Packard. Living and working in and around San Jose, the
        city with the largest population of Vietnamese outside of Viet Nam, this
        same population then became engineers and innovators for the emerging
        tech industry centered around Silicon Valley, with breakout early
        successes including Trung Dung’s OnDisplay. Vietnamese Americans were
        then joined by trained Vietnamese techies and they worked side by side
        for decades – even bringing their knowledge back to Viet Nam, as in the
        case of Truong Gia Binh’s FTP. With a new outlook for technological
        development internationally and inspired by the pace and promise of
        start-ups, Viet Nam has been creating its own Silicon Valleys throughout
        the nation, such as Saigon Silicon Valley. The New Viet Nam Studies
        Initiative is proud to host a symposium on the historical impact of
        Silicon Valley on the Vietnamese and Vietnamese Americans, and a look
        into future collaborations between the United States and Viet Nam with
        these same populations. Why is the history of Vietnamese and Vietnamese
        Americans in the Silicon Valley not well known? How are Vietnamese
        Americans connecting back to Viet Nam through the tech industry? What
        models has Viet Nam adopted and what innovations are sprouting from
        their burgeoning tech industry? Panelists will include: Phu Hoang: Phu
        Hoang is an experienced Silicon Valley technology executive, advisor,
        and angel investor. Most recently, Phu was Co-founder and CEO of
        DataTorrent, a real-time Big Data stream processing and decision making
        platform on top of Hadoop. Phu founded DataTorrent in 2012, raised
        multiple rounds of Silicon Valley venture funding, and built a platform
        with many Fortune top 50 customers. In 1996, Phu was hired as the 5th
        engineer at Yahoo, and over a 12 year span there, he became Executive
        Vice President and GM, overseeing 3000 engineers in the development of
        all of Yahoo's consumer and advertising products worldwide. He lead the
        development of many of Yahoo!’s core products such as Search, Ad
        Systems, Mail, Sports, Finance, Messenger and Groups. Phu has also
        worked as Executive Chairman of Buysight, a leading provider of
        real-time retargeting and intent-based display advertising, as well as
        leading led the Engineering and Product groups at Kiva.org, a non-profit
        whose mission is to alleviate global poverty through micro-financing of
        entrepreneurs world-wide. Lucy Keoni: One of the youngest professionals
        to be named to Silicon Valley Business Journal’s “Top 40 under 40” list,
        Lucy’s well-rounded business experience has culminated in focused
        efforts towards initiatives, products, and services for
        under-represented, under-served populations. She is the Co-founder of
        StartUpRising and Vietnamese Women in Tech, Co-organizer of the VietTech
        Summit, current Director of Customer Success at Teamable. Hong
        Nguyen-Phuong: A veteran of Silicon Valley, Hong has worked at startups,
        Sun Microsystems, Symantec, and PG&E in software domains ranging from
        internet infrastructure, animation, security, utility infrastructure,
        GIS, and blockchain exchange. He is currently the Editor In Chief at
        TheCryptoSight. Stella Tran: Stella is currently working with Acumen, a
        venture capital fund that invests in entrepreneurs creating sustainable
        solutions to poverty. She joined the firm’s U.S. portfolio team to find
        health, financial service, and workforce development (e.g., education,
        future of work, people ops, etc) innovations that serve low-income
        Americans. Prior to joining Acumen, Stella was an Associate with Just
        Business, the venture arm of the non-profit Not For Sale, where she
        invested in companies committed to ethical sourcing and re-investing in
        the communities in which they sourced. As an Associate, she provided
        strategic support to portfolio companies through her diverse and
        interdisciplinary experiences in product, research, operations, and
        finance. Stella also has had the opportunity to work with social
        entrepreneurs from around the world, through product and design roles at
        the Miller Center for Social Entrepreneurship at Santa Clara and the
        Ayllu Initiative.
      </div>
      <div className={styles.timeicon}>
      <Image src="/time icon.svg" alt="time" width="25px" height="25px"/>
      </div>
      <div className={styles.time}>
      Saturday, February 23, 2019
      12:00pm - 1:00pm
      </div>
      <div className={styles.locationicon}>
      <Image src="/location icon.svg" alt="location" width="45px" height="45px"/>
      </div>
      <div className={styles.location}>
      UC Davis Campus,
      Room D at the Student Community Center
      </div>
      <div>
      <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.7578310141575!2d-121.7538312847289!3d38.5393501755745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085290f17f05c57%3A0x1c1ae6f0f70d4f2b!2sStudent%20Community%20Center!5e0!3m2!1sen!2sus!4v1649786750768!5m2!1sen!2sus" width="410" height="410"  
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
    </div>
  );
}
