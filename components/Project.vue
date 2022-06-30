<template>
  <article class=" group border border-gray-300 bg-gray-100/40 rounded-md p-6 flex flex-col justify-between hover:bg-gray-100/70 hover:cursor-pointer transition-colors duration-300 ease-in-out " >
    <div class="space-y-6 mb-8">
      <div class="flex items-center justify-between mb-3 ">
		<nuxt-link :to="`/projetos/${project.slug}`" class="hover:underline block">
			<h3 class="font-bold">{{ project.title }}</h3>
		</nuxt-link>
        <label :class="classObject" class="inline text-xs uppercase font-semibold ml-4 whitespace-nowrap opacity-60 group-hover:opacity-100 group-hover:transition-colors duration-300 ease-in-out px-3 py-1 rounded-full before:mr-2 before:content-[''] before:h-2 before:w-2 before:left-1 before:inline-block before:rounded-full">
			{{ project.status }}
		</label>
      </div>
      <p class="font-medium text-sm text-gray-500 leading-5">
        <nuxt-content :document="{ body: project.excerpt }" />
      </p>
    </div>
    <nuxt-link :to="`/projetos/${project.slug}`" class="text-xsp font-semibold text-blue-600 uppercase">
		Saiba mais
	</nuxt-link>
  </article>
</template>
<script>
export default {
	props: ['project'],
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