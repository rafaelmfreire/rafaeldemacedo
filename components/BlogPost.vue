<template>
  <article class="relative group" :class="classObject">
    <nuxt-link :to="`/blog/${post.slug}`" class="absolute inset-0 z-cardLink"></nuxt-link>
    <div class="mb-4">
      <nuxt-link :to="`/blog/${post.slug}`" :class="{ 'group-hover:underline' : !hover }" class=" mb-3 block">
        <h3 class="text-md font-semibold">{{ post.title }}</h3>
      </nuxt-link>
      <div :class="{ 'desktop:mt-5' : hover }" class="relative desktop:absolute desktop:bg-gray-100/20 desktop:rounded-md desktop:border desktop:border-gray-400/40 desktop:p-2 desktop:top-0 desktop:left-auto desktop:right-full space-x-4 desktop:space-x-0 mb-4 desktop:mb-0 desktop:space-y-2 mr-4 flex desktop:flex-col" >
        <time class="text-gray-600">{{ new Date(post.createdAt).toLocaleDateString() }}</time>
        <span v-for="tag in post.tag.split(', ')" :key="tag" class="relative text-xsp font-medium uppercase py-1 px-2 bg-gray-100/20 border rounded-md desktop:rounded border-gray-400/40 desktop:px-2 desktop:py-1 desktop:bg-none desktop:border-none inline-block desktop:block desktop:bg-gray-100/40" >{{ tag }}</span >
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
				'py-0 px-0 desktop:py-5 desktop:px-8 rounded-md cursor-pointer hover:bg-gray-200/30 transition-colors duration-200 ease-in-out': this.hover,
			}
		}
	}
}
</script>