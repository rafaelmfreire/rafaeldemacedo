<template>
  <main class="bg-gray-200 px-6 flex flex-1">
    <div class="container mx-auto">
      <section class="py-14 max-w-lg w-full mx-auto">
        <h1 class="text-lg font-bold mb-8">Contato</h1>

        <form action="" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700" >Nome</label >
            <input type="text" name="name" id="name" autocomplete="name" class=" mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-400/60 rounded-md " />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700" >Email</label >
            <input type="email" name="email" id="email" autocomplete="given-name" class=" mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-400/60 rounded-md " />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Mensagem</label>
            <div class="mt-1">
              <textarea id="message" name="message" rows="3" class="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-400/60 rounded-md"></textarea>
            </div>
          </div>
          <div class="pt-4">
            <button type="submit" class="inline-flex justify-center py-3 px-5 border border-transparent shadow-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Enviar mensagem</button>
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
