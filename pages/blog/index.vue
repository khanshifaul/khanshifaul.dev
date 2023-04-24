<template>
    <BlogNavigation />
    <main>
        <BlogHero />
        <BlogPostCards />
    </main>
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