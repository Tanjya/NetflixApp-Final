import Banner from "../assets/banner.jpeg";
const HomeBanner = () => {
    return (
        <div className="h-screen w-screen relative">
            <img src={Banner} alt="image" />

            <div className="absolute h-full w-full bg-black bg-opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">

                <div className="text-center">
                    <h1 className="text-white font-bold text-5xl">
                        Unlimited movies, TV shows, and more
                    </h1>
                    <p className="text-white text-2xl mt-6 mb-2">
                        Watch anywhere, Cancel anytime
                    </p>
                    <p className="text-white text-xl mt-6">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="mt-8">
                        <a
                            href="/login"
                            className="bg-red-700 mt-8 text-white p-4 px-8 text-2xl rounded font-semibold"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;