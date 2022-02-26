<template>
  <div class="root">
    <div class="content">
      <transition name="title" @after-enter="showContent = true">
        <h1 v-if="show" class="page-title">Contacts</h1>
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
          v-for="(contact, index) in contacts"
          :key="contact.id"
          :title="contact.title"
          :type="contact.type"
          :description="contact.description"
          :subtitle="contact.subtitle"
          :emoji="contact.emoji"
          :from="contact.from"
          :to="contact.to"
          :data-index="index"
          fullMargin="true"
          vertical="true"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import gsap from "gsap";
import Card from "../components/Card.vue";

export default {
  props: ["show", "db"],
  components: {
    Card,
  },
  setup(props) {
    const contacts = ref(props.db.contacts);

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

    return { contacts, showContent, beforeEnter, enter };
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
.text {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
