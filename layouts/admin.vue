<template>
    <div class="h-screen md:grid grid-rows-[auto_1fr] gap-0">
      <AdminHeader />
      <div class="h-full md:grid xl:grid-cols-[1fr_6fr] lg:grid-cols-[2fr_5fr] md:grid-cols-[2fr_5fr]">
        <AdminNavigation />
        <main class="m-2">
          <slot />
        </main>
      </div>
    </div>
  </template>
    
  <script setup>
  const route = useRoute()
  
  useHead({
    title: 'Admin'
  })
  </script>
    