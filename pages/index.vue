<template>
  <main class="bg-gray-200 px-6 flex flex-1">
    <div class="container mx-auto">

      <!-- HERO -->
      <section class="py-6 mini:py-14 max-w-3xl w-full mx-auto space-y-8 mini:space-y-12 desktop:space-y-16">
        <div class="spacey-6">
          <h1 class="text-base mini:text-md tablet:text-lg font-medium text-gray-400 text-center mb-6">Oi, sou Rafael de Macêdo <span class="mt-4 font-semibold text-lg mini:text-xl tablet:text-2xl text-blue-600 block">Desenvolvedor Full Stack</span></h1>
          <p class="text-center text-md">Construindo sites usando as ferramentas mais modernas</p>
        </div>
        <ul class="grid grid-cols-1 mini:grid-cols-3 gap-4 mini:gap-8 desktop:gap-16 text-sm tablet:text-base">
          <li class="flex items-center space-x-4 font-medium group">
            <div class="p-2 desktop:p-3 rounded-md bg-gray-100/30 group-hover:bg-blue-50/40 border border-gray-300 group-hover:border-blue-200 transition duration-300 ease-in-out">
              <svg class="w-5 h-5 desktop:w-6 desktop:h-6 text-gray-500 group-hover:text-blue-500 transition duration-300 ease-in-out" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
            </div>
            <span class="leading-5 text-gray-600">Vivendo em Natal/RN - Brasil</span>
          </li>
          <li class="flex items-center space-x-4 font-medium group">
            <div class="p-2 desktop:p-3 rounded-md bg-gray-100/30 group-hover:bg-blue-50/40 border border-gray-300 group-hover:border-blue-200 transition duration-300 ease-in-out">
              <svg class="w-5 h-5 desktop:w-6 desktop:h-6 text-gray-500 group-hover:text-blue-500 transition duration-300 ease-in-out" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
            </div>
            <span class="leading-5 text-gray-600">FrontEnd, BackEnd e WeekEnd</span>
          </li>
          <li class="flex items-center space-x-4 font-medium group">
            <div class="p-2 desktop:p-3 rounded-md bg-gray-100/30 group-hover:bg-blue-50/40 border border-gray-300 group-hover:border-blue-200 transition duration-300 ease-in-out">
              <svg class="w-5 h-5 desktop:w-6 desktop:h-6 text-gray-500 group-hover:text-blue-500 transition duration-300 ease-in-out" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
            </div>
            <span class="leading-5 text-gray-600">Aberto à oportunidades</span>
          </li>
        </ul>
        <!-- <div class="flex flex-col justify-center mini:flex-row items-center mt-6 gap-4">
          <nuxt-link to="/contato" class="group flex items-center w-full space-x-4 justify-center text-center mini:inline mini:w-auto mini:text-left mini:justify-start btn-primary">
            <span>Entre em contato</span>
          </nuxt-link>
          <nuxt-link to="/projetos" class="flex w-full justify-center text-center mini:inline mini:w-auto mini:text-left mini:justify-start px-6 py-3 group btn-secondary">
            <span>Ver projetos</span>
          </nuxt-link>
        </div> -->
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
          <p class="text-center tablet:text-left">Compartilhando ideias e tutoriais sobre técnicas e ferramentas que uso <br class="hidden tablet:block">ou aprendendo, sobre os produtos que estou desenvolvendo e vida pessoal</p>
          <nuxt-link to="/blog" class="tablet:hidden text-center tablet:text-left btn-link">Ver tudo no blog</nuxt-link>
        </div>
        <div class="grid grid-cols-1 space-y-14">
          <BlogPost v-for="post in posts" :post="post" :key="post.slug" />
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
            <nuxt-link to="/projetos" class="hidden tablet:block text-center tablet:text-left btn-link">Ver todos</nuxt-link>
          </div>
          <p class="text-center tablet:text-left">Alguns dos projetos pessoais que criei <span class="block">Uns ativos, outros aposentados, em pausa ou encerrados</span></p>
          <nuxt-link to="/blog" class="tablet:hidden text-center tablet:text-left btn-link">Ver todos</nuxt-link>
        </div>
        <div class="grid grid-cols-1 gap-6 mini:grid mini:grid-cols-2 mini:space-y-0">
          <Project v-for="project in projects" :key="project.slug" :project="project" />
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
            <nuxt-link to="/sobre" class="inline-flex w-full justify-center text-center mini:w-auto mini:text-left mini:justify-start px-6 py-3 group btn-secondary">
              <span>Saiba a história toda</span>
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
    const projects = await $content('projetos')
      .sortBy('createdAt', 'desc')
      .limit(4)
      .fetch()
    return {
      posts, projects
    }
  },
};
</script>
