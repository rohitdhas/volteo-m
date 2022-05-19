import FirstContainer from "./components/firstContainer";
import SecondContainer from "./components/secondContainer";
import ThirdContainer from "./components/thirdContainer";
import Sidebar from "./components/sidebar";
import Nav from "./components/nav";

function App() {
  return (
    <div className="p-3 pl-[8.3rem]">
      <Sidebar />
      <div>
        <Nav />
        <div className="flex">
          <FirstContainer />
          <SecondContainer />
          <ThirdContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
