import classes from '../bookings.module.scss';
import { IBookingCard } from '../../../data-typing';
import { Button } from '../../common';

export const BookingCard: React.FC<IBookingCard> = ({ bookingTrip, cancelBookingHandler }) => {
  return (
    <li className={classes.booking}>
      <h3 className={classes.booking__title}>{bookingTrip.title}</h3>
      <span className={classes.booking__guests}>
        {bookingTrip.guests > 1 ? `${bookingTrip.guests} guests` : `${bookingTrip.guests} guest`}
      </span>
      <span className={classes.booking__date}>{bookingTrip.formatedDate}</span>
      <span className={classes.booking__total}>{bookingTrip.guests * bookingTrip.price} $</span>

      <Button
        customClass={classes.booking__cancel}
        type='button'
        title='Cancel booking'
        onClick={() => cancelBookingHandler(bookingTrip.tripId)}
      >
        <span className={classes.visually__hidden}>{'Cancel booking'}</span>
        {'x'}
      </Button>
    </li >
  )
}