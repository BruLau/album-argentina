import Swal from "sweetalert";

const initialState = {
  lodgings: [],

};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LODGINGS":
      if (state.lodgingsInitial[0] !== undefined) {
        return {
          ...state,
          lodgings: action.payload,
          allLodgings: action.payload,
          loader: false,
        };
      } else {
        return {
          ...state,
          lodgings: action.payload,
          allLodgings: action.payload,
          lodgingsInitial: action.payload,
          loader: false,
        };
      }


    default:
      return { ...state };
  }
}

export default rootReducer;
