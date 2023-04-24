<template>
    <section class="dark:bg-[#333] dark:text-lime-200 px-8 py-4">
        <div class="container mx-auto space-y-4">
            <span
                class="font-Quick-starter uppercase text-2xl bg-clip-text text-transparent bg-gradient-to-r to-blue-700 via-orange-500 from-red-700">
                Khan Shifaul</span>
            <div class="grid grid-flow-row md:grid-cols-3 gap-4">
                <div>
                    <div class="footer-contact">
                        <h3 class="font-bold uppercase">Contact</h3>
                        <p>441, Aguniatair, Sonatola<br>Sonatola, Bogura 5826</p>
                        <p>Email: mail@khanshifaul.dev<br>Phone: +8801701005355</p>
                    </div>
                    <div class="flex space-x-2 py-2">
                        <a href="">
                            <Icon icon="mdi:facebook" />
                        </a>
                        <a href="">
                            <Icon icon="mdi:github" />
                        </a>
                        <a href="">
                            <Icon icon="mdi:linkedin" />
                        </a>
                        <a href="">
                            <Icon icon="mdi:twitter" />
                        </a>
                        <a href="">
                            <Icon icon="mdi:patreon" />
                        </a>
                    </div>
                </div>
                <div class="hidden md:flex md:flex-col items-center">
                    <h3 class="font-bold uppercase">Sitemaps</h3>
                    <div class="grid w-fit">
                        <NuxtLink :to="{ path: '/' }" class="px-2 border-b-2 border-transparent dark:hover:border-primary">
                            Home</NuxtLink>
                        <NuxtLink :to="{ path: '/', hash: '#about' }"
                            class="px-2 border-b-2 border-transparent dark:hover:border-primary">About</NuxtLink>
                        <NuxtLink :to="{ path: '/', hash: '#work' }"
                            class="px-2 border-b-2 border-transparent dark:hover:border-primary">Work</NuxtLink>
                        <NuxtLink :to="{ path: '/', hash: '#contact' }"
                            class="px-2 border-b-2 border-transparent dark:hover:border-primary">Contact</NuxtLink>
                        <NuxtLink to="/blog" class="px-2 border-b-2 border-transparent dark:hover:border-primary">
                            Blog</NuxtLink>
                    </div>
                </div>
                <div class="text-right">
                    <div class="flex space-x-2">
                        <h3 class="font-bold">Visitor Count: </h3>
                        <p class="text-slate-300 dark:text-slate-500 capitalize">480</p>
                    </div>
                    <div class="flex space-x-2">
                        <h3 class="font-bold">Theme:</h3>
                        <button class="flex items-center space-x-2"
                            @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
                            <Icon icon="line-md:moon-filled-to-sunny-filled-loop-transition"
                                v-if="$colorMode.value == 'light'" />
                            <Icon icon="line-md:sunny-filled-loop-to-moon-filled-transition"
                                v-if="$colorMode.value == 'dark'" />
                            </button>
                            <p class="text-slate-300 dark:text-slate-500 capitalize">{{ $colorMode.preference }}</p>
                    </div>
                </div>
            </div>
            <div class="text-center py-2">
                <p> 2023 &copy; KhanShifaul. All Rights Reserved. </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const setColorTheme = (NewTheme) => {
    useColorMode().preference = NewTheme;
};

</script>

<style scoped>
.toggle-wrapper {
    display: flex;
    align-items: center;
}

.toggle-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60px;
    height: 30px;
    background-color: #ddd;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.toggle-label i {
    font-size: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.3s ease;
}
</style>