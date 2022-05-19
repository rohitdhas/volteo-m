import { VikingShipIcon } from "../media";

export default function Nav() {
  return (
    <div className="w-auto flex justify-between align items-center border border-slate-300 rounded-md p-4 mb-2">
      <div className="flex">
        <img src={VikingShipIcon} alt="ship_icon" className="mr-4" />
        <div>
          <p className="font-bold text-sm">Demo Vessel</p>
          <p className="text-xs text-gray-500">
            16 Crewmates &#x2022;{" "}
            <span className="font-bold text-green-600">09 Active</span>
          </p>
        </div>
      </div>
      <div className="flex align items-center">
        <div className="border border-gray-400 rounded-lg px-3 py-2 text-sm mr-4">
          GMT +09:00
        </div>
        <i className="bi bi-power px-3 py-2 rounded-full bg-blue-100 font-bold text-xl hover:bg-blue-200"></i>
      </div>
    </div>
  );
}
