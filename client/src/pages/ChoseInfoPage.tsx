import TickMark from "../assets/tickMark.png";

const ChoseInfoPage = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <img className="h-16 mx-auto" src={TickMark} alt="img" />
                <p className="mt-6 mb-2">STEP 2 OF 3</p>
                <h3 className="text-3xl">Choose your plan.</h3>

                <label className="flex items-center mt-4">
                    <img className="h-4 mr-2" src={TickMark} alt="checkmark" />
                    <span className="text-neutral-500 text-xl">
                        No commitments, cancel anytime.
                    </span>
                </label>

                <label className="flex items-center mt-4">
                    <img className="h-4 mr-2" src={TickMark} alt="checkmark" />
                    <span className="text-neutral-500 text-xl">
                        Everything on Netflix for one low price.
                    </span>
                </label>

                <label className="flex items-center mt-4">
                    <img className="h-4 mr-2" src={TickMark} alt="checkmark" />
                    <span className="text-neutral-500 text-xl">
                        No ads and no extra fees. Ever.
                    </span>
                </label>
                <input
                    type="submit"
                    className="bg-red-700 px-24 py-4 text-white rounded-md mt-6"
                />
            </div>
        </div>
    );
};

export default ChoseInfoPage;
