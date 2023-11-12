import TickMark from "../assets/tickMark.png"
import PlanCard from "../components/PlanCard";


const PlansPage = () => {
    return (
        <div className='flex items-center h-screen justify-center'>
            <div className='w-[400px]'>
                <h5 className='text-sm'>STEP 2 OF 3</h5>
                <h1 className='text-2xl font-semibold'>Choose the plan that is right for you
                </h1>

                <label className="flex items-center mt-4">
                    <img className="h-4 mr-2" src={TickMark} alt="checkmark" />
                    <span className="text-neutral-500 text-sm">
                        Watch all you want. Ad-free
                    </span>
                </label>

                <label className="flex items-center mt-4">
                    <img className="h-4 mr-2" src={TickMark} alt="checkmark" />
                    <span className="text-neutral-500 text-sm">
                        Recommendations just for you.
                    </span>
                </label>

                <label className="flex items-center mt-4">
                    <img className="h-4 mr-2" src={TickMark} alt="checkmark" />
                    <span className="text-neutral-500 text-sm">
                        Change or cancel your plan anytime.
                    </span>
                </label>

                <div className='flex mt-4 gap-12'>
                    <PlanCard />
                    <PlanCard />
                </div>
                <button className="bg-red-700 w-full rounded p-2 mt-2">Purchase</button>

            </div>

        </div>
    );
};

export default PlansPage;