<template>
  <main class="bg-gray-200 px-6 flex flex-1">
    <div class="container mx-auto">
      <section class="py-14 max-w-lg w-full mx-auto">
        <h1 class="text-lg font-bold mb-8">Contato</h1>

        <a class="flex items-center space-x-2 text-blue-500 hover:underline" href="mailto:contato@rafaeldemacedo.com">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 fill-current text-gray-400">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <span class="font-medium">contato@rafaeldemacedo.com</span>
        </a>

        <a class="flex items-center space-x-2 text-blue-500 hover:underline" href="https://twitter.com/rafaeldemacedo">
          <svg class="w-5 h-5 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
          <span class="font-medium">@rafaeldemacedo</span>
        </a>

        <form name="contato" class="space-y-4 mt-4" netlify>
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700" >Nome</label >
            <input type="text" name="name" id="name" autocomplete="name" class=" mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-400/60 rounded-md " />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700" >Email</label >
            <input type="email" name="email" id="email" autocomplete="email" class=" mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-400/60 rounded-md " />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Mensagem</label>
            <div class="mt-1">
              <textarea id="message" name="message" rows="3" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-400/60 rounded-md"></textarea>
            </div>
          </div>
          <div class="pt-4">
            <!-- <button type="submit" class="inline-flex justify-center py-3 px-5 border border-transparent shadow-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Enviar mensagem</button> -->
            <button type="submit" class="btn-primary">Enviar mensagem</button>
          </div>
        </form>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  layout: "default",
  name: "ContactPage",
};
</script>
