<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
    <section class="bg-slate-100">
        <div class="grid grid-flow-col">
            <div class="">
                <div class="bg-white flex flex-col items-center space-y-4 p-4 m-12 rounded fixed">
                    <div @click="" class="w-36 border rounded text-center p-2 bg-slate-50">
                        <img src="@/assets/images/Resume1.jpg" alt="">
                    </div>
                    <div @click="" class="w-36 border rounded text-center p-2 bg-slate-50">
                        <img src="@/assets/images/Resume1.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="m-12 flex space-x-2 items-start">
                <div class="border border-slate-400">
                    <resume class="p-1" />
                </div>
                <button>
                    <Icon icon="mdi:download-circle-outline" width="24" height="24" />
                </button>
            </div>
        </div>
    </section>
</template>