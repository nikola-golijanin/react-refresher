import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function MeetupItem({ id, image, title, address, description }) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <Link to="/favorites" exact>
            <button>To Favs</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}
