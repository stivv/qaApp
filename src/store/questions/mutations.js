export default {
  setQuestions: (state, payload) => {
    if(payload['id']){
      state.questions = state.questions.map(i => {
        if(i.id === payload['id'])
          i = payload;
        return i;
      })
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
  },

  deleteQuestion: (state, payload) => {
    state.questions = state.questions.filter(i => i.id !== payload)
  },

  addResponse: (state, payload) => {
    let question = state.questions.find(i => parseInt(i.id) === parseInt(payload))
    let response = {id: question.response.length + 1, response: payload.response}
    question.responses = [response, ...question.responses];

    state.questions = state.questions.map(i => {
      if(i.id === question.id)
        i = question;
      return i;
    });

    state.question = question;
  }
}