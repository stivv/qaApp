<template>

  <h1 class="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">
    Just ask away!
  </h1>
  
  <p class="mt-1 text-lg text-gray-500">
    Ask your question and you will get an answer
  </p>
  
  <p class="mt-1 text-gray-400">
    Click 
    <a href="#" class="text-blue-500">here</a> 
    to as a question.
  </p>

  <question-list />

</template>

<script setup>
import QuestionList from './QuestionList.vue'

</script>
