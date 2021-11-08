<template>
  <div class="root">
    <div class="content">
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
        class="text"
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
  props: ["show"],
  setup() {
    const showContent = ref(null);
    const texts = ref([
      "I am a computer science engineer with passion and experience in the front-end development world.",
      "In the past, I've worked in both business and technical sides of the IT industry.",
      "In my spare time I express my creativity through electronic music production and I enjoy geeking about new technologies and video games.",
    ]);

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
