function Navbar() {
  return (
    <div className="navbar">
      <div className="container py-6">
        <div className="flex justify-between">
          <div className="logo">
            <h1 className="textlogo font-bold">CE</h1>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-8 ul-text">
              <li className="bold text-xl">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="bold text-xl">
                <a className="hover:underline" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="bold text-xl">
                <a className="hover:underline" href="#contact">
                  Contact
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
