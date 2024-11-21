<script setup>
const props = defineProps({
  foo: Number
})
console.log(props.foo)
</script>
<template>
  <p>count:{{ foo }}</p>
</template>