<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4 border-b-2">Dashboard</h2>
        <div class="grid grid-cols-4 gap-6">
            <div class="p-4 bg-white rounded-md shadow">
                <h3 class="text-lg font-bold mb-2">Visitors</h3>
                <p class="text-gray-600 text-xl">{{ visitorCount }}</p>
            </div>
            <div class="p-4 bg-white rounded-md shadow">
                <h3 class="text-lg font-bold mb-2">Projects</h3>
                <p class="text-gray-600 text-xl">{{ projectCount }}</p>
            </div>
            <div class="p-4 bg-white rounded-md shadow">
                <h3 class="text-lg font-bold mb-2">Blog Posts</h3>
                <p class="text-gray-600 text-xl">{{ blogPostCount }}</p>
            </div>
            <div class="p-4 bg-white rounded-md shadow">
                <h3 class="text-lg font-bold mb-2">Leads</h3>
                <p class="text-gray-600 text-xl">{{ leadCount }}</p>
            </div>
        </div>
    </div>
    <div class="p-6">
        <h3 class="text-xl font-bold mb-4 border-b">Recent Activity</h3>
        <div class="bg-white rounded-md shadow overflow-hidden px-2">
            <ul class="divide-y divide-gray-200">
                <li v-for="(activity, index) in recentActivity" :key="index" class="py-2">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon icon="mdi:circle-expand" class="text-xl mx-2 text-gray-400" />
                            <p class="font-medium text-gray-900">{{ activity.title }}</p>
                        </div>
                        <p class="text-sm text-gray-500 py-2">{{ activity.timestamp }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  

<script setup>
import { Icon } from '@iconify/vue';

definePageMeta({
    layout: "admin",
    middleware: "auth"
});
const route = useRoute()

useHead({
    title: 'Admin'
})


const visitorCount = 1000; // Replace with actual visitor count
const projectCount = 10; // Replace with actual project count
const blogPostCount = 2; // Replace with actual blog post count
const leadCount = 5; // Replace with actual lead count
const recentActivity = ref([
    {
        title: 'Created a new project: Portfolio Website',
        timestamp: '2 hours ago'
    },
    {
        title: 'Published a new blog post: My Top 10 Web Development Tools',
        timestamp: '1 day ago'
    },
    {
        title: 'Published a new blog post: My Top 10 Web Development Tools',
        timestamp: '1 day ago'
    }
])
</script>