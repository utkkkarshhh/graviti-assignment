import React, { useState, useEffect } from "react";
import styles from "./Homepage.module.css";
import InputCard from "../UI/InputCard";
import OriginLogo from "../../assets/img/Origin Icon (1).png";
import StopLogo from "../../assets/img/Stop Icon.png";
import DestinationLogo from "../../assets/img/Destination Icon.png";
import Button from "../UI/Button";
import ResultCard from "../UI/ResultCard";
import AddAnotherCTA from "../UI/AddAnotherCTA";

const Homepage = () => {
  const [addStopCard, setAddStopCard] = useState([]);

  useEffect(() => {
    loadMap();
  }, []);

  const loadMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 20.5937, lng: 78.9629 },
      zoom: 5,
    });
  };

  const addAnotherHandler = (event) => {
    event.preventDefault();
    if (addStopCard.length < 2) {
      setAddStopCard([...addStopCard, { id: addStopCard.length }]);
    } else {
      alert("You can't add more than two stops!");
    }
  };

  const stopCardRemoveHandler = (id) => {
    setAddStopCard(addStopCard.filter((card) => card.id !== id));
  };

  return (
    <div className={styles.homepage}>
      <div className={styles.interactiveArea}>
        <InputCard src={OriginLogo} label="Origin" />
        {addStopCard.map((stopCard) => (
          <InputCard
            key={stopCard.id}
            src={StopLogo}
            label={`Stop ${stopCard.id}`} 
            onClick={() => stopCardRemoveHandler(stopCard.id)}
          />
        ))}
        {addStopCard.length < 2 && (
          <AddAnotherCTA onClick={addAnotherHandler} />
        )}
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
