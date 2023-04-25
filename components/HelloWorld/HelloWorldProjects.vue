<script setup lang="ts">
import { Icon } from '@iconify/vue';

const { data: project } = await useAsyncData('projects', () => {
  return $fetch(`/api/project/project`)
})

const projects = project.value?.projects
console.log(projects)
</script >


<template>
  <section id="work" class="dark:text-white p-8">
    <div class="container mx-auto">
      <h3 class="text-3xl font-bold font-Broadway-bt pb-2 mb-4 border-b-2 dark:border-white">My Works</h3>
      <div class="grid gap-4">
        <div class="grid grid-cols-1 md:grid-rows gap-4 md:gap-0">
          <div v-for="project in projects" v-show="project.featured" :key="project.id"
            class="group md:flex even:flex-row-reverse gap-2 bg-white text-black p-4 rounded md:p-0 md:rounded-none md:h-[350px]">
            <img :src="project.thumbnail"
              class="md:w-[60%] object-cover basis-2/3 rounded md:rounded-none md:group-odd:clip-proj-left md:group-even:clip-proj-right" />
            <div class="basis-1/3 my-4">
              <div class="md:p-4 sm:p-2">
                <h3 class="text-light-text text-xl font-bold">{{ project.title }}</h3>
                <div class="flex space-x-2 my-1">
                  <a :href="project.githuburl">
                    <Icon icon="mdi:github" class="text-2xl" />
                  </a>
                  <a :href="project.projecturl">
                    <Icon icon="mdi:web" class="text-2xl" />
                  </a>
                </div>
                <p class="text-gray-600 text-sm">{{ project.createdAt }}</p>
                <p class="text-gray-700 mt-2">{{ project.description }}</p>
              </div>
              <div class="flex flex-wrap mt-4">
                <span v-for="tag in project.tags" :key="tag"
                  class="inline-block bg-indigo-500 text-white text-xs px-3 py-1 rounded uppercase font-semibold tracking-wide mr-2 mb-2">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="project in projects" :key="project.title" v-show="!project.featured"
            class="flex flex-col p-4 rounded bg-white text-black shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img :src="project.thumbnail" class="w-full rounded" />
            <div class="p-2">
              <h3 class="text-light-text text-xl font-bold">{{ project.title }}</h3>
              <p class="text-gray-600 text-sm">{{ project.createdAt }}</p>
              <div class="flex space-x-2 my-1">
                <a :href="project.githuburl">
                  <Icon icon="mdi:github" class="text-2xl" />
                </a>
                <a :href="project.projecturl">
                  <Icon icon="mdi:web" class="text-2xl" />
                </a>
              </div>
              <p class="text-gray-700">{{ project.description }}</p>
            </div>
            <div class="flex flex-wrap mt-4">
              <span v-for="tag in project.tags" :key="tag"
                class="inline-block bg-indigo-500 text-white text-xs px-3 py-1 rounded uppercase font-semibold tracking-wide mr-2 mb-2">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

