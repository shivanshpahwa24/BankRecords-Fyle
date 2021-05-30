import axios from "axios";
import { VIEW_BRANCHES, BRANCHES_ERROR, FAVOURITE_BRANCH } from "./types";

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

//Save a branch as favourite
export const saveBranch = (favouriteData) => async (dispatch) => {
  try {
    var favouritesData = [];
    favouritesData = JSON.parse(localStorage.getItem("favourites")) || [];
    favouritesData.push(favouriteData);
    localStorage.setItem("favourites", JSON.stringify(favouritesData));

    dispatch({
      type: FAVOURITE_BRANCH,
    });
  } catch (err) {
    dispatch({
      type: BRANCHES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
