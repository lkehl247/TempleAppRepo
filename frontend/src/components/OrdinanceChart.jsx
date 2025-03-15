const OrdinanceBar = ({ height, label, color }) => (
  <div className="flex flex-col items-center">
    <div className={`w-5 ${height} ${color}`} />
    <div className="mt-1.5 text-xs">{label}</div>
  </div>
);

export const OrdinanceChart = () => (
  <section className="p-5 mt-7 rounded-xl border border-black">
    <h3 className="mb-5 text-base font-bold text-center">
      Appointments by Ordinance
    </h3>
    <div className="relative h-[131px]">
      <div className="absolute left-0 text-xs top-[38px]">4</div>
      <div className="absolute left-px top-1.5 text-xs">6</div>
      <div className="absolute left-px text-xs top-[72px]">2</div>
      <div className="absolute top-0 left-5 h-0 bg-black w-[108px]" />
      <div className="flex justify-between items-end px-10 pt-5">
        <OrdinanceBar height="h-8" label="Baptism" color="bg-slate-500" />
        <OrdinanceBar height="h-8" label="Initiatory" color="bg-teal-800" />
        <OrdinanceBar height="h-4" label="Endowment" color="bg-neutral-400" />
        <OrdinanceBar height="h-8" label="Sealing" color="bg-lime-900" />
      </div>
    </div>
  </section>
);
