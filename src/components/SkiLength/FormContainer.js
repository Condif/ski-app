import { useEffect, useState } from "react";
import { useInput, useDropdown } from "../../hooks/form";
import SkiLengthForm from "./Form";

const SkiLengthFormContainer = () => {
  // Variables
  const skiStyleList = [{ name: "Klassisk" }, { name: "Fristil" }];

  // States
  const [height, setHeight] = useInput("");
  const [age, setAge] = useInput("");
  const [skiStyle, setSkiStyle] = useDropdown({ name: "Klassisk" });
  const [skiLengthRange, setSkiLengthRange] = useState(null);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const calcSkiLengthRange = (height, age, skiStyle) => {
    if (!height || !age) return;
    height = Number(height);
    age = Number(age);
    if (age < 5) return height + "cm";
    if (age < 9)
      return `${height + 10 >= 207 ? 207 : height + 10} -  ${
        height + 20 >= 207 ? 207 : height + 20
      }cm`;
    if (skiStyle.name === "Klassisk")
      return `${height + 20 >= 207 ? 207 : height + 20}cm`;
    return `${height + 10 >= 207 ? 207 - 5 : height + 10} -  ${
      height + 10 >= 207 ? 207 : height + 15
    }cm`;
  };

  // UseEffects
  useEffect(() => {
    if (!height || !age) return;
    setSkiLengthRange(calcSkiLengthRange(height, age, skiStyle));
  }, [height, age, skiStyle]);

  return (
    <SkiLengthForm
      height={height}
      setHeight={setHeight}
      age={age}
      setAge={setAge}
      skiStyleList={skiStyleList}
      skiStyle={skiStyle}
      setSkiStyle={setSkiStyle}
      skiLengthRange={skiLengthRange}
      handleSubmit={handleSubmit}
    ></SkiLengthForm>
  );
};

export default SkiLengthFormContainer;
