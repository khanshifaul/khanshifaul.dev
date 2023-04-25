<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useScroll } from '@vueuse/core';

const el = ref<HTMLElement | null>(null)
const { x } = useScroll(el, { behavior: 'smooth' })
</script>

<template>
    <section class="container mx-auto">
        <div class="grid divide-y p-4 md:mx-32">
            <div class="grid grid-cols-[auto_1fr_auto] items-center justify-between p-3">
                <Icon icon="mdi:chevron-left" width="24" height="24" class="cursor-pointer hover:scroll-btn"
                    @click="x -= 200" />
                <div ref="el"
                    class="grid grid-flow-col gap-4 whitespace-nowrap justify-start items-center scrollbar-hide overflow-x-hidden">
                    <div class="bg-stone-100 w-fit hover:bg-white rounded"> <a href=""
                            class="active:underline px-3">Latest</a> </div>
                    <div class="bg-stone-100 w-fit hover:bg-white rounded"> <a href=""
                            class="active:underline px-3">Topic1</a> </div>
                    <div class="bg-stone-100 w-fit hover:bg-white rounded"> <a href=""
                            class="active:underline px-3">Topic2</a> </div>
                    <div class="bg-stone-100 w-fit hover:bg-white rounded"> <a href=""
                            class="active:underline px-3">Topic3</a> </div>
                </div>
                <Icon icon="mdi:chevron-right" width="24" height="24" class="cursor-pointer hover:scroll-btn"
                    @click="x += 200" />
            </div>

            <!-- POST -->
            <div class="flex p-3">
                <div class="flex flex-col">
                    <a href="">
                        <div class="font-bold my-2">
                            <h3 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        </div>
                        <div class="my-2">
                            <p class="line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi itaque, id maxime
                                asperiores magni numquam praesentium nobis cupiditate esse animi eum quae, totam dolor
                                labore suscipit quibusdam perferendis ex ...
                            </p>
                        </div>
                    </a>
                    <div class="flex space-x-2 my-2">
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic1</a>
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic2</a>
                    </div>
                </div>
                <img src="https://placehold.co/600x400" alt="" class="hidden md:block w-[150px] aspect-square object-cover">
            </div>
            <!-- POST -->
            <div class="flex p-3">
                <div class="flex flex-col">
                    <a href="">
                        <div class="font-bold my-2">
                            <h3 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        </div>
                        <div class="my-2">
                            <p class="line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi itaque, id maxime
                                asperiores magni numquam praesentium nobis cupiditate esse animi eum quae, totam dolor
                                labore suscipit quibusdam perferendis ex ...
                            </p>
                        </div>
                    </a>
                    <div class="flex space-x-2 my-2">
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic1</a>
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic2</a>
                    </div>
                </div>
                <img src="https://placehold.co/600x200" alt="" class="hidden md:block w-[150px] aspect-square object-cover">
            </div>
            <!-- POST -->
            <div class="flex p-3">
                <div class="flex flex-col">
                    <a href="">
                        <div class="font-bold my-2">
                            <h3 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        </div>
                        <div class="my-2">
                            <p class="line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi itaque, id maxime
                                asperiores magni numquam praesentium nobis cupiditate esse animi eum quae, totam dolor
                                labore suscipit quibusdam perferendis ex ...
                            </p>
                        </div>
                    </a>
                    <div class="flex space-x-2 my-2">
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic1</a>
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic2</a>
                    </div>
                </div>
                <img src="https://placehold.co/150x150" alt="" class="hidden md:block w-[150px] aspect-square object-cover">
            </div>
            <!-- POST -->
            <div class="flex p-3">
                <div class="flex flex-col">
                    <a href="">
                        <div class="font-bold my-2">
                            <h3 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        </div>
                        <div class="my-2">
                            <p class="line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi itaque, id maxime
                                asperiores magni numquam praesentium nobis cupiditate esse animi eum quae, totam dolor
                                labore suscipit quibusdam perferendis ex ...
                            </p>
                        </div>
                    </a>
                    <div class="flex space-x-2 my-2">
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic1</a>
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic2</a>
                    </div>
                </div>
                <img src="https://placehold.co/1920x1080" alt="" class="hidden md:block w-[150px] aspect-square object-cover">
            </div>
            <!-- POST -->
            <div class="flex p-3">
                <div class="flex flex-col">
                    <a href="">
                        <div class="font-bold my-2">
                            <h3 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        </div>
                        <div class="my-2">
                            <p class="line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi itaque, id maxime
                                asperiores magni numquam praesentium nobis cupiditate esse animi eum quae, totam dolor
                                labore suscipit quibusdam perferendis ex ...
                            </p>
                        </div>
                    </a>
                    <div class="flex space-x-2 my-2">
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic1</a>
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic2</a>
                    </div>
                </div>
                <img src="https://placehold.co/600x800" alt="" class="hidden md:block w-[150px] aspect-square object-cover">
            </div>
            <!-- POST -->
            <div class="flex p-3">
                <div class="flex flex-col">
                    <a href="">
                        <div class="font-bold my-2">
                            <h3 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        </div>
                        <div class="my-2">
                            <p class="line-clamp-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi itaque, id maxime
                                asperiores magni numquam praesentium nobis cupiditate esse animi eum quae, totam dolor
                                labore suscipit quibusdam perferendis ex ...
                            </p>
                        </div>
                    </a>
                    <div class="flex space-x-2 my-2">
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic1</a>
                        <a href="" class="rounded-full bg-stone-200 hover:bg-stone-300 px-2">Topic2</a>
                    </div>
                </div>
                <img src="https://placehold.co/1920x1080" alt="" class="hidden md:block w-[150px] aspect-square object-cover">
            </div>



        </div>
    </section>
</template>
