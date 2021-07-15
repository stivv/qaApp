<template>
  <div class="mt-10">
    <h1 class="text-xl font-extrabold text-gray-900 tracking-tight">
      Questions:
    </h1>
    <ul class="ml-3">
      <li class="text-gray-500 py-2">
        What is a question?
        <div class="ml-3 mt-1">
          <router-link
            to="/question"
            class="text-sm text-blue-500 tracking-tight" 
            @click.prevent
          >
            View responses/Answer
          </router-link>
          <span class="text-sm ml-2 text-gray-400 tracking-tight">(0) responses</span>
        </div>
        <hr class="my-2">
      </li>
    </ul>
  </div>
</template>