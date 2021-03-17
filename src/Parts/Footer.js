import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section>
        <p>Этот сайт был разработан как курсовой проект в 2021 году</p>
      </section>
      <section>
        <Link to="/">Home page</Link>
        <Link to="/Games">All games</Link>
      </section>
    </footer>
  );
}

export default Footer;