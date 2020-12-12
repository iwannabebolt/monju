<template>
    <div class="font-sans antialiased w-screen h-screen flex">
    <!--ここから下がヘッダー-->
    <div class="bg-gray-800 text-purple-lighter flex-none w-100 pb-6 hidden md:block">
        <div class="text-white mb-2 mt-3 px-4 flex justify-between">
            <div class="flex-auto">
                <h1 class="font-semibold text-xl leading-tight mb-1 truncate">Monju CSS</h1>
                <div class="flex items-center mb-6">
                    <span class="bg-green rounded-full block w-2 h-2 mr-2"></span>
                    <span class="text-white opacity-50 text-sm">Yamashita</span>
                </div>
            </div>
            <div>
                <svg class="h-6 w-6 fill-current text-white opacity-25" viewBox="0 0 20 20">
                    <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fill-rule="evenodd" />
                </svg>
            </div>
        </div>
        <div class="mb-8">
            <div class="px-4 mb-2 text-white flex justify-between items-center">
                <div class="opacity-75"> 
                    <details>
                        <summary>
                            Programming Boot Camp
                            <svg class="inline-flex w-6 h-6 text-white left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </summary>
                        <div class="bg-teal-dark py-1 px-10 text-white"># In the class</div>
                        <div class="py-1 px-10 text-white"># Qestions to Professor</div>
                        <div class="py-1 px-10 text-white"># Discussion with students</div>
                    </details>
                </div>            
            </div>
            <div class="px-4 mb-2 text-white flex justify-between items-center">
                <div class="opacity-75"> 
                    <details>
                        <summary>
                            Professional and Value Creation
                            <svg class="inline-flex w-6 h-6 text-white right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </summary>
                        <div class="py-1 px-10 text-white"># In the class</div>
                        <div class="py-1 px-10 text-white"># Qestions to Professor</div>
                        <div class="py-1 px-10 text-white"># Discussion with students</div>
                    </details>
                </div>            
            </div>
            <div class="px-4 mb-2 text-white flex justify-between items-center">
                <div class="opacity-75"> 
                    <details>
                        <summary>
                            A monkey can understand the central limit theorem
                            <svg class="inline-flex w-6 h-6 text-white right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </summary>
                        <div class="py-1 px-10 text-white"># In the class</div>
                        <div class="py-1 px-10 text-white"># Qestions to Professor</div>
                        <div class="py-1 px-10 text-white"># Discussion with students</div>
                    </details>
                </div>            
            </div>
        </div>
        
    </div>
    <!-- Chat content -->
    <div class="flex-1 flex flex-col bg-gray-900 overflow-hidden">
        <!-- Top bar -->
        <div class="border-b flex px-6 py-2 items-center flex-none">
            <div class="flex flex-col">
                <h3 class="text-white mb-1 font-extrabold">#In the class</h3>
                <div class="text-grey text-sm truncate">
                    Ask anything you want
                </div>
            </div>
            <!--これがSearchのとこ <div class="ml-auto hidden md:block">
                <div class="relative">
                    <input type="search" placeholder="Search" class="appearance-none border border-grey rounded-lg pl-8 pr-4 py-2">
                    <div class="absolute pin-y pin-l pl-3 flex items-center justify-center">
                        <svg class="fill-current text-grey h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                        </svg>
                    </div>
                </div>
            </div> -->
        </div>
        <!-- Chat messages -->
        <div class="px-6 py-4 flex-1 overflow-y-scroll">
            <!-- A message v-for 使ってmessagesのデータをmessageという新規変数に組み込まないと取り出せない.
            v-forを使って、messageにstateの中のmessagesデータを入れる。
            messageIdには、長いIDが入る。
            またv-forを使っているので、messages(元データ)に新規メッセージが追加されれば、それも自動的に繰り返され、表示される。
            -->
            <div
              v-for="(message, messageId) in state.messages"
              :key="messageId"
              class="flex items-start mb-4 text-sm">
                <!--<img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" class="w-10 h-10 rounded mr-3"> -->
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="text-white font-bold">{{ message.author_name }}</span>
                        <span class="text-grey text-xs">{{ unixtimeToString(message.created_at) }}</span>
                    </div>
                    <p class="text-white leading-normal">{{ message.message_text }}</p>
                    <div>
                    <svg class="fill-current text-white h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                    </svg>
                    </div>
                </div>
            </div>
            <div class="flex items-start mb-4 text-sm">
                <!--<img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" class="w-10 h-10 rounded mr-3"> -->
                <div class="flex-1 overflow-hidden">
                    <div>
                        <span class="text-white font-bold">Monju (Simple sentense)</span>
                        <span class="text-grey text-xs">12/11 11:46</span>
                    </div>
                    <p class="text-white leading-normal">We are three </p>
                    <div class="text-white">
                         {{state.messages}}
                    </div>
                    <div>
                    <svg class="fill-current text-white h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                    </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-6 px-4 flex-none">
            <div class="flex rounded-lg border-2 border-grey overflow-hidden">
                <span class="text-3xl text-grey border-r-2 border-grey p-2">
                    <svg class="fill-current h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></svg>
                  </span>
                <input type="text" class="w-full px-4 bg-gray-900 text-white" placeholder="Message #In the class" />
            </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'nuxt-composition-api'//nuxt-composition-apiにあるreactiveを持ってきた
import firebase from '@/plugins/firebase.ts'
import Vue from 'vue' //これやるとVueの中にある便利関数が使えるようになる！
export default defineComponent({
    setup() {
        // ここにリアクティブなデータ、関数を定義
        var db = firebase.firestore();
        const state = reactive({
            messages: {}
        })

        function unixtimeToString(unixtime:string) {
            const date = new Date(Number(unixtime) * 1000);
            console.log(date);
            return date.getMonth()+1 +"/"+ date.getDate() +" "+ date.getHours() +":"+ date.getMinutes();
        }; //unixtime...関数でunixtimeを時刻へ変換している
        db.collection("messages").where("class_id","==","class_name").where("category_id","==","C2").orderBy("created_at")　//時間順で表示する
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                Vue.set(state.messages, doc.id, doc.data()) //Vueの中にあるset関数。stateの中のmessages変数にdoc.idを基にdoc.data()を格納
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        return{
            state,
            unixtimeToString
        }
    }
})
</script>
