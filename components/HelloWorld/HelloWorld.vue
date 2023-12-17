<script setup>
import { Icon } from '@iconify/vue';
const bgImage = "https://source.unsplash.com/random/?dark"
</script>

<template>
  <section class="bg-primary">
    <div class="bg-cover bg-center min-h-[80vh] p-8 justify-center hero"
      :style="{ backgroundImage: `url(${bgImage})` }">
      <div class="container m-auto text-dark-text text-2xl md:text-3xl h-full">
        <div class="my-24">
          <div class="grid font-Acme gap-3 py-4">
            <h1>
              Hi,
              <br>I'm <span class="text-3xl md:text-5xl font-Bacode">Shifaul Islam</span>
            </h1>
            <h3>
              Web Developer
            </h3>
          </div>
          <a class="bg-primary px-4 py-1 rounded text-2xl font-bold hover:bg-gray-700" href="#">Get in
            Touch</a>
          <div class="grid grid-flow-col auto-cols-min gap-4 py-8">
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
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 95%, 75% 100%, 0 90%);
  clip-path: polygon(0 0, 100% 0, 100% 95%, 75% 100%, 0 90%);
}
</style>