import { WaveImg, NavyOrg, CargoShip } from "../media";

export default function FirstContainer({ extraClass }) {
  return (
    <div className={`flex-1 ${extraClass}`}>
      <div className="border border-slate-300 rounded-md p-4">
        <div className="flex justify-between flex-1">
          <img src={WaveImg} alt="hi" className="w-auto h-8" />
          <img src={NavyOrg} alt="badge" className="w-auto h-8" />
        </div>
        <div className="py-6 border-b-2 border-b-slate-300">
          <p className="font-bold">Third Officer</p>
          <h2 className="xl:text-4xl font-bold my-1">
            <p>Niranjan</p>
            <p>Pawar</p>
          </h2>
          <p className="text-sm font-bold">Crew ID 86556</p>
        </div>
        <div className="py-6">
          <p className="font-bold">My Last Activity</p>
          <p className="text-slate-500 mt-2">
            <p>Submitted the Deck Log for</p>
            <p>
              <span className="font-bold">1200-1600 Watch</span> at 08:16 UTC
            </p>
          </p>
        </div>
      </div>
      <div className="border border-slate-300 rounded-md p-4 mt-2">
        <div className="flex justify-between">
          <img src={CargoShip} alt="Cargo Ship" className="w-auto h-10" />
          <p className="text-xl font-bold">SGSIN - NOOSL</p>
        </div>
        <div className="font-bold border-b-2 border-b-slate-300 py-4">
          <p>Statement of Facts</p>
          <p className="text-xs">Current Status</p>
          <p className="text-gray-500 text-xl mt-2">Cargo First Lift</p>
        </div>
        <div className="flex justify-between font-bold py-4">
          <div>
            <p className="text-xs">Next Port Call</p>
            <p className="text-gray-500">INVTZ1</p>
          </div>
          <div>
            <p className="text-xs">ETA</p>
            <p className="text-gray-500">Nov 27, 1450 UTC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
