import {
  FcCustomerSupport,
  FcCurrencyExchange,
  FcApproval,
} from "react-icons/fc";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { motion } from "framer-motion";

function WhyUs() {
  return (
    <>
      <motion.section
        id="why"
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
        <div className="why-banner">
          <div className="why-title">
            <h1>Save big with our cheap car rental</h1>
            <h3>Local Suppliers. 24/7 Support</h3>
          </div>
        </div>
        <div className="container">
          <div className="why-container">
            <div className="why-cards-cotainer">
              <div className="flex-card">
                <FcCustomerSupport size={64} />
                <h3>Customer Support</h3>
                <p>
                  Our dedicated customer support team is here to assist you at
                  any time. We strive to provide you with exceptional service
                  and quick resolutions to your inquiries. Your satisfaction is
                  our top priority.
                </p>
              </div>
              <div className="flex-card">
                <FcCurrencyExchange size={64} />
                <h3>Best Price</h3>
                <p>
                  We guarantee the best prices for our rental vehicles. Our
                  transparent pricing and cost-effective options ensure that you
                  get the most value for your money without compromising on
                  quality.
                </p>
              </div>
              <div className="flex-card">
                <MdOutlineMoneyOffCsred size={64} color="green" />
                <h3>Free Cancellation</h3>
                <p>
                  We understand plans may change. Enjoy the freedom of canceling
                  your reservation at no cost. We believe in providing
                  flexibility to our customers for a stress-free booking
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default WhyUs;
