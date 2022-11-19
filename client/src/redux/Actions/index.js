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
    
        var pregRamdom = res.data[Math.floor(Math.random() * res.data.length)]
      
        let arrObj = Object.values(pregRamdom)
        let cont = 0;
        var arrOrd =[]
        for(let i= 2; i<6;i++ ){
            arrOrd[cont] = arrObj[i]
            cont++
        }
        var arrDesord =[]
        arrDesord = arrOrd.sort(function() { return Math.random() - 0.5 });
        console.log(arrDesord)
        console.log("final")
        return dispatch({
          type: "GET_QUIZ",
          payload: [pregRamdom,arrDesord ],
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
