import classes from './bookings.module.scss';
import { useState, useEffect } from 'react';
import { IBookingMapData } from '../../data-typing';
import { getBookings } from '../../services';
import { Loader } from '../common';
import { BookingCard } from './booking-card';

export const Bookings: React.FC = () => {
  const [bookings, setBookings] = useState([] as IBookingMapData[]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getBookings().then(booking => {
      setBookings(booking);
      setIsLoaded(true);
    })
  }, []);

  const cancelBookingHandler = (tripId: string) => {
    const updateBookings = [...bookings];
    const idx = updateBookings.findIndex(trip => trip.tripId === tripId);
    updateBookings.splice(idx, 1);
    setBookings(updateBookings);
  }


  if (!isLoaded) {
    return (
      <main className={classes.bookings__page}>
        <Loader />
      </main>
    )
  } else {
    return (
      <main className={classes.bookings__page}>
        <h1 className={classes.visually__hidden}>{'Travel App'}</h1>
        <ul className={classes.bookings__list}>
          {bookings.map(trip =>
            <BookingCard
              key={trip.tripId}
              bookingTrip={trip}
              cancelBookingHandler={cancelBookingHandler} />)}
        </ul>
      </main>
    )
  }
}