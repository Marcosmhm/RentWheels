import { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";
const CarCard = lazy(() => import("./CarInfo"));

function Inventory() {
  const [filteredVehicle, setFilteredVehicle] = useState("all");

  const handleVehicleTypeClick = async (type) => {
    await setFilteredVehicle(type);
  };

  return (
    <>
      <motion.section
        className="inventory-section"
        id="fleet"
        initial={{
          y: 300,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className="container">
          <div className="title">
            <h3>Vehicle Models</h3>
            <h1>Our rental fleet</h1>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="inventory-btn-container">
            <button
              className="inventory-btn"
              onClick={() => handleVehicleTypeClick("all")}
            >
              All
            </button>
            <button
              className="inventory-btn"
              onClick={() => handleVehicleTypeClick("manual")}
            >
              Manual
            </button>
            <button
              className="inventory-btn"
              onClick={() => handleVehicleTypeClick("automatic")}
            >
              Automatic
            </button>
          </div>
          <Suspense fallback={<h1>Loading...</h1>}>
            <CarCard filter={filteredVehicle} />
          </Suspense>
        </div>
      </motion.section>
    </>
  );
}

export default Inventory;
