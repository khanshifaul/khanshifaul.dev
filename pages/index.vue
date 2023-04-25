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
        <HelloWorldAbout class="dark:bg-[#121b35]" />
        <HelloWorldProjects class="dark:bg-[#192f70]" />
        <HelloWorldServices class="dark:bg-[#121b35]" />
        <HelloWorldContact class="dark:bg-[#192f70]" />
    </main>
</template>
