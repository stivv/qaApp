import { createStore } from "vuex";
import questions from "./questions";

const store = createStore({
  modules: {
    questions
  }
})

export default store;