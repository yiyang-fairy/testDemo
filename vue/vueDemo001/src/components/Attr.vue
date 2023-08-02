<template>
  <div style="background-color: pink;width: 300px;height: 300px;">
    hhhhh<input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
  <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
    modelValue: ""
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.attrs {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
