import classes from './book-modal.module.scss';
import { configs } from '../../../configs';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { IBookTripModal } from '../../../data-typing';
import { Button, InputBlock } from '../../common';

export const BookTripModal: React.FC<IBookTripModal> = ({ trip, visibility, closeModalHandler }) => {
  const [form, setForm] = useState({
    guests: '1',
    date: ''
  });

  const navigate = useNavigate();

  const formChabgeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const bookHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const day = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate();
    const month = currentDate.getMonth() < 10 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
    const formatedDate = `${year}-${month}-${day}`;

    if (Date.parse(form.date) > Date.parse(formatedDate) && +form.guests >= 1) {
      closeModalHandler();
      navigate(configs.paths.bookings);
    }
  }

  return (
    <div hidden={visibility}>
      <div className={classes.modal}>
        <div className={classes.trip__popup}>

          <Button
            customClass={classes.trip__popup__close}
            type='button'
            onClick={closeModalHandler}>
            {'x'}
          </Button>

          <form className={classes.trip__popup__form} autoComplete="off">
            <div className={classes.trip__info}>
              <h3 className={classes.trip__info__title}>{trip.title}</h3>
              <div className={classes.trip__info__content}>
                <span className={classes.trip__info__duration}><strong>{trip.duration}</strong> days</span>
                <span className={classes.trip__info__level}>{trip.level}</span>
              </div>
            </div>

            <InputBlock
              customClasses={{
                labelClassName: `${classes.trip__popup__input} ${classes.input}`,
                spanClassName: `${classes.input__heading}`
              }}
              value={form.date}
              label='Date'
              id='booking_date'
              required={true}
              name='date'
              type='date'
              onChange={formChabgeHandler}
            />

            <InputBlock
              customClasses={{
                labelClassName: `${classes.trip__popup__input} ${classes.input}`,
                spanClassName: `${classes.input__heading}`
              }}
              value={form.guests}
              id='guests_number'
              required={true}
              label='Number of guests'
              name='guests'
              type='number'
              min='1'
              max='10'
              onChange={formChabgeHandler}
            />

            <span className={classes.trip__popup__total}>
              {'Total: '}
              <output className={classes.trip__popup__total__value}>
                {`${+form.guests * trip.price} $`}
              </output>
            </span>

            <Button
              customClass={classes.button}
              type='submit'
              onClick={bookHandler}>
              {'Book a trip'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}


// Date - запланована дата, має бути в майбутньому