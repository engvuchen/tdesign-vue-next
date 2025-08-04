<template>
  <button @click="visible = !visible">{{ visible ? '隐藏' : '显示' }}</button>
  <comp :visible="visible" destroy-on-close>
    <div id="parent">
      <div class="t-dialog__mask"></div>
      <div class="t-dialog__wrap">
        <div class="t-dialog__position t-dialog--top">
          <div class="t-dialog t-dialog__modal-default t-dialog--default t-dialog--top">
            <div class="t-dialog__header">
              <div class="t-dialog__header-content"><!---->Dialog 2</div>
              <span class="t-dialog__close"
                ><svg fill="none" viewBox="0 0 24 24" width="1em" height="1em" class="t-icon t-icon-close">
                  <path
                    fill="currentColor"
                    d="M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z"
                  ></path></svg
              ></span>
            </div>
            <div class="t-dialog__body">
              <h1 data-v-ce0b6611="">
                外层111
                <test />
              </h1>
            </div>
            <div class="t-dialog__footer">
              <div>
                <button
                  class="t-button t-button--variant-base t-button--theme-default t-button--shape-rectangle t-dialog__cancel"
                  type="button"
                  href=""
                  tabindex="0"
                >
                  <span class="t-button__text" style="z-index: 1">取消</span></button
                ><button
                  class="t-button t-button--variant-base t-button--theme-primary t-button--shape-rectangle t-dialog__confirm"
                  type="button"
                  href=""
                  tabindex="0"
                >
                  <span class="t-button__text">确认</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </comp>
</template>

<script lang="js" setup>
import { ref } from 'vue'
import comp from './comp/index.jsx'
import test from './comp/test.vue'
const visible = ref(false)
</script>

<style scoped></style>
