import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSkiLengthProfiles } from "./skiLengthProfilesSlice";

const SkiLengthTable = () => {
  // Redux States
  const dispatch = useDispatch();
  const skiLengthProfiles = useSelector(
    (state) => state.skiLengthProfiles.profiles
  );

  // Functions
  const displaySkiRange = (min, max) => {
    return min === max ? min + "cm" : min + "-" + max + "cm";
  };

  // UseEffects
  useEffect(() => {
    dispatch(getSkiLengthProfiles());
  }, [dispatch]);

  return skiLengthProfiles && skiLengthProfiles.length === 0 ? null : (
    <table className="SkiLengthTable w-11/12 md:w-8/12 self-center mt-6">
      <thead>
        <tr className="">
          <th>Namn</th>
          <th className="hidden sm:table-cell">Ålder</th>
          <th className="hidden sm:table-cell">Längd</th>
          <th>Skidlängd</th>
          <th className="hidden sm:table-cell">Skidstil</th>
        </tr>
      </thead>
      {!skiLengthProfiles ? (
        <p>Inga profiler tillagda</p>
      ) : (
        skiLengthProfiles.map((item) => {
          return (
            <tbody key={item._id}>
              <tr className="">
                <td>{item.name || ""}</td>
                <td className="hidden sm:table-cell">{item.age || ""}</td>
                <td className="hidden sm:table-cell">
                  {item.height + "cm" || ""}
                </td>
                <td>
                  {displaySkiRange(
                    item.skiLengthRange.min,
                    item.skiLengthRange.max
                  ) || ""}
                </td>
                {item.age > 9 ? (
                  <td className="hidden sm:table-cell">{item.skiStyle}</td>
                ) : (
                  <td className="hidden sm:table-cell">Barnskidor</td>
                )}
              </tr>
            </tbody>
          );
        })
      )}
    </table>
  );
};

export default SkiLengthTable;
