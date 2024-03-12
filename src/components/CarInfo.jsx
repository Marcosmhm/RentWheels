import { useState } from "react";
import { handleClickScroll } from '../utils.js'
import vehicles from "../data/vehicles.js";
import toyotaCamry from "/toyota-camry-removebg-preview.png";

function CarCard({ filter }) {
  const [vehicleData, setVehicleData] = useState({
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    type: "Sedan",
    transmission: "Automatic",
    seats: 5,
    image_url: toyotaCamry,
    name: "Toyota Camry 2022",
    price_per_day: 45.0,
  });

  const handleVehicleClick = (id, e) => {
    const newData = vehicles.filter((vehicle) => vehicle.id === id)[0];
    setVehicleData(newData);
    if (document.querySelector(".active")) {
      document.querySelector(".active").classList.remove("active");
    }
    e.target.classList.add("active");
  };

  const renderVehicles = vehicles
    .filter((vehicle) => {
      return filter === "all"
        ? vehicle
        : vehicle.transmission.toLowerCase() === filter.toLowerCase();
    })
    .map((vehicle, index) => {
      return (
        <div
          key={`car-${index}`}
          className={`car-div ${vehicle.id === vehicleData.id ? "active" : ""}`}
          onClick={(e) => handleVehicleClick(vehicle.id, e)}
        >
          {vehicle.name}
        </div>
      );
    });

  const renderVehicleInfo = (
    <>
      <div className="selected-vehicle">
        <div className="inventory-image-container">
          <img src={vehicleData.image_url} alt="" />
        </div>
        <div className="selected-vehicle-list">
          <div className="selected-vehicle-price">
            ${vehicleData.price_per_day} / Per day
          </div>
          <ul>
            <li>
              <span className="list-title">Model</span>
              <span className="list-content">{vehicleData.model}</span>
            </li>
            <li>
              <span className="list-title">Make</span>
              <span className="list-content">{vehicleData.make}</span>
            </li>
            <li>
              <span className="list-title">Year</span>
              <span className="list-content">{vehicleData.year}</span>
            </li>
            <li>
              <span className="list-title">Seats</span>
              <span className="list-content">{vehicleData.seats}</span>
            </li>
            <li>
              <span className="list-title">Transmission</span>
              <span className="list-content">{vehicleData.transmission}</span>
            </li>
            <li>
              <span className="list-title">Type</span>
              <span className="list-content">{vehicleData.type}</span>
            </li>
          </ul>
          <button onClick={() => handleClickScroll('book-car')} className="selected-vehicle-button">RESERVE NOW</button>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="pick-container">
        <div className="car-picker-container">
          {renderVehicles}  
        </div>
        {renderVehicleInfo}
      </div>
    </>
  );
}

export default CarCard;
