<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'nuxt-composition-api'
export default defineComponent({
  middleware: ['Auth'], 
  setup(_, { root: { $store } }) {
  }
})
</script>

<style>
</style>
