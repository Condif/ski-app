import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useInput, useDropdown } from "../../hooks/form";
import SkiLengthForm from "./Form";
import { URL, HEADERS } from "../../store/constants";
import { getSkiLengthProfiles } from "./skiLengthProfilesSlice";

const SkiLengthFormContainer = () => {
  // Variables
  const skiStyleList = [{ name: "Klassisk" }, { name: "Fristil" }];

  // Redux
  const dispatch = useDispatch();

  // States
  const [height, setHeight, handleChangeHeight] = useInput("");
  const [age, setAge, handleChangeAge] = useInput("");
  const [name, setName, handleChangeName] = useInput("");
  const [skiStyle, setSkiStyle, handleChangeSkiStyle] = useDropdown({ name: "Klassisk" });
  const [skiLengthRange, setSkiLengthRange] = useState({
    min: null,
    max: null,
  });

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    postSkiLengthProfile(name, height, age, skiLengthRange, skiStyle);
    setHeight("");
    setAge("");
    setName("");
    setSkiStyle({ name: "Klassisk" });
  };

  const postSkiLengthProfile = (name, height, age, skiLengthRange, skiStyle) => {
    const data = {
      name: name || "Anonym",
      height: Number(height),
      age: Number(age),
      skiLengthRange: {
        min: skiLengthRange.min || 30,
        max: skiLengthRange.max || 270,
      },
      skiStyle: skiStyle.name,
    };

    fetch(URL + "ski-length-profiles", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then(dispatch(getSkiLengthProfiles()))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // UseEffects
  useEffect(() => {
    const calcSkiLengthRange = (height, age, skiStyle) => {
      if (!height || !age) return;
      height = Number(height);
      age = Number(age);
      const toddlerRange = { min: height, max: height };
      const childRange = { min: height + 10, max: height + 20 };
      const classicRange = { min: height + 20, max: height + 20 };
      const freeStyleRange = { min: height + 10, max: height + 15 };

      if (age < 5) return setMax207Cm(toddlerRange.min, toddlerRange.max);

      if (age < 9) return setMax207Cm(childRange.min, childRange.max);

      if (skiStyle.name === "Klassisk")
        return setMax207Cm(classicRange.min, classicRange.max);

      return setMax207Cm(freeStyleRange.min, freeStyleRange.max);
    };
    const setMax207Cm = (min, max) => {
      min = Math.min(min, 207);
      max = Math.min(max, 207);
      return { min, max };
    };
    setSkiLengthRange(calcSkiLengthRange(height, age, skiStyle));
  }, [height, age, skiStyle]);

  return (
    <SkiLengthForm
      height={height}
      handleChangeHeight={handleChangeHeight}
      age={age}
      handleChangeAge={handleChangeAge}
      name={name}
      handleChangeName={handleChangeName}
      skiStyleList={skiStyleList}
      skiStyle={skiStyle}
      handleChangeSkiStyle={handleChangeSkiStyle}
      skiLengthRange={skiLengthRange}
      handleSubmit={handleSubmit}
    ></SkiLengthForm>
  );
};

export default SkiLengthFormContainer;
