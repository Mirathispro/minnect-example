import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-[72px] box-border max-w-full text-left text-smi-9 text-darkgray-100 font-inter mq1300:pl-9 mq1300:pr-9 mq1300:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch box-border flex flex-row items-start justify-between pt-[17px] pb-0.5 pr-0.5 pl-0 mix-blend-normal max-w-full gap-[20px] border-t-[1px] border-solid border-gray-500 mq800:flex-wrap mq800:pl-0.5 mq800:box-border">
          <div className="flex flex-row items-start justify-start gap-[16px] max-w-full mq800:flex-wrap">
            <div className="relative leading-[20px] font-medium">
              © 2023 Cobalt Financial Technologies Inc.
            </div>
            <div className="relative leading-[20px] font-medium inline-block min-w-[86px]">
              Privacy Policy
            </div>
            <div className="relative leading-[20px] font-medium inline-block min-w-[82px]">
              Terms of Use
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[29px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 mix-blend-normal"
                alt=""
                src="/icon2.svg"
              />
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 mix-blend-normal min-h-[20px]"
              alt=""
              src="/icon3.svg"
            />
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 mix-blend-normal min-h-[20px]"
              alt=""
              src="/icon4.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-full text-sm-1 text-dimgray">
          <div className="flex flex-col items-start justify-start max-w-full">
            <div className="relative leading-[20px] inline-block max-w-full">{`Cobalt is a trademark or registered trademark of Cobalt Financial Technologies Inc. Any other trademarks are the `}</div>
            <div className="relative leading-[20px]">{`property of their respective owners. Unless otherwise noted, use of third party logos does not imply endorsement of, `}</div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2">
            <div className="relative leading-[20px]">
              sponsorship of, or affiliation with Cobalt.
            </div>
          </div>
          <div className="relative leading-[20px]">{`Cobalt is a financial technology company, not a bank. Banking services are provided by Celtic Bank and Evolve Bank & `}</div>
          <div className="relative leading-[20px]">Trust®, Members FDIC.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
