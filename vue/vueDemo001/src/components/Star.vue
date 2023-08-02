<template>
  <div :style="fontstyle">
    {{ modelValue }}
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span
          @click="$emit('update:modelValue', num)"
          @mouseover="mouseOver(num)"
          v-for="num in 5"
          :key="num"
          >★</span
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref, defineEmits } from "vue";
let props = defineProps({
  modelValue: Number,
  theme: { type: String, default: "orange" },
});
console.log(props);
// let rate = computed(() =>
//   "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
// );

const themeObj = {
  black: "#00",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
};
const fontstyle = computed(() => {
  return `color:${themeObj[props.theme]};`;
});

let width = ref(props.modelValue);
function mouseOver(i) {
  width.value = i;
}
function mouseOut() {
  width.value = props.modelValue;
}
const fontwidth = computed(() => `width:${width.value}em;`);

const emits = defineEmits(["update:modelValue"]);
</script>
<style scoped>
.rate {
  position: relative;
  display: inline-block;
}

.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
