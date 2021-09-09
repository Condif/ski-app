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
  const [skiLength, setSkiLength] = useState(null);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const calculateSkiLength = (height, age, skiStyle) => {
    height = Number(height);
    age = Number(age);
    if (age < 5) return height;
    if (age < 9) return height + 20;
    return skiStyle.name === "Klassisk" ? height + 20 : height + 15;
  };

  // UseEffects
  useEffect(() => {
    if (!height || !age) return;
    setSkiLength(calculateSkiLength(height, age, skiStyle));
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
      skiLength={skiLength}
      handleSubmit={handleSubmit}
    ></SkiLengthForm>
  );
};

export default SkiLengthFormContainer;
