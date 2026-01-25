import React from 'react';

const SectionDivider = ({ position = "bottom" }) => {
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-none z-20 ${position === "top" ? "top-0 rotate-180" : "bottom-0"}`}>
      <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,433.89,8c-301.83-17.9-380.61,43.76-433.89,64V120h1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#b38728" opacity="0.6"></path>
        <path d="M985.66,92.83C906.67,72,823.78,31,433.89,8c-301.83-17.9-380.61,43.76-433.89,64V150h1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#fdfbf7]"></path>
      </svg>
    </div>
  );
};

export default SectionDivider;