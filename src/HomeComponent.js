import fs from "./images/full.svg";

function HomeComponent() {
  return (
    <div className="homecomp">
      <div className="container grid grid-cols-1 md:grid-cols-2 pt-24">
        <div className="fs">
          <img src={fs} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="hello">Hello!</h1>
          <h2 className="text-4xl font-semibold text-white">
            I'm Cagatay, a <br></br> full stack developer <br></br> based in
            Turkey.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
