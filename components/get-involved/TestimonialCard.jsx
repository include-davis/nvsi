import React from "react";
import styles from "../../styles/getinvolved/TestimonialCard.module.css";

const TestimonialCard = ({ imgSrc, text }) => {
  return (
    <div className={styles.container}>
      <img className={styles.headshot} src={imgSrc}></img>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default TestimonialCard;
