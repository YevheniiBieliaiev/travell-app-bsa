import { ITripData, IBookingData, IBookingMapData } from "../data-typing/interfaces";


export const tripsMapData = (trip: ITripData): ITripData => {
  const { id, title, description, level, duration, price, image } = trip;
  return {
    id,
    title,
    description,
    level,
    duration,
    price,
    image
  }
}


export const bookingsMapData = (bookingTrip: IBookingData): IBookingMapData => {
  const { tripId, guests, date, trip: { title, price } } = bookingTrip;
  const bookingDate = new Date(date);
  const fullYear = bookingDate.getFullYear();
  const day = bookingDate.getDate() < 10 ? `0${bookingDate.getDate()}` : bookingDate.getDate();
  const month = bookingDate.getMonth() < 10 ? `0${bookingDate.getMonth() + 1}` : bookingDate.getMonth() + 1;
  const formatedDate = `${day}.${month}.${fullYear}`;
  return {
    tripId,
    guests,
    formatedDate,
    title,
    price
  }
}