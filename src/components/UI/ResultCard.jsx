// ResultCard.js
import React from "react";
import styles from "./ResultCard.module.css";

const ResultCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.upperSection}>
        <div className={styles.distanceText}>Distance</div>
        <div className={styles.distanceNumber}>{props.distance} kms</div>
      </div>
      <div className={styles.bottomSection}>
        <p>
          The distance between <b>{props.city1}</b> and <b>{props.city2}</b> via the
          selected route is <b>{props.distance} kms.</b>
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
