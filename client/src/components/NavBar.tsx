import { useEffect, useState } from "react";
import Logo from "../assets/frontPageLogo.png"
const tabs = [
    "Home",
    "Series",
    "Films",
    "My List",
    "Browse by Language"
]
const NavBar = () => {

    const [showBackground, setShowBackground] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            // console.log(window.scrollY)
            if (window.scrollY > 600) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        })
    }, [])

    return (
        <nav className="w-full fixed z-40">
            <div className={`px-16 py-6 flex items-center ${showBackground ? "bg-black bg-opacity-90" : null}`}>

                <img className="h-10" src={Logo} alt="Logo" />
                <div className="flex gap-7 ml-8">
                    {
                        tabs.map((tab) => (
                            <div key={tab}
                                className="text-white hover:text-gray-300 cursor-pointer">
                                <p>{tab}</p>
                            </div>
                        ))
                    }
                </div>
                <button className="bg-red-700 text-white px-4 text-sm py-2 rounded">
                    Sign In
                </button>

            </div>
        </nav>
    );
};

export default NavBar;