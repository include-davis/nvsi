import EventPic from "../../components/EventPic";

export default function Test () {
    return (
        <EventPic nextLink="https://www.google.com" imgSrc={'/images/welcome-background.svg'}/>
    )
}
// import Address from "../../components/address";
// import Circle from "../../components/addressCircle";
// 
// import { useRef } from "react/cjs/react.production.min";
// 
// // New Viet Nam Studies Initiative
// // 3113 Hart Hall
// // University of California Davis
// // One Shields Avenue
// // Davis, CA 95616
// //
// // Contact Us
// // newvietnamstudies@gmail.com
// // Phone: (530) 333 3137
// const address = [
//     "New Viet Nam Studies Initiative",
//     "3113 Hart Hall",
//     "University of California Davis",
//     "One Shields Avenue",
//     "Davis, CA 95616"
// ]
// 
// const contact = [
//     "Contact Us",
//     "newvietnamstudies@gmail.com",
//     "Phone: (530) 333 3137"
// ]
// 
// import styles from '../../libs/curvedText.module.css'
// 
// function UpdateCurvedText ({curvedText, radius, children}) {
// 
//     console.log(children)
// 
//     // let w = curvedText.props.style.width, h = curvedText.props.style.height;
//     // let w = , h = styles.text.height;
//     // console.log(html);
// // 
// //     curvedText.props.style.minWidth = w;
// //     curvedText.props.style.minHeight = h;
// // 
// //     w = w.slice(0, -2)
// //     w = parseInt(w)
// //     h = h.slice(0, -2)
// //     h = parseInt(h)
// // 
// //     let spans = [];
// //     let text = curvedText.props.children;
// // 
// // 
// //     let circleLength = 2 * Math.PI * radius;
// // 
// //     let angleRad = w / (2 * radius);
// // 
// //     let angle = 2 * angleRad * 180 / Math.PI / text.length;
// // 
// //     Array.from(text).forEach((letter, index) => {
// // 
// //         spans.push(<span key={index} className={styles.spanItem} style={{
// //             position: "absolute",
// //             height: `${radius}px`,
// //             transformOrigin: "bottom center",
// //         }}>
// //             {letter}
// //         </span>);
// //     });
// // 
// //     Array.from(spans).forEach(( elem, index ) => {
// //         elem.props.style.transform = `translate(${w / 2}px,0px) rotate(${index * angle - text.length * angle / 2}deg)`
// //         console.log(elem.props.style)
// //     })
// 
//     return (
//         <div className={styles.text}>
//             {}
//         </div>
//     )
// }
// 
// 
// export default function Test () {
//     const text = <div className={styles.text}>"New Viet Nam Studies Initiative"</div>
//     // const [textStyle, changeTextSyle] = useMeasure(text);
//     // console.log("Here")
//     // console.log(styles.text)
// 
//     // console.log(text);
//     return (
//         <>
//             <UpdateCurvedText curvedText="This is cool" radius={1000} >{text}</UpdateCurvedText>
//             <Circle Text={"New Viet Nam Studies Initiative"} Type="left" />
//             {/* <Address PhysAddress={address} ContactInfo={contact} /> */}
//             {/* <p className={styles.rotateLeft}>{PhysAddress[0]}</p>
//             <p className={styles.rotateRight}>{PhysAddress[0]}</p> */}
//         </>
//     );
// }
// 
// 
// 
