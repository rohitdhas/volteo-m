export default function SecondContainer() {
  return (
    <div className="flex-1 mx-2 border border-slate-300 rounded-md p-4 bg-blue-50">
      <div className="flex justify-between">
        <div className="font-bold">
          <h3 className="text-xl text-blue-800">Ahoy Stream</h3>
          <p className="text-gray-600 text-sm mt-1">
            Last updated - 4 minutes ago
          </p>
        </div>
        <i className="bi bi-arrow-repeat text-xl font-bold text-blue-800"></i>
      </div>
      <Card1 />
      <Card2 />
      <Card2 />
    </div>
  );
}

function Card1() {
  return (
    <div className="p-6 my-4 rounded-md bg-yellow-50">
      <div className="font-bold flex justify-between align items-center">
        <p className="text-red-500 text-xs">Important Notice</p>
        <i className="bi bi-paperclip text-gray-400 text-xl"></i>
      </div>
      <p className="my-3 font-semibold">
        Captain's Bridge Order dated Nov 27, 2020
      </p>
      <div className="flex justify-between align items-center">
        <span className="flex align items-center">
          <i className="bi bi-eye text-gray-400"></i>
          <span className="text-sm ml-2 font-bold">1</span>
        </span>
        <button className="py-2 px-8 text-sm rounded-full text-white bg-red-500">
          READ
        </button>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="p-6 my-4 rounded-md bg-white">
      <p className="text-slate-500">
        <span className="font-bold">Second Officer Oliver</span> submitted the
        Deck Log for 1400-1500 watch hour and completed the Handover Checklist
      </p>
      <p className="text-right mt-3 font-bold text-xs text-gray-600">
        UTC 1105 | LT +06:30
      </p>
    </div>
  );
}
