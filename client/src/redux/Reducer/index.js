import Swal from "sweetalert";
import axios from "axios";
const initialState = {
  lodgings: [],
quiz:[],
desordenado: [],
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
      case "GET_QUIZ":
        return {
          ...state,
          quiz: action.payload,
        };

    default:
      return { ...state };
  }
}

export default rootReducer;
