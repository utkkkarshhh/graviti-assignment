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
  const [origin, setOrigin] = useState("Delhi");
  const [destination, setDestination] = useState("Mumbai");
  const [distance, setDistance] = useState("");
  const [stop, setStop] = useState(null);
  const [addStopCard, setAddStopCard] = useState([]);

  useEffect(() => {
    initMap();
  }, [origin, destination, stop]);

  const initMap = () => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      draggable: true,
      panel: document.getElementById("panel"),
    });

    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: 20.5937, lng: 78.9629 },
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    });

    directionsRenderer.setMap(map);

    directionsRenderer.addListener("directions_changed", () => {
      const directions = directionsRenderer.getDirections();
      if (directions) {
        computeTotalDistance(directions);
      }
    });

    displayRoute(origin, destination, directionsService, directionsRenderer);
  };

  const displayRoute = (origin, destination, service, display) => {
    service.route(
      {
        origin: origin,
        destination: destination,
        waypoints: [{ location: { stop } }],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          display.setDirections(result);
        } else {
          console.error("Directions request failed due to " + status);
        }
      }
    );
  };

  const addAnotherHandler = (event) => {
    event.preventDefault();
    if (addStopCard.length < 1) {
      setAddStopCard([...addStopCard, { id: addStopCard.length }]);
    }
  };

  const stopCardRemoveHandler = (id) => {
    setAddStopCard(addStopCard.filter((card) => card.id !== id));
    setStop(null);
  };

  const computeTotalDistance = (directions) => {
    let total = 0;
    const route = directions.routes[0];
    for (let i = 0; i < route.legs.length; i++) {
      total += route.legs[i].distance.value;
    }
    setDistance(total / 1000);
  };

  return (
    <div className={styles.homepage}>
      <div className={styles.interactiveArea}>
        <InputCard
          src={OriginLogo}
          label="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        {addStopCard.map((stopCard) => (
          <InputCard
            key={stopCard.id}
            src={StopLogo}
            value={stop}
            label={`Stop`}
            onChange={(event) => setStop(event.target.value)}
            onClick={() => stopCardRemoveHandler(stopCard.id)}
          />
        ))}
        {addStopCard.length < 1 && (
          <AddAnotherCTA onClick={addAnotherHandler} />
        )}
        <InputCard
          src={DestinationLogo}
          label="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <Button name="Calculate" />
        <ResultCard city1={origin} city2={destination} distance={distance} />
      </div>
      <div className={styles.mapArea}>
        <div id="map" className={styles.map}></div>
        <div id="panel"></div>
      </div>
    </div>
  );
};

export default Homepage;
