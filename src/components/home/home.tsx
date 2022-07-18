import classes from './home.module.scss';
import { ITripData } from '../../data-typing';
import React, { useState, useEffect, useMemo } from 'react';
import { getTrips } from '../../services';
import { Form, InputBlock, SelectBlock, DurationOptions, LevelOptions, Loader } from "../common";
import { TripCards } from './trip-cards';


export const Home: React.FC = () => {
  const [trips, setTrips] = useState([] as ITripData[]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState('');
  const [duration, setDuration] = useState('');
  const [level, setLevel] = useState('');


  useEffect(() => {
    getTrips().then(tripsData => {
      setTrips(tripsData);
      setIsLoaded(true);
    })
  }, []);

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }
  const filterDurationChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let days = parseInt(event.target.value);
    if (days + 4 < 10) {
      days += 4;
      setDuration(days.toString());
      days = 0;
    } else if (days + 4 > 10) {
      setDuration(days.toString());
    } else {
      setDuration('');
    }
  }
  const filterLevelChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(event.target.value);
  }

  const tripsFilter = useMemo(() => {
    let filteredTrips = [...trips];

    if (level) {
      filteredTrips = filteredTrips.filter(trip => trip.level === level);
    } else {
      filteredTrips = [...trips];
    }

    if (+duration < 10 && +duration !== 0) {
      filteredTrips = filteredTrips.filter(trip => trip.duration < +duration);
    } else if (+duration >= 10) {
      filteredTrips = filteredTrips.filter(trip => trip.duration >= +duration);
    }

    filteredTrips = filteredTrips.filter(trip => trip.title.toLowerCase().includes(search.toLowerCase()));
    return filteredTrips;
  }, [level, duration, search, trips]);

  if (!isLoaded) {
    return (
      <main>
        <Loader />
      </main>
    )
  } else {
    return (
      <main>
        <h1 className={classes.visually__hidden}>{'Travel App'}</h1>
        <section className={classes.trips__filter}>
          <h2 className={classes.visually__hidden}>{'Trips filter'}</h2>
          <Form customClassName={classes.trips__filter__form}>
            <InputBlock
              customClasses={{
                labelClassName: `${classes.trips__filter__search} ${classes.input}`,
                spanClassName: classes.visually__hidden
              }}
              value={search}
              id='trips__filter__title'
              label='Search by name'
              name='search'
              type='search'
              placeholder='search by title'
              onChange={searchChangeHandler}
            />

            <SelectBlock
              customClasses={{
                labelClassName: classes.select,
                spanClassName: classes.visually__hidden
              }}
              value={duration}
              label='Search by duration'
              id='searchByDuration'
              name='duration'
              children={<DurationOptions />}
              onChange={filterDurationChangeHandler}
            />

            <SelectBlock
              customClasses={{
                labelClassName: classes.select,
                spanClassName: classes.visually__hidden
              }}
              value={level}
              label='Search by level'
              id='searchByLevel'
              name='level'
              children={<LevelOptions data={trips} optionKey={'level'} />}
              onChange={filterLevelChangeHandler}
            />
          </Form>
        </section>

        <TripCards tripsData={tripsFilter} />
      </main>
    )
  }
}