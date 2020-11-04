import axios from "axios";
import shows from "../data/showNums";

export const LOAD_GAME = "LOAD_GAME";
export const NEW_Q = "NEW_QUESTION";

export const loadGame = () => dispatch => {
  const randomNum = Math.floor(Math.random() * 3641);
  const showNum = shows[randomNum];
  return axios.get(`http://jservice.io/api/clues/?count=100`)
    .then(res=> {
      const action = {type: LOAD_GAME, payload: res.data}
      dispatch(action);
    })
    .catch(err=>console.log(err));
}

export const newQuestion = value => {
  return {type: NEW_Q, payload: value};
}
