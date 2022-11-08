<template>
	<main class="bg-gray-200 px-6 flex flex-1">
		<div class="max-w-3xl w-full mx-auto py-14">
			<article>
				<label :class="classObject" class="inline-block mb-4 text-xs uppercase font-semibold whitespace-nowrap opacity-60 group-hover:opacity-100 group-hover:transition-colors duration-300 ease-in-out px-3 py-1 rounded-full before:mr-2 before:content-[''] before:h-2 before:w-2 before:left-1 before:inline-block before:rounded-full">
					{{ project.status }}
				</label>
				<h1 class="text-lg font-bold mb-8">{{ project.title }}</h1>
				<nuxt-content class="prose prose-stone font-medium max-w-none prose-pre:border prose-pre:border-gray-300" :document="project" />
			</article>
		</div>
	</main>
</template>
<script>
export default {
	layout: 'default',
	async asyncData({ $content, params }) {
		const project = await $content('projetos', params.slug).fetch()
		return { project }
	},
	computed: {
		classObject: function () {
			return {
				'status-active': this.project.status === 'Ativo' || this.project.status === 'Concluído',
				'status-paused': this.project.status === 'Pausado',
				'status-canceled': this.project.status === 'Cancelado',
			}
		}
	}
}
</script>