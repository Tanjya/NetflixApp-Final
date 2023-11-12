import MovieCard from "../components/MovieCard";
import { Movie } from "../types";

const MovieList = ({ movies }: { movies: Movie[] }) => {
    return (
        <div className="px-12 mt-4 space-y-8">
            <div>
                <p className="text-black text-2xl font-semibold mb-4">
                    Popular Show
                </p>

                <div className="flex flex-wrap gap-2 justify-between">
                    {
                        movies.map(movie =>
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />)}
                </div>
            </div>

        </div>
    );
};

export default MovieList;