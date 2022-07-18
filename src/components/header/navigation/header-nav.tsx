import classes from './header-nav.module.scss';
import { IHeaderNavProps } from '../../../data-typing';
import { NavBooking, NavProfile } from '../nav-elements';

export const HeaderNav: React.FC<IHeaderNavProps> = ({ auth }) => {

  return (
    <nav className={classes.header__nav}>
      <ul className={classes.nav__header__list}>
        <NavBooking auth={auth} />
        <NavProfile auth={auth} />
      </ul>
    </nav>
  )
}