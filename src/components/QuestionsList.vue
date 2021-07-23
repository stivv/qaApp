<template>
  <div class="mt-10">
    <h1 class="text-xl font-extrabold text-gray-900 tracking-tight">
      Questions:
    </h1>

    <base-form 
      v-if="show_form" 
      name="question" 
      label="edit question"
      :editable-id="edit_question"
      :value="question_val"
      @submit="editQuestion"
      @close="show_form = false" />

    <ul class="ml-3" v-else>
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
          <a class="text-sm ml-2 text-blue-500 tracking-tight" @click.prevent="show_form = true; question_val = question.question; edit_question = question.id">Edit</a>
          <a class="text-sm ml-2 text-blue-500 tracking-tight" @click.prevent="deleteQuestion(question.id)">Delete</a>
        </div>
        <hr class="my-2">
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import BaseForm from "./Form.vue";

const store = useStore();

const show_form = ref(false)
const edit_question = ref(false)
const question_val = ref(false)

const questions = computed(() => store.getters['questions/getQuestions']);

const editQuestion = (form) => {
  store.dispatch('questions/editQuestion', form);
  edit_question.value = false;
  question_val.value = false;
  show_form.value = false;
}

const deleteQuestion = (question) => {
  store.dispatch('questions/deleteQuestion', question)
}
</script>