import classes from './trip-cards.module.scss';
import { ICardsData } from '../../../data-typing';
import { Card } from '../card';

export const TripCards: React.FC<ICardsData> = ({ tripsData }) => {
  return (
    <section className={classes.trips}>
      <h2 className={classes.visually__hidden}>{'Trips List'}</h2>
      <ul className={classes.trip__list}>
        {tripsData.map(Card)}
      </ul>
    </section>
  )
}