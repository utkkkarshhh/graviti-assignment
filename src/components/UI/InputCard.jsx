import React from "react";
import styles from "./InputCard.module.css";
import { FaDeleteLeft } from "react-icons/fa6";

const InputCard = (props) => {

  const renderDeleteButton = () => {
    if (props.label.includes("Stop")) {
      return (
        <FaDeleteLeft className={styles.deleteButton} onClick={props.onClick} />
      );
    }
    return null;
  };
  return (
    <div className={styles.inputComponent}>
      <label className={styles.inputLabel}>{props.label}</label>
      <div className={styles.customDropdown}>
        <div className={styles.dropdownIcon}>
          <img src={props.src} alt="InputDrowpdownVector" />
        </div>
        <div>
          <input
            className={styles.inputArea}
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
          ></input>
        </div>
        {renderDeleteButton()}
      </div>
    </div>
  );
};

export default InputCard;
