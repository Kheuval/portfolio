<template>
  <Transition name="menuToggle">
    <nav
      class="absolute right-0 top-[100%] ml-auto flex flex-col gap-4 rounded-l-md border-y-2 border-l-2 border-primary bg-white p-4 dark:border-white dark:bg-primary md:relative md:flex-row md:border-none md:p-0"
      v-show="showMenu"
    >
      <ul class="flex flex-col gap-6 md:flex-row">
        <li
          class="header-link w-fit border-b-[3px] border-transparent transition-all hover:border-secondary"
        >
          <a id="home-link" href="#home" @click="scrollSmooth">
            {{ $t("menu.home") }}
          </a>
        </li>
        <li
          class="header-link w-fit border-b-[3px] border-transparent transition-all hover:border-secondary"
        >
          <a id="about-link" href="#about" @click="scrollSmooth">
            {{ $t("menu.about") }}
          </a>
        </li>
        <li
          class="header-link w-fit border-b-[3px] border-transparent transition-all hover:border-secondary"
        >
          <a id="skills-link" href="#skills" @click="scrollSmooth">
            {{ $t("menu.skills") }}
          </a>
        </li>
        <li
          class="header-link w-fit border-b-[3px] border-transparent transition-all hover:border-secondary"
        >
          <a id="projects-link" href="#projects" @click="scrollSmooth">
            {{ $t("menu.projects") }}
          </a>
        </li>
        <li
          class="header-link w-fit border-b-[3px] border-transparent transition-all hover:border-secondary"
        >
          <a id="contact-link" href="#contact" @click="scrollSmooth">
            {{ $t("menu.contact") }}
          </a>
        </li>
      </ul>
      <div class="flex items-center gap-4">
        <button @click="switchLocale">
          <img class="rounded-md" :src="`/img/${locale}.png`" alt="Locale" />
        </button>
        <ClientOnly>
          <button @click="switchColorMode">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="h-7 w-7 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              v-if="colorMode.value === 'light'"
            >
              <path
                d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              ></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              style="color: rgb(204, 204, 204); width: 20px; height: 20px"
              xmlns="http://www.w3.org/2000/svg"
              v-if="colorMode.value === 'dark'"
            >
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
              ></path>
            </svg>
          </button>
        </ClientOnly>
      </div>
    </nav>
  </Transition>
</template>

<script lang="ts" setup>
import { scrollSmooth } from "~/utils/ScrollSmooth";

const { locale, switchLocale } = useLocaleSwitcher();
const { colorMode, switchColorMode } = useColormodeSwitcher();

defineProps<{
  showMenu: boolean;
}>();

onMounted(() => {
  const listItems = document.getElementsByClassName("header-link");

  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        [...listItems].forEach((listItem) => {
          listItem.classList.remove("border-secondary");
          listItem.classList.add("border-transparent");
        });

        const link = document.getElementById(`${entry.target.id}-link`);

        const listItem = link?.parentNode as HTMLUListElement;

        listItem.classList.remove("border-transparent");
        listItem.classList.add("border-secondary");
      }
    },
    { threshold: 0.5 },
  );

  [...document.getElementsByTagName("section")].forEach((section) =>
    observer.observe(section!),
  );
});
</script>

<style lang="scss" scoped>
.menuToggle-enter-active,
.menuToggle-leave-active {
  transition: transform 0.3s ease-in-out;
}

.menuToggle-enter-from,
.menuToggle-leave-to {
  transform: translate(100%);
}
</style>
