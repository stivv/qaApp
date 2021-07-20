<template>
  <form @submit.prevent="$emit('submit', form)" class="mt-4">
    <label :for="name">{{label}}</label>
    <br>
    <textarea 
      :name="name" 
      :id="name" 
      v-model="form[name]" 
      cols="30" 
      rows="10"
      class="border border-gray-300"></textarea>
    <br>
    <button type="submit" class="bg-blue-500 text-blue-100 py-1 px-3 rounded">Submit</button>
    <button type="button" class="bg-gray-400 text-gray-900 ml-2 py-1 px-3 rounded" @click="$emit('close')">Cancel</button>
  </form>
</template>

<script setup>
import { defineProps, defineEmits, reactive, toRefs } from "vue";
import { useStore } from "vuex";

const store = useStore();

const emit = defineEmits(['close', 'submit'])

const props = defineProps(['name', 'label'])

const { name, label } = toRefs(props)

const form = reactive({})

</script>
