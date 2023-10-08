<template>
  <header
    class="fixed left-0 top-0 z-10 flex w-full items-center gap-4 bg-white p-4 font-medium dark:bg-primary md:px-[15%]"
  >
    <img src="img/logo.png" alt="Logo" />
    <button
      class="ml-auto active:scale-95 md:!hidden"
      @click="showMenu = !showMenu"
    >
      <Icon name="humbleicons:bars" size="3rem" />
    </button>
    <AppMenu :showMenu="showMenu" />
  </header>
</template>

<script lang="ts" setup>
const { width } = useWindowSize();

const showMenu = ref(width.value > 768);

watch(width, () => (showMenu.value = width.value > 768));
</script>
