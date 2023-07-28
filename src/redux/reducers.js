// redux/reducers.js
const initialState = {
  doctors: [], // Initialize doctors array
  searchTerm: "", // Initialize search term
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOCTORS_SUCCESS":
      return {
        ...state,
        doctors: action.payload,
      };
    case "GET_DOCTORS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload, // Update the search term in the state
      };
    case "SEARCH_DOCTORS":
      const filteredDoctors = state.doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        doctors: filteredDoctors, // Update the doctors list with filtered results
      };
    default:
      return state;
  }
};

export default rootReducer;
