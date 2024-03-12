import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

function Faq() {
  const [activeQuestion, setActiveQuestion] = useState("q1");

  const handleActiveAnswer = (id) => {
    return activeQuestion === id ? "open-answer" : "";
  };

  const handleActiveQuestion = (id) => {
    return activeQuestion === id ? "faq-active" : "";
  };

  const handleAnswerClick = (id) => {
    activeQuestion === id ? setActiveQuestion("") : setActiveQuestion(id);
  };

  return (
    <>
      <motion.section
        id="faq-section"
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
            <h3>FAQ</h3>
            <h1>Frequently Asked Questions</h1>
            <p>
              Frequently Asked Questions Bbout the Car Rental Booking Process on
              Our Website: answers to Common Concerns and Inquiries
            </p>
          </div>
          <div className="faq-wrapper">
            <div
              className="faq-question-wrapper"
              onClick={(e) => handleAnswerClick("q1")}
            >
              <div className={`faq-question-box ${handleActiveQuestion("q1")}`}>
                <h3>1. How old do I need to be to rent a car?</h3>
                <MdKeyboardArrowDown />
              </div>
              <div
                id="a1"
                className={`faq-answer-box ${handleActiveAnswer("q1")}`}
              >
                <p>
                  To rent a car with us, you must be at least 21 years old.
                  However, there are certain car categories that may require
                  renters to be 25 or older. Additional age-related fees may
                  apply for drivers under 25.
                </p>
              </div>
            </div>
            <div
              className="faq-question-wrapper"
              onClick={(e) => handleAnswerClick("q2")}
            >
              <div className={`faq-question-box ${handleActiveQuestion("q2")}`}>
                <h3>2. Can I modify or cancel my reservation?</h3>
                <MdKeyboardArrowDown />
              </div>
              <div
                id="a2"
                className={`faq-answer-box ${handleActiveAnswer("q2")}`}
              >
                <p>
                  Yes, you can modify or cancel your reservation online through
                  our website or by contacting our customer service. Keep in
                  mind that modifications may affect the rental rate, and
                  cancellation policies vary depending on the type of
                  reservation. It's recommended to review the terms and
                  conditions before making changes to your booking.
                </p>
              </div>
            </div>
            <div
              className="faq-question-wrapper"
              onClick={(e) => handleAnswerClick("q3")}
            >
              <div className={`faq-question-box ${handleActiveQuestion("q3")}`}>
                <h3>3. What documents do I need to rent a car?</h3>
                <MdKeyboardArrowDown />
              </div>
              <div
                id="a3"
                className={`faq-answer-box ${handleActiveAnswer("q3")}`}
              >
                <p>
                  To rent a car, you will need a valid driver's license, a major
                  credit card in your name, and a government-issued ID.
                  International renters may need to provide a passport, and an
                  international driver's license if their native license is not
                  in English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Faq;
