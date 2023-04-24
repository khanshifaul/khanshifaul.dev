<template>
    BlogPosts
</template>

<script setup>
import { Icon } from '@iconify/vue';

definePageMeta({
    layout: "admin",
});
const route = useRoute()

useHead({
    title: 'BlogPosts'
})
</script>