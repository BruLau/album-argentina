import axios from "axios";

export const GET_BY_CITY = " GET_BY_CITY";

// export function getLodgings(lodgingId) {
//   return async function (dispatch) {
//     try {
//       const json = await axios.get("/api/lodging");

//       dispatch({
//         type: "GET_LODGINGS",
//         payload: json.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

export function getQuiz(payload) {
    return async function (dispatch) {
      try {
        const res = await axios.get("/api/quiz/" + payload);
        console.log(res)
        return dispatch({
          type: "GET_QUIZ",
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
