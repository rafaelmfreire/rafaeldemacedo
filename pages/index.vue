<template>
  <main class="bg-gray-200 px-6">
    <div class="container mx-auto">

      <!-- HERO -->
      <section class="py-14 max-w-3xl w-full mx-auto">
        <h1 class="text-xl font-semibold text-center mb-6 tablet:text-2xl mini:text-left">Desenvolvedor Front-End <span class="inline mini:text-xl mini:block desktop:text-2xl">vivendo em Natal/RN - Brasil</span></h1>
        <div class="mini:grid grid-cols-2 mt-6 gap-8">
          <p class="text-sm text-center font-medium mb-14 mini:text-base mini:order-2 mini:text-left">Também gosto do Back-End <br class="hidden mini:block">e do Week-End 😉️</p>
          <div class="space-y-2">
            <p class="text-center font-medium mb-4 mini:text-left">Interessado no meu trabalho?</p>
            <nuxt-link to="/projetos" class="group flex mini:inline-flex items-center space-x-4 px-6 py-3 justify-center text-center mini:text-left mini:justify-start btn-primary">
              <span>Entre em contato</span>
              <svg width="18" height="16" class="btn-primary--icon" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H0v2h1V7Zm16.707 1.707a1 1 0 0 0 0-1.414L11.343.929A1 1 0 1 0 9.93 2.343L15.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM1 9h16V7H1v2Z" /></svg>
            </nuxt-link>
            <nuxt-link to="/projetos" class="mini:inline-flex justify-center text-center mini:text-left mini:justify-start px-6 py-3 group btn-secondary">
              <span>Ver projetos</span>
              <svg width="18" height="16" class="btn-secondary--icon" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H0v2h1V7Zm16.707 1.707a1 1 0 0 0 0-1.414L11.343.929A1 1 0 1 0 9.93 2.343L15.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM1 9h16V7H1v2Z" /></svg>
            </nuxt-link>
          </div>
        </div>
      </section>

      <!-- DIVIDER -->
      <div class="max-w-3xl mx-auto">
        <svg class="max-w-md w-full h-auto" viewBox="0 0 485 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".1" fill="#3E3E3E"><path d="m56.798 18.413 3.51-3.536L46.037.5h7.018l10.762 10.842 3.51-3.537L60.073.5h7.02l7.252 7.307-3.509 3.535-3.51 3.535L72.91 20.5h4.127V.5H82v25H70.853l-4.964-5-2.07-2.087-2.074 2.087-1.438 1.448-3.509 3.535L32 .5h7.017l17.781 17.913Z" fill-opacity=".9"/><path d="m143.798 18.413 3.509-3.536L133.037.5h7.019l10.762 10.842 3.509-3.537L147.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H169v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L119 .5h7.017l17.781 17.913Z" fill-opacity=".7"/><path d="m230.798 18.413 3.509-3.536L220.037.5h7.019l10.762 10.842 3.509-3.537L234.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H256v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L206 .5h7.017l17.781 17.913Z" fill-opacity=".5"/><path d="m317.798 18.413 3.509-3.536L307.037.5h7.019l10.762 10.842 3.509-3.537L321.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H343v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L293 .5h7.017l17.781 17.913Z" fill-opacity=".3"/><path d="m404.798 18.413 3.509-3.536L394.037.5h7.019l10.762 10.842 3.509-3.537L408.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H430v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L380 .5h7.017l17.781 17.913Z" fill-opacity=".1"/><path d="m112.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535L96.091 5.5h-4.127v20H87V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L137 25.5h-7.017L112.202 7.587Z" fill-opacity=".8"/><path d="m199.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H174V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L224 25.5h-7.017L199.202 7.587Z" fill-opacity=".6"/><path d="m25.202 7.587-3.51 3.536L35.963 25.5h-7.018L18.182 14.658l-3.51 3.537 7.254 7.305h-7.02l-7.252-7.307 3.509-3.535 3.51-3.535L9.09 5.5H4.964v20H0V.5h11.147l4.964 5 2.07 2.087L20.256 5.5l1.438-1.448L25.202.517 50 25.5h-7.017L25.202 7.587Z"/><path d="m286.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H261V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L311 25.5h-7.017L286.202 7.587Z" fill-opacity=".4"/><path d="m373.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H348V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L398 25.5h-7.017L373.202 7.587Z" fill-opacity=".2"/><path d="m460.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H435V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L485 25.5h-7.017L460.202 7.587Z" fill-opacity=".02"/></g></svg>
      </div>

      <!-- POSTS -->
      <section class="py-14 max-w-3xl w-full mx-auto">
        <div class="space-y-4 mb-14 flex flex-col items-center tablet:items-start">
          <div class="tablet:flex tablet:w-full items-center justify-between">
            <h2 class="text-lg text-center font-medium tablet:text-left">Posts recentes</h2>
            <nuxt-link to="/blog" class="hidden tablet:block text-center tablet:text-left btn-link">Ver tudo no blog</nuxt-link>
          </div>
          <p class="text-center tablet:text-left">Compartilhando ideias e tutoriais sobre técnicas e ferramentas que gosto ou <br class="hidden tablet:block">que estou aprendendo e sobre os produtos que estou desenvolvendo</p>
          <nuxt-link to="/blog" class="tablet:hidden text-center tablet:text-left btn-link">Ver tudo no blog</nuxt-link>
        </div>
        <div class="grid grid-cols-1 space-y-14">
          <article v-for="post in posts" :key="post.title" class="relative">
            <div class="mb-4">
              <nuxt-link :to="`/blog/${post.slug}`" class="hover:underline mb-3 block">
                <h3 class="text-md font-semibold">{{ post.title }}</h3>
              </nuxt-link>
              <div class="relative desktop:absolute desktop:bg-gray-100/20 desktop:rounded-md desktop:border desktop:border-gray-400/40 desktop:p-3 desktop:top-0 desktop:left-auto desktop:right-full space-x-4 desktop:space-x-0 mb-4 desktop:mb-0 desktop:space-y-2 mr-6 flex desktop:flex-col items-center desktop:items-end">
                <time class="text-gray-600">{{ new Date(post.createdAt).toLocaleDateString() }}</time>
                <span class="relative text-xsp font-medium uppercase">{{ post.tag }}</span>
              </div>
              <p class="font-medium text-gray-600 !leading-7 tablet:text-md">
                <nuxt-content :document="{ body: post.excerpt }" />
              </p>
            </div>
            <nuxt-link :to="`/blog/${post.slug}`" class="text-xsp font-semibold text-blue-600 uppercase border-b border-opacity-0 border-b-blue-500 hover:border-opacity-100 transition-all duration-300 ease-in-out">Leia mais</nuxt-link>
          </article>
        </div>
      </section>
      
      <!-- DIVIDER -->
      <div class="max-w-3xl mx-auto">
        <svg class="max-w-md w-full h-auto" viewBox="0 0 485 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".1" fill="#3E3E3E"><path d="m56.798 18.413 3.51-3.536L46.037.5h7.018l10.762 10.842 3.51-3.537L60.073.5h7.02l7.252 7.307-3.509 3.535-3.51 3.535L72.91 20.5h4.127V.5H82v25H70.853l-4.964-5-2.07-2.087-2.074 2.087-1.438 1.448-3.509 3.535L32 .5h7.017l17.781 17.913Z" fill-opacity=".9"/><path d="m143.798 18.413 3.509-3.536L133.037.5h7.019l10.762 10.842 3.509-3.537L147.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H169v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L119 .5h7.017l17.781 17.913Z" fill-opacity=".7"/><path d="m230.798 18.413 3.509-3.536L220.037.5h7.019l10.762 10.842 3.509-3.537L234.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H256v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L206 .5h7.017l17.781 17.913Z" fill-opacity=".5"/><path d="m317.798 18.413 3.509-3.536L307.037.5h7.019l10.762 10.842 3.509-3.537L321.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H343v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L293 .5h7.017l17.781 17.913Z" fill-opacity=".3"/><path d="m404.798 18.413 3.509-3.536L394.037.5h7.019l10.762 10.842 3.509-3.537L408.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H430v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L380 .5h7.017l17.781 17.913Z" fill-opacity=".1"/><path d="m112.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535L96.091 5.5h-4.127v20H87V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L137 25.5h-7.017L112.202 7.587Z" fill-opacity=".8"/><path d="m199.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H174V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L224 25.5h-7.017L199.202 7.587Z" fill-opacity=".6"/><path d="m25.202 7.587-3.51 3.536L35.963 25.5h-7.018L18.182 14.658l-3.51 3.537 7.254 7.305h-7.02l-7.252-7.307 3.509-3.535 3.51-3.535L9.09 5.5H4.964v20H0V.5h11.147l4.964 5 2.07 2.087L20.256 5.5l1.438-1.448L25.202.517 50 25.5h-7.017L25.202 7.587Z"/><path d="m286.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H261V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L311 25.5h-7.017L286.202 7.587Z" fill-opacity=".4"/><path d="m373.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H348V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L398 25.5h-7.017L373.202 7.587Z" fill-opacity=".2"/><path d="m460.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H435V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L485 25.5h-7.017L460.202 7.587Z" fill-opacity=".02"/></g></svg>
      </div>

      <!-- PROJETOS -->
      <section class="py-14 max-w-3xl w-full mx-auto">
        <div class="space-y-4 mb-14 flex flex-col items-center tablet:items-start">
          <div class="tablet:flex tablet:w-full items-center justify-between">
            <h2 class="text-lg text-center font-medium tablet:text-left">Projetos</h2>
            <nuxt-link to="/blog" class="hidden tablet:block text-center tablet:text-left btn-link">Ver todos</nuxt-link>
          </div>
          <p class="text-center tablet:text-left">Alguns dos projetos pessoais que criei <span class="block">Uns ativos, outros aposentados, em pausa ou encerrados</span></p>
          <nuxt-link to="/blog" class="tablet:hidden text-center tablet:text-left btn-link">Ver todos</nuxt-link>
        </div>
        <div class="grid grid-cols-1 gap-6 mini:grid mini:grid-cols-2 mini:space-y-0">
          <article class="group border border-gray-300 bg-gray-100/40 rounded-md p-6 flex flex-col justify-between hover:bg-gray-100/70 hover:cursor-pointer transition-colors duration-300 ease-in-out">
            <div class="space-y-6 mb-8">
              <div class="flex items-center justify-between">
                <h3 class="font-bold">Tudo novo no front</h3>
                <label class="inline text-xs uppercase font-semibold text-auxiliary-success-dark ml-4 opacity-60 group-hover:opacity-100 bg-auxiliary-success-light group-hover:transition-colors duration-300 ease-in-out px-3 py-1 rounded-full before:mr-2 before:content-[''] before:h-2 before:w-2 before:left-1 before:inline-block before:rounded-full before:bg-auxiliary-success">ativo</label>
              </div>
              <p class="font-medium text-sm text-gray-500 leading-5">Como criar um site do zero com TailwindCSS configurando um Design System</p>
            </div>
            <nuxt-link to="/" class="text-xsp font-semibold text-blue-600 uppercase">Saiba mais</nuxt-link>
          </article>
          <article class="group border border-gray-300 bg-gray-100/40 rounded-md p-6 flex flex-col justify-between hover:bg-gray-100/70 hover:cursor-pointer transition-colors duration-300 ease-in-out">
            <div class="space-y-6 mb-8">
              <div class="flex items-center justify-between">
                <h3 class="font-bold">Morf</h3>
                <label class="inline text-xs uppercase font-semibold text-auxiliary-alert-dark ml-4 opacity-60 group-hover:opacity-100 bg-auxiliary-alert-light group-hover:transition-colors duration-300 ease-in-out px-3 py-1 rounded-full before:mr-2 before:content-[''] before:h-2 before:w-2 before:left-1 before:inline-block before:rounded-full before:bg-auxiliary-alert">pausa</label>
              </div>
              <p class="font-medium text-sm text-gray-500 leading-5">O jeito mais fácil de transformar sua database do Notion em um formulário</p>
            </div>
            <nuxt-link to="/" class="text-xsp font-semibold text-blue-600 uppercase">Saiba mais</nuxt-link>
          </article>
          <article class="group border border-gray-300 bg-gray-100/40 rounded-md p-6 flex flex-col justify-between hover:bg-gray-100/70 hover:cursor-pointer transition-colors duration-300 ease-in-out">
            <div class="space-y-6 mb-8">
              <div class="flex items-center justify-between">
                <h3 class="font-bold">Interfy</h3>
                <label class="inline text-xs uppercase font-semibold text-auxiliary-error-dark ml-4 opacity-60 group-hover:opacity-100 bg-auxiliary-error-light group-hover:transition-colors duration-300 ease-in-out px-3 py-1 rounded-full before:mr-2 before:content-[''] before:h-2 before:w-2 before:left-1 before:inline-block before:rounded-full before:bg-auxiliary-error">cancelado</label>
              </div>
              <p class="font-medium text-sm text-gray-500 leading-5">Extensão do Google Chrome para alterar todas as fontes de um site para a fonte Inter</p>
            </div>
            <nuxt-link to="/" class="text-xsp font-semibold text-blue-600 uppercase">Saiba mais</nuxt-link>
          </article>
        </div>
      </section>

      <!-- DIVIDER -->
      <div class="max-w-3xl mx-auto">
        <svg class="max-w-md w-full h-auto" viewBox="0 0 485 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".1" fill="#3E3E3E"><path d="m56.798 18.413 3.51-3.536L46.037.5h7.018l10.762 10.842 3.51-3.537L60.073.5h7.02l7.252 7.307-3.509 3.535-3.51 3.535L72.91 20.5h4.127V.5H82v25H70.853l-4.964-5-2.07-2.087-2.074 2.087-1.438 1.448-3.509 3.535L32 .5h7.017l17.781 17.913Z" fill-opacity=".9"/><path d="m143.798 18.413 3.509-3.536L133.037.5h7.019l10.762 10.842 3.509-3.537L147.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H169v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L119 .5h7.017l17.781 17.913Z" fill-opacity=".7"/><path d="m230.798 18.413 3.509-3.536L220.037.5h7.019l10.762 10.842 3.509-3.537L234.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H256v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L206 .5h7.017l17.781 17.913Z" fill-opacity=".5"/><path d="m317.798 18.413 3.509-3.536L307.037.5h7.019l10.762 10.842 3.509-3.537L321.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H343v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L293 .5h7.017l17.781 17.913Z" fill-opacity=".3"/><path d="m404.798 18.413 3.509-3.536L394.037.5h7.019l10.762 10.842 3.509-3.537L408.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H430v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L380 .5h7.017l17.781 17.913Z" fill-opacity=".1"/><path d="m112.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535L96.091 5.5h-4.127v20H87V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L137 25.5h-7.017L112.202 7.587Z" fill-opacity=".8"/><path d="m199.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H174V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L224 25.5h-7.017L199.202 7.587Z" fill-opacity=".6"/><path d="m25.202 7.587-3.51 3.536L35.963 25.5h-7.018L18.182 14.658l-3.51 3.537 7.254 7.305h-7.02l-7.252-7.307 3.509-3.535 3.51-3.535L9.09 5.5H4.964v20H0V.5h11.147l4.964 5 2.07 2.087L20.256 5.5l1.438-1.448L25.202.517 50 25.5h-7.017L25.202 7.587Z"/><path d="m286.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H261V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L311 25.5h-7.017L286.202 7.587Z" fill-opacity=".4"/><path d="m373.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H348V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L398 25.5h-7.017L373.202 7.587Z" fill-opacity=".2"/><path d="m460.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H435V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L485 25.5h-7.017L460.202 7.587Z" fill-opacity=".02"/></g></svg>
      </div>
      
      <!-- SOBRE -->
      <section class="py-14 max-w-3xl w-full mx-auto">
        <div class="mb-8 grid grid-cols-[1fr_8fr] gap-x-6 gap-y-4 mini:gap-y-1">
          <div class="min-w-[67px] h-auto mini:row-span-2">
            <img src="~/assets/images/profile-picture.jpg" class="rounded-lg" alt="Foto de perfil de Rafael">
          </div>
          <div class="self-center">
            <h2 class="text-lg font-medium">Sobre mim</h2>
          </div>
          <div class="col-span-2 mini:col-span-1">
            <div class="space-y-4 mt-2 mb-8">
              <p class="font-medium">Olá, sou Rafael de Macêdo. Possuo formação e experiência no desenvolvimento de sites, e sou designer autodidata, com foco em UI e design de marcas.</p>
              <p class="font-medium">Também tenho interesse em outras áreas como a fotografia e ultimamente o 3D.</p>
            </div>
            <nuxt-link to="/sobre" class="group btn-secondary">
              <span>Veja minha história improvável</span>
              <svg width="18" height="16" class="btn-secondary--icon" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H0v2h1V7Zm16.707 1.707a1 1 0 0 0 0-1.414L11.343.929A1 1 0 1 0 9.93 2.343L15.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM1 9h16V7H1v2Z" /></svg>
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'default',
  name: "IndexPage",
  async asyncData({ $content, params }) {
    const posts = await $content('blog')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    return {
      posts
    }
  },
};
</script>
