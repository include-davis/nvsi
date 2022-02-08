import Address from "../../components/address";
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

export default function Test () {
    return (
        <>
            <Address PhysAddress={address} ContactInfo={contact} />

            {/* <p className={styles.rotateLeft}>{PhysAddress[0]}</p>
            <p className={styles.rotateRight}>{PhysAddress[0]}</p> */}
        </>
    );
}