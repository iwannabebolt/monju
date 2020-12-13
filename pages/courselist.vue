<template>
  <div class="bg-gray-800 w-screen h-screen">
    <div class='py-5 px-16 flex justify-center'>
      <a href="https://ibb.co/Z1JhyQz"><img src="https://i.ibb.co/0VXfP0y/logo2.png" alt="logo2" border="0"></a>
    </div>
    <div class="font-semibold text-white text-3xl flex justify-center py-4">
      Add Course
    </div>

    <div class="w-1/4 m-auto justify-center">
      <label class="text-lg title-font text-white tracking-widest">
            Course Code :
      </label>
      <input  v-model="code" placeholder="coursecode" style ="width: 200px; height:50px;">
      <button
            class="w-20 text-center text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 mt-2 rounded focus:outline-none focus:shadow-outline"
            @click="searchcourse">
            Search
      </button>
    </div>
    
    <div class="font-semibold text-white text-3xl flex justify-center py-4">
      Course Name
    </div>
    <div class="w-1/4 m-auto">
      <label class="text-lg title-font text-white tracking-widest">
            Here should be the course name
      </label>
    
    </div>
    <div class='text-center'>   
      <button
            class="w-20 text-center text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 mt-2 rounded focus:outline-none focus:shadow-outline"
            @click="addcourse">
            Add
      </button>
    </div>      
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'
import firebase from '@/plugins/firebase.ts'

export default defineComponent({
  setup(_, { root }: SetupContext) {
    
    var array={'TAL:W401':'Introduction to Leadership','TAL.W602':'Practical Group Work for Leadership 1'}
    Object.keys(array).forEach(function(value) {
 
    console.log( value + '：' + this[value] );
 
}, array)



    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        userData.id = user.uid
        userData.email = user.email
      } else {
        // No user is signed in.
      }
    })
  function searchcourse(code:string,dict:{}){
      
  }
  }
})  
</script>
