<template>
  <q-layout class="bg-grey-1">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MyLayout',
  setup () {
  }
}
</script>

<style lang="sass">
</style>
