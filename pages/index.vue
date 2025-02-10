<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection("pages").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <div class="md:px-6 max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12">
    <article class="prose prose-sm md:prose-base w-full max-w-4xl grow pt-10">
      <ContentRenderer v-if="page" :value="page" />
    </article>
  </div>
</template>
