<template>
  <div class="m-test">
    <h2>这里是 mTest 组件</h2>
    <t-button @click="dialog2 = true">打开 mTest 组件中的 Dialog 2</t-button
    ><t-dialog v-model:visible="dialog2" header="Dialog 2" attach="body">
      <h1>这是 Dialog 2</h1>
    </t-dialog>
  </div>
</template>

<script lang="js" setup>
import { ref } from 'vue'

const dialog2 = ref(false)
</script>

<style lang="css" scoped>
.m-test {
  background-color: #999;
  padding: 20px;
}
</style>
