import axios from "axios";
import { VIEW_BRANCHES, BRANCHES_ERROR } from "./types";

//Get branches based on search
export const getBranches = (search) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/branches?q=${search}`);

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
