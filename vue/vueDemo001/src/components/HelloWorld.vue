<script setup>
import { ref, watch } from "vue";
import Attr from "./Attr.vue";
import Star from "./Star.vue";
import TransitionVue from "./TransitionVue.vue";
const rate = ref(1)
const inputValue = ref(3.5)
watch(inputValue, (newValue) => {
  rate.value = newValue;
  console.log(typeof newValue)
});
watch(rate, (newRate) =>{
  inputValue.value= newRate
})
</script>

<template>
  <input type="number" v-model="inputValue">
  <span>{{ rate }}</span> 
  <Star v-model="rate"></Star>
  <!-- <Attr>
    <p style="background-color: yellow; width: 100px; height: 100px;" ></p>
  </Attr> -->
  <!-- <TransitionVue></TransitionVue> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
