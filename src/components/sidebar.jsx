import {
  HomeIcon,
  LayoutIcon,
  LogbookIcon,
  HeartbeatIcon,
  PieChartIcon,
  HistoryIcon,
  AppIcon,
  SettingIcon,
} from "../media";

export default function Sidebar() {
  return (
    <div className="p-2 border border-slate-300 rounded-md fixed top-3 left-3 bottom-3 flex flex-col justify-between w-28 mr-3 bg-white">
      <div className="cursor-pointer p-1 bg-blue-100 rounded-lg flex align items-center flex-col justify-center text-sm">
        <img src={HomeIcon} alt="home_icon" />
        <span className="mt-2 font-bold text-blue-900">Home</span>
      </div>
      <div className="cursor-pointer p-1 hover:bg-blue-100 rounded-lg flex align items-center flex-col justify-center text-sm">
        <img src={LayoutIcon} alt="layout_icon" />
        <span className="mt-2">Workspace</span>
      </div>
      <div className="cursor-pointer p-1 hover:bg-blue-100 rounded-lg flex align items-center flex-col justify-center text-sm">
        <img src={LogbookIcon} alt="logbook" />
        <span className="mt-2">MARPOL</span>
      </div>
      <div className="cursor-pointer p-1 hover:bg-blue-100 rounded-lg flex align items-center flex-col justify-center text-sm">
        <img src={HeartbeatIcon} alt="heartbeat_icon" />
        <span className="mt-2">OH&S</span>
      </div>
      <div className="cursor-pointer p-1 hover:bg-blue-100 rounded-lg flex align items-center flex-col justify-center text-sm">
        <img src={PieChartIcon} alt="piechart_icon" />
        <span className="mt-2">Insights</span>
      </div>
      <div className="cursor-pointer p-1 hover:bg-blue-100 rounded-lg flex align items-center flex-col justify-center text-sm">
        <img src={HistoryIcon} alt="history_icon" />
        <span className="mt-2">History</span>
      </div>
      <div className="cursor-pointer p-1 hover:bg-blue-100 rounded-lg flex align items-center flex-col justify-center text-sm">
        <img src={AppIcon} alt="app_icon" />
        <span className="mt-2">Apps</span>
      </div>
      <div className="cursor-pointer p-1 hover:bg-blue-100 rounded-lg flex align items-center flex-col justify-center text-sm">
        <img src={SettingIcon} alt="setting_icon" />
        <span className="mt-2">Settings</span>
      </div>
    </div>
  );
}
