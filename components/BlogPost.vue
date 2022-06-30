<template>
  <article class="relative">
    <div class="mb-4">
      <nuxt-link :to="`/blog/${post.slug}`" class="hover:underline mb-3 block">
        <h3 class="text-md font-semibold">{{ post.title }}</h3>
      </nuxt-link>
      <div class=" relative desktop:absolute desktop:bg-gray-100/20 desktop:rounded-md desktop:border desktop:border-gray-400/40 desktop:p-3 desktop:top-0 desktop:left-auto desktop:right-full space-x-4 desktop:space-x-0 mb-4 desktop:mb-0 desktop:space-y-2 mr-6 flex desktop:flex-col items-center desktop:items-end " >
        <time class="text-gray-600">{{ new Date(post.createdAt).toLocaleDateString() }}</time>
        <span class=" relative text-xsp font-medium uppercase py-1 px-2 bg-gray-100/20 border rounded-md border-gray-400/40 desktop:p-0 desktop:bg-none desktop:border-none inline-block desktop:block " >{{ post.tag }}</span >
      </div>
      <p class="font-medium text-gray-600 !leading-7 tablet:text-md">
        <nuxt-content :document="{ body: post.excerpt }" />
      </p>
    </div>
    <nuxt-link :to="`/blog/${post.slug}`" class=" text-xsp font-semibold text-blue-600 uppercase border-b border-opacity-0 border-b-blue-500 hover:border-opacity-100 transition-all duration-300 ease-in-out " >
			Leia mais
		</nuxt-link >
  </article>
</template>
<script>
export default {
	props: ['post'],
}
</script>