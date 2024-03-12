import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <motion.footer
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
          <div className="footer-flex-wrapper">
            <ul>
              <li className="footer-list-title">Rent Wheels</li>
              <li>
                {" "}
                <span>
                  We provide a wide range of vehicles for all your driving
                  needs. We have the perfect car to meet your needs.
                </span>
              </li>
              <li>(123)-456-789</li>
              <li>RentWheels@gmail.com</li>
            </ul>
            <ul>
              <li className="footer-list-title">Company</li>
              <li>New York</li>
              <li>Careers</li>
              <li>Mobile</li>
              <li>Blog</li>
              <li>How we work</li>
            </ul>
            <ul>
              <li className="footer-list-title">Working Hours</li>
              <li>
                <span>Mon - Fri:</span> 9:00AM - 9:00PM
              </li>
              <li>
                <span>Sat:</span> 9:00AM - 19:00PM
              </li>
              <li>
                <span>Sun:</span> Closed
              </li>
            </ul>
            <ul>
              <li className="footer-list-title">Subscription</li>
              <li>
                <span>
                  Subscribe your Email address for latest news & updates
                </span>
              </li>
              <li>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Email Address"
                />
              </li>
              <li>
                <button type="submit">Submit</button>
              </li>
            </ul>
          </div>
          <div className="footer-copy-wrapper">
            <span>© 2023 Marcos Henrique de Moraes</span>
            <span>
              Design by <a href="https://xpeedstudio.com/">XpeedStudio</a> and
              built by me
            </span>
            <span className="personal-links">
              <a
                href="https://www.linkedin.com/in/marcoshenriquem/"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a href="https://github.com/Marcosmhm" target="_blank">
                <BsGithub />
              </a>
            </span>
          </div>
        </div>
      </motion.footer>
    </>
  );
}

export default Footer;
