import { Link } from "react-router-dom";

function Starthomepage() {
  return (
    <>
      <div className="container-fluid  home_startr">
        <div className="text-center ">
          <h1 className="">
            Welcome to our website.
            <br /> We are honored by your visits
          </h1>

          <Link to="/hompage" className="btn btn-danger">
            Show All Products
          </Link>
        </div>
      </div>
    </>
  );
}

export default Starthomepage;
