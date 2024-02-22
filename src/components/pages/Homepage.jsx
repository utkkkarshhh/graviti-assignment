import React, { useEffect } from "react";
import styles from "./Homepage.module.css";
import InputCard from "../UI/InputCard";
import OriginLogo from "../../assets/img/Origin Icon (1).png";
import DestinationLogo from "../../assets/img/Destination Icon.png";
import Button from "../UI/Button";
import ResultCard from "../UI/ResultCard";
import AddAnotherCTA from "../UI/AddAnotherCTA";

const Homepage = () => {
  useEffect(() => {
    loadMap();
  }, []);

  const loadMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 20.5937, lng: 78.9629 },
      zoom: 5,
    });
  };

  return (
    <div className={styles.homepage}>
      <div className={styles.interactiveArea}>
        <InputCard src={OriginLogo} label="Origin" />
        <AddAnotherCTA />
        <InputCard src={DestinationLogo} label="Destination" />
        <Button name="Calculate" />
        <ResultCard city1="Delhi" city2="Mumbai" distance="1,200 km" />
      </div>
      <div className={styles.mapArea}>
        <div id="map" className={styles.map}></div>
      </div>
    </div>
  );
};

export default Homepage;
