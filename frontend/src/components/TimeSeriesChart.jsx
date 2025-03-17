export const TimeSeriesChart = () => (
  <article className="flex flex-col items-center p-5 h-40 rounded-xl border border-black">
    <h3 className="mb-1 text-base font-bold">Times Per Month</h3>
    <div className="relative h-[116px] w-[141px]">
      <div className="absolute top-0 h-0 bg-black left-[13px] w-[100px]" />
      <div className="absolute w-32 h-0 bg-black left-[13px] top-[100px]" />
      <div className="absolute h-0 bg-red-800 left-[31px] top-[42px] w-[55px]" />
      <svg
        width="55"
        height="63"
        viewBox="0 0 55 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[75px] top-[13px] w-[77px] h-[0px]"
      >
        <path
          d="M2.48523 60.6941L52.4852 2.69412"
          stroke="#8F0000"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute left-1.5 h-0 bg-black top-[72px] w-[15px]" />
      <div className="absolute left-1.5 h-0 bg-black top-[15px] w-[15px]" />
      <div className="absolute left-1.5 h-0 bg-black top-[41px] w-[15px]" />
      <div className="absolute text-xs left-[68px] top-[104px]">Jan</div>
      <div className="absolute text-xs left-[118px] top-[104px]">Feb</div>
      <div className="absolute text-xs left-[23px] top-[104px]">Dec</div>
      <div className="absolute left-0 text-xs top-[9px]">6</div>
      <div className="absolute left-0 top-9 text-xs">4</div>
      <div className="absolute left-0 text-xs top-[67px]">2</div>
    </div>
  </article>
);
