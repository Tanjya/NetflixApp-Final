import { useCallback, useRef, useState } from "react";
import BillboardPage from "../components/BillboardPage";
import NavBar from "../components/NavBar";
import useMoviesList from "../hooks/useMoviesList";
import MovieList from "./MovieList";

const BrowserPage = () => {
  //!pagination
  const [offset, setOffset] = useState(0);

  const { data, loading, error } = useMoviesList(offset);

  //! observer
  const observer = useRef<null | IntersectionObserver>(null);

  //! last observer option
  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setOffset(offset + 12);

          console.log("Intersecting");
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, offset]
  );

  return (
    <div>
      <NavBar />
      <BillboardPage />
      <div className="pb-5">
        {loading ? <p>Loading ...</p> : null}
        {error ? <p>{error}</p> : null}
        {data ? (
          <MovieList movies={data} lastElementRef={lastElementRef} />
        ) : null}
      </div>
    </div>
  );
};

export default BrowserPage;
