import "./App.css";
import upload from "./upload.png";

function App() {
  return (
    <>
      <div className="h-screen w-screen background-image relative overflow-x-hidden">
        <nav className="w-screen h-[15vh] fixed flex lg:justify-between justify-center items-center px-[100px]">
          <ul className="hidden lg:list-none lg:flex lg:justify-content lg:items-center lg:gap-10">
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
                href="#upload"
                className="text-white hover:text-[#51ED9E] duration-200"
              >
                Upload
              </a>
            </li>
            <li>
              <a
                href="#upload"
                className="text-white text-transparent duration-200"
              >
                Upload
              </a>
            </li>
          </ul>
          <h1 className="courgette-regular text-[2rem] text-white">SkyWatch</h1>
          <div className="hidden lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:gap-10">
            <a
              href="#upload"
              className="rounded px-5 py-3 border-rounded border-[#51ED9E] border-[0.5px] text-[#51ED9E] font-semibold hover:bg-[#51ED9E] hover:text-black duration-200"
            >
              Know More
            </a>
            <a
              href="#upload"
              className="rounded bg-[#51ED9E] px-5 py-3 font-semibold hover:scale-110 duration-200"
            >
              Get Started
            </a>
          </div>
        </nav>
        <div className="h-full w-full bg-gradient-to-b from-transparent to-[#000000]">
          <div className="flex flex-col justify-center items-center h-full w-full gap-20">
            <h1 className="lg:text-[3.5rem] w-[92.5%] text-[2rem] md:text-[2.5rem] font-semibold text-white text-center">
              Driving Remote Sensing{" "}
              <span className="rounded border-2 border-white px-2 py-1">
                Eons
              </span>{" "}
              Ahead!
            </h1>
            <div className="w-[75%] flex flex-row justify-evenly items-center">
              <div className="hidden lg:flex bg-gray-300 h-[1.75px] w-[35%]"></div>
              <a
                href="#upload"
                className="rounded bg-[#51ED9E] px-5 py-3 font-semibold hover:scale-110 duration-200 lg:text-md text-sm"
              >
                Upload Your Image Now!
              </a>
              <div className="hidden lg:flex bg-gray-300 h-[1.75px] w-[35%]"></div>
            </div>
          </div>
        </div>
        <div
          className="h-screen w-screen bg-black flex flex-row justify-center items-center"
          id="upload"
        >
          <div className="border-2 border-zinc-300 h-[65%] w-[80%] lg:w-[50%] rounded flex flex-col justify-center items-center py-10 gap-[30px] lg:gap-5">
            <h1 className="lg:text-[3rem] w-[92.5%] text-[2rem] md:text-[2.5rem] font-semibold text-white text-center">
              Upload A Photo {":)"}
            </h1>
            <img src={upload} alt="" width={"40%"} />
            <form
              action=""
              className="flex flex-col justify-evenly items-center gap-5 w-[80%]"
            >
              <input
                type="file"
                accept=".json"
                name="FileUpload"
                id="FileUpload"
                className="text-white py-3 px-5 border-2 border-zinc-600 rounded flex flex-row w-[80%]"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
