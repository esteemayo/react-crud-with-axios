import React from "react";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-light text-center text-lg-start footer">
      <div className="container p-4"></div>

      <div
        className="text-center p-3"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {date.getFullYear()} Copyright:
        <a className="text-dark" href="https://github.com/esteemayo">
          React <FaReact style={{ color: "#0d6efd" }} />
        </a>
        <p>All rights reserved.Design by Emmanuel Adebayo&trade;</p>
      </div>
    </footer>
  );
};

export default Footer;
