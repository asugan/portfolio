import logo from "./images/lpnotes.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container py-6">
        <div className="flex justify-between">
          <div className="logo">
            <img src={logo} className="w-32" alt="" />
          </div>
          <div className="flex items-center">
            <ul className="flex gap-8 text-white">
              <li className="bold text-xl">
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="bold text-xl">
                <a className="hover:underline" href="#">
                  About
                </a>
              </li>
              <li className="bold text-xl">
                <a className="hover:underline" href="#">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
