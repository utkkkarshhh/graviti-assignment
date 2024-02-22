import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/img/Graviti Logo 1.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Graviti" className={styles.headerLogo} />
    </div>
  );
};

export default Header;
