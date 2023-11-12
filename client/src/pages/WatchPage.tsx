import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import useMovie from "../hooks/useMovie";
import { useNavigate, useParams } from "react-router-dom";

const WatchPage = () => {
    //! getting id for individual movie
    const param = useParams() as { id: string }
    // console.log(param);

    //! use that id for playing each one
    const { data, loading, error } = useMovie(param.id);
    // console.log(data, loading, error);
    //! back previous page
    const navigate = useNavigate();

    //! showing loading
    if (loading) return <pre>Loading...</pre>

    //! showing error
    if (error || !data) return <pre>{error}</pre>

    //! showing data
    const { title, videoUrl } = data

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-80">

                <ArrowLeftIcon className="w-10 text-white cursor-pointer hover:opacity-80 transition" onClick={() => navigate("/browse")} />

                <p className="text-white text-3xl font-bold">
                    <span className="font-light">Watching:</span> {title}
                </p>
            </nav>
            <iframe className="h-full w-full"
                src={videoUrl}
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
            ></iframe>
        </div>
    );
};

export default WatchPage;