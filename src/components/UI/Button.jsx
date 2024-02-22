import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button className={styles.btn1} onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
