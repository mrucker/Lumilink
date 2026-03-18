import clsx from "clsx";
import svgPaths from "./svg-nh1i5lb9x1";
type ButtonBackgroundImageProps = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonBackgroundImageProps>) {
  return (
    <div className={clsx("h-[60px] relative rounded-[10px] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center py-[8px] relative size-full">{children}</div>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage9Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage9({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage9Props>) {
  return (
    <div className={clsx("bg-gradient-to-b from-[#e5e7eb] relative rounded-[14px] shrink-0 to-[#d1d5dc] w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[16px] relative size-full">{children}</div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}
type ContainerBackgroundImage8Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage8({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage8Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[4px] pt-[4px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage7Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage7({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage7Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[6px] items-start pl-[4px] pt-[4px] relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[8px] relative shrink-0 w-[22.667px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage5Props = {
  additionalClassNames?: string;
  text: string;
  additionalClassNames1?: string;
};

function ContainerBackgroundImage5({ children, additionalClassNames = "", text, additionalClassNames1 = "" }: React.PropsWithChildren<ContainerBackgroundImage5Props>) {
  return (
    <div className={clsx("bg-[rgba(16,24,40,0.9)] h-[16.5px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className={clsx("h-[12.5px] relative shrink-0", additionalClassNames)}>
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[12.5px] left-0 not-italic text-[10px] text-white top-[-0.67px] whitespace-nowrap">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[6px] relative shrink-0 w-[22.667px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pr-[0.01px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage3Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage3Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage2Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[4px] pt-[4px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div className={clsx("h-[4px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative w-[32px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">{children}</div>
    </div>
  );
}
type Icon6VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Icon6VectorBackgroundImage({ additionalClassNames = "" }: Icon6VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute left-[16.67%] right-[16.67%]", additionalClassNames)}>
      <div className="absolute inset-[-0.83px_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 1.66667">
          <path d="M0.833333 0.833333H14.1667" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </svg>
      </div>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText({ text, additionalClassNames = "" }: TextBackgroundImageAndTextProps) {
  return (
    <BackgroundImage1 additionalClassNames={additionalClassNames}>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-center whitespace-nowrap">{text}</p>
    </BackgroundImage1>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute inset-[-1px_-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
          <path d="M1 1H5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type Icon2VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Icon2VectorBackgroundImage({ additionalClassNames = "" }: Icon2VectorBackgroundImageProps) {
  return <BackgroundImage additionalClassNames={clsx("absolute left-[41.67%] right-[41.67%]", additionalClassNames)} />;
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ additionalClassNames = "" }: ContainerBackgroundImageProps) {
  return (
    <div className={clsx("relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[30.667px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.3)] border-dashed inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <BackgroundImage1 additionalClassNames="w-[7.813px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">{"..."}</p>
        </BackgroundImage1>
      </div>
    </div>
  );
}
type IconVectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconVectorBackgroundImage({ additionalClassNames = "" }: IconVectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1167 67.2">
        <path d="M21.1167 0H0V67.2H21.1167V0Z" fill="url(#paint0_linear_241_793)" id="Vector" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_793" x1="0" x2="0" y1="0" y2="6720">
            <stop stopColor="#4A5568" stopOpacity="0.8" />
            <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function AltThemeMarkupProfile() {
  return (
    <div className="bg-[#f5f1e8] content-stretch flex flex-col items-start relative size-full" data-name="Alt theme markup (Profile)">
      <BackgroundImage3 additionalClassNames="w-[1304px]">
        <div className="absolute bg-white border-14 border-[#1e1e1e] border-solid h-[844px] left-[457px] overflow-clip rounded-[48px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[43.67px] w-[390px]" data-name="Container">
          <div className="absolute bg-[#f5f1e8] h-[816px] left-0 top-0 w-[362px]" data-name="Container">
            <div className="absolute h-[731.333px] left-0 overflow-clip top-0 w-[362px]" data-name="CityView">
              <div className="absolute bg-gradient-to-b from-[#87ceeb] h-[731.333px] left-0 to-[#e8eef2] top-0 via-1/2 via-[#b0c4de] w-[362px]" data-name="Container" />
              <div className="absolute content-stretch flex flex-col h-[192px] items-start left-0 opacity-20 top-[539.33px] w-[362px]" data-name="Container">
                <div className="h-[192px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                  <div className="absolute inset-[60%_93.33%_0_0]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1333 76.8">
                      <path d="M24.1333 0H0V76.8H24.1333V0Z" fill="url(#paint0_linear_241_789)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_789" x1="0" x2="0" y1="0" y2="7680">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-[7.08%] right-[87.92%] top-1/2" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1 96">
                      <path d="M18.1 0H0V96H18.1V0Z" fill="url(#paint0_linear_241_767)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_767" x1="0" x2="0" y1="0" y2="9600">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <IconVectorBackgroundImage additionalClassNames="inset-[65%_81.67%_0_12.5%]" />
                  <div className="absolute inset-[45%_76.67%_0_18.75%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5917 105.6">
                      <path d={svgPaths.p2d414d00} fill="url(#paint0_linear_241_797)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_797" x1="0" x2="0" y1="0" y2="10560">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[55%_70%_0_23.75%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.625 86.4">
                      <path d="M22.625 0H0V86.4H22.625V0Z" fill="url(#paint0_linear_241_791)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_791" x1="0" x2="0" y1="0" y2="8640">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[62.5%_65.42%_0_30.42%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0833 72">
                      <path d="M15.0833 0H0V72H15.0833V0Z" fill="url(#paint0_linear_241_775)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_775" x1="0" x2="0" y1="0" y2="7200">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[47.5%_59.58%_0_35%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6083 100.8">
                      <path d={svgPaths.p3573ae00} fill="url(#paint0_linear_241_773)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_773" x1="0" x2="0" y1="0" y2="10080">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[57.5%_52.5%_0_40.83%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1333 81.6">
                      <path d="M24.1333 0H0V81.6H24.1333V0Z" fill="url(#paint0_linear_241_787)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_787" x1="0" x2="0" y1="0" y2="8160">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[52.5%_47.08%_0_47.92%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1 91.2">
                      <path d="M18.1 0H0V91.2H18.1V0Z" fill="url(#paint0_linear_241_779)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_779" x1="0" x2="0" y1="0" y2="9120">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <IconVectorBackgroundImage additionalClassNames="inset-[65%_40.83%_0_53.33%]" />
                  <div className="absolute bottom-0 left-[59.58%] right-[35.83%] top-1/2" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5917 96">
                      <path d="M16.5917 0H0V96H16.5917V0Z" fill="url(#paint0_linear_241_761)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_761" x1="0" x2="0" y1="0" y2="9600">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[60%_29.17%_0_64.58%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.625 76.8">
                      <path d="M22.625 0H0V76.8H22.625V0Z" fill="url(#paint0_linear_241_777)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_777" x1="0" x2="0" y1="0" y2="7680">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[55%_23.33%_0_71.25%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6083 86.4">
                      <path d="M19.6083 0H0V86.4H19.6083V0Z" fill="url(#paint0_linear_241_771)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_771" x1="0" x2="0" y1="0" y2="8640">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[47.5%_17.92%_0_77.08%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1 100.8">
                      <path d="M18.1 0H0V100.8H18.1V0Z" fill="url(#paint0_linear_241_769)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_769" x1="0" x2="0" y1="0" y2="10080">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[62.5%_11.67%_0_82.5%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1167 72">
                      <path d="M21.1167 0H0V72H21.1167V0Z" fill="url(#paint0_linear_241_763)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_763" x1="0" x2="0" y1="0" y2="7200">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[52.5%_6.67%_0_88.75%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5917 91.2">
                      <path d="M16.5917 0H0V91.2H16.5917V0Z" fill="url(#paint0_linear_241_795)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_795" x1="0" x2="0" y1="0" y2="9120">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-[57.5%_0_0_93.75%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.625 81.6">
                      <path d="M22.625 0H0V81.6H22.625V0Z" fill="url(#paint0_linear_241_759)" id="Vector" />
                      <defs>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_241_759" x1="0" x2="0" y1="0" y2="8160">
                          <stop stopColor="#4A5568" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#2D3748" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute h-[731.333px] left-0 opacity-10 top-0 w-[362px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 362 731.33\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -40.801 -40.801 0 181 365.67)\\'><stop stop-color=\\'rgba(71,85,105,0.15)\\' offset=\\'0.0027624\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0\\'/></radialGradient></defs></svg>')" }} />
              <div className="absolute content-stretch flex flex-col h-[216px] items-center left-0 pb-[24px] pt-[40px] top-0 w-[362px]" data-name="Container">
                <div className="h-[152px] relative shrink-0 w-[239.396px]" data-name="CityLogo">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <div className="absolute h-[80px] left-[58.7px] top-0 w-[122px]" data-name="Container">
                      <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#374151] h-[64px] items-start left-0 p-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#1f2937] top-[16px] w-[28px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#1f2937] border-[0.667px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
                        <ContainerBackgroundImage2 additionalClassNames="h-[62.667px]">
                          <ContainerBackgroundImage1 additionalClassNames="w-[18.667px]">
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage1>
                          <ContainerBackgroundImage1 additionalClassNames="w-[18.667px]">
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage1>
                          <ContainerBackgroundImage1 additionalClassNames="w-[18.667px]">
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage1>
                        </ContainerBackgroundImage2>
                      </div>
                      <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#4b5563] h-[40px] items-start left-[34px] p-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#374151] top-[40px] w-[20px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#374151] border-[0.667px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
                        <ContainerBackgroundImage2 additionalClassNames="h-[38.667px]">
                          <ContainerBackgroundImage3 additionalClassNames="h-[4px] w-[10.667px]">
                            <div className="bg-[#ffd230] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage3>
                          <ContainerBackgroundImage3 additionalClassNames="h-[4px] w-[10.667px]">
                            <div className="bg-[#ffd230] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage3>
                        </ContainerBackgroundImage2>
                      </div>
                      <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#1f2937] h-[80px] items-start left-[60px] p-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#111827] top-0 w-[32px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#111827] border-[0.667px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
                        <ContainerBackgroundImage2 additionalClassNames="h-[78.667px]">
                          <ContainerBackgroundImage1 additionalClassNames="w-[22.667px]">
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage1>
                          <ContainerBackgroundImage1 additionalClassNames="w-[22.667px]">
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage1>
                          <ContainerBackgroundImage1 additionalClassNames="w-[22.667px]">
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage1>
                          <ContainerBackgroundImage1 additionalClassNames="w-[22.667px]">
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                            <div className="bg-[#ffb900] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage1>
                        </ContainerBackgroundImage2>
                      </div>
                      <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#374151] h-[48px] items-start left-[98px] p-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#1f2937] top-[32px] w-[24px]" data-name="Container">
                        <div aria-hidden="true" className="absolute border-[#1f2937] border-[0.667px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
                        <ContainerBackgroundImage2 additionalClassNames="h-[46.667px]">
                          <ContainerBackgroundImage3 additionalClassNames="h-[4px] w-[14.667px]">
                            <div className="bg-[#ffd230] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage3>
                          <ContainerBackgroundImage3 additionalClassNames="h-[4px] w-[14.667px]">
                            <div className="bg-[#ffd230] rounded-[6px] shrink-0 size-[4px]" data-name="Container" />
                          </ContainerBackgroundImage3>
                        </ContainerBackgroundImage2>
                      </div>
                    </div>
                    <div className="absolute h-[36px] left-[32.75px] top-[92px] w-[173.885px]" data-name="Heading 1">
                      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-[-2px] tracking-[-0.75px] whitespace-nowrap">Social Skyline</p>
                    </div>
                    <div className="absolute h-[20px] left-0 top-[132px] w-[239.396px]" data-name="Paragraph">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[-0.33px] whitespace-nowrap">Track and strengthen your connections</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col h-[515.333px] items-start left-0 overflow-clip px-[16px] top-[216px] w-[362px]" data-name="Container">
                <div className="h-[1399.365px] relative shrink-0 w-full" data-name="Container">
                  <div className="absolute bg-[rgba(255,255,255,0)] h-[757.833px] left-0 rounded-[14px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-0 w-[330px]" data-name="CityBlock">
                    <div className="absolute content-stretch flex flex-col h-[757.833px] items-start left-0 pb-[0.667px] pt-[56.667px] px-[24.667px] rounded-[14px] top-0 w-[330px]" data-name="Container" style={{ backgroundImage: "linear-gradient(113.531deg, rgb(31, 41, 55) 0%, rgb(17, 24, 39) 100%)" }}>
                      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                      <ContainerBackgroundImage9 additionalClassNames="h-[660.5px]">
                        <div className="h-[620.5px] relative shrink-0 w-full" data-name="Container">
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[106.5px] items-center left-[7.38px] top-[25px] w-[41.406px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#8b4b60] h-[84px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#c96d8c] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#8b4b60] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#8b4b60] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage2 additionalClassNames="h-[83.333px]">
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                </ContainerBackgroundImage2>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[41.406px]" text="Sarah" additionalClassNames1="w-[25.406px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[88.5px] items-center left-[67.78px] top-[43px] w-[48.927px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#996b2a] h-[66px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#d3943a] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#996b2a] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#996b2a] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage7 additionalClassNames="h-[65.333px]">
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                </ContainerBackgroundImage7>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[48.927px]" text="Marcus" additionalClassNames1="w-[32.927px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[115.5px] items-center left-[134.35px] top-[16px] w-[44.115px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#645396] h-[93px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#937add] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#645396] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#645396] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage2 additionalClassNames="h-[92.333px]">
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                </ContainerBackgroundImage2>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[44.115px]" text="Emma" additionalClassNames1="w-[28.115px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[73.5px] items-center left-[202.85px] top-[58px] w-[35.458px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#58491a] h-[51px] items-start left-0 pt-[0.667px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#7f6a26] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#58491a] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="content-stretch flex h-[50.333px] items-center justify-center relative shrink-0 w-full" data-name="Container">
                                  <ContainerBackgroundImage additionalClassNames="h-[50.333px]" />
                                </div>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[35.458px]" text="Jake" additionalClassNames1="w-[19.458px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[97.5px] items-center left-[12.08px] top-[151.5px] w-[32px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="h-[75px] shrink-0">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#92446d] h-[75px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#d0619b] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#92446d] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#92446d] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage7 additionalClassNames="h-[74.333px]">
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                </ContainerBackgroundImage7>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[31.198px]" text="Lily" additionalClassNames1="w-[15.198px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[82.5px] items-center left-[71.2px] top-[166.5px] w-[42.104px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#573315] h-[60px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#884f20] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#573315] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#573315] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage8 additionalClassNames="h-[59.333px]">
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                </ContainerBackgroundImage8>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[42.104px]" text="David" additionalClassNames1="w-[26.104px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[109.5px] items-center left-[139.83px] top-[139.5px] w-[33.156px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="h-[87px] shrink-0">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#8d2b5b] h-[87px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#ce3f86] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#8d2b5b] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#8d2b5b] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage2 additionalClassNames="h-[86.333px]">
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                </ContainerBackgroundImage2>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[33.156px]" text="Zoe" additionalClassNames1="w-[17.156px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[91.5px] items-center left-[202.75px] top-[157.5px] w-[35.656px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="h-[69px] shrink-0">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#967215] h-[69px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#d2a01e] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#967215] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#967215] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage7 additionalClassNames="h-[68.333px]">
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                </ContainerBackgroundImage7>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[35.656px]" text="Alex" additionalClassNames1="w-[19.656px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[85.5px] items-center left-[11.54px] top-[290px] w-[33.083px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#95450d] h-[63px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#cd5e12] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#95450d] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#95450d] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage7 additionalClassNames="h-[62.333px]">
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                </ContainerBackgroundImage7>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[33.083px]" text="Mia" additionalClassNames1="w-[17.083px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[94.5px] items-center left-[73.39px] top-[281px] w-[37.719px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#734f97] h-[72px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#a370d6] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#734f97] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#734f97] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage7 additionalClassNames="h-[71.333px]">
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                </ContainerBackgroundImage7>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[37.719px]" text="Tyler" additionalClassNames1="w-[21.719px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[118.5px] items-center left-[136.38px] top-[257px] w-[40.073px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#8b4895] h-[96px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#ce6bdd] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#8b4895] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#8b4895] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage2 additionalClassNames="h-[95.333px]">
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                </ContainerBackgroundImage2>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[40.073px]" text="Mom" additionalClassNames1="w-[24.073px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[112.5px] items-center left-[203.36px] top-[263px] w-[34.427px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#96434f] h-[90px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#dc6375] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#96434f] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#96434f] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage2 additionalClassNames="h-[89.333px]">
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                </ContainerBackgroundImage2>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[34.427px]" text="Dad" additionalClassNames1="w-[18.427px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[109.5px] items-center left-[7.61px] top-[389.5px] w-[40.938px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#92446d] h-[87px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#d5639f] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#92446d] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#92446d] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage2 additionalClassNames="h-[86.333px]">
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                </ContainerBackgroundImage2>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[40.938px]" text="Sister" additionalClassNames1="w-[24.938px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[103.5px] items-center left-[67.21px] top-[395.5px] w-[50.073px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#967215] h-[81px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#d8a51f] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#967215] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#967215] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage2 additionalClassNames="h-[80.333px]">
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                </ContainerBackgroundImage2>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[50.073px]" text="Brother" additionalClassNames1="w-[34.073px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[115.5px] items-center left-[127.5px] top-[383.5px] w-[57.833px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#4b3e58] h-[93px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#78648d] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#4b3e58] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#4b3e58] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage8 additionalClassNames="h-[92.333px]">
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                </ContainerBackgroundImage8>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[57.833px]" text="Grandma" additionalClassNames1="w-[41.833px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[91.5px] items-center left-[200.2px] top-[407.5px] w-[40.771px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#58491a] h-[69px] items-start left-0 pt-[0.667px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#776424] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#58491a] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="content-stretch flex h-[68.333px] items-center justify-center relative shrink-0 w-full" data-name="Container">
                                  <ContainerBackgroundImage additionalClassNames="h-[68.333px]" />
                                </div>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[40.771px]" text="Maya" additionalClassNames1="w-[24.771px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[97.5px] items-center left-[11.56px] top-[507px] w-[33.031px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#976269] h-[75px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#d78b95] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#976269] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#976269] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage7 additionalClassNames="h-[74.333px]">
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                </ContainerBackgroundImage7>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[33.031px]" text="Lisa" additionalClassNames1="w-[17.031px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[88.5px] items-center left-[73.92px] top-[516px] w-[36.656px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#906697] h-[66px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#c88ed2] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#906697] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#906697] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage7 additionalClassNames="h-[65.333px]">
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                </ContainerBackgroundImage7>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[36.656px]" text="Amy" additionalClassNames1="w-[20.656px]" />
                          </div>
                        </div>
                      </ContainerBackgroundImage9>
                    </div>
                    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[41.333px] left-[85.35px] rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[159.302px]" data-name="Container" style={{ backgroundImage: "linear-gradient(165.454deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)" }}>
                      <div className="absolute h-[20px] left-[24px] top-[10px] w-[109.969px]" data-name="Text">
                        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[55px] not-italic text-[14px] text-center text-white top-[-0.33px] tracking-[0.35px] whitespace-nowrap">{`Friends & Family`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0)] h-[373.531px] left-0 rounded-[14px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] top-[805.83px] w-[330px]" data-name="CityBlock">
                    <div className="absolute content-stretch flex flex-col h-[373.531px] items-start left-0 pb-[0.667px] pt-[56.667px] px-[24.667px] rounded-[14px] top-0 w-[330px]" data-name="Container" style={{ backgroundImage: "linear-gradient(131.459deg, rgb(31, 41, 55) 0%, rgb(17, 24, 39) 100%)" }}>
                      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[14px]" />
                      <ContainerBackgroundImage9 additionalClassNames="h-[276.198px]">
                        <div className="h-[236.198px] relative shrink-0 w-full" data-name="Container">
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[93.292px] items-center left-[2.07px] top-[23.21px] w-[52.021px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="h-[70.792px] shrink-0">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#645396] h-[70.792px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#8c75d3] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#645396] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#645396] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage7 additionalClassNames="h-[70.125px]">
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                </ContainerBackgroundImage7>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[52.021px]" text="Jennifer" additionalClassNames1="w-[36.021px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[87.292px] items-center left-[66.48px] top-[29.21px] w-[51.531px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="h-[64.792px] shrink-0">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#573315] h-[64.792px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#8d5221] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#573315] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#573315] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage8 additionalClassNames="h-[64.125px]">
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                </ContainerBackgroundImage8>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[51.531px]" text="Michael" additionalClassNames1="w-[35.531px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[100.5px] items-center left-[133.47px] top-[16px] w-[45.896px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#92446d] h-[78px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#d1629c] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#92446d] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#92446d] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage2 additionalClassNames="h-[77.333px]">
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                </ContainerBackgroundImage2>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[45.896px]" text="Rachel" additionalClassNames1="w-[29.896px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[82.5px] items-center left-[202.9px] top-[34px] w-[35.375px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#57420c] h-[60px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#846412] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#57420c] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#57420c] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage8 additionalClassNames="h-[59.333px]">
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                  <ContainerBackgroundImage3 additionalClassNames="h-[10px] w-[22.667px]">
                                    <div className="bg-[#fcd34d] opacity-50 rounded-[1px] shrink-0 size-[10px]" data-name="Container" />
                                  </ContainerBackgroundImage3>
                                </ContainerBackgroundImage8>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[35.375px]" text="Tom" additionalClassNames1="w-[19.375px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[95.698px] items-center left-[9.41px] top-[124.5px] w-[37.344px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="h-[73.198px] shrink-0">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#8b4b60] h-[73.198px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#c56b88] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#8b4b60] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#8b4b60] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage7 additionalClassNames="h-[72.531px]">
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                  <ContainerBackgroundImage6>
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[8px] opacity-70 rounded-[1px] shrink-0 w-[7.333px]" data-name="Container" />
                                  </ContainerBackgroundImage6>
                                </ContainerBackgroundImage7>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[37.344px]" text="Nina" additionalClassNames1="w-[21.344px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[85.5px] items-center left-[72.92px] top-[134.7px] w-[38.656px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#593e18] h-[63px] items-start left-0 pt-[0.667px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#7c5722] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#593e18] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="content-stretch flex h-[62.333px] items-center justify-center relative shrink-0 w-full" data-name="Container">
                                  <ContainerBackgroundImage additionalClassNames="h-[62.333px]" />
                                </div>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[38.656px]" text="Chris" additionalClassNames1="w-[22.656px]" />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[6px] h-[91.5px] items-center left-[132.86px] top-[128.7px] w-[47.094px]" data-name="Container">
                            <BackgroundImage2 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                              <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#734f97] h-[69px] items-start left-0 pt-[-3.333px] px-[0.667px] rounded-tl-[4px] rounded-tr-[4px] to-[#a772db] top-0 w-[32px]" data-name="Container">
                                <div aria-hidden="true" className="absolute border-[#734f97] border-l-[0.667px] border-r-[0.667px] border-solid border-t-[0.667px] inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)]" />
                                <div className="bg-[#734f97] h-[4px] rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Container" />
                                <ContainerBackgroundImage2 additionalClassNames="h-[68.333px]">
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                  <ContainerBackgroundImage4>
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                    <div className="bg-[#fcd34d] h-[6px] opacity-90 rounded-[1px] shrink-0 w-[4.885px]" data-name="Container" />
                                  </ContainerBackgroundImage4>
                                </ContainerBackgroundImage2>
                              </div>
                            </BackgroundImage2>
                            <ContainerBackgroundImage5 additionalClassNames="w-[47.094px]" text="Sophia" additionalClassNames1="w-[31.094px]" />
                          </div>
                        </div>
                      </ContainerBackgroundImage9>
                    </div>
                    <div className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid h-[41.333px] left-[96.46px] rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] top-0 w-[137.073px]" data-name="Container" style={{ backgroundImage: "linear-gradient(163.22deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)" }}>
                      <div className="absolute h-[20px] left-[24px] top-[10px] w-[87.74px]" data-name="Text">
                        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[44.5px] not-italic text-[14px] text-center text-white top-[-0.33px] tracking-[0.35px] whitespace-nowrap">Work District</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[44px] items-center left-[67.6px] top-[1259.36px] w-[194.781px]" data-name="Container">
                    <div className="bg-[#101828] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] w-[194.781px]" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[32px] relative size-full">
                        <div className="relative shrink-0 size-[20px]" data-name="Icon">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g id="Icon">
                              <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M10 4.16667V15.8333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </g>
                          </svg>
                        </div>
                        <BackgroundImage3 additionalClassNames="h-[20px]">
                          <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[51.5px] not-italic text-[14px] text-center text-white top-[-0.33px] whitespace-nowrap">Add Connection</p>
                        </BackgroundImage3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#101828] content-stretch flex h-[84px] items-center justify-between left-0 pl-[17.51px] pr-[17.521px] pt-[0.667px] top-[732px] w-[362px]" data-name="BottomNav">
            <div aria-hidden="true" className="absolute border-black border-solid border-t-[0.667px] inset-0 pointer-events-none shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
            <ButtonBackgroundImage additionalClassNames="bg-[#1e2939] w-[56px]">
              <IconBackgroundImage>
                <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
                  <div className="absolute inset-[-5%_-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 22">
                      <path d={svgPaths.p792ac80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[8.33%] left-[8.33%] right-3/4 top-1/2" data-name="Vector">
                  <div className="absolute inset-[-10%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 12">
                      <path d={svgPaths.p286350a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[8.33%] left-3/4 right-[8.33%] top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-7.69%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 15">
                      <path d={svgPaths.p9a6a8c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <Icon2VectorBackgroundImage additionalClassNames="bottom-3/4 top-1/4" />
                <BackgroundImage additionalClassNames="absolute inset-[41.67%_41.67%_58.33%_41.67%]" />
                <BackgroundImage additionalClassNames="absolute inset-[58.33%_41.67%_41.67%_41.67%]" />
                <Icon2VectorBackgroundImage additionalClassNames="bottom-1/4 top-3/4" />
              </IconBackgroundImage>
              <BackgroundImage1 additionalClassNames="w-[21.031px]">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">City</p>
              </BackgroundImage1>
            </ButtonBackgroundImage>
            <ButtonBackgroundImage additionalClassNames="w-[60.375px]">
              <IconBackgroundImage>
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <div className="absolute inset-[-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p27820500} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]" data-name="Vector">
                  <div className="absolute inset-[-10%_-7.69%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
                      <path d="M1 8L4 11L14 1" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </IconBackgroundImage>
              <TextBackgroundImageAndText text="Tasks" additionalClassNames="w-[28.375px]" />
            </ButtonBackgroundImage>
            <ButtonBackgroundImage additionalClassNames="w-[86.396px]">
              <IconBackgroundImage>
                <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-5.56%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                      <path d={svgPaths.p1b764040} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </IconBackgroundImage>
              <TextBackgroundImageAndText text="Memories" additionalClassNames="w-[54.396px]" />
            </ButtonBackgroundImage>
            <ButtonBackgroundImage additionalClassNames="w-[67.104px]">
              <IconBackgroundImage>
                <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
                  <div className="absolute inset-[-16.67%_-7.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
                      <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
                  <div className="absolute inset-[-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                      <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </IconBackgroundImage>
              <TextBackgroundImageAndText text="Profile" additionalClassNames="w-[35.104px]" />
            </ButtonBackgroundImage>
          </div>
          <div className="absolute bg-[#1e1e1e] h-[28px] left-[101px] rounded-bl-[24px] rounded-br-[24px] top-0 w-[160px]" data-name="Container" />
          <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start left-[310px] pt-[8px] px-[8px] rounded-[22369600px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] size-[36px] top-[40px]" data-name="SettingsMenu">
            <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
              <Icon6VectorBackgroundImage additionalClassNames="bottom-1/2 top-1/2" />
              <Icon6VectorBackgroundImage additionalClassNames="bottom-3/4 top-1/4" />
              <Icon6VectorBackgroundImage additionalClassNames="bottom-1/4 top-3/4" />
            </div>
          </div>
        </div>
      </BackgroundImage3>
    </div>
  );
}