<template>
    New BlogPost
</template>

<script setup>
import { Icon } from '@iconify/vue';

definePageMeta({
    layout: "admin",
});
const route = useRoute()

useHead({
    title: 'New BlogPost'
})
</script>