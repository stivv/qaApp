export default {
  setQuestions: ({commit}, payload) => {
    commit('setQuestions', payload)
  },
  setQuestion: ({commit}, payload) => {
    commit('setQuestion', payload)
  },
  editQuestion: ({commit}, payload) => {
    commit('editQuestion', payload)
  },
  deleteQuestion: ({commit}, payload) => {
    commit('deleteQuestion', payload)
  },
  addResponse: ({commit}, payload) => {
    commit('addResponse', payload)
  },
  deleteResponse: ({commit}, payload) => {
    commit('deleteResponse', payload)
  },
}