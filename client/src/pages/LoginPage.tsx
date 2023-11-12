import InputPage from "../components/InputPage";
import NavBar from "../components/NavBar";

const LoginPage = () => {
    return (
        <div className="relative bg-black h-screen w-screen bg-opacity-50">
            <NavBar />
            <div className="flex justify-center items-center h-full">
                <div className="bg-black bg-opacity-70 p-16 self-center w-full max-w-md rounded-md mt-14">
                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        Sign In
                    </h2>
                    <form className="flex flex-col gap-4">
                        <InputPage />
                        <InputPage />
                        <input type="submit" className="bg-red-700 py-3 text-white rounded-md w-full mt-10" />
                        <div className="flex justify-between">
                            <label className="text-neutral-500">
                                <input className="mr-2" type="checkbox" />
                                Remember me
                            </label>
                            <a className="text-neutral-500" href="#">Need help?</a>
                        </div>
                    </form>
                    <p className="text-neutral-500 mt-24">
                        <span className="text-xl">New to Netflix?</span> <a className="text-white text-xl" href="#">Sign up now.</a>
                    </p>
                    <h6 className="text-neutral-500 text-sm mt-4">This page is protected by Google reCAPTCHA to ensure you're not a bot</h6>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;