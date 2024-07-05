import type { NextPage } from "next";

export type SectionRelativeType = {
  className?: string;
};

const SectionRelative: NextPage<SectionRelativeType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start mix-blend-normal max-w-full z-[2] text-left text-sm-9 text-lightgray font-inter ${className}`}
    >
      <div className="flex-1 [background:radial-gradient(50%_50%_at_50%_50%,_rgba(94,_176,_239,_0.5),_rgba(0,_0,_0,_0))] flex flex-col items-center justify-start pt-[21px] px-5 pb-[159.9px] box-border relative gap-[125px] mix-blend-normal max-w-full mq800:gap-[31px] mq800:pb-[68px] mq800:box-border mq450:gap-[16px] mq450:pb-11 mq450:box-border mq1300:gap-[62px] mq1300:pt-5 mq1300:pb-[104px] mq1300:box-border">
        <div className="w-[1248px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
          <div className="w-[90px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0 mix-blend-normal"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start gap-[23.7px]">
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
              <div className="relative leading-[24px] font-medium inline-block min-w-[30px]">
                Blog
              </div>
            </div>
            <div className="rounded-9980xl flex flex-row items-start justify-start p-px mix-blend-normal text-darkgray-100">
              <div className="h-[38px] w-[139.5px] relative rounded-9980xl overflow-hidden shrink-0 hidden mix-blend-normal" />
              <div className="h-px w-[103.5px] relative [background:linear-gradient(90deg,_rgba(34,_211,_238,_0),_rgba(34,_211,_238,_0.9)_50%,_rgba(34,_211,_238,_0))] hidden mix-blend-normal" />
              <div className="shadow-[0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_1px_rgba(255,_255,_255,_0.1),_0px_0px_0px_#fff] rounded-9980xl bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-[5.5px] px-4 pb-[6.5px] mix-blend-normal whitespace-nowrap z-[1]">
                <div className="relative leading-[24px] font-medium inline-block min-w-[105px]">
                  Join the waitlist
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/icon-mask-group.svg"
        />
        <div className="w-[1249px] flex flex-row items-start justify-start py-0 pr-[17px] pl-4 box-border max-w-full text-darkgray-100">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[23.1px] pr-[21px] pl-5 box-border max-w-full text-52xl-9">
              <div className="w-[711px] flex flex-col items-start justify-start max-w-full">
                <b className="relative tracking-[-1.8px] leading-[78px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(135deg,_#fff,_#71717a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[2] mq800:text-39xl mq800:leading-[62px] mq450:text-24xl mq450:leading-[46px]">{`Unleash the power of `}</b>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px] mt-[-1px]">
                  <b className="relative tracking-[-1.8px] leading-[78px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(135deg,_#fff,_#71717a)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[2] mq800:text-39xl mq800:leading-[62px] mq450:text-24xl mq450:leading-[46px]">
                    intuitive finance
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-10 pr-7 pl-5 box-border max-w-full text-lgi-8">
              <div className="w-[759px] flex flex-col items-start justify-start max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-[35px]">
                  <div className="relative leading-[32px] font-medium z-[2]">{`Say goodbye to the outdated financial tools. Every small business owner, `}</div>
                </div>
                <div className="relative leading-[32px] font-medium z-[2]">{`regardless of the background, can now manage their business like a pro. Simple. `}</div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[25px]">
                  <div className="relative leading-[32px] font-medium z-[2]">
                    Intuitive. And never boring.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-8">
              <div className="rounded-9980xl flex flex-row items-start justify-start p-px mix-blend-normal z-[2]">
                <div className="h-[38px] w-[137.9px] relative rounded-9980xl overflow-hidden shrink-0 hidden mix-blend-normal" />
                <div className="h-px w-[101.9px] relative [background:linear-gradient(90deg,_rgba(34,_211,_238,_0),_rgba(34,_211,_238,_0.9)_50%,_rgba(34,_211,_238,_0))] hidden mix-blend-normal" />
                <div className="shadow-[0px_0px_0px_rgba(0,_0,_0,_0),_0px_0px_0px_1px_rgba(255,_255,_255,_0.1),_0px_0px_0px_#fff] rounded-9980xl bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-[5.5px] pb-[6.5px] pr-[15px] pl-4 mix-blend-normal whitespace-nowrap z-[1]">
                  <div className="relative leading-[24px] inline-block min-w-[104px]">
                    Join the waitlist
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <div className="h-[46px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border gap-[4.5px] opacity-[0.81] mix-blend-normal z-[2]">
                <div className="mt-[-28.5px] relative leading-[24px] inline-block min-w-[75px] shrink-0 whitespace-nowrap">
                  Learn more
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-7">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 mix-blend-normal"
                    alt=""
                    src="/icon1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[784.1px] relative max-w-full shrink-0 mix-blend-normal z-[2] flex items-center justify-center">
              <img
                className="self-stretch h-full overflow-hidden shrink-0 mix-blend-normal z-[2] object-contain absolute left-[0px] top-[-179px] w-full [transform:scale(1.563)]"
                alt=""
                src="/div-perspective1500px@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionRelative;
