import classes from "./list-elements.module.scss";
import { configs } from "../../../configs";
import { IHeaderNavProps } from "../../../data-typing";
import briefcase from "../../../images/briefcase.svg";
import { Link } from "react-router-dom";

export const NavBooking: React.FC<IHeaderNavProps> = ({ auth }) => {
  const { isAuthenticated } = auth;
    return (
      <li className={!isAuthenticated? classes.visually__hidden : classes.nav__header__item} title="Bookings">
        <Link className={classes.nav__header__inner} to={configs.paths.bookings}>
          <span className={classes.visually__hidden}>{'Bookings'}</span>
          <img src={briefcase} alt="briefcase icon" />
        </Link>
      </li>
    ) 
}


