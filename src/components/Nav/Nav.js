import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/formulario">FORMULARIO</Link>
        </li>
        <li>
          <Link to="/search">SEARCH</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
