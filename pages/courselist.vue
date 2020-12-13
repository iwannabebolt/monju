<template>
  <div class="bg-gray-800 w-screen h-screen">
    <div class='py-5 px-16 flex justify-center'>
      <a href="https://ibb.co/Z1JhyQz"><img src="https://i.ibb.co/0VXfP0y/logo2.png" alt="logo2" border="0"></a>
    </div>
    <div class="font-semibold text-white text-3xl flex justify-center py-4">
      Add Course
    </div>

    <div class="w-1/3 m-auto justify-center">
      <label class="text-lg title-font text-white tracking-widest">
            Course Code :
      </label>
      <input  v-model="coursecode" placeholder="coursecode" style ="width: 250px; height:50px;">
      <button
            class="w-20 text-center text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 mt-2 rounded focus:outline-none focus:shadow-outline"
            @click="searchcourse(coursecode)">
            Search
      </button>
    </div>
    
    <div class="font-semibold text-white text-3xl flex justify-center py-4">
      Course Name
    </div>
    <div class="w-1/4 m-auto">
      <label class="text-lg title-font text-white tracking-widest">
            
            {{state.result}}
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
    const state=reactive({
      result:""
    })
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        userData.id = user.uid
        userData.email = user.email
      } else {
        // No user is signed in.
      }
    })
  function searchcourse(coursecode:string){
    console.log(coursecode)
    var array={'TAL:W401':'Introduction to Leadership','TAL.W602':'Practical Group Work for Leadership 1'}
      for(var key of Object.keys(array)){

          // 連想配列のキーと配列の値が一致するか検索
              if(key == coursecode){
                  state.result= array[key]; // 連想配列に格納
                  console.log(state.result)
                      break;   
                  }
      }
  }
  return {
    searchcourse,
    state
    }
  }
})
</script>
