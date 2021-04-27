import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <main className="main">
        <div className="error">
          <div className="error__title"></div>
          <h2 className="heading-secondary heading-secondary--error">
            Uh oh! Something went wrong!. Please head back to{" "}
            <span>
              <Link className="home-link" to="/">
                our homepage
              </Link>
            </span>
          </h2>
          <h2 className="error__emoji">😢 🤯 😰</h2>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
