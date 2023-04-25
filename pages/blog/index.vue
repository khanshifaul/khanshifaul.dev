<template>
    <BlogNavigation />
    <main>
        <BlogHome />
    </main>
    <BlogFooter />
</template>

<script setup>
definePageMeta({
    layout: "blog",
});
const route = useRoute()
useHead({
    title: 'Blog'
})
</script>