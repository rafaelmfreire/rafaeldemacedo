<template>
	<main class="bg-gray-200 px-6 flex flex-1">
		<div class="max-w-3xl w-full mx-auto py-14">
			<article>
				<div class="flex items-center mb-8 space-x-4">
					<label :class="classObject" class="inline-block text-xs uppercase font-semibold whitespace-nowrap opacity-60 group-hover:opacity-100 group-hover:transition-colors duration-300 ease-in-out px-3 py-1 rounded-full before:mr-2 before:content-[''] before:h-2 before:w-2 before:left-1 before:inline-block before:rounded-full">
						{{ project.status }}
					</label>
					<div v-if="project.done_at != null">
						<span class="uppercase text-xs font-medium text-gray-500">Última atualização:</span>
						<time class="text-gray-600 font-medium">
							{{ new Intl.DateTimeFormat('pt-BR', { timeZone: 'GMT' }).format(new Date(project.done_at)) }}
						</time>
					</div>
					<!-- <div :class="{ 'desktop:mt-5' : hover }" class="desktop:bg-gray-100/20 desktop:rounded-md desktop:border desktop:border-gray-400/40 desktop:p-2 space-x-4 desktop:space-x-0 mb-4 desktop:mb-0 desktop:space-y-2 mr-4 inline" >
					</div> -->
				</div>
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