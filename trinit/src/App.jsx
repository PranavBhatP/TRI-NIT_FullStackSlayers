import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen w-screen background-image relative">
        <nav className="w-screen h-[15vh] fixed flex justify-between items-center px-[100px]">
          <ul className="list-none flex justify-content items-center gap-10">
            <li>
              <a
                href=""
                className="text-white hover:text-[#51ED9E] duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white hover:text-[#51ED9E] duration-200"
              >
                Upload
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white hover:text-[#51ED9E] text-transparent duration-200"
              >
                Upload
              </a>
            </li>
          </ul>
          <h1 className="courgette-regular text-[2rem] text-white">SkyWatch</h1>
          <div className="flex flex-row justify-evenly items-center gap-10">
            <a
              href=""
              className="rounded px-5 py-3 border-rounded border-[#51ED9E] border-[0.5px] text-[#51ED9E] font-semibold hover:bg-[#51ED9E] hover:text-black duration-200"
            >
              Know More
            </a>
            <a
              href=""
              className="rounded bg-[#51ED9E] px-5 py-3 font-semibold hover:scale-110 duration-200"
            >
              Get Started
            </a>
          </div>
        </nav>
        <div className="h-full w-full bg-[#00000080]">
          <div className="flex flex-col justify-center items-center h-full w-full gap-20">
            <h1 className="text-[3.5rem] font-semibold text-white">
              Driving Remote Sensing{" "}
              <span className="rounded border-2 border-white px-2 py-1">
                Centuries
              </span>{" "}
              Ahead!
            </h1>
            <div className="w-[75%] flex flex-row justify-evenly items-center">
              <div className="bg-gray-300 h-[1.75px] w-[35%]"></div>
              <a
                href=""
                className="rounded bg-[#51ED9E] px-5 py-3 font-semibold hover:scale-110 duration-200 text-md"
              >
                Upload Your Image Now!
              </a>
              <div className="bg-gray-300 h-[1.75px] w-[35%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
