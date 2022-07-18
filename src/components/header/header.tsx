import classes from './header.module.scss';
import { configs } from '../../configs';
import { IAuthContext } from '../../data-typing';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import { Link } from 'react-router-dom';
import { HeaderNav } from './navigation';


export const Header: React.FC = () => {
  const auth: IAuthContext = useContext(AuthContext);
  return (
    <header className={classes.header}>
      <div className={classes.header__inner}>
        <Link className={classes.header__logo} to={configs.paths.home}>{'Travel App'}</Link>
        <HeaderNav auth={auth} />
      </div>
    </header>
  )
}