<template>
	<main class="bg-gray-50 px-6 flex flex-1">
		<div class="max-w-3xl w-full mx-auto py-14">
			<article>
				<time :datetime="post.createdAt" class="text-gray-500 text-sm font-medium mb-4 block">{{ postDate }}</time>
				<h3 class="text-lg font-bold mb-8">{{ post.title }}</h3>
				<nuxt-content class="prose prose-stone font-medium text-gray-900 max-w-none" :document="post" />
			</article>
		</div>
	</main>
</template>
<script>
export default {
	layout: 'default',
	async asyncData({ $content, params }) {
		const post = await $content('blog', params.slug).fetch()
		return { post }
	},
	computed: {
    postDate: function () {
			var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(this.post.createdAt).toLocaleDateString('pt-br', options);
    }
  }
}
</script>