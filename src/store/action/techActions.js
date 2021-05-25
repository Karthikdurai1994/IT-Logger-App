import {
  ADD_TECH,
  DELETE_TECH,
  GET_TECHS,
  SET_LOADING_TECH,
  TECHS_ERROR,
} from "../constant/types";

// Get Technician
const getTechnician = () => async (dispatch) => {
  try {
    setLoading()(dispatch);
    const res = await fetch("/technicians");
    const data = await res.json();
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};
// Add Technician
const addTechnician = (tech) => async (dispatch) => {
  try {
    setLoading()(dispatch);
    const res = await fetch("/technicians", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Delete Technician
const deleteTechnician = (id) => async (dispatch) => {
  try {
    setLoading()(dispatch);
    await fetch(`/technicians/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Set Loading
const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING_TECH,
  });
};

const allTechActions = {
  getTechnician,
  setLoading,
  addTechnician,
  deleteTechnician,
};

export default allTechActions;
