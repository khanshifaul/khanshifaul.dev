<script setup lang="ts">
definePageMeta({
    layout: "helloworld",
});
const route = useRoute()

useHead({
    title: 'Welcome'
})
</script>

<template>
    <main>
        <HelloWorld />
        <HelloWorldResume />
        <HelloWorldAbout />
        <HelloWorldProjects />
        <HelloWorldServices />
        <HelloWorldContact />
    </main>
</template>
