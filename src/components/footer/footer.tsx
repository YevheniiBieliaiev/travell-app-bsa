import classes from './footer.module.scss';
import { configs } from '../../configs';
import heartIco from '../../images/heart.svg';


export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <span className={classes.footer__text}>
        {'from '}
        <a className={classes.footer__link} href={configs.bs_url}>{'binary studio '}</a>
        {'with '}
        <img className={classes.footer__icon} src={heartIco} alt='heart icon' />
      </span>
    </footer>
  )
}