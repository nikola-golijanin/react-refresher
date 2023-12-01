import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All metups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New metup</Link>
          </li>
          <li>
            <Link to="/favorites">Favs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
