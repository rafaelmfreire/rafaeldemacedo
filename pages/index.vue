<template>
  <main class="bg-gray-200 px-6">
    <div class="container mx-auto">

      <!-- HERO -->
      <section class="py-14">
        <h1 class="text-xl font-semibold text-center mb-6 tablet:text-2xl tablet:text-left">Desenvolvedor Front-End <span class="inline mini:text-xl mini:block">vivendo em Natal/RN - Brasil</span></h1>
        <div class="tablet:grid grid-cols-2 mt-12">
          <p class="text-sm text-center font-medium mb-14 mini:text-base tablet:order-2 tablet:text-left">Também gosto do Back-End <br class="hidden tablet:block">e do Week-End 😉️</p>
          <div>
            <p class="text-center font-medium mb-4 tablet:text-left">Interessado no meu trabalho?</p>
            <nuxt-link to="/projetos" class="flex items-center justify-center space-x-4 text-center font-medium text-blue-700 tablet:text-left tablet:justify-start">
              <span>Ver projetos</span>
              <svg width="18" height="16" class="fill-current text-blue-700" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H0v2h1V7Zm16.707 1.707a1 1 0 0 0 0-1.414L11.343.929A1 1 0 1 0 9.93 2.343L15.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM1 9h16V7H1v2Z" /></svg>
            </nuxt-link>
          </div>
        </div>
      </section>

      <!-- DIVIDER -->
      <svg class="max-w-md w-full h-auto" viewBox="0 0 485 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".1" fill="#3E3E3E"><path d="m56.798 18.413 3.51-3.536L46.037.5h7.018l10.762 10.842 3.51-3.537L60.073.5h7.02l7.252 7.307-3.509 3.535-3.51 3.535L72.91 20.5h4.127V.5H82v25H70.853l-4.964-5-2.07-2.087-2.074 2.087-1.438 1.448-3.509 3.535L32 .5h7.017l17.781 17.913Z" fill-opacity=".9"/><path d="m143.798 18.413 3.509-3.536L133.037.5h7.019l10.762 10.842 3.509-3.537L147.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H169v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L119 .5h7.017l17.781 17.913Z" fill-opacity=".7"/><path d="m230.798 18.413 3.509-3.536L220.037.5h7.019l10.762 10.842 3.509-3.537L234.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H256v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L206 .5h7.017l17.781 17.913Z" fill-opacity=".5"/><path d="m317.798 18.413 3.509-3.536L307.037.5h7.019l10.762 10.842 3.509-3.537L321.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H343v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L293 .5h7.017l17.781 17.913Z" fill-opacity=".3"/><path d="m404.798 18.413 3.509-3.536L394.037.5h7.019l10.762 10.842 3.509-3.537L408.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H430v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L380 .5h7.017l17.781 17.913Z" fill-opacity=".1"/><path d="m112.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535L96.091 5.5h-4.127v20H87V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L137 25.5h-7.017L112.202 7.587Z" fill-opacity=".8"/><path d="m199.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H174V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L224 25.5h-7.017L199.202 7.587Z" fill-opacity=".6"/><path d="m25.202 7.587-3.51 3.536L35.963 25.5h-7.018L18.182 14.658l-3.51 3.537 7.254 7.305h-7.02l-7.252-7.307 3.509-3.535 3.51-3.535L9.09 5.5H4.964v20H0V.5h11.147l4.964 5 2.07 2.087L20.256 5.5l1.438-1.448L25.202.517 50 25.5h-7.017L25.202 7.587Z"/><path d="m286.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H261V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L311 25.5h-7.017L286.202 7.587Z" fill-opacity=".4"/><path d="m373.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H348V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L398 25.5h-7.017L373.202 7.587Z" fill-opacity=".2"/><path d="m460.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H435V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L485 25.5h-7.017L460.202 7.587Z" fill-opacity=".02"/></g></svg>

      <!-- POSTS -->
      <section class="py-14 max-w-3xl w-full mx-auto">
        <div class="space-y-4 mb-14">
          <div class="tablet:flex items-center justify-between">
            <h2 class="text-lg text-center font-medium tablet:text-left">Posts recentes</h2>
            <nuxt-link to="/blog" class="hidden tablet:block text-center text-xsp font-semibold uppercase text-blue-600 tablet:text-left">Ver tudo no blog</nuxt-link>
          </div>
          <p class="text-center tablet:text-left">Compartilhando ideias e tutoriais sobre técnicas e ferramentas que gosto ou que estou aprendendo e sobre os produtos que estou desenvolvendo</p>
          <nuxt-link to="/blog" class="block tablet:hidden text-center text-xsp font-semibold uppercase text-blue-600 tablet:text-left">Ver tudo no blog</nuxt-link>
        </div>
        <div class="grid grid-cols-1 space-y-14">
          <article>
            <div class="space-y-3 mb-4">
              <h3 class="text-md font-semibold">Versão beta do Morf</h3>
              <div class="space-x-4 flex items-center">
                <span class="text-gray-500">19 Jun, 2022</span>
                <span class="relative text-xsp font-medium uppercase pl-10 before:left-2 before:content-[''] before:h-2 before:w-2 before:bg-gray-300 before:top-1 before:rounded-full before:absolute">Tutorial</span>
              </div>
              <p class="font-medium text-gray-600">Dia 1º de agosto irei lançar a versão beta do Morf. Decidi torná-lo um projeto open source para aqueles que quiserem se aventurar na programação e instalar por conta própria. Para aqueles que não tem tempo ou não quiserem, ofereço o serviço de instalação.</p>
            </div>
            <nuxt-link to="/" class="text-xsp font-semibold text-blue-600 uppercase">Leia mais</nuxt-link>
          </article>
          <article>
            <div class="space-y-3 mb-4">
              <h3 class="text-md font-semibold">Versão beta do Morf</h3>
              <div class="space-x-4 flex items-center">
                <span class="text-gray-500">19 Jun, 2022</span>
                <span class="relative text-xsp font-medium uppercase pl-10 before:left-2 before:content-[''] before:h-2 before:w-2 before:bg-gray-300 before:top-1 before:rounded-full before:absolute">Tutorial</span>
              </div>
              <p class="font-medium text-gray-600">Dia 1º de agosto irei lançar a versão beta do Morf. Decidi torná-lo um projeto open source para aqueles que quiserem se aventurar na programação e instalar por conta própria. Para aqueles que não tem tempo ou não quiserem, ofereço o serviço de instalação.</p>
            </div>
            <nuxt-link to="/" class="text-xsp font-semibold text-blue-600 uppercase">Leia mais</nuxt-link>
          </article>
          <article>
            <div class="space-y-3 mb-4">
              <h3 class="text-md font-semibold">Versão beta do Morf</h3>
              <div class="space-x-4 flex items-center">
                <span class="text-gray-500">19 Jun, 2022</span>
                <span class="relative text-xsp font-medium uppercase pl-10 before:left-2 before:content-[''] before:h-2 before:w-2 before:bg-gray-300 before:top-1 before:rounded-full before:absolute">Tutorial</span>
              </div>
              <p class="font-medium text-gray-600">Dia 1º de agosto irei lançar a versão beta do Morf. Decidi torná-lo um projeto open source para aqueles que quiserem se aventurar na programação e instalar por conta própria. Para aqueles que não tem tempo ou não quiserem, ofereço o serviço de instalação.</p>
            </div>
            <nuxt-link to="/" class="text-xsp font-semibold text-blue-600 uppercase">Leia mais</nuxt-link>
          </article>
          <article>
            <div class="space-y-3 mb-4">
              <h3 class="text-md font-semibold">Versão beta do Morf</h3>
              <div class="space-x-4 flex items-center">
                <span class="text-gray-500">19 Jun, 2022</span>
                <span class="relative text-xsp font-medium uppercase pl-10 before:left-2 before:content-[''] before:h-2 before:w-2 before:bg-gray-300 before:top-1 before:rounded-full before:absolute">Tutorial</span>
              </div>
              <p class="font-medium text-gray-600">Dia 1º de agosto irei lançar a versão beta do Morf. Decidi torná-lo um projeto open source para aqueles que quiserem se aventurar na programação e instalar por conta própria. Para aqueles que não tem tempo ou não quiserem, ofereço o serviço de instalação.</p>
            </div>
            <nuxt-link to="/" class="text-xsp font-semibold text-blue-600 uppercase">Leia mais</nuxt-link>
          </article>
        </div>
      </section>
      
      <!-- DIVIDER -->
      <div class="max-w-3xl mx-auto">
        <svg class="max-w-md w-full h-auto" viewBox="0 0 485 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".1" fill="#3E3E3E"><path d="m56.798 18.413 3.51-3.536L46.037.5h7.018l10.762 10.842 3.51-3.537L60.073.5h7.02l7.252 7.307-3.509 3.535-3.51 3.535L72.91 20.5h4.127V.5H82v25H70.853l-4.964-5-2.07-2.087-2.074 2.087-1.438 1.448-3.509 3.535L32 .5h7.017l17.781 17.913Z" fill-opacity=".9"/><path d="m143.798 18.413 3.509-3.536L133.037.5h7.019l10.762 10.842 3.509-3.537L147.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H169v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L119 .5h7.017l17.781 17.913Z" fill-opacity=".7"/><path d="m230.798 18.413 3.509-3.536L220.037.5h7.019l10.762 10.842 3.509-3.537L234.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H256v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L206 .5h7.017l17.781 17.913Z" fill-opacity=".5"/><path d="m317.798 18.413 3.509-3.536L307.037.5h7.019l10.762 10.842 3.509-3.537L321.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H343v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L293 .5h7.017l17.781 17.913Z" fill-opacity=".3"/><path d="m404.798 18.413 3.509-3.536L394.037.5h7.019l10.762 10.842 3.509-3.537L408.074.5h7.019l7.253 7.307-3.509 3.535-3.51 3.535 5.582 5.623h4.127V.5H430v25h-11.147l-4.964-5-2.071-2.087-2.073 2.087-1.438 1.448-3.509 3.535L380 .5h7.017l17.781 17.913Z" fill-opacity=".1"/><path d="m112.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535L96.091 5.5h-4.127v20H87V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L137 25.5h-7.017L112.202 7.587Z" fill-opacity=".8"/><path d="m199.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H174V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L224 25.5h-7.017L199.202 7.587Z" fill-opacity=".6"/><path d="m25.202 7.587-3.51 3.536L35.963 25.5h-7.018L18.182 14.658l-3.51 3.537 7.254 7.305h-7.02l-7.252-7.307 3.509-3.535 3.51-3.535L9.09 5.5H4.964v20H0V.5h11.147l4.964 5 2.07 2.087L20.256 5.5l1.438-1.448L25.202.517 50 25.5h-7.017L25.202 7.587Z"/><path d="m286.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H261V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L311 25.5h-7.017L286.202 7.587Z" fill-opacity=".4"/><path d="m373.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H348V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L398 25.5h-7.017L373.202 7.587Z" fill-opacity=".2"/><path d="m460.202 7.587-3.509 3.536 14.27 14.377h-7.019l-10.762-10.842-3.509 3.537 7.253 7.305h-7.019l-7.253-7.307 3.509-3.535 3.51-3.535-5.582-5.623h-4.127v20H435V.5h11.147l4.964 5 2.071 2.087 2.073-2.087 1.438-1.448 3.509-3.535L485 25.5h-7.017L460.202 7.587Z" fill-opacity=".02"/></g></svg>
      </div>

      <!-- PROJETOS -->
      <section class="py-14 max-w-3xl w-full mx-auto">
        <div class="space-y-4 mb-14">
          <div class="tablet:flex items-center justify-between">
            <h2 class="text-lg text-center font-medium tablet:text-left">Projetos</h2>
            <nuxt-link to="/blog" class="hidden tablet:block text-center text-xsp font-semibold uppercase text-blue-600 tablet:text-left">Ver todos</nuxt-link>
          </div>
          <p class="text-center tablet:text-left">Alguns dos projetos pessoais que criei <span class="block">Uns ativos, outros aposentados, em pausa ou encerrados</span></p>
          <nuxt-link to="/blog" class="block tablet:hidden text-center text-xsp font-semibold uppercase text-blue-600">Ver todos</nuxt-link>
        </div>
        <div class="grid grid-cols-1 space-y-14">
          <article>
            <div class="space-y-3 mb-4">
              <h3 class="font-bold">Tudo novo no front <span class="text-sm font-medium text-auxiliary-success-dark ml-4 opacity-60 hover:opacity-100 bg-auxiliary-success-light px-3 py-1 rounded-full before:mr-2 before:content-[''] before:h-2 before:w-2 before:left-1 before:inline-block before:rounded-full before:bg-auxiliary-success">ativo</span></h3>
              <p class="font-medium text-sm text-gray-500">Como criar um site do zero com TailwindCSS configurando um Design System</p>
            </div>
            <nuxt-link to="/" class="text-xsp font-semibold text-blue-600 uppercase">Leia mais</nuxt-link>
          </article>
          <article>
            <div class="space-y-3 mb-4">
              <h3 class="font-bold">Morf <span class="text-sm font-medium text-auxiliary-alert-dark ml-4 opacity-60 hover:opacity-100 bg-auxiliary-alert-light px-3 py-1 rounded-full before:mr-2 before:content-[''] before:h-2 before:w-2 before:left-1 before:inline-block before:rounded-full before:bg-auxiliary-alert">pausa</span></h3>
              <p class="font-medium text-sm text-gray-500">O jeito mais fácil de transformar sua database do Notion em um formulário</p>
            </div>
            <nuxt-link to="/" class="text-xsp font-semibold text-blue-600 uppercase">Leia mais</nuxt-link>
          </article>
          <article>
            <div class="space-y-3 mb-4">
              <h3 class="font-bold">Interfy <span class="text-sm font-medium text-auxiliary-error-dark ml-4 opacity-60 hover:opacity-100 bg-auxiliary-error-light px-3 py-1 rounded-full before:mr-2 before:content-[''] before:h-2 before:w-2 before:left-1 before:inline-block before:rounded-full before:bg-auxiliary-error">cancelado</span></h3>
              <p class="font-medium text-sm text-gray-500">Extensão do Google Chrome para alterar todas as fontes de um site para a fonte Inter</p>
            </div>
            <nuxt-link to="/" class="text-xsp font-semibold text-blue-600 uppercase">Leia mais</nuxt-link>
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
          <div class="col-span-2 mini:col-span-1 space-y-4">
            <p class="font-medium">Olá, sou Rafael de Macêdo. Possuo formação e experiência no desenvolvimento de sites, e sou designer autodidata, com foco em UI e design de marcas.</p>
            <p class="font-medium mb-8">Também tenho interesse em outras áreas como a fotografia e ultimamente o 3D.</p>
            <nuxt-link to="/sobre" class="flex items-center space-x-4 font-medium text-blue-700">
              <span>Veja minha história improvável</span>
              <svg width="18" height="16" class="fill-current text-blue-700" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H0v2h1V7Zm16.707 1.707a1 1 0 0 0 0-1.414L11.343.929A1 1 0 1 0 9.93 2.343L15.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM1 9h16V7H1v2Z" /></svg>
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
};
</script>
