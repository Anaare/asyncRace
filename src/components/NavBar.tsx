import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">Garage</Link>
      <Link to="/winners">Winners</Link>
    </nav>
  );
}

export default NavBar;
