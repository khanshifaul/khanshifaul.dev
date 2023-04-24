<template>
    <button v-if="y>150" class="fixed bottom-10 right-10 bg-lime-300 p-2" type="button" @click="scrollTop()">
        <Icon icon="line-md:arrow-small-up" />
    </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()

const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
</script>