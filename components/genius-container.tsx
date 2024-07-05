import type { NextPage } from "next";
import DivOrder from "./div-order";

export type GeniusContainerType = {
  className?: string;
};

const GeniusContainer: NextPage<GeniusContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full text-left text-29xl-2 text-darkgray-200 font-inter mq800:gap-[28px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-0 px-[72px] pb-[7.2px] box-border max-w-full shrink-0 mq800:pl-9 mq800:pr-9 mq800:box-border">
        <div className="flex flex-col items-start justify-start gap-[20.1px] max-w-full">
          <b className="relative tracking-[-1.2px] leading-[52px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(135deg,_#fff,_#71717a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq800:text-20xl mq800:leading-[41px] mq450:text-10xl mq450:leading-[31px]">
            Meet Genius
          </b>
          <div className="flex flex-col items-start justify-start max-w-full text-mid-9">
            <div className="relative leading-[28px]">{`Our AI-driven assistant is designed to decode complex financial `}</div>
            <div className="relative leading-[28px] inline-block max-w-full z-[1]">
              <span>{`figures and `}</span>
              <span className="text-gainsboro">illuminate key trends</span>
              <span> in your business.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[72px] box-border max-w-full shrink-0 text-sm-9 text-gainsboro mq1300:pl-9 mq1300:pr-9 mq1300:box-border">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq800:gap-[16px]">
          <DivOrder
            divMaskradialGradient6060="/div-relative@2x.png"
            connectAllYourApps="Smart forecasting"
            bringYourDataWithOurBuilt="Harness the power of Cobalt's predictive analytics to map "
            accountingRevenueToolsAnd="out the financial future of your business."
            propGap="unset"
            propMinWidth="385px"
          />
          <div className="flex-1 shadow-[0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_1px_rgba(244,_244,_245,_0.1),_0px_0px_0px_#fff] rounded-2xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[31.5px] box-border mix-blend-normal min-w-[385px] max-w-full mq800:min-w-full">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-[114px] px-8 pb-16 relative gap-[80px] mix-blend-normal mq800:gap-[40px] mq450:gap-[20px] mq450:pt-[74px] mq450:pb-[42px] mq450:box-border">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/div-absolute-mask-group@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-center">
                <div className="rounded-xl bg-darkturquoise flex flex-row items-start justify-start p-2 mix-blend-normal z-[1]">
                  <div className="shadow-[0px_0px_0px_1px_#06b6d4,_0px_1px_3px_rgba(6,_182,_212,_0.35),_0px_1px_1px_rgba(255,_255,_255,_0.3)_inset,_0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_rgba(0,_0,_0,_0)] rounded-md bg-steelblue overflow-hidden flex flex-row items-start justify-start pt-[7.5px] px-3 pb-[8.5px] mix-blend-normal whitespace-nowrap">
                    <div className="relative leading-[24px] font-medium">
                      Hey! How can I help you?
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_2px_4px_-2px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_0px_0px_1px_rgba(228,_228,_231,_0.1),_0px_0px_0px_#fff] rounded-md bg-gray-100 overflow-hidden flex flex-row items-start justify-between py-2 px-3 mix-blend-normal gap-[20px] z-[1] text-darkgray-100 mq800:flex-wrap mq800:justify-center">
                <div className="w-[253.4px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[2.5px] px-0 pb-[0.5px] mix-blend-normal">
                    <div className="w-[260px] relative leading-[24px] inline-block shrink-0">
                      ✨ Who's our most profitable customer?
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start mix-blend-normal text-gainsboro">
                  <div className="h-9 w-[99.1px] relative [filter:blur(16px)] [background:linear-gradient(90deg,_rgba(255,_214,_0,_0.15),_rgba(255,_46,_0,_0.23)_10%,_rgba(219,_0,_255,_0.38)_25%,_rgba(97,_0,_255,_0.76)_45%,_rgba(0,_255,_117,_0.76)_65%,_rgba(0,_255,_255,_0.76)_80%,_rgba(20,_0,_255,_0.23))] overflow-hidden shrink-0 hidden mix-blend-normal" />
                  <div className="shadow-[0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_1px_rgba(161,_161,_170,_0.1),_0px_0px_0px_#fff] rounded-md bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-[5.5px] px-3 pb-[6.5px] mix-blend-normal whitespace-nowrap z-[1]">
                    <div className="relative leading-[24px] font-medium inline-block min-w-[75px]">
                      Ask Genius
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-8 box-border max-w-full text-mid-9">
              <div className="flex flex-col items-start justify-start gap-[16.5px] max-w-full">
                <div className="relative leading-[18px] font-medium">
                  Chat with Genius
                </div>
                <div className="flex flex-col items-start justify-start text-sm-9 text-darkgray-200">
                  <div className="relative leading-[24px]">{`Just ask. With Genius by your side, navigating the `}</div>
                  <div className="relative leading-[24px]">
                    financial maze becomes intuitive and effortless.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[402px] relative max-w-full text-12xl-9">
        <div className="absolute top-[0px] left-[380.5px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(199,_199,_199,_0.05),_rgba(0,_0,_0,_0)_70%)] w-[600px] h-[200px] flex flex-row items-start justify-start pt-[101.5px] px-[50px] pb-[97.5px] box-border mix-blend-normal max-w-full z-[1]">
          <div className="self-stretch flex-1 relative [background:linear-gradient(90deg,_rgba(0,_0,_0,_0),_rgba(2,_132,_199,_0.65)_50%,_rgba(0,_0,_0,_0))] mix-blend-normal max-w-full" />
        </div>
        <div className="absolute top-[184px] left-[0px] w-full h-[218px] flex flex-col items-center justify-start pt-[180px] pb-0 pr-[22px] pl-5 box-border gap-[48.5px] mix-blend-normal max-w-full z-[2] mq800:gap-[24px]">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/icon-mask-group.svg"
          />
          <div className="w-full h-[632px] !m-[0] absolute right-[0px] bottom-[-454px] left-[0px] [filter:blur(384px)] bg-gray-400 overflow-hidden shrink-0 flex flex-row items-start justify-center py-0 px-5 box-border mix-blend-normal max-w-full z-[1]">
            <div className="self-stretch w-[1108px] relative [background:linear-gradient(90deg,_#06b6d4,_#1e40af)] opacity-[0.2] mix-blend-normal max-w-full" />
          </div>
          <div className="mt-[-180.5px] w-[562px] flex flex-col items-start justify-start gap-[24px] shrink-0 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-[17px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                <b className="relative tracking-[-0.8px] leading-[40px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(135deg,_#f4f4f5,_#52525b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq800:text-7xl mq800:leading-[32px] mq450:text-lgi mq450:leading-[24px]">{`See where financial automation can `}</b>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
                  <b className="relative tracking-[-0.8px] leading-[40px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(135deg,_#f4f4f5,_#52525b)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[2] mq800:text-7xl mq800:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                    take your business.
                  </b>
                </div>
              </div>
            </div>
            <div className="relative text-mid-9 leading-[28px] z-[2]">
              The first financial tool you'll love. And the last one you'll ever
              need.
            </div>
          </div>
          <div className="w-[563px] flex flex-row items-start justify-center py-0 pr-0 pl-1 box-border max-w-full text-sm-9 text-darkgray-100">
            <div className="rounded-9980xl flex flex-row items-start justify-start p-px mix-blend-normal shrink-0 z-[2]">
              <div className="h-[38px] w-[137.9px] relative rounded-9980xl overflow-hidden shrink-0 hidden mix-blend-normal" />
              <div className="h-px w-[101.9px] relative [background:linear-gradient(90deg,_rgba(34,_211,_238,_0),_rgba(34,_211,_238,_0.9)_50%,_rgba(34,_211,_238,_0))] hidden mix-blend-normal" />
              <div className="shadow-[0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_1px_rgba(255,_255,_255,_0.1),_0px_0px_0px_#fff] rounded-9980xl bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-[5.5px] pb-[6.5px] pr-[15px] pl-4 mix-blend-normal whitespace-nowrap z-[1]">
                <div className="relative leading-[24px] inline-block min-w-[104px]">
                  Join the waitlist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeniusContainer;
