import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DivOrderType = {
  className?: string;
  divMaskradialGradient6060?: string;
  connectAllYourApps?: string;
  bringYourDataWithOurBuilt?: string;
  accountingRevenueToolsAnd?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
};

const DivOrder: NextPage<DivOrderType> = ({
  className = "",
  divMaskradialGradient6060,
  connectAllYourApps,
  bringYourDataWithOurBuilt,
  accountingRevenueToolsAnd,
  propGap,
  propMinWidth,
}) => {
  const divOrder4Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      minWidth: propMinWidth,
    };
  }, [propGap, propMinWidth]);

  return (
    <div
      className={`flex-1 shadow-[0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_1px_rgba(244,_244,_245,_0.1),_0px_0px_0px_#fff] rounded-2xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start gap-[78px] mix-blend-normal min-w-[452px] max-w-full text-left text-mid-9 text-gainsboro font-inter mq800:gap-[39px] mq800:min-w-full mq450:gap-[19px] ${className}`}
      style={divOrder4Style}
    >
      <img
        className="self-stretch h-72 relative max-w-full overflow-hidden shrink-0"
        alt=""
        src={divMaskradialGradient6060}
      />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[31.5px] pr-[280px] pl-8 gap-[16.5px] mix-blend-normal mq800:pr-[140px] mq800:box-border mq450:pr-5 mq450:box-border">
        <div className="relative leading-[18px] font-medium">
          {connectAllYourApps}
        </div>
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 mix-blend-normal text-sm-9 text-darkgray-200">
          <div className="relative leading-[24px]">
            {bringYourDataWithOurBuilt}
          </div>
          <div className="relative leading-[24px]">
            {accountingRevenueToolsAnd}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivOrder;
