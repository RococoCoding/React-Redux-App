import {NEW_Q, LOAD_GAME} from "../actions/actions";

const initialState = {
  questions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_GAME: 
      let fullQuestions = action.payload.filter(question => question.question !== "");
      let gameSet = fullQuestions.slice(0, 61);
      return {...state, questions: gameSet};
    case NEW_Q: 
      return state;
    default: return state;
  }
}

export default reducer;


      
      // function filter(array, property) {
      //   return array.reduce(function (acc, obj) { //sorts questions into obj with rounds as keys
      //     let key = obj[property];
      //     if (!acc[key]) {
      //       acc[key] = {questions: [],
      //       categories: [],}
      //     }
      //     acc[key].questions.push(obj); //push objects into a questions array
      //     if (!acc[key].categories.includes(obj.Category)) { //add Category to categories key if it isn't already in there
      //       acc[key].categories.push(obj.Category);
      //     }
      //     return acc;
      //   }, {});
      // };
      // let byRounds = filter(action.payload, "Round");

      // console.log(byRounds)
      // let allQs = [];
      // for (let i in byRounds) { //for each round...
      //   byRounds[i].sort(el=>{

      //   })
      // }