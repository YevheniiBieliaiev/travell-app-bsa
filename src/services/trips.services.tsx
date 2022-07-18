import { configs } from "../configs";
import { ITripData, IBookingMapData } from "../data-typing/interfaces";
import { tripsMapData, bookingsMapData } from "../libs";

const request = new XMLHttpRequest();


export const getTrips = (): Promise<ITripData[]> => {
  return new Promise(resolve => {
    request.open('GET', configs.app_url.trips);
    request.responseType = 'json';
    request.send();
    const response: ITripData[] = [];
    request.onload = () => {
      const data: ITripData[] = request.response;
      const mappedData = data.map(tripsMapData);
      response.push(...mappedData);
      resolve(response);
    }
  })
}

export const getBookings = (): Promise<IBookingMapData[]> => {
  return new Promise(resolve => {
    request.open('GET', configs.app_url.bookings);
    request.responseType = 'json';
    request.send();
    const response: IBookingMapData[] = [];
    request.onload = () => {
      const data = request.response;
      const mappedData: IBookingMapData[] = data
        .map(bookingsMapData)
        .sort((a: IBookingMapData, b: IBookingMapData) => {
          return Date.parse(a.formatedDate) - Date.parse(b.formatedDate);
        })

      response.push(...mappedData);
      resolve(response);
    }
  })
}

export const getChosenTrip = (tripId: string): Promise<ITripData | undefined> => {
  return new Promise(resolve => {
    request.open('GET', configs.app_url.trips);
    request.responseType = 'json';
    request.send();
    request.onload = () => {
      const data: ITripData[] = request.response;
      const mappedData = data.map(tripsMapData).find(it => it.id === tripId);
      resolve(mappedData);
    }
  })
}