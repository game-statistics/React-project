import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section>
        {/* <p>Этот сайт был разработан как курсовой проект в 2021 году</p> */}
      </section>
      <section>
        <div className="colum">
          <Link to="/">
            Home page
          </Link>
          <Link to="/games">
            All games
          </Link>
        </div>
        <div className="colum">
          <Link to="/about">
            About
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
