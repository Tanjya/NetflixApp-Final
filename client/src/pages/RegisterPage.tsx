import Logo from "../assets/frontPageLogo.png";
const RegisterPage = () => {
  return (
    <div>
      <div className="flex justify-between p-10">
        <img className="h-10" src={Logo} alt="" />
        <h1 className="font-semibold text-xl">Sign in</h1>
      </div>
      <hr />
      <div className="flex justify-center">
        <div className=" pt-10  border-0 w-96  items-center space-y-5">
          <p className="text-sm">
            STEP <span className="font-semibold">2</span> OF{" "}
            <span className="font-semibold">3</span>
          </p>
          <h1 className="text-3xl font-semibold">
            Create a password to start <br /> your membership
          </h1>
          <p>
            Just a few more steps and you're finished! <br /> We hate paperwork,
            too.
          </p>
          <form className="space-y-5 text-center">
            <input
              className="border border-red-500 w-full h-10"
              type="email"
              name=""
              id=""
              placeholder="   Email"
            />
            <br />
            <input
              className="border border-red-500 w-full"
              type="Add a password"
              name=""
              id=""
              placeholder="   Password"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
