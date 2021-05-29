import axios from "axios";
import { VIEW_BRANCHES, BRANCHES_ERROR } from "./types";

//Get everybody's marks
export const getMarks = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/marks");

    dispatch({
      type: VIEW_BRANCHES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BRANCHES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add marks for a new user
export const addMarks = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/marks", formData);

    dispatch({
      type: VIEW_BRANCHES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BRANCHES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
