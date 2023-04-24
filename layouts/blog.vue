<template>
    <slot />
</template>

<script setup>
const route = useRoute()

useHead({
    title: 'Blog'
})
</script>
  