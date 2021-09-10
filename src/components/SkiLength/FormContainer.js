import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSkiLengthProfiles } from "./skiLengthProfilesSlice";
import { useInput, useDropdown } from "../../hooks/form";
import SkiLengthForm from "./Form";
import { URL, HEADERS } from "../../store/constants";

const SkiLengthFormContainer = () => {
  // Variables
  const skiStyleList = [{ name: "Klassisk" }, { name: "Fristil" }];

  // Redux States
  const dispatch = useDispatch();
  const skiLengthProfiles = useSelector(
    (state) => state.skiLengthProfiles.profiles
  );

  // States
  const [height, setHeight] = useInput("");
  const [age, setAge] = useInput("");
  const [skiStyle, setSkiStyle] = useDropdown({ name: "Klassisk" });
  const [skiLengthRange, setSkiLengthRange] = useState({
    min: null,
    max: null,
  });
  // const [skiLengthProfiles, setSkiLengthProfiles] = useState([]);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e", e);
    postSkiLengthProfile();
  };

  const postSkiLengthProfile = () => {
    const data = {
      "name": "Amazing Person",
      "height": Number(height),
      "age": Number(age),
      "skiLengthRange": {
        "min": skiLengthRange.min || 30,
        "max": skiLengthRange.max || 270,
      },
    };
    console.log(data)

    fetch(URL + "ski-length-profiles", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(data),
    })
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
      const classicRange = { min: height, max: height + 20 };
      const freeStyleRange = { min: height + 10, max: height + 15 };

      if (age < 5) return checkMax207Cm(toddlerRange.min, toddlerRange.max);

      if (age < 9) return checkMax207Cm(childRange.min, childRange.max);

      if (skiStyle.name === "Klassisk")
        return checkMax207Cm(classicRange.min, classicRange.max);

      return checkMax207Cm(freeStyleRange.min, freeStyleRange.max);
    };
    const checkMax207Cm = (min, max) => {
      min = min >= 207 ? 207 : min;
      max = max >= 207 ? 207 : max;
      console.log({ min, max });
      return { min, max };
    };
    setSkiLengthRange(calcSkiLengthRange(height, age, skiStyle));
  }, [height, age, skiStyle]);

  useEffect(() => {
    dispatch(getSkiLengthProfiles());
  }, [dispatch]);

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
      skiLengthProfiles={skiLengthProfiles}
      handleSubmit={handleSubmit}
    ></SkiLengthForm>
  );
};

export default SkiLengthFormContainer;
