import BaseBtn from "../base/Btn";
import BaseDropdown from "../base/Dropdown";
import { mdiMenuDown } from '@mdi/js';
const SkiLengthForm = ({
  height,
  setHeight,
  age,
  setAge,
  skiStyleList,
  skiStyle,
  setSkiStyle,
  skiLengthRange,
  handleSubmit
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="SkiLengthForm flex items-center  pt-6 flex flex-col"
    >
      <div className="flex flex-col md:flex-row m-4 space-x-0 md:space-x-2 space-y-2 md:space-y-0 w-8/12">
        {/* label + inputfällt */}
        <input
          className="input-base min-w-full md:min-w-0"
          placeholder="Ange personens längd"
          type="number"
          min="30"
          max="300"
          value={height}
          onChange={setHeight}
        />
        {/* label + inputfällt */}
        <input
          className="input-base min-w-full md:min-w-0"
          placeholder="Ange personens ålder"
          type="number"
          max="150"
          value={age}
          onChange={setAge}
        />
        <BaseDropdown
          list={skiStyleList}
          selected={skiStyle}
          icon={mdiMenuDown}
          handleChange={setSkiStyle}
          // index={i}
          selectedClass="input-base flex flex-row justify-between min-w-full md:hover:bg-gray-50"
          buttonClass="flex flex-row w-full p-2 bg-white rounded-md md:hover:bg-gray-50"
          // iconClass
          // selectedClass
          contentClass="dropdown-content-base"
          className="w-full min-w-full md:min-w-0"
        ></BaseDropdown>
       
      </div>
      <span className="mb-6 block md:text-6xl text-4xl text-center bold text-blue-400">{skiLengthRange}</span>
      {/* label + dropdown */}
      {/* label + box med nummer och cm */}
      {/* sparaknapp */}
      {/* liten modal över spara där du anger namn på profil */}
      {/* label + box med namn ålder, stil och skidlängd */}
      <BaseBtn className="btn-blue">Submit</BaseBtn>
    </form>
  );
};

export default SkiLengthForm;
