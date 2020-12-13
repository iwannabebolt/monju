<template>

  <div class="bg-gray-800 w-screen h-screen overflow-y-scroll">
  
    <div class='py-5 px-16 flex justify-center'>
      <img src="https://i.ibb.co/0VXfP0y/logo2.png" alt="logo2" border="0">
           
    </div>
      <div class="font-semibold text-white text-3xl flex justify-center">Edit Profile</div>
    
    <div class="w-1/4 m-auto">
      <label class="text-lg title-font text-white tracking-widest">
            Name
      </label> 
      <textarea
          v-model="userData.name"
          class="w-full h-12 px-2 py-1 text-blue-900 text-2xl title-font mb-1">
      </textarea>
      <label class="text-lg title-font text-white tracking-widest">
            Role
      </label>         
          <div class="relative">
            <select
              v-model="userData.role"
              class="appearance-none bg-white text-blue-900 w-full border py-3 px-4 pr-8 rounded focus:outline-none"
            >
              <option value="Prof">Professor</option>
              <option value="Stud">Student</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
      <label class="text-lg title-font text-white tracking-widest">
            School
      </label>
          <div class="relative">
            <select
              v-model="userData.profile.School"
              class="appearance-none bg-white text-blue-900 w-full border py-3 px-4 pr-8 rounded focus:outline-none"
            >
              <option value="science">School of Science</option>
              <option value="engineering">School of Engineering</option>
              <option value="MCT">School of Materials and Chemical Technology</option>
              <option value="computing">School of Computing</option>
              <option value="LST">School of Life Science and Technology</option>
              <option value="ES">School of Environment and Society</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
      <label class="text-lg title-font text-white tracking-widest">
            Major
      </label> 
      <textarea
          v-model="userData.profile.Major"
          class="w-full h-12 px-2 py-1 text-blue-900 text-2xl title-font mb-1">
      </textarea>
      <label class="text-lg title-font text-white tracking-widest">
            Grade
      </label>
        <div class="relative">
            <select
              v-model="userData.profile.Grade"
              class="appearance-none bg-white text-blue-900 w-full border py-3 px-4 pr-8 rounded focus:outline-none"
            >
              <option value="B1">Freshman</option>
              <option value="B2">Sophomore</option>
              <option value="B3">Junior</option>
              <option value="B4">Senior</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
      <label class="text-lg title-font text-white tracking-widest">
            Self Introduction
      </label> 
      <textarea
          v-model="userData.comment"
          class="w-full h-24 px-2 py-1 text-blue-900 text-xl title-font mb-1">
      </textarea>
  <div class="text-center">
  <button
        class="w-20 text-center text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 mt-2 rounded focus:outline-none focus:shadow-outline"
        @click="setProfile"
      >
        Save
  </button>
  </div>
    </div>    
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'
import firebase from '@/plugins/firebase.ts'
type User = {
  id: string
  name: string
  email: string
  role: string
  comment: string
  profile: {
    School: string
    Major: string
    Grade: string
  }
}
export default defineComponent({
  components: {
     },
  setup(_, { root }: SetupContext) {
    const userData = reactive<User>({
      id: '',
      name: '',
      email: '',
      role: '',
      comment: '',
      profile: {
        School: '',
        Major: '',
        Grade: '',
      },
    })
  firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        userData.id = user.uid
        userData.email = user.email
        getUserData(user)
      } else {
        // No user is signed in.
      }
    })
    const getUserData = (user) => {
      firebase
        .firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            userData.name = doc.data().name
            userData.role = doc.data().role
            userData.profile = doc.data().profile
            userData.comment = doc.data().comment
          }
        })
        .catch((err) => {
          console.log('Error getting user document', err);
        })
    }
    const changeName = (name) => {
      userData.name = name
    }
    
    const setProfile = (): void => {
      const data = {
        name: userData.name,
        email: userData.email,
        role: userData.role,
        comment: userData.comment,
        profile: userData.profile,
      }
      firebase
        .firestore()
        .collection('users') // usersコレクションの、
        .doc(userData.id) // <ユーザーID>というドキュメントに、
        .set(data) // dataをセットする
        .then(() => {
          window.location.href = '/' // 完了後、プロフィール画面へ遷移
        })
    }
    return {
      userData,
      setProfile,
      changeName,
    }
  },
})
</script>
