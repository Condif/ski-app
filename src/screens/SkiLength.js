import BaseWrapper from "../components/base/Wrapper";
import SkiLengthTable from "../components/SkiLength/Table";
import SkiLengthFormContainer from "../components/SkiLength/FormContainer";
const ScreensSkiLength = () => {
  return (
    <BaseWrapper className="ScreensSkiLength">
      <div className="mt-6 flex flex-col w-11/12 md:w-10/12 self-center md:shadow-md pb-8">
        <SkiLengthFormContainer />
        <SkiLengthTable/>
      </div>
    </BaseWrapper>
  );
};

export default ScreensSkiLength;
