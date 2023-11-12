import { useState } from "react";
import BillboardPage from "../components/BillboardPage";
import NavBar from "../components/NavBar";
import useMoviesList from "../hooks/useMoviesList";
import MovieList from "./MovieList";

const BrowserPage = () => {
    //!pagination
    const [offset, setOffset] = useState(12);

    const { data, loading, error } = useMoviesList(offset);
    // console.log({ data, loading, error })
    return (
        <div>
            <NavBar />
            <BillboardPage />
            <div className="pb-5">
                {loading ? <p>Loading ...</p> : null}
                {error ? <p>{error}</p> : null}
                {data ? <MovieList movies={data} /> : null}
            </div>
        </div>
    );
};

export default BrowserPage;