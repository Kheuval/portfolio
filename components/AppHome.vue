<template>
  <section
    class="flex flex-col gap-8 md:mt-24 md:flex-row md:items-center"
    id="home"
  >
    <img
      class="mx-auto md:order-3"
      width="220"
      height="220"
      src="img/profile-picture.png"
      alt="Profile picture"
    />
    <div class="mx-auto flex items-center gap-4 md:order-4 md:flex md:flex-col">
      <NuxtLink
        to="https://www.linkedin.com/in/hadrien-hartstein-1694a872/"
        external
        target="blank"
      >
        <Icon
          class="transition-all hover:scale-110 active:scale-95"
          name="bi:linkedin"
          size="2rem"
        />
      </NuxtLink>
      <NuxtLink to="https://github.com/Kheuval" external target="blank">
        <Icon
          class="transition-all hover:scale-110 active:scale-95"
          name="mdi:github"
          size="2.5rem"
        />
      </NuxtLink>
    </div>
    <div class="mx-auto md:max-w-xl">
      <p class="text-lg md:text-2xl">Hello 👋 {{ $t("home.iam") }}</p>
      <h1 class="text-4xl font-semibold md:text-6xl">Hadrien Hartstein</h1>
      <p class="mt-8 text-lg md:text-2xl md:leading-10">
        {{ $t("home.introduction") }}
      </p>
      <a
        class="mx-auto mt-12 flex w-fit items-center gap-2 rounded-md bg-primary p-6 text-2xl text-white transition-all hover:scale-105 active:scale-95 dark:bg-black dark:text-white md:mx-px"
        id="contact-link"
        href="#contact"
        @click="scrollSmooth"
      >
        {{ $t("home.sayHello") }}
        <Icon class="text-secondary" name="uil:envelope-send" size="2rem" />
      </a>
    </div>
  </section>
</template>
