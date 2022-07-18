export interface IAuthContext {
  isAuthenticated: boolean,
  login(): void,
  logout(): void
}

export interface IUseAuth {
  isLogin: boolean,
  login(): void,
  logout(): void
}

export interface IHeaderNavProps {
  auth: IAuthContext
}

export interface IUserModel {
  fullName: string,
  email: string,
  password: string
}

export interface IFindUser {
  email: string,
  password: string
}

export interface IFindUserResult {
  error: boolean
  name: string
}

export interface ITripData {
  id: string,
  title: string,
  description: string,
  level: string,
  duration: number,
  price: number,
  image: string,
  [key: string]: string | number,
}

export interface IBookingData {
  tripId: string,
  guests: number,
  date: string,
  trip: IBookingTripData
}

interface IBookingTripData {
  title: string,
  price: number
}

export interface IBookingMapData {
  tripId: string,
  guests: number,
  formatedDate: string,
  title: string,
  price: number
}

export interface IGenericObject {
  [key: string]: string | number,
}