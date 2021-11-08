<template>
  <div class="root">
    <div class="content">
      <transition name="title" @after-enter="showContent = true">
        <h1 v-if="show" class="page-title">Education</h1>
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
          v-for="(study, index) in studies"
          :key="study.id"
          :title="study.title"
          :description="study.description"
          :src="study.src"
          :from="study.from"
          :to="study.to"
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
  props: ["show"],
  components: {
    Card,
  },
  setup() {
    const studies = ref([
      {
        src: "logo.png",
        title: "Univerdity of Pavia, Pavia (Italy)",
        description:
          "Bachelor's Degree in Computer Engineering. - Conducted an undergraduate internship with a research activity on the application of Function Point Analysis in Agile environments, focused on the SAFe framework.",
        from: "Oct 2010",
        to: "Apr 2016",
        id: 0,
      },
      {
        src: "logo.png",
        title: "Technical Institute 'G. Cardano', Pavia (Italy)",
        description:
          "Industrial expert crew chief spec. Industrial Computing (Abacus project).",
        from: "2005",
        to: "2010",
        id: 1,
      },
    ]);

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

    return { studies, showContent, beforeEnter, enter };
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
