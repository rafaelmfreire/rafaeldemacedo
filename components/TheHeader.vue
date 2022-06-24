<template>
  <header class="sticky top-0 backdrop-blur bg-gray-300/60 px-6 py-8 flex items-center justify-between z-sticky">
    <svg class="w-12 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" > <path d="m23.838 7.14-3.319 3.395 13.498 13.802h-6.64l-10.18-10.409-3.318 3.396 6.86 7.013H14.1l-6.86-7.015 3.32-3.393 3.32-3.394-5.28-5.399H4.695v19.2H0v-24h10.544l4.695 4.8 1.959 2.004 1.96-2.004 1.361-1.39 3.32-3.393 23.455 23.984h-6.637L23.838 7.14Z" /> </svg>

			<nav class="hidden tablet:block">
				<ul class="flex items-center space-x-9">
					<li class="text-sm font-medium">Projetos</li>
					<li class="text-sm font-medium">Blog</li>
					<li class="text-sm font-medium">Sobre</li>
					<li class="text-sm font-medium">Contato</li>
				</ul>
			</nav>
    <div class="flex items-center space-x-4 relative">
      <p class="text-xs font-medium">Oi, eu sou Rafael</p>
		<span class="relative inline-flex">
			<img class="relative rounded-full w-10 h-10 " src="~/assets/images/profile-picture.jpg" alt="Foto de perfil de Rafael" />
			<span class="flex absolute h-3 w-3 top-0 right-0">
				<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF47] opacity-75"></span>
				<span class="relative inline-flex rounded-full h-3 w-3 bg-[#00FF47] bg-opacity-100"></span>
			</span>
		</span>
    </div>
  </header>
</template>