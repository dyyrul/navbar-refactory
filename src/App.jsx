import Navbar from "./assets/Navbar";

function App() {
  return (
    <>
      <Navbar>
        <header className="w-full bg-cyan-400 fixed">
          <div className="container">
            <div className="flex justify-between h-20 items-center">
              <div className="px-5">
                <a href="" className="font-bold text-2xl text-slate-800">
                  REFACTORY
                </a>
              </div>
              <nav className="flex justify-evenly">
                <ul className="flex justify-items-end">
                  <li className="px-4">
                    <a
                      href="#"
                      className="text-slate-800 font-normal hover:text-slate-50 text-lg px-4"
                    >
                      Home
                    </a>
                  </li>
                  <li className="px-4">
                    <a
                      href="#"
                      className="text-slate-800 font-normal hover:text-slate-50 text-lg px-4"
                    >
                      About
                    </a>
                  </li>
                  <li className="px-4">
                    <a
                      href="#"
                      className="text-slate-800 font-normal hover:text-slate-50 text-lg px-4"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="px-4">
                    <a
                      href="#"
                      className="text-slate-800 font-normal hover:text-slate-50 text-lg px-4"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="px-5">
                <ul className="flex">
                  <li>
                    <a
                      href="#"
                      className="bg-cyan-100 hover:bg-slate-200 text-gray-800 rounded-md py-2 px-4 ml-4"
                    >
                      Daftar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="bg-orange-100 hover:bg-slate-200 text-gray-800 rounded-md py-2 px-4 ml-4"
                    >
                      Log In
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </Navbar>
    </>
  );
}

export default App;
