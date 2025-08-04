<template>
  <t-button @click="dialog1 = true">打开 Dialog 1</t-button>
  <t-dialog v-model:visible="dialog1" header="Dialog 1" attach="body" destroy-on-close>
    <h1>这是 Dialog 1</h1>
    <m-test />
  </t-dialog>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import mTest from './mTest.vue'


const dialog1 = ref(false)
</script>
