<script setup>
import { Icon } from '@iconify/vue'

function toggleMobileNav() {
    let Navbar = document.getElementById('Navbar')
    Navbar?.classList.contains('hidden') ? Navbar?.classList.remove('hidden') : Navbar?.classList.add('hidden')
}
</script>

<template>
    <header class="bg-light-background text-light p-3 sticky w-full top-0 z-50">
        <div class="container mx-auto space-y-6">
            <div class="grid grid-flow-col justify-between items-center">
                <NuxtLink to="/"
                    class="router-link-active router-link-exact-active text-xl font-extrabold font-Quick-starter uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-700"
                    aria-current="page">Khan Shifaul</NuxtLink>
                <Icon class="text-3xl text-light-text md:hidden" icon="mdi:microsoft-xbox-controller-menu"
                    @click="toggleMobileNav()" />
                <nav id="Navbar" class="hidden md:flex justify-between text-xl">
                    <div class="grid md:grid-flow-col md:space-x-1 lg:space-x-4">
                        <NuxtLink :to="{ path: '/' }" class="px-2 border-b-2 border-transparent hover:border-primary">Home
                        </NuxtLink>
                        <NuxtLink :to="{ path: '/', hash: '#about' }"
                            class="px-2 border-b-2 border-transparent hover:border-primary">About
                        </NuxtLink>
                        <NuxtLink :to="{ path: '/', hash: '#work' }"
                            class="px-2 border-b-2 border-transparent hover:border-primary">
                            Work</NuxtLink>
                        <NuxtLink :to="{ path: '/', hash: '#contact' }"
                            class="px-2 border-b-2 border-transparent hover:border-primary">
                            Contact</NuxtLink>
                        <NuxtLink to="/blog" class="px-2 border-b-2 border-transparent hover:border-primary">
                            Blog</NuxtLink>
                        <NuxtLink to="https://cutt.ly/khanshifaul"
                            class="px-2 border-2 font-bold rounded border-light-text hover:border-primary hover:text-primary">
                            Hire me</NuxtLink>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>