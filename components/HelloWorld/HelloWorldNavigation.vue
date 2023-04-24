<script setup>
import { Icon } from '@iconify/vue'

function toggleMobileNav() {
    let Navbar = document.getElementById('Navbar')
    Navbar?.classList.contains('hidden') ? Navbar?.classList.remove('hidden') : Navbar?.classList.add('hidden')
}
</script>

<template>
    <header class="p-3 sticky w-full top-0 z-50 bg-white dark:bg-[#192f70] dark:text-white drop-shadow">
        <div class="container mx-auto space-y-6">
            <div class="grid grid-flow-row md:grid-flow-col md:justify-between items-center">
                <div class="grid grid-flow-col justify-between items-center">
                    <logo />
                    <Icon class="text-3xl dark:text-white md:hidden" icon="mdi:microsoft-xbox-controller-menu"
                        @click="toggleMobileNav()" />
                </div>
                <transition enter-active-class="transition ease-out duration-300"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95">
                    <nav id="Navbar" class="hidden md:flex justify-between text-xl">
                        <div class="grid md:grid-flow-col md:space-x-1 lg:space-x-4">
                            <NuxtLink :to="{ path: '/' }" class="px-2 border-b-2 border-transparent hover:border-primary">
                                Home</NuxtLink>
                            <NuxtLink :to="{ path: '/', hash: '#about' }"
                                class="px-2 border-b-2 border-transparent hover:border-primary">About</NuxtLink>
                            <NuxtLink :to="{ path: '/', hash: '#work' }"
                                class="px-2 border-b-2 border-transparent hover:border-primary">Work</NuxtLink>
                            <NuxtLink :to="{ path: '/', hash: '#contact' }"
                                class="px-2 border-b-2 border-transparent hover:border-primary">Contact</NuxtLink>
                            <NuxtLink to="/blog" class="px-2 border-b-2 border-transparent hover:border-primary">
                                Blog</NuxtLink>
                            <NuxtLink to="https://cutt.ly/khanshifaul" type="button"
                                class="px-2 border-2 font-bold rounded border-black dark:border-white hover:border-primary w-fit">
                                Hire me</NuxtLink>
                        </div>
                    </nav>
                </transition>
            </div>
        </div>
    </header>
</template>

<style scoped>
a.nuxt-link-active {
    border: 0;
}

a.nuxt-link-exact-active {
    font-weight: bold;
    border-bottom: 2px solid #6610f2;
}
</style>