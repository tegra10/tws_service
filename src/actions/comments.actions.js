// import axios from "axios";

// export const GET_COMMENTS = "GET_COMMENTS";
// export const ADD_COMMENT = "ADD_COMMENT";

// export const getComments = () => {
//   return (dispatch) => {
//     return axios.get(`http://localhost:5000/get/comment`).then((res) => {
//       dispatch({ type: GET_COMMENTS, payload: res.data });
//     });
//   };
// };

// export const addComment = (data) => {
//   return (dispatch) => {
//     return axios
//       .post(`http://localhost:5000/post/comment`, data)
//       .then(() => {
//         dispatch({ type: ADD_COMMENT, payload: data });
//       })
//       .catch((err) => console.log(err));
//   };
// };
