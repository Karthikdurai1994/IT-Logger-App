import {
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING_TECH,
  TECHS_ERROR,
} from "../constant/types";
import allInitialState from "../initialState";

// Getting techInitialState
const { techInitialState } = allInitialState;

const techReducer = (state = techInitialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((t) => {
          return t.id !== action.payload;
        }),
        loading: false,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_LOADING_TECH:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default techReducer;
