<template>

  <h1 class="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">
    Just ask away!
  </h1>

  <p class="mt-1 text-lg text-gray-500">
    Ask your question and you will get an answer
  </p>

  <base-form 
    v-if="show_form" 
    name="question" 
    label="Question" 
    @submit="submit"
    @close="show_form = false" />

  <div v-else>
    <p class="mt-1 text-gray-400">
      Click 
      <a href="#" @click.prevent="show_form = true" class="text-blue-500">here</a> 
      to ask a question.
    </p>

    <questions-list />
  </div>

</template>

<script setup>
import BaseForm from "./Form.vue";
import QuestionsList from "./QuestionsList.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const show_form = ref(false);

const submit = (form) => {
  store.dispatch('questions/setQuestions', form);
  show_form.value = false
}

</script>
