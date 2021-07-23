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
    <a href="#" class="text-xs ml-4 text-blue-500" @click.prevent="show_respond_form = true">Respond</a>
  </h5>

  <base-form 
    v-if="show_respond_form" 
    name="response" 
    label="Type your response"
    :value="response_val"
    :editableId="edit_response"
    @submit="submit"
    @close="show_respond_form = false" />
  
  <template v-else>
    <ul v-if="question.responses.length" class="ml-3">
      <li 
        v-for="response in question.responses" 
        :key="response.id"
        class="mt-3 text-gray-500"
      >
        {{response.response}}
        <a class="text-sm ml-2 text-blue-500 tracking-tight" @click.prevent="show_respond_form = true; response_val = response.response; edit_response = question.id">Edit</a>
        <a 
          href="#" 
          class="text-xs ml-4 text-blue-500"
          @click.prevent="$store.dispatch('questions/deleteResponse',{question: question.id, response: response.id})"
        >
          Delete
        </a>

        <hr class="my-2">
      </li>
    </ul>
    <p v-else class="text-sm mt-2 text-gray-500">No responses found.</p>
  </template>

</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import BaseForm from './Form.vue'

const store = useStore()
const route = useRoute()

const show_respond_form = ref(false)
const response_val = ref(false)
const edit_response = ref(false)

const question = computed(() => store.getters['questions/getQuestion'])

const submit = (form) => {
  if(form['id']){
    store.dispatch('questions/editResponse', Object.assign(form, {question: route.params.id}));
  }else {
    let obj = {id: route.params.id, response: form.response};
  
    store.dispatch('questions/addResponse', obj);
  }

  show_respond_form.value = false;
  response_val.value = false;
  edit_response.value = false;

}

onBeforeMount(() => store.dispatch('questions/setQuestion', route.params.id))
</script>