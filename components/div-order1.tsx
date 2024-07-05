import type { NextPage } from "next";

export type DivOrder1Type = {
  className?: string;
  divRelativeMaskGroup?: string;
  insightsAtYourFingertips?: string;
  allYourDataAndFinancesInO?: string;
  provideQuickAnswersAndMak?: string;
  instantly?: string;
};

const DivOrder1: NextPage<DivOrder1Type> = ({
  className = "",
  divRelativeMaskGroup,
  insightsAtYourFingertips,
  allYourDataAndFinancesInO,
  provideQuickAnswersAndMak,
  instantly,
}) => {
  return (
    <div
      className={`h-[480px] shadow-[0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_1px_rgba(244,_244,_245,_0.1),_0px_0px_0px_#fff] rounded-2xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start gap-[16px] mix-blend-normal max-w-full text-left text-mid-9 text-gainsboro font-inter ${className}`}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={divRelativeMaskGroup}
      />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-8 pb-[31.5px] gap-[16.5px] mix-blend-normal">
        <div className="relative leading-[18px] font-medium">
          {insightsAtYourFingertips}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 mix-blend-normal text-sm-9 text-darkgray-200">
          <div className="relative leading-[24px]">
            {allYourDataAndFinancesInO}
          </div>
          <div className="relative leading-[24px]">
            {provideQuickAnswersAndMak}
          </div>
          <div className="relative leading-[24px] inline-block min-w-[60px]">
            {instantly}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivOrder1;
