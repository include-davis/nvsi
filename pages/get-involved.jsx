import React from "react";
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
        </div>
        <div className={styles.descriptionSection}>Hello</div>
      </div>
    </div>
  );
};

export default GetInvolved;
