<template>
  <div :class="'root ' + grid">
    <div :class="'content home ' + grid">
      <transition name="title" @after-enter="showContent = true">
        <h1 v-if="show" class="page-title">
          &#128075; Hello there, <br />
          I'm Marco!
        </h1>
      </transition>
      <transition-group
        appear
        v-if="showContent"
        tag="div"
        :class="'text ' + grid"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <p v-for="(text, index) in texts" :key="index" :data-index="index">
          {{ text }}
        </p>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import gsap from "gsap";

// @ is an alias to /src

export default {
  props: ["show", "db", "grid"],
  setup(props) {
    const showContent = ref(null);
    const texts = ref(props.db.texts);

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    };
    return { showContent, texts, beforeEnter, enter };
  },
};
</script>

<style></style>
