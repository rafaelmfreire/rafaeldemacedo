<template>
  <header id="topbar" :class="whiteBar ? 'bg-gray-100/60 border-b border-b-gray-200' : 'bg-gray-300/60'" class="sticky border-b border-b-gray-300 top-0 px-6 z-sticky top-tall transition-all duration-300 ease-in-out" style="	backdrop-filter: blur(12px);">
    <div class="container mx-auto flex items-center justify-between tablet:justify-start">
			<!-- RM LOGO -->
			<nuxt-link to="/" class="flex-shrink-0 mr-16">
				<svg class="w-12 h-6 hover:text-gray-600 transition-colors duration-200 ease-in-out" fill="currentColor" xmlns="http://www.w3.org/2000/svg" > <path d="m23.838 7.14-3.319 3.395 13.498 13.802h-6.64l-10.18-10.409-3.318 3.396 6.86 7.013H14.1l-6.86-7.015 3.32-3.393 3.32-3.394-5.28-5.399H4.695v19.2H0v-24h10.544l4.695 4.8 1.959 2.004 1.96-2.004 1.361-1.39 3.32-3.393 23.455 23.984h-6.637L23.838 7.14Z" /> </svg>
			</nuxt-link>
		
			<nav class="hidden mini:block flex-grow">
				<ul class="flex items-center space-x-9">
					<li class="text-sm font-medium hover:text-blue-500 transition-colors duration-300 ease-in-out">
						<nuxt-link to="/projetos">Projetos</nuxt-link>
					</li>
					<!-- <li class="text-sm font-medium hover:text-blue-500 transition-colors duration-300 ease-in-out">
						<nuxt-link to="/blog">Blog</nuxt-link>
					</li> -->
					<li class="text-sm font-medium hover:text-blue-500 transition-colors duration-300 ease-in-out">
						<nuxt-link to="/sobre">Sobre</nuxt-link>
					</li>
					<li class="text-sm font-medium hover:text-blue-500 transition-colors duration-300 ease-in-out">
						<nuxt-link to="/contato">Contato</nuxt-link>
					</li>
				</ul>
			</nav>
			<div class="flex items-center justify-end max-w-[205px] w-full relative group">
				<!-- <p class="text-xs font-medium text-right w-full pr-5">Oi, eu sou Rafael</p> -->
				<label class="absolute left-0 whitespace-nowrap bg-[#5AF284] text-[#1B6437] px-3 py-1 rounded-full text-xs font-medium opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">Aberto à oportunidades</label>
				<button class="relative inline-flex" @click="showSocial = !showSocial">
					<img class="relative rounded-full min-w-[40px] w-10 h-10 group-hover:cursor-pointer" src="~/assets/images/profile-picture.jpg" alt="Foto de perfil de Rafael" />
					<span class="flex absolute h-3 w-3 top-0 right-0 group-hover:cursor-pointer">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF47] opacity-75"></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-[#00FF47] bg-opacity-100"></span>
					</span>
				</button>

				<Transition enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
					<div class="absolute top-[60px] z-popover" v-if="showSocial">
						<div class="rounded-lg bg-white p-6 border border-gray-300">
							<div class="block mini:hidden">
								<nav>
									<ul class="flex flex-col items-start space-y-6">
										<li class="text-sm font-medium hover:text-blue-500 transition-colors duration-300 ease-in-out">
											<nuxt-link to="/projetos">Projetos</nuxt-link>
										</li>
										<!-- <li class="text-sm font-medium hover:text-blue-500 transition-colors duration-300 ease-in-out">
											<nuxt-link to="/blog">Blog</nuxt-link>
										</li> -->
										<li class="text-sm font-medium hover:text-blue-500 transition-colors duration-300 ease-in-out">
											<nuxt-link to="/sobre">Sobre</nuxt-link>
										</li>
										<li class="text-sm font-medium hover:text-blue-500 transition-colors duration-300 ease-in-out">
											<nuxt-link to="/contato">Contato</nuxt-link>
										</li>
									</ul>
								</nav>
								<hr class="my-6">
							</div>

							<ul class="flex flex-col items-center space-y-2">
								<li class="w-full group-li">
									<a href="https://instagram.com/rafaeldemacedo" target="_blank" class="flex items-center space-x-4 py-2 text-sm w-full text-gray-500 font-medium group-li-hover:text-blue-500">
										<svg class="w-5 h-5 text-gray-400 fill-current group-li-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
										<span>Instagram</span>
									</a>
								</li>
								<li class="w-full group-li">
									<a href="https://twitter.com/rafaeldemacedo" target="_blank" class="flex items-center space-x-4 py-2 text-sm w-full text-gray-500 font-medium group-li-hover:text-blue-500">
										<svg class="w-5 h-5 text-gray-400 fill-current group-li-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
										<span>Twitter</span>
									</a>
								</li>
								<li class="w-full group-li">
									<a href="https://github.com/rafaelmfreire" target="_blank" class="flex items-center space-x-4 py-2 text-sm w-full text-gray-500 font-medium group-li-hover:text-blue-500">
										<svg class="w-5 h-5 text-gray-400 fill-current group-li-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
										<span>GitHub</span>
									</a>
								</li>
								<li class="w-full group-li">
									<a href="https://linkedin.com/rafaeldemacedo" target="_blank" class="flex items-center space-x-4 py-2 text-sm w-full text-gray-500 font-medium group-li-hover:text-blue-500">
										<svg class="w-5 h-5 text-gray-400 fill-current group-li-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
										<span>LinkedIn</span>
									</a>
								</li>
								<li class="w-full group-li">
									<a href="https://youtube.com/rafaeldemacedo" target="_blank" class="flex items-center space-x-4 py-2 text-sm w-full text-gray-500 font-medium group-li-hover:text-blue-500">
										<svg class="w-5 h-5 text-gray-400 fill-current group-li-hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
										<span>YouTube</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</Transition>
			</div>
		</div>
  </header>
</template>
<script>
export default {
	data() {
		return {
			showSocial: false,
		}
	},
	props: ['whiteBar'],
	mounted() {
		window.addEventListener("scroll", function (e) {
			var top = document.getElementById("topbar");
			if (document.documentElement.scrollTop > 100 || document.body.scrollTop > window.innerHeight) {
				top.classList.add("top-narrow");
				top.classList.remove("top-tall");
			} else {
				top.classList.add("top-tall");
				top.classList.remove("top-narrow");
			}
		});
	}
}
</script>