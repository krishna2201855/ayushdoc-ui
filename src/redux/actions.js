import axios from "axios";
import doctors from "../data/doctors.json"

export const setSearchTerm = (term) => ({
    type: "SET_SEARCH_TERM",
    payload: term,
  });
  
  export const setDoctors = (doctors) => ({
    type: "SET_DOCTORS",
    payload: doctors,
  });

  export const searchDoctors = (searchTerm) => ({
    type: "SEARCH_DOCTORS",
    payload: searchTerm,
  });



export const getDoctors = () => async (dispatch) => {
  try {
    const response = doctors; // Adjust the path based on your project setup
    console.log(3, response);
    dispatch({ type: "GET_DOCTORS_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "GET_DOCTORS_ERROR", payload: error.message });
  }
};
