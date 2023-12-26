import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Movie } from "../types";

//! Define an interface for the state, specifying the shape of the data.
interface State {
  data: Movie[] | null;
  error: string | null;
  loading: boolean;
}

//! Initialize the state with default values.
const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

//! Enum to define action types for the reducer.
enum ActionType {
  LOADING,
  SUCCESS,
  FAILED,
}

//! Define action types using a union of possible actions.
type Action =
  | { type: ActionType.LOADING }
  | { type: ActionType.SUCCESS; payload: Movie[] }
  | { type: ActionType.FAILED; payload: string };

//! Reducer function to handle state updates based on actions.
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FAILED:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    case ActionType.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return initialState;
  }
};

//! Custom hook 'useMoviesList' for managing movie list state:
const useMoviesList = (offset: number) => {
  //! Use the 'useReducer' hook with the defined reducer and initial state:
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //! check offset
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetchMovieList();
  }, [offset]);

  //! fetching data:
  const fetchMovieList = async () => {
    if (data && count && data.length) return;
    dispatch({ type: ActionType.LOADING });

    try {
      const response = await axios.get(
        `http://localhost:4000/movies/list?offset=${offset}`
      );
      console.log(response);

      //! pagination solution
      const movieData = data
        ? [...data, ...response.data.movies]
        : response.data.movies;
      setCount(response.data.const);

      dispatch({ type: ActionType.SUCCESS, payload: movieData });
    } catch (error) {
      dispatch({
        type: ActionType.FAILED,
        payload: "Something went wrong! TRY AGAIN LATER",
      });
    }
  };
  //! Return the state values for external use:
  return { data, loading, error };
};

export default useMoviesList;
