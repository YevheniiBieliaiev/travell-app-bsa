import classes from './trip-info.module.scss';
import { configs } from '../../configs';
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';
import { ITripData } from '../../data-typing';
import { getChosenTrip } from '../../services';
import { Loader, Button } from '../common';
import { BookTripModal } from './book-trip-modal';


export const TripInfo: React.FC = () => {
  const [trip, setTrip] = useState({} as ITripData)
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(true);

  const { tripId } = useParams() as { tripId: string };

  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getChosenTrip(tripId).then(tripData => {
      setTrip(tripData as ITripData);
      setIsLoaded(true);
    })
  }, [tripId]);

  const bookingHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isAuthenticated) {
      navigate(configs.paths.signin);
    } else {
      setModalVisibility(false);
    }
  }

  const closeModalHandler = () => {
    setModalVisibility(true)
  }

  if (!isLoaded) {
    return (
      <main className={classes.trip__page}>
        <Loader />
      </main>
    )
  } else {
    return (
      <main className={classes.trip__page}>
        <h1 className={classes.visually__hidden}>{'Travel App'}</h1>
        <div className={classes.trip}>
          <img src={trip.image} className={classes.trip__img} alt="trip" />
          <div className={classes.trip__content}>
            <div className={classes.trip__info}>
              <h3 className={classes.trip__info__title}>{trip.title}</h3>
              <div className={classes.trip__info__content}>
                <span className={classes.trip__info__duration}><strong>{trip.duration}</strong>{' days'}</span>
                <span className={classes.trip__info__level}>{trip.level}</span>
              </div>
            </div>
            <div className={classes.trip__description}>{trip.description}</div>
            <div className={classes.trip__price}>
              <span>Price</span>
              <strong className={classes.trip__price__value}>{`${trip.price} $`}</strong>
            </div>
            {isAuthenticated ?
              <Button
                customClass={`${classes.trip__button} ${classes.button}`}
                onClick={bookingHandler}
              >{'Book a trip'}
              </Button>
              :
              <Button
                customClass={`${classes.trip__button} ${classes.button}`}
                onClick={bookingHandler}
              >{'Sign in to book a trip'}
              </Button>
            }
          </div>
        </div>
        <BookTripModal trip={trip} visibility={modalVisibility} closeModalHandler={closeModalHandler} />
      </main>
    )
  }
}