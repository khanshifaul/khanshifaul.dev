<template>
    <HelloWorldNavigation />
    <slot />
    <HelloWorldFooter />
    <ClientOnly>
        <ScrollTop />
    </ClientOnly>
</template>
<script setup>
const route = useRoute()

useHead({
    title: ''
})
</script>
  