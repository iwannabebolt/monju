<template>
  <div class="bg-gray-800 w-screen h-screen">
     
    <div class='py-10 px-12 flex justify-center'>
      <img src="https://i.ibb.co/0VXfP0y/logo2.png" alt="logo2" border="0">
    </div>
      <div class="font-semibold text-white text-3xl flex justify-center">Log In</div>
    <div class="signin">
      <input
        v-model="state.email"
        type="text"
        required="true"
        placeholder="email"
      />
      <input
        v-model="state.password"
        type="password"
        required="true"
        placeholder="Password"
      />
      <div class="text-white flex justify-center">If you don't have an account, please sign up &nbsp <a href="/signup"><b>here</b></a>.</div>

      <button
        class="text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 mt-2 rounded focus:outline-none focus:shadow-outline flex items-center"
        @click="submit"
      >
        Log In
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'
import PageHeading from '@/components/page-heading.vue'
import firebase from '@/plugins/firebase.ts'

export default defineComponent({
  components: {
    PageHeading,
  },
  setup(props) {
    const state = reactive({
      email: '',
      password: ''
    })
    function submit() {
      firebase.auth().signInWithEmailAndPassword(state.email, state.password)
      .then(() => (location.href = '/'))
      .catch(function(error) {
        // Handle Errors here.
        alert('Fail sign in. '+ error.message)
      });
    }
    return {
      props,
      state,
      submit,
    }
  },
})
</script>
<style scoped>
.signin {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px;
  padding: 10px;
  border-width: 1px;
  border-color: #000000;
  border-radius: 6px;
  width: 20%;
}
</style>
