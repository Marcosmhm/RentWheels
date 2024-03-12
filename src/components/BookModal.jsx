import { useRef, useEffect } from "react";

import { FaCircleInfo } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEditCalendar } from "react-icons/md";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      history.goBack;
    };
  }, [ref, handler]);
};

function BookModal({ ...props }) {
  const ref = useRef();

  useOnClickOutside(ref, () => props.handleClose());

  return (
    <>
      <section className="book-modal">
        <div className="book-modal-wrapper" ref={ref}>
          <div className="book-modal-container">
            <h1>COMPLETE RESERVATION</h1>
            <div className="book-modal-content">
              <div className="book-info">
                <h3>
                  <FaCircleInfo /> Upon completing this reservation enquiry, you
                  will receive:
                </h3>
                <p>
                  Your rental voucher to produce on arrival at the rental desk
                  and a toll-free customer support number
                </p>
              </div>
              <div className="booking-data">
                <div className="booking-left">
                  <h3>Location & Date</h3>
                  <div className="pickup-info">
                    <IoLocationOutline size={20} />
                    <div className="pickup-info-content">
                      <span>Pick-Up Date</span>
                      {props.pickUpDate.replaceAll("-", "/")}
                    </div>
                  </div>
                  <div className="pickup-info">
                    <IoLocationOutline size={20} />
                    <div className="pickup-info-content">
                      <span>Drop-Off Date</span>
                      {props.dropOfDate.replaceAll("-", "/")}
                    </div>
                  </div>
                  <div className="pickup-info">
                    <MdOutlineEditCalendar size={20} />
                    <div className="pickup-info-content">
                      <span>Pick-Up Location</span>
                      {props.pickUpLocation}
                    </div>
                  </div>
                  <div className="pickup-info">
                    <MdOutlineEditCalendar size={20} />
                    <div className="pickup-info-content">
                      <span>Drop-Off Location</span>
                      {props.dropOf}
                    </div>
                  </div>
                </div>
                <div className="booking-right">
                  <h3>Car: {props.carModel}</h3>
                </div>
              </div>
              <h3 className="personal-info">PERSONAL INFORMATION</h3>
              <div className="book-personal-form">
                <div className="book-personal-form-input">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="book-personal-form-input">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="book-personal-form-input">
                  <label htmlFor="">Phone Number</label>
                  <input type="text" placeholder="Enter your phone number" />
                </div>
                <div className="book-personal-form-input">
                  <label htmlFor="">Age</label>
                  <input type="text" placeholder="18" />
                </div>
                <div className="book-personal-form-input">
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="Enter your email address" />
                </div>
                <div className="book-personal-form-input">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder="Enter your street address" />
                </div>
                <div className="book-personal-form-input">
                  <label htmlFor="">City</label>
                  <input type="text" placeholder="Enter your city" />
                </div>
                <div className="book-personal-form-input">
                  <label htmlFor="">Zip code</label>
                  <input type="text" placeholder="Enter your zip code" />
                </div>
                <div className="book-personal-form-input"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookModal;
