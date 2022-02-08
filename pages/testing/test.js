import Address from "../../components/address";
import Circle from "../../components/addressCircle";


// New Viet Nam Studies Initiative
// 3113 Hart Hall
// University of California Davis
// One Shields Avenue
// Davis, CA 95616
//
// Contact Us
// newvietnamstudies@gmail.com
// Phone: (530) 333 3137
const address = [
    "New Viet Nam Studies Initiative",
    "3113 Hart Hall",
    "University of California Davis",
    "One Shields Avenue",
    "Davis, CA 95616"
]

const contact = [
    "Contact Us",
    "newvietnamstudies@gmail.com",
    "Phone: (530) 333 3137"
]

import styles from '../../libs/curvedText.module.css'

function UpdateCurvedText ({ curvedText, radius }) {
    curvedText.props.style.minWidth = "initial";
    curvedText.props.style.minHeight = "initial";

    let w = curvedText.props.style.width, h = curvedText.props.style.height;


    curvedText.props.style.minWidth = w;
    curvedText.props.style.minHeight = h;

    w = w.slice(0, -2)
    w = parseInt(w)
    h = h.slice(0, -2)
    h = parseInt(h)

    let spans = [];
    let text = curvedText.props.children;


    let circleLength = 2 * Math.PI * radius;

    let angleRad = w / (2 * radius);

    let angle = 2 * angleRad * 180 / Math.PI / text.length;

    Array.from(text).forEach((letter, index) => {

        spans.push(<span key={index} className={styles.spanItem} style={{
            position: "absolute",
            height: `${radius}px`,
            transformOrigin: "bottom center",
        }}>
            {letter}
        </span>);
    });

    Array.from(spans).forEach(( elem, index ) => {
        elem.props.style.transform = `translate(${w / 2}px,0px) rotate(${index * angle - text.length * angle / 2}deg)`
        console.log(elem.props.style)
    })

    return (
        <div className={styles.text}>
            {spans}
        </div>
    )
}


export default function Test () {
    // const text = "New Viet Nam Studies Initiative";
    // const [textStyle, changeTextSyle] = useMeasure(text);
    console.log("Here")
    console.log(styles.text)
    const text = <p
        style={{
            minWidth: '0.5em',
            minHeight: '0.5em',
            width: '500px',
            height: '500px',
            
            position: 'relative',
            display: 'inline-block',
            margin: '0 auto',
            fontSize: '100px'
        }}
        >Wow this is awesome
    </p>;
    console.log(text);
    return (
        <>
            <UpdateCurvedText curvedText={text} radius={1000} />
            <Circle Text={"New Viet Nam Studies Initiative"} Type="left" />
            {/* <Address PhysAddress={address} ContactInfo={contact} /> */}
            {/* <p className={styles.rotateLeft}>{PhysAddress[0]}</p>
            <p className={styles.rotateRight}>{PhysAddress[0]}</p> */}
        </>
    );
}



