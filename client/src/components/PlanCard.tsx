import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

const PlanCard = () => {
    return (
        <div>
            <div className='border rounded p-3 h-[350px] w-full mr-3 cursor-pointer  '>

                <div className='rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-full p-3 text-white font-bold'>
                    <h2 className='text-2xl'>Standard</h2>
                    <p className='font-light'>$5.99</p>
                </div>

                <div className="border-b py-4 flex text-red items-center">

                    <div className="w-6 h-6 rounded-full text-sm bg-cyan-500 flex items-center">
                        <CheckIcon color="white" width={20} fontWeight={700} />
                    </div>

                    <div className="ml-3">
                        <p className="text-gray-600">Monthly Price</p>
                        <p className="font-semibold">$5.99</p>
                    </div>
                </div>

                <div className="border-b py-4 flex text-red items-center">

                    <div className="w-6 h-6 rounded-full text-sm bg-cyan-500 flex items-center">
                        <CheckIcon color="white" width={20} fontWeight={900} />
                    </div>

                    <div className="ml-3">
                        <p className="text-gray-600">Downloads</p>
                        <p className="font-semibold">Included</p>
                    </div>
                </div>

                <div className="border-b py-4 flex text-red items-center">

                    <div className="w-6 h-6 rounded-full text-sm bg-gray-400 flex items-center">
                        <XMarkIcon color="gray" width={25} fontWeight={900} />
                    </div>

                    <div className="ml-3">
                        <p className="text-gray-600">South Park</p>
                        <p className="font-semibold">Not Included</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default PlanCard;