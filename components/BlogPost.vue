<template>
  <article class="relative group" :class="classObject">
    <nuxt-link :to="`/blog/${post.slug}`" class="absolute inset-0 z-cardLink"></nuxt-link>
    <div class="mb-4">
      <nuxt-link :to="`/blog/${post.slug}`" :class="{ 'group-hover:underline' : !hover }" class=" mb-3 block">
        <h3 class="text-md font-semibold">{{ post.title }}</h3>
      </nuxt-link>
      <div :class="{ 'desktop:mt-5' : hover }" class="relative desktop:absolute desktop:bg-gray-100/20 desktop:rounded-md desktop:border desktop:border-gray-400/40 desktop:p-3 desktop:top-0 desktop:left-auto desktop:right-full space-x-4 desktop:space-x-0 mb-4 desktop:mb-0 desktop:space-y-2 mr-6 flex desktop:flex-col items-center desktop:items-end " >
        <time class="text-gray-600">{{ new Date(post.createdAt).toLocaleDateString() }}</time>
        <span class=" relative text-xsp font-medium uppercase py-1 px-2 bg-gray-100/20 border rounded-md border-gray-400/40 desktop:p-0 desktop:bg-none desktop:border-none inline-block desktop:block " >{{ post.tag }}</span >
      </div>
      <p class="font-medium text-gray-600 !leading-7 tablet:text-md">
        <nuxt-content :document="{ body: post.excerpt }" />
      </p>
    </div>
    <nuxt-link :to="`/blog/${post.slug}`" class=" text-xsp font-semibold text-blue-600 uppercase" >
			Leia mais
		</nuxt-link >
  </article>
</template>
<script>
export default {
	props: ['post', 'hover'],
	computed: {
		classObject: function () {
			return {
				'py-5 px-8 rounded-md cursor-pointer hover:bg-gray-200/30 transition-colors duration-200 ease-in-out': this.hover,
			}
		}
	}
}
</script>