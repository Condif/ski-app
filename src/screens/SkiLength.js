import BaseWrapper from "../components/base/Wrapper";
import SkiLengthFormContainer from "../components/SkiLength/FormContainer";
const ScreensSkiLength = () => {
  return (
    <BaseWrapper className="ScreensSkiLength">
      {/* Banner med introtext */}
      <div className="pt-6 flex flex-col">
        <SkiLengthFormContainer />
      </div>
    </BaseWrapper>
  );
};

export default ScreensSkiLength;
