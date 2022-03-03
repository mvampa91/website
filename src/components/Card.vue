<template>
  <div class="card" :style="cssProps">
    <div class="body">
      <div class="head">
        <div class="container">
          <img
            v-if="src"
            :src="require('../assets/' + src)"
            :alt="title"
            class="logo"
          />
          <template v-if="emoji">
            <h1 style="margin: 0" v-html="emoji" />
          </template>
        </div>
        <div :class="{ title: true }">
          <h1>{{ title }}</h1>
          <h2>{{ subtitle }}</h2>
          <h3 v-if="from">{{ from }} - {{ to }}</h3>
        </div>
        <span class="expand-button" v-if="expand" @click="expanded = !expanded">
          <svg
            class="expand-button__svg"
            :class="{
              'rotate-180': expanded,
              'rotate-0': !expanded,
            }"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 10"
            aria-hidden="true"
          >
            <path
              d="M15 1.2l-7 7-7-7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
    <transition name="abstract" appear>
      <div v-if="abstract && !(expand && !expanded)">
        <p v-html="abstract" class="abstract" />
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
export default {
  props: [
    "title",
    "type",
    "description",
    "src",
    "emoji",
    "expand",
    "alt",
    "from",
    "to",
    "subtitle",
    "fullMargin",
    "vertical",
  ],
  setup(props) {
    const expanded = ref(false);

    const abstract = computed(() => {
      return props.description;
    });

    const cssProps = computed(() => {
      return {
        "--margin": props.fullMargin ? "0 0.5em 1em 0.5em" : "0 0 1em 0",
        "--vertical": props.vertical ? "column" : "row",
        "--margin-picture": props.vertical ? "0" : "1em",
      };
    });

    const handleClick = () => {
      console.log("click");
    };

    return { abstract, cssProps, expanded, handleClick };
  },
};
</script>

<style>
.card {
  overflow: hidden;
  display: grid;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 5px 5px #ddd;
  margin: var(--margin);
}
.container img,
.container h1 {
  width: 100px;
  height: 100px;
  border-radius: 1000px;
  background: aliceblue;
}
.container h1 {
  align-items: center;
  display: flex;
  justify-content: center;
  background: aliceblue;
}
.container {
  background: -webkit-linear-gradient(left bottom, #326ce9, #80d0b8);
  width: 100px;
  height: 100px;
  border-radius: 1000px;
  padding: 5px;
  margin: 0 var(--margin-picture) 0 0;
}
.body {
  background-color: white;
  z-index: 2;
  padding: 1em;
}
.align-center {
  text-align: center;
}
.title {
  width: 100%;
}
.title h1 {
  font-size: 1.2em;
}
.title h2 {
  font-size: 1em;
}
.title h3 {
  font-size: 0.9em;
  font-weight: normal;
}
.head {
  display: inline-flex;
  align-items: center;
  flex-direction: var(--vertical);
  width: 100%;
}
.expand-button {
  cursor: pointer;
}
.expand-button__svg {
  width: 1em;
  transition: transform 0.5s ease;
  transform: rotate(0);
}
.rotate-180 {
  transform: rotate(180deg);
}
.abstract {
  padding: 1em;
  margin: 0;
}
.abstract-enter-from,
.abstract-leave-to {
  margin-top: -50%;
  opacity: 0;
}
.abstract-enter-active {
  transition: all 0.5s ease;
}
.abstract-leave-active {
  transition: all 0.5s ease-in;
}
</style>
