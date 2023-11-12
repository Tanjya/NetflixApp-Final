import southPark from "../assets/southPark.mp4"
import BillboardButton from "./BillboardButton";
const BillboardPage = () => {
    return (
        <div className="relative h-screen">
            <video src={southPark} className="h-full w-full object-cover brightness-[60%] transition duration-500" autoPlay muted loop></video>

            <div className="absolute top-[40%] ml-14">
                <h1 className="text-5xl text-white mt-8 mb-5 drop-shadow-x">South Park</h1>

                <div className="flex items-center mt-4 gap-3">
                    <BillboardButton text="Play" theme="light" />
                    <BillboardButton text="More Info" theme="dark" />
                </div>
            </div>
        </div>
    );
};

export default BillboardPage;