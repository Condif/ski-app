import BaseBtn from "../base/Btn";
import BaseDropdown from "../base/Dropdown";
import { mdiMenuDown } from "@mdi/js";
import isEveryEmptyString from "../../helpers/isHelpers";
const SkiLengthForm = ({
  height,
  handleChangeHeight,
  age,
  handleChangeAge,
  name,
  handleChangeName,
  skiStyleList,
  skiStyle,
  handleChangeSkiStyle,
  skiLengthRange,
  handleSubmit,
}) => {

  // Functions
  const skiRangeDisplayString = (min, max) => {
    return min && max
      ? min === max
        ? max + "cm"
        : min + "-" + max + "cm"
      : null;
  };
  
  return (
    <form onSubmit={handleSubmit} className="SkiLengthForm flex items-center  mt-6 flex flex-col">
      <h1 className="text-center font-bold text-3xl mb-4">Längdskidor</h1>
      <span className="text-center mb-4">Här kan ni ta reda på hur långa skidor ni ska ha</span>
      <div className="flex flex-col md:flex-row m-4 space-x-0 md:space-x-2 space-y-4 md:space-y-0 w-8/12">
        <div className="flex flex-col w-full">
          <label className="ml-2 mb-2 font-bold" htmlFor="age">
            Ålder (år)
          </label>
          <input
            id="age"
            className="input-base min-w-full md:min-w-0"
            placeholder="Ange ålder"
            type="number"
            max="150"
            maxLength="3"
            value={age}
            onChange={handleChangeAge}
          />
        </div>
        <div className="flex flex-col w-full">
            <label className="ml-2 mb-2 font-bold" htmlFor="length">
              Längd (cm)
            </label>
            <input
              id="length"
              className="input-base min-w-full md:min-w-0"
              placeholder="Personens längd"
              type="number"
              min="30"
              max="300"
              maxLength="3"
              value={height}
              onChange={handleChangeHeight}
            />
          </div>
        <div className="flex flex-col w-full">
          <label className="ml-2 mb-2 font-bold" htmlFor="ski-style">
            Skidstil
          </label>
          <BaseDropdown
            id="ski-style"
            list={skiStyleList}
            selected={skiStyle}
            icon={mdiMenuDown}
            handleChange={handleChangeSkiStyle}
            selectedClass="input-base flex flex-row justify-between min-w-full md:hover:bg-gray-50"
            buttonClass="flex flex-row w-full p-2 bg-white rounded-md md:hover:bg-gray-50"
            contentClass="dropdown-content-base"
            className="w-full min-w-full md:min-w-0"
          ></BaseDropdown>
        </div>
      </div>
      <span className="mb-6 block md:text-4xl text-4xl text-center font-bold text-blue-400">
        {skiRangeDisplayString(skiLengthRange?.min, skiLengthRange?.max)}
      </span>
      <div className="flex flex-col m-4 space-y-6 w-8/12 items-center">
        <div className="flex flex-col md:w-4/12">
          <label className="ml-2 mb-2 font-bold" htmlFor="name">
            Namn
          </label>
          <input
            id="name"
            className="input-base"
            placeholder="Profilnamn"
            type="text"
            maxLength="20"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <BaseBtn type="submit" className={`btn-blue ${isEveryEmptyString([age, height, skiStyle, name]) ? '' : "opacity-50 cursor-not-allowed"}`}>
          Spara
        </BaseBtn>
      </div>
    </form>
  );
};

export default SkiLengthForm;
