<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useDropZone, useFileDialog } from '@vueuse/core'

const dropZoneRef = ref<HTMLDivElement>()
function onDrop(files: File[] | null) {
    // called when files are dropped on zone
}
const { files, open, reset, onChange } = useFileDialog()
onChange((files) => {
    /** do something with files */
})
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)

const title: Ref<string> = ref('');
const description: Ref<string> = ref('');
const githuburl: Ref<string> = ref('');
const projecturl: Ref<string> = ref('');

const postProject = () => {
    console.log(title.value)
    console.log(description.value)
    console.log(githuburl.value)
    console.log(projecturl.value)
}

definePageMeta({
    layout: "admin",
});
const route = useRoute()

useHead({
    title: 'New Project'
})
</script>

<template>
    <section>
        <h3 class="text-xl border-b pb-2 my-3">New Project</h3>
        <div class="mx-auto w-96">
            <form action="#" method="POST" v-on:submit.prevent class="flex flex-col justify-center items-center">
                <input v-model="title" type="text" name="title" placeholder="Title" class="border p-1 my-2 w-full">

                <input v-model="description" type="text" name="description" placeholder="Description"
                    class="border p-1 my-2 w-full">

                <div ref="dropZoneRef" class="border p-4 w-full text-center">
                    <p class="font-semibold">
                        Drop files here <br>or
                    </p>
                    <button type="button" @click="open" class="border p-2 rounded">Choose file</button>
                    <div></div>
                </div>

                <input v-model="githuburl" type="text" name="github" placeholder="Github Repository URL"
                    class="border p-1 my-2 w-full">

                <input v-model="projecturl" type="text" name="url" placeholder="Project URL" class="border p-1 my-2 w-full">

                <button @click="postProject" class="border bg-lime-600 p-1 my-2">
                    ADD
                </button>
            </form>
        </div>
    </section>
</template>

