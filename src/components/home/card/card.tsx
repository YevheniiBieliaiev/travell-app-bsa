import classes from './card.module.scss';
import { ITripData } from '../../../data-typing';
import { Link } from 'react-router-dom';

export const Card: React.FC<ITripData> = (trip) => {
  const { id, title, level, duration, price, image } = trip;
  return (
    <li key={id} className={classes.trip__card}>
      <img src={image} alt="trip" />
      <div className={classes.trip__card__content}>
        <div className={classes.trip__info}>
          <h3 className={classes.trip__info__title}>{title}</h3>
          <div className={classes.trip__info__content}>
            <span className={classes.trip__info__duration}><strong>{duration}</strong></span>
            <span className={classes.trip__info__level}>{level}</span>
          </div>
        </div>
        <div className={classes.trip__price}>
          <span>{'Price'}</span>
          <strong className={classes.trip__price__value}>{`${price} $`}</strong>
        </div>
      </div>
      <Link className={classes.button} to={'/trip/' + id}>{'Discover a trip'}</Link>
    </li>
  )
}