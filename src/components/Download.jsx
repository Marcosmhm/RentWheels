import { motion } from "framer-motion";

function Download() {
  return (
    <>
      <motion.section
        className="download-section"
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
          <h1>Download our app to get most out of it</h1>
          <p>
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="download-imgs">
            <img src="/google-app-download-1.svg" alt="" />
            <img src="/ios-app-btn.svg" alt="" />
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Download;
