import { IGenericObject } from "../data-typing";

export const uniqueValues = (dataArray: IGenericObject[], key: string) => {
  const mapped: (string | number)[] = dataArray.map(elem => elem[key]);
  const unique: (string | number)[] = Array.from(new Set(mapped));
  return unique;
}


