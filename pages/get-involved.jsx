import React from "react";
import TestimonialCard from "../components/get-involved/TestimonialCard";
import styles from "../styles/get-involved.module.css";

const GetInvolved = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <h1 style={{ color: "white", marginBottom: "0px", position: "relative", top: "5%" }}>GET INVOLVED</h1>
        <p style={{ color: "white", fontSize: "30px", position: "relative", top: "5%" }}>Volunteer with us!</p>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.testimonialsSection}>
          <h2 style={{ fontSize: "36px" }}>TESTIMONIALS</h2>
          <TestimonialCard
            imgSrc={"/images/get-involved/placeholder-headshot.svg"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium nec urna in aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium nec urna in aliquam."
            }
          />
          <TestimonialCard
            imgSrc={"/images/get-involved/placeholder-headshot.svg"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium nec urna in aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium nec urna in aliquam."
            }
          />
        </div>
        <div className={styles.descriptionSection}>
          <h2 className={styles.descriptionHeader}>DESCRIPTION</h2>
          <p className={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium nec urna in aliquam. Suspendisse at
            convallis nibh, sed fermentum urna. Maecenas congue viverra ornare. Proin convallis lorem imperdiet enim
            egestas mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium nec urna in aliquam.
            Suspendisse at convallis nibh, sed fermentum urna. Maecenas congue viverra ornare. Proin convallis lorem
            imperdiet enim egestas mollis.
          </p>
          <button className={styles.descriptionBtn}>Apply Here</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GetInvolved;
