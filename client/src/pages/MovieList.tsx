import MovieCard from "../components/MovieCard";
import { Movie } from "../types";

const MovieList = ({
  movies,
  lastElementRef,
}: {
  movies: Movie[];
  lastElementRef: (node: HTMLDivElement) => void;
}) => {
  return (
    <div className="px-12 mt-4 space-y-8 bg-black">
      <div>
        <p className="text-white text-2xl font-semibold mb-4">Popular Show</p>

        <div className="flex flex-wrap gap-2 justify-between">
          {movies.map((movie, ind) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              lastElementRef={movies.length === ind + 1 ? lastElementRef : null}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
