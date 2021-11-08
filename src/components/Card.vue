<template>
  <div class="card" :style="cssProps">
    <div class="head">
      <div class="container">
        <img :src="require('../assets/' + src)" :alt="title" class="logo" />
      </div>
      <div class="title">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <h3>{{ from }} - {{ to }}</h3>
      </div>
    </div>
    <p class="abstract">{{ abstract }}</p>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: [
    "title",
    "description",
    "src",
    "alt",
    "from",
    "to",
    "subtitle",
    "fullMargin",
  ],
  setup(props) {
    const abstract = computed(() => {
      return props.description.length > 160
        ? props.description.substring(0, 160) + "..."
        : props.description;
    });

    const cssProps = computed(() => {
      return {
        "--margin": props.fullMargin ? "0 0.5em 1em 0.5em" : "0 0 1em 0",
      };
    });

    return { abstract, cssProps };
  },
};
</script>

<style>
.card {
  background-color: white;
  padding: 1em;
  border-radius: 20px;
  box-shadow: 0 5px 5px #ddd;
  margin: var(--margin);
}
.container > img {
  width: 100px;
  height: 100px;
  border-radius: 1000px;
}
.container {
  background: -webkit-linear-gradient(left bottom, #326ce9, #80d0b8);
  width: 100px;
  height: 100px;
  border-radius: 1000px;
  padding: 5px;
  margin: 0 1em 0 0;
}
.title > h1 {
  font-size: 1.2em;
}
.title > h2 {
  font-size: 1em;
}
.title > h3 {
  font-size: 0.9em;
  font-weight: normal;
}
.head {
  display: inline-flex;
  align-items: center;
}
.abstract {
  margin-bottom: 0;
}
</style>
