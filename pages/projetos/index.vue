<template>
	<main class="bg-gray-200 px-6 flex flex-1">
		<div class="container mx-auto">
			<section class="py-14 max-w-3xl w-full mx-auto">
				<div class="space-y-4 mb-20 flex flex-col items-center">
					<h2 class="text-lg text-center font-medium">Projetos</h2>
					<p class="text-center">Alguns dos projetos pessoais que criei <span class="block">Uns ativos, outros aposentados, em pausa ou encerrados</span></p>
				</div>
				<div class="grid grid-cols-1 gap-6 mini:grid mini:grid-cols-2 mini:space-y-0">
					<Project v-for="project in projects" :project="project" :key="project.slug" />
				</div>
			</section>
		</div>
	</main>
</template>
<script>
export default {
  layout: "default",
  async asyncData({ $content, params }) {
    const projects = await $content("projetos").sortBy("createdAt", "desc").fetch();
    return {
      projects,
    };
  },
};
</script>