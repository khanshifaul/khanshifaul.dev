<template>
    <nav v-if="showSideNav" class="hidden md:flex flex-col items-center h-full bg-gray-800 text-gray-300 py-4 2xl:text-xl leading-normal">
        <ul class="flex flex-col w-full">
            <li class="mb-4">
                <nuxt-link to="/admin/" class="flex items-center px-4 py-2 hover:bg-gray-700">
                    <Icon icon="mdi:view-dashboard" class="mr-2" />
                    Dashboard
                </nuxt-link>
            </li>
            <li class="mb-4">
                <nuxt-link to="/admin/messages" class="flex items-center px-4 py-2 hover:bg-gray-700">
                    <Icon icon="mdi:message-outline" class="mr-2" />
                    Messages
                </nuxt-link>
            </li>
            <li class="mb-4">
                <div class="flex items-center justify-between hover:bg-gray-700">
                    <nuxt-link to="/admin/projects" class="flex items-center px-4 py-2">
                        <Icon icon="mdi:projector-screen-outline" class="mr-2" />
                        Projects
                    </nuxt-link>
                    <button type="button">
                        <Icon @click="showProjectDrop = !showProjectDrop" icon="mdi:chevron-down" class="mr-2 text-2xl" />
                    </button>
                </div>
                <div v-if="showProjectDrop" class="pl-6 hover:bg-gray-700">
                    <nuxt-link to="/admin/projects/new" class="flex items-center font-thin px-4 py-2">
                        <Icon icon="mdi:camera-document" class="mr-2" />
                        Create New Project
                    </nuxt-link>
                </div>
            </li>
            <li class="mb-4">
                <div class="flex items-center justify-between hover:bg-gray-700">
                    <nuxt-link to="/admin/blogposts" class="flex items-center px-4 py-2">
                        <Icon icon="mdi:post" class="mr-2" />
                        Blog Posts
                    </nuxt-link>
                    <button type="button">
                        <Icon @click="showBlogDrop = !showBlogDrop" icon="mdi:chevron-down" class="mr-2 text-2xl" />
                    </button>
                </div>
                <div v-if="showBlogDrop" class="pl-6 hover:bg-gray-700">
                    <nuxt-link to="/admin/blogposts/new" class="flex items-center font-thin px-4 py-2">
                        <Icon icon="mdi:note-edit" class="mr-2" />
                        Create New Post
                    </nuxt-link>
                </div>
            </li>
            <li class="mb-4 ">
                <div class="flex items-center justify-between hover:bg-gray-700">
                    <nuxt-link to="/admin/services" class="flex items-center px-4 py-2">
                        <Icon icon="mdi:briefcase" class="mr-2" />
                        Services
                    </nuxt-link>
                    <button type="button">
                        <Icon @click="showServiceDrop = !showServiceDrop" icon="mdi:chevron-down" class="mr-2 text-2xl" />
                    </button>
                </div>
                <div v-if="showServiceDrop" class="pl-6 hover:bg-gray-700">
                    <nuxt-link to="/admin/services/new" class="flex items-center font-thin px-4 py-2">
                        <Icon icon="mdi:pencil-box" class="mr-2" />
                        Create New Service
                    </nuxt-link>
                </div>
            </li>
            <li class="mb-4 ">
                <div class="flex items-center justify-between hover:bg-gray-700">
                    <nuxt-link to="/admin/invoices" class="flex items-center px-4 py-2">
                        <Icon icon="mdi:briefcase" class="mr-2" />
                        Invoices
                    </nuxt-link>
                    <button type="button">
                        <Icon @click="showServiceDrop = !showServiceDrop" icon="mdi:chevron-down" class="mr-2 text-2xl" />
                    </button>
                </div>
                <div v-if="showServiceDrop" class="pl-6 hover:bg-gray-700">
                    <nuxt-link to="/admin/invoices/new" class="flex items-center font-thin px-4 py-2">
                        <Icon icon="mdi:pencil-box" class="mr-2" />
                        Create New Invoice
                    </nuxt-link>
                </div>
            </li>
            <li class="mb-4">
                <nuxt-link to="/admin/analytics" class="flex items-center px-4 py-2 hover:bg-gray-700">
                    <Icon icon="material-symbols:analytics" class="mr-2" />
                    Analytics
                </nuxt-link>
            </li>
            <li class="mb-4">
                <nuxt-link to="/admin/leads" class="flex items-center px-4 py-2 hover:bg-gray-700">
                    <Icon icon="mdi:leads" class="mr-2" />
                    Leads
                </nuxt-link>
            </li>
            <li class="mb-4">
                <nuxt-link to="/admin/settings" class="flex items-center px-4 py-2 hover:bg-gray-700">
                    <Icon icon="mdi:cog" class="mr-2" />
                    Settings
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>
  
<script setup>
import { Icon } from '@iconify/vue'

const showProjectDrop = ref(true)
const showBlogDrop = ref(true)
const showServiceDrop = ref(true)
const showSideNav = ref(true)
</script>

  