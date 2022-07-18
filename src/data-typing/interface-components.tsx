import React from "react";
import { IGenericObject, ITripData, IBookingMapData } from "./interfaces";

export interface IButton {
  customClass: string,
  type?: 'button' | 'submit' | undefined,
  children: React.ReactNode,
  title?: string,
  onClick(event?: React.FormEvent<HTMLButtonElement>): void
}

export interface ISignIn {
  loginHandler(): void
}

export interface ISignUp {
  signupHandler(): void
}

export interface ISignOut {
  logoutHandler(): void
}

export interface IForm {
  customClassName: string,
  children: React.ReactNode
}

interface IInputClassNames {
  labelClassName: string,
  spanClassName: string,
}

export interface IInputBlock {
  customClasses: IInputClassNames,
  value: string,
  label: string,
  id: string,
  type: string,
  name: string,
  autocomplete?: string,
  placeholder?: string,
  required?: boolean,
  min?: string,
  max?: string
  onChange(event: React.ChangeEvent<HTMLInputElement>): void,
}

interface ISelectClassNames {
  labelClassName: string,
  spanClassName: string,
}

export interface ISelectBlock {
  customClasses: ISelectClassNames,
  value: string,
  label: string,
  id: string,
  name: string,
  children: React.ReactNode,
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void
}

export interface IFilterSelectOptions {
  data: IGenericObject[],
  optionKey: string
}

export interface ICardsData {
  tripsData: ITripData[]
}

export interface IBookTripModal {
  trip: ITripData,
  visibility: boolean
  closeModalHandler(): void
}

export interface IBookingCard {
  bookingTrip: IBookingMapData,
  cancelBookingHandler(tripId: string): void
}