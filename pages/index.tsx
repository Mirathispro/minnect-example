import type { NextPage } from "next";
import SectionRelative from "../components/section-relative";
import InsightsContainer from "../components/insights-container";
import GeniusContainer from "../components/genius-container";
import Footer from "../components/footer";

const Screen1: NextPage = () => {
  return (
    <div className="w-full relative bg-gray-200 flex flex-col items-start justify-start pt-0 px-0 pb-[177px] box-border gap-[95.9px] mix-blend-normal leading-[normal] tracking-[normal] text-left text-29xl-2 text-darkgray-200 font-inter mq800:gap-[48px] mq450:gap-[24px]">
      <SectionRelative />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[112px] max-w-full mq800:gap-[56px] mq450:gap-[28px]">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[79.9px] pr-[76px] pl-[72px] box-border max-w-full mq1300:pl-9 mq1300:pr-[38px] mq1300:box-border">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1300:flex-wrap">
              <div className="flex flex-col items-start justify-start min-w-[536px] max-w-full mq800:min-w-full mq1300:flex-1">
                <b className="relative tracking-[-1.2px] leading-[52px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(135deg,_#fff,_#71717a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq800:text-20xl mq800:leading-[41px] mq450:text-10xl mq450:leading-[31px]">{`Who said finance has to `}</b>
                <b className="relative tracking-[-1.2px] leading-[52px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(135deg,_#fff,_#71717a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq800:text-20xl mq800:leading-[41px] mq450:text-10xl mq450:leading-[31px]">
                  be boring?
                </b>
              </div>
              <div className="flex flex-col items-start justify-start min-w-[594px] max-w-full text-mid-9 mq1100:min-w-full mq1300:flex-1">
                <div className="relative leading-[28px] inline-block max-w-full">{`With Cobalt, managing your business finances is effortless, `}</div>
                <div className="relative leading-[28px] inline-block max-w-full z-[1]">{`empowering, and anything but boring. Our intuitive platform brings `}</div>
                <div className="relative leading-[28px] z-[2]">{`clarity to your cash flow, simplifies your financial decision-making, and `}</div>
                <div className="relative leading-[28px] inline-block max-w-full z-[3]">{`puts the power of advanced financial management right at your `}</div>
                <div className="relative leading-[28px] inline-block max-w-full z-[4]">
                  <span>{`fingertips. `}</span>
                  <span className="text-gainsboro">
                    Say no to spreadsheets and tools designed in the 80s.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <InsightsContainer />
          <GeniusContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Screen1;
