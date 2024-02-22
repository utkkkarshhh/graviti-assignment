import React from "react";
import styles from "./AddAnotherCTA.module.css";
import AddLogo from "../../assets/img/Add--alt.png";

const AddAnotherCTA = (props) => {
  return (
    <div className={styles.addAnotherButton} onClick={props.onClick}>
      <img src={AddLogo} alt="Add" className={styles.addLogo}></img>
      <p className={styles.ctaText}>Add another stop</p>
    </div>
  );
};

export default AddAnotherCTA;
