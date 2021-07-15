import { createRouter, createWebHistory } from "vue-router";
import QuestionsView from "./components/QuestionsView.vue";
import Questions from "./components/Questions.vue";

const routes = [
  {
    path: '/',
    name: 'questions',
    component: Questions
  },
  {
    path: '/question/:id',
    name: 'view-question',
    component: QuestionsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;