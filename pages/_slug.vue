<template>
  <main class="bg-gray-200 px-6 flex flex-1">
    <div class="container mx-auto">
      <section class="py-14 max-w-3xl w-full mx-auto">
				<h1 class="text-lg font-bold mb-8">{{ page.title }}</h1>
        <nuxt-content :document="page" class="prose prose-stone font-medium max-w-none"/>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'default',
  name: "DefaultPage",
  async asyncData({ $content, params }) {
    const page = await $content(params.slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Página não encontrada!"})
      })
    return {
      page
    }
  },
};
</script>
