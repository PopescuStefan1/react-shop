import { Link } from "react-router-dom";
import styles from "./../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/shopping-cart">Shopping Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
