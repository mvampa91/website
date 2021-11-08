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
  props: ["show"],
  components: {
    Card,
  },
  setup() {
    const experiences = ref([
      {
        src: "1519896099915.jpeg",
        title: "FacilityLive",
        description:
          "Member of the Front-end team, responsible for building the FacilityLive product configurator app, by creating advanced React components and integrating them with all the platform's microservices. - Evolutive maintenance of the ReactJS/Redux/NodeJS stack front-end framework, organised in a 500+ npm modules repository. - Development of the browser testing framework, based on TestCafè. - Daily close interactions with UI/UX designers, analysts, QA and BE developers to define end to end solutions.",
        from: "Mar 2016",
        subtitle: "Frontend Developer",
        to: "present",
        id: 0,
      },
      {
        src: "1625468809817.jpeg",
        title: "BIP Consulting",
        description:
          "Function Point Counter in a major italian telco company (WindTre): - Measurement of the System Integrator productivity through the application of Function Point Analysis, using the Gartner FFPA methodology. - Data governance, negotiation and cost monitoring in the end to end process of productivity measurement.",
        from: "Feb 2016",
        subtitle: "Business Analyst",
        to: "Feb 20218",
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
