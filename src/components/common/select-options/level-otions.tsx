import { IFilterSelectOptions } from "../../../data-typing";
import { uniqueValues } from "../../../libs";


export const LevelOptions: React.FC<IFilterSelectOptions> = ({ data, optionKey }) => {
  const optionData = uniqueValues(data, optionKey);
  return (
    <>
      {optionData.map((level, idx) => <option key={`${level}${idx}`} value={level}>{level}</option>)}
    </>
  )
}