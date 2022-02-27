<template>
  <transition name="header" appear>
    <Navbar :routes="routes" />
  </transition>
  <router-view v-slot="{ Component, route }">
    <Bookmark :display="route.name === 'Home'" :showBookmark="showBookmark" />
    <transition
      name="route"
      mode="out-in"
      @before-enter="toggleBookmark(route)"
      @after-enter="show = true"
      @after-leave="show = false"
      @before-leave="toggleBookmark(route)"
    >
      <component :is="Component" :show="show" :db="db"> </component>
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import { ref } from "@vue/reactivity";
import Bookmark from "./components/Bookmark.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { routes } from "./router";
import db from "./store/db.json";

export default {
  setup() {
    const show = ref(null);
    const showBookmark = ref(null);

    const toggleBookmark = (route) => {
      if (route.name !== "Home") {
        showBookmark.value = false;
      } else {
        showBookmark.value = true;
      }
    };

    return { show, routes, toggleBookmark, showBookmark, db };
  },
  components: {
    Bookmark,
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.root {
  text-align: right;
  margin: 5em auto 0;
  width: 50em;
  position: relative;
  z-index: -2;
  background-color: #eee;
  box-shadow: 0px 5px 10px #0006;
  min-height: calc(100vh - 5em);
}
</style>
