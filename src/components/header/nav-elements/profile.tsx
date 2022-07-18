import classes from "./list-elements.module.scss";
import { configs } from "../../../configs";
import { IHeaderNavProps, ISignIn, ISignUp, ISignOut } from "../../../data-typing";
import user from "../../../images/user.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common";


export const NavProfile: React.FC<IHeaderNavProps> = ({ auth }) => {
  const { isAuthenticated, logout } = auth;

  const navigate = useNavigate();

  const loginHandler = () => {
    navigate(configs.paths.signin);

  }

  const signupHandler = () => {
    navigate(configs.paths.signup);
  }

  const logoutHandler = () => {
    logout();
    navigate(configs.paths.signin);
  }

  const isSignLocation = window.location.pathname === configs.paths.signin ||
    window.location.pathname === configs.paths.signup;

  return (
    <li className={!isSignLocation ? classes.nav__header__item : classes.visually__hidden} title='Profile'>
      <div className={`${classes.nav__header__inner} ${classes.profile__nav}`} tabIndex={0}>
        <span className={classes.visually__hidden}>{'Profile'}</span>
        <img src={user} alt="profile icon" />
        <ul className={classes.profile__nav__list}>
          {!isAuthenticated ? (
            <>
              <SignIn loginHandler={loginHandler} />
              <SignUp signupHandler={signupHandler} />
            </>
          ) :
            <SignOut logoutHandler={logoutHandler} />}
        </ul>
      </div>
    </li>
  )
}

const SignIn: React.FC<ISignIn> = ({ loginHandler }) => {
  return (
    <li className={classes.profile__nav__item}>
      <Button
        customClass={`${classes.profile__nav__sign__in}  ${classes.button}`}
        onClick={loginHandler}
      >
        {'Sign In'}
      </Button>
    </li >
  )
}

const SignUp: React.FC<ISignUp> = ({ signupHandler }) => {
  return (
    <li className={classes.profile__nav__item}>
      <Button
        customClass={`${classes.profile__nav__sign__up}  ${classes.button}`}
        onClick={signupHandler}
      >
        {'Sign Up'}
      </Button>
    </li >
  )
}

const SignOut: React.FC<ISignOut> = ({ logoutHandler }) => {
  return (
    <>
      <li className={`${classes.profile__nav__item} ${classes.profile__nav__username}`}>
        {localStorage.getItem('fullName')}
      </li>
      <li className={classes.profile__nav__item}>
        <Button
          customClass={`${classes.profile__nav__sign__out}  ${classes.button}`}
          onClick={logoutHandler}
        >
          {'Sign Out'}
        </Button>
      </li >
    </>
  )
}

