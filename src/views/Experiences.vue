<template>
  <div class="root">
    <div class="content">
      <transition name="title" @after-enter="showContent = true">
        <h1 v-if="show" class="page-title">Experiences</h1>
      </transition>
      <transition-group
        appear
        v-if="showContent"
        tag="div"
        class="text"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <Card
          v-for="(exp, index) in experiences"
          :key="exp.id"
          :title="exp.title"
          :description="exp.description"
          :src="exp.src"
          :subtitle="exp.subtitle"
          :from="exp.from"
          :to="exp.to"
          :data-index="index"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Card from "../components/Card.vue";
import gsap from "gsap";

export default {
  props: ["show", "db"],
  components: {
    Card,
  },
  setup(props) {
    const experiences = ref(props.db.experiences);
    const showContent = ref(null);

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
        delay: el.dataset.index * 0.4,
      });
    };

    return { experiences, showContent, beforeEnter, enter };
  },
};
</script>

<style scoped>
.root {
  text-align: center;
}
.content {
  width: 45em;
  margin-left: auto;
  margin-right: auto;
}
</style>
