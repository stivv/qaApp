<template>
  <router-link
    to="/"
    class="text-blue-500"
  >
    All questions
  </router-link>

  <h4 class="text-lg font-extrabold text-gray-900 mt-5 tracking-tight">{{ question.question }}</h4>
  
  <h5 class="text-md text-gray-600 mt-5 tracking-tight">
    Responses:
    <a href="#" class="text-xs ml-4 text-blue-500" @click.prevent>Respond</a>
  </h5>
  <ul v-if="question.responses.length" class="ml-3">
    <li 
      v-for="response in question.responses" 
      :key="response.id"
      class="mt-3 text-gray-500"
    >
      {{response.response}}
      <hr class="my-2">
    </li>
  </ul>
  <p v-else class="text-sm mt-2 text-gray-500">No responses found.</p>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore()
const route = useRoute()

const question = computed(() => store.getters['questions/getQuestion'])

onBeforeMount(() => store.dispatch('questions/setQuestion', route.params.id))
</script>