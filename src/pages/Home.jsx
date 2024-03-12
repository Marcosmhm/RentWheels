import BookForm from "../components/BookForm";
import { handleClickScroll } from "../utils";
import { motion } from "framer-motion";


function Home() {
  return (
    <>
      <section id="home" className="home-section">
        <div className="container">
          <img
            src="/home-bg2.png"
            alt=""
            className="bg-shape"
          />
          <div className="home-content">
            <motion.div className="home-text"
              initial={{ x: -600, opacity: 0 }}
              animate={{ x: 0, opacity: 1}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h4>Plan your trip now</h4>
              <h1>
                <span className="orange-text">EASY</span> AND
                <span className="orange-text"> FAST</span> WAY TO RENT YOUR CAR
              </h1>
              <p className="home-subtitle">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="home-btn-container">
                <button
                  onClick={() => handleClickScroll("book-car")}
                  className="home-btn book-car"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
            <motion.img
              src="/red-car.png"
              alt=""
              className="home-img"
              initial={{ x: 600, opacity: 0 }}
              animate={{ x: 0, opacity: 1}}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>
      </section>
      <BookForm />
    </>
  );
}

export default Home;
