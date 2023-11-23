import Logo from "../assets/frontPageLogo.png";
import ErrorImg from "../assets/errorpage.jpeg";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <nav className="bg-black p-5">
        <img className="h-8 " src={Logo} alt="Logo" />
      </nav>
      <section>
        <div className=" w-screen relative">
          <img src={ErrorImg} alt="image" />

          <div className="absolute h-full w-full bg-black bg-opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-white font-bold text-5xl">Lost your way?</h1>
              <p className="text-white text-xl mt-6 mb-2 font-thin">
                Sorry , we couldn't find that page. You'll find loads to explore
                on the home <br /> page.
              </p>

              <div className="m-8">
                <Link to="/">
                  <a className="bg-white mt-8 text-black p-4 px-8 text-xl rounded font-semibold">
                    Netflix Home
                  </a>
                </Link>
              </div>
              <h3 className="text-2xl pt-10 font-thin text-white">
                Error Code <span className="font-semibold ">NSES-404</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
