import Address from "../components/address";

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

const Home = () => {
  return (
    <div id="home-page">
      <h1 id="welcome-header">WELCOME</h1>
      <body id="welcome-body">
        Welcome to the New Viet Nam Studies Initiative where we bring together
        scholars, industry experts, government officials, scientists, activists,
        and artists to lend their knowledge of the many contemporary dimensions
        of Viet Nam and its diasporic population. Highlighting the economic
        reconstruction and cultural renewal through programing and publication
        directly engages with the challenges and successes of this dynamic
        nation.
        
      <Address PhysAddress={address} ContactInfo={contact} />
      
      </body>
    </div>
  );
};

export default Home;
