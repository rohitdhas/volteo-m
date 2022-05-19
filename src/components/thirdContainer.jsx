import { Clouds } from "../media";

export default function ThirdContainer() {
  return (
    <div className="flex-1 border border-slate-300 rounded-md p-4 relative">
      <div className="flex justify-between align items-center">
        <div className="font-bold">
          <h3 className="text-2xl">My Day</h3>
          <h5 className="text-gray-500 mt-1">Tuesday, March 2</h5>
        </div>
        <img src={Clouds} alt="clouds" />
      </div>
      <div className="relative bg-gray-50 p-4 rounded-md my-4">
        <div className="flex align items-center">
          <input
            type="checkbox"
            checked={true}
            className="h-[20px] w-[20px] mr-4"
          />
          <div className="font-bold">
            <p className="line-through">Deck Log | 1200 - 1600 Watch</p>
            <p className="text-xs text-gray-500">Assigned by Wayship</p>
          </div>
        </div>
        <i className="bi bi-three-dots absolute top-2 right-3 text-gray-500"></i>
      </div>
      <div className="relative border border-red-500 bg-gray-50 p-4 rounded-md my-4">
        <div className="flex align items-center">
          <input type="checkbox" className="h-[20px] w-[20px] mr-4" />
          <div className="font-bold">
            <p className="text-red-500">COVID19 Health Guidelines</p>
            <p className="text-xs text-gray-500">
              Assigned by Technical | Due in 2 days
            </p>
          </div>
        </div>
        <i className="bi bi-three-dots absolute top-2 right-3 text-gray-500"></i>
      </div>
      <div className="relative bg-gray-50 p-4 rounded-md my-4">
        <div className="flex align items-center">
          <input type="checkbox" className="h-[20px] w-[20px] mr-4" />
          <div className="font-bold">
            <p>Steering Check</p>
            <p className="text-xs text-gray-500">
              Assigned by Captain |{" "}
              <span className="text-red-500">Due in 2 hours</span>
            </p>
          </div>
        </div>
        <i className="bi bi-three-dots absolute top-2 right-3 text-gray-500"></i>
      </div>
      <div className="relative bg-gray-50 p-4 rounded-md my-4">
        <div className="flex align items-center">
          <input type="checkbox" className="h-[20px] w-[20px] mr-4" />
          <div className="font-bold">
            <p>ECDIS Check</p>
            <p className="text-xs text-gray-500">
              Assigned by Chief Officer | Due in 6 hours
            </p>
          </div>
        </div>
        <i className="bi bi-three-dots absolute top-2 right-3 text-gray-500"></i>
      </div>
      <div className="relative bg-gray-50 p-4 rounded-md my-4">
        <div className="flex align items-center">
          <input type="checkbox" className="h-[20px] w-[20px] mr-4" />
          <div className="font-bold">
            <p>Review Noon Report</p>
            <p className="text-xs text-gray-500">
              Assigned by Self | Due in 8 hours
            </p>
          </div>
        </div>
        <i className="bi bi-three-dots absolute top-2 right-3 text-gray-500"></i>
      </div>
      <div className="flex border border-gray-500 px-4 py-3 mb-auto rounded-md absolute bottom-4 right-4 left-4">
        <i className="bi bi-plus-lg pr-4 text-2xl font-bold text-gray-500 placeholder:font-bold"></i>
        <input
          type="text"
          placeholder="Add a to-do reminder"
          className="outline-none"
        />
      </div>
    </div>
  );
}
