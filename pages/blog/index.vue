<template>
	<main class="bg-gray-100 px-6 dot-pattern flex flex-1">
		<div class="container mx-auto">
			<section class="py-14 max-w-3xl w-full mx-auto">
				<div class="space-y-4 mb-20 flex flex-col items-center">
					<h2 class="text-lg text-center font-medium"> Posts recentes </h2>
					<p class="text-center">
						Compartilhando ideias e tutoriais sobre técnicas e ferramentas que gosto
						ou <br class="hidden tablet:block" />que estou aprendendo e sobre os
						produtos que estou desenvolvendo
					</p>
				</div>
				<div class="grid grid-cols-1 space-y-14">
					<BlogPost v-for="post in posts" :hover="true" :post="post" :key="post.slug" />
				</div>
			</section>
		</div>
	</main>
</template>
<script>
export default {
  layout: "blog",
  async asyncData({ $content, params }) {
    const posts = await $content("blog").sortBy("createdAt", "desc").fetch();
    return {
      posts,
    };
  },
  computed: {
    postDate: function () {
      var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(this.post.createdAt).toLocaleDateString("pt-br", options);
    },
  },
};
</script>