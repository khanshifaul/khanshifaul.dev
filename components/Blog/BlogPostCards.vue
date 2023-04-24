<template>
    <section class="bg-dark-background text-dark-text">
        <div class="container mx-auto p-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <!-- Loop through the posts array and display each post as a card -->
                <div v-for="post in posts" :key="post._id" class="card">
                    <a :href="'/blog/' + post._id">
                        <!-- Display the post thumbnail as an image -->
                        <img :src="post.thumbnail" alt="" class="w-full h-48 md:object-cover" />
                        <!-- Display the post title as a heading -->
                        <h2 class="text-xl font-semibold truncate p-4">{{ post.title }}</h2>
                    </a>
                    <div class="flex items-center px-4">
                        <img class="w-8 h-8 rounded-full mr-2" :src="authorAvatar" :alt="post.author" />
                        <span class="text-gray-400 text-sm">{{ post.author }}</span>
                    </div>
                    <p class="text-sm text-gray-400 px-4">{{ formatDate(post.createdAt) }}</p>
                    <p class="p-4">{{ post.content }}</p>
                    <!-- Display the post tags as badges -->
                    <div class="flex flex-wrap p-4">
                        <span v-for="(tag, index) in post.tags" :key="index" class="badge bg-blue-500 text-white mr-2 mb-2">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
// Fetch data from the API endpoint
const { data: posts } = await useFetch('http://127.0.0.1:4000/api/blog');

const authorAvatar = "https://via.placeholder.com/40x40";

const formatDate = dateString => new Date(dateString).toLocaleString();

</script>
  
<style scoped>
/* Add some custom styles for the card and badge components */
.card {
    border: 1px solid #e5e7eb;
}

.badge {
    padding: 0.25rem 0.5rem;
}

</style>