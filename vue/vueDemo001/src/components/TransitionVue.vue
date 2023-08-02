<template>
  <button @click="toggle">click</button>
  <!-- <h1 v-if="showTitle">你好 Vue 3</h1> -->
  <transition name="fade">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition>
  <p>iii {{ count }}
    <button @click="add">++</button> 
  </p>
</template>

<script setup>
import { ref } from "vue";
import {useStore} from 'vuex'
let showTitle = ref(true);
function toggle() {
  showTitle.value = !showTitle.value;
}

let store = useStore()
let count = computed(()=>store.state.count)
function add() {
  store.commit('add')
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
