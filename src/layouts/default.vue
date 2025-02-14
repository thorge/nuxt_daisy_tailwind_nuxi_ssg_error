<template>
  <MainNavbar />
  <main class="p-6">
    <div class="breadcrumbs text-sm">
      <ul>
        <li><a>Home</a></li>
        <li><a>Documents</a></li>
        <li>Add Document</li>
      </ul>
    </div>
    <div class="container max-w-5xl mx-auto">
      <NuxtPage />
    </div>
  </main>
</template>
<script setup>

const foo = ref("bar"); // Comment with toggle keyword
</script>