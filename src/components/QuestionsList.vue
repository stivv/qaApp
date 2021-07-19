<template>
  <div class="mt-10">
    <h1 class="text-xl font-extrabold text-gray-900 tracking-tight">
      Questions:
    </h1>
    <ul class="ml-3">
      <li 
        v-for="question in questions"
        :key="question.id"
        class="text-gray-500 py-2"
      >
        {{ question.question }}
        <div class="ml-3 mt-1">
          <router-link
            :to="{name: 'view-question', params: {id: question.id}}"
            class="text-sm text-blue-500 tracking-tight" 
            @click.prevent
          >
            View responses/Answer
          </router-link>
          <span class="text-sm ml-2 text-gray-400 tracking-tight">({{question.responses.length}}) responses</span>
          <a class="text-sm ml-2 text-blue-500 tracking-tight" @click.prevent="deleteQuestion(question.id)">Delete</a>
        </div>
        <hr class="my-2">
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const questions = computed(() => store.getters['questions/getQuestions']);

const deleteQuestion = (question) => {
  store.dispatch('questions/deleteQuestion', question)
}
</script>