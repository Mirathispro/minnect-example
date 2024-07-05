import type { NextPage } from "next";
import DivOrder1 from "./div-order1";
import DivOrder from "./div-order";

export type InsightsContainerType = {
  className?: string;
};

const InsightsContainer: NextPage<InsightsContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[72px] pb-20 box-border max-w-full text-left text-mid-9 text-gainsboro font-inter mq800:pb-[34px] mq800:box-border mq1300:pl-9 mq1300:pr-9 mq1300:pb-[52px] mq1300:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq800:gap-[16px]">
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[32.5px] box-border gap-[18.4px] max-w-full text-29xl-2 text-darkgray-200">
          <div className="flex flex-col items-start justify-start max-w-full">
            <b className="relative tracking-[-1.2px] leading-[51.36px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(135deg,_#fff,_#71717a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq800:text-20xl mq800:leading-[41px] mq450:text-10xl mq450:leading-[31px]">{`Everything you need. `}</b>
            <b className="relative tracking-[-1.2px] leading-[52px] inline-block text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(135deg,_#fff,_#71717a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full z-[1] mq800:text-20xl mq800:leading-[41px] mq450:text-10xl mq450:leading-[31px]">
              Nothing you don’t
            </b>
          </div>
          <div className="flex flex-col items-start justify-start max-w-full text-mid-9">
            <div className="flex flex-row items-start justify-start gap-[7.7px]">
              <div className="relative leading-[28px]">
                Financial management and visibility in one place. Experience
              </div>
              <div className="relative leading-[28px] text-gainsboro inline-block min-w-[11px]">{`a `}</div>
            </div>
            <div className="flex flex-row items-start justify-start [row-gap:20px] max-w-full text-gainsboro mq800:flex-wrap">
              <div className="relative leading-[28px] inline-block min-w-[119px] shrink-0 z-[1]">
                flexible toolkit
              </div>
              <div className="flex flex-col items-start justify-start py-0 px-0 box-border max-w-full text-darkgray-200">
                <div className="ml-[-0.2px] relative leading-[28px] shrink-0 z-[2]">
                  {" "}
                  that makes every task feel like a breeze.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[32px] max-w-full grid-cols-[repeat(3,_minmax(288px,_1fr))] mq800:gap-[16px] mq800:grid-cols-[minmax(288px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(288px,_499px))]">
          <DivOrder1
            divRelativeMaskGroup="/div-relative-mask-group@2x.png"
            insightsAtYourFingertips="Insights at your fingertips"
            allYourDataAndFinancesInO="All your data and finances in one place to "
            provideQuickAnswersAndMak="provide quick answers and make decisions "
            instantly="instantly."
          />
          <DivOrder1
            divRelativeMaskGroup="/div-relative-mask-group@2x.png"
            insightsAtYourFingertips="Manage in real time"
            allYourDataAndFinancesInO="Have full control of your business finances on "
            provideQuickAnswersAndMak="the go using our iOS/Android mobile apps. "
            instantly="Because, you know, it’s 2023."
          />
          <DivOrder1
            divRelativeMaskGroup="/div-mb4-mask-group.svg"
            insightsAtYourFingertips="Important business alerts"
            allYourDataAndFinancesInO="Choose the alerts you need and receive them "
            provideQuickAnswersAndMak="via email, mobile or Slack. Review and take "
            instantly="action in one click."
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px] max-w-full mq800:gap-[16px] mq1100:flex-wrap">
          <DivOrder
            divMaskradialGradient6060="/div-maskradialgradient60-60-at-50rgba00009-35rgba0000-100-mask-group.svg"
            connectAllYourApps="Connect all your apps"
            bringYourDataWithOurBuilt="Bring your data with our built-in integrations for "
            accountingRevenueToolsAnd="accounting, revenue tools and banking."
          />
          <div className="w-[488px] shadow-[0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_1px_rgba(244,_244,_245,_0.1),_0px_0px_0px_#fff] rounded-2xl bg-gray-300 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[31.5px] box-border mix-blend-normal min-w-[488px] max-w-full mq800:min-w-full mq1100:flex-1">
            <div className="self-stretch h-[366px] relative overflow-hidden shrink-0 mix-blend-normal">
              <div className="absolute top-[83px] left-[32px] w-[891px] flex flex-row items-start justify-start mix-blend-normal">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover mix-blend-normal"
                  alt=""
                  src="/image-absolute@2x.png"
                />
                <img
                  className="h-[243px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-normal z-[1]"
                  alt=""
                  src="/image-absolute@2x.png"
                />
              </div>
              <img
                className="absolute top-[32px] left-[64px] rounded-lg w-[314px] h-[234px] overflow-hidden object-cover mix-blend-normal z-[2]"
                alt=""
                src="/div-absolute@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
              <div className="flex flex-col items-start justify-start gap-[16.5px] max-w-full">
                <div className="relative leading-[18px] font-medium">
                  You’re in control
                </div>
                <div className="flex flex-col items-start justify-start text-sm-9 text-darkgray-200">
                  <div className="relative leading-[24px]">{`Lightning fast. Shortcuts for everything. Command+K on `}</div>
                  <div className="relative leading-[24px]">
                    Mac, Ctrl+K on Windows. Dark mode.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsContainer;
