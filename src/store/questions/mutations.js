export default {
  setQuestions: (state, payload) => {
    state.questions = payload
  },
  setQuestion: (state, payload) => {
    state.question = state.questions.find(i => parseInt(i.id) === parseInt(payload))
  }
}