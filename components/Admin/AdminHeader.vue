<template>
    <div class="bg-gray-800 text-dark-text 2xl:text-xl">
        <div class="grid grid-cols-[auto_auto] md:grid-cols-[auto_5fr] h-12">
            <div class="flex items-center px-4 text-2xl">
                <button type="button" class="hover:text-gray-600 focus:outline-none focus:text-gray-600"
                    @click="showSideNav = showSideNav" aria-label="Toggle sidebar">
                    <Icon icon="mdi:microsoft-xbox-controller-menu" class="mr-2" />
                </button>
                <logo />
            </div>
            <div class="flex items-center justify-end text-lg">
                <Icon icon="mdi:bell" class="mr-2" />
                <div class="flex items-center px-4">
                    <span class="hidden md:block capitalize mr-2">profileName</span>
                    <Icon icon="mdi:account" class="border rounded-full" />
                    <button type="button" @click="dropmenu = !dropmenu">
                        <Icon icon="mdi:chevron-down" />
                    </button>
                </div>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <div v-if="dropmenu"
                    class="absolute top-10 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                            id="menu-item-0">Account settings</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                            id="menu-item-1">Support</a>
                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                            id="menu-item-2">License</a>
                        <form method="POST" action="#" role="none">
                            <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                        </form>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
  
<script setup>
import { Icon } from "@iconify/vue";

const dropmenu = ref(false)


// const showSideNav = ref(true)

</script>
  