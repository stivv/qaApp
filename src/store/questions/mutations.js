export default {
  setQuestions: (state, payload) => {
    if(payload['id']){
      return;
    }
    
    let obj = Object.assign(
      {}, 
      {question: payload.question}, 
      { id: state.questions.length+1, responses: []}
    )
    
    state.questions = [obj, ...state.questions]
  },
  setQuestion: (state, payload) => {
    state.question = state.questions.find(i => parseInt(i.id) === parseInt(payload))
  }
}