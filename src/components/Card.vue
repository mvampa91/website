<template>
  <div class="card" :style="cssProps">
    <div class="head">
      <div v-if="src" class="container">
        <img :src="require('../assets/' + src)" :alt="title" class="logo" />
      </div>
      <template v-if="emoji">
        <h1 style="margin: 0;" v-html="emoji" />
      </template>
      <div :class="{ title: true, 'align-center': emoji }">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <h3 v-if="from">{{ from }} - {{ to }}</h3>
      </div>
      <div v-if="expand" class="expand">
        <button>Show More</button>
      </div>
    </div>
    <p v-if="abstract" class="abstract">{{ abstract }}</p>
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
      return props.description?.length > 160
        ? props.description?.substring(0, 160) + "..."
        : props.description;
    });

    const cssProps = computed(() => {
      return {
        "--margin": props.fullMargin ? "0 0.5em 1em 0.5em" : "0 0 1em 0",
        "--vertical": props.vertical ? "column" : "row",
        "--width": props.vertical ? "100%" : "auto",
        "--margin-picture": props.vertical ? "0" : "1em",
      };
    });

    return { abstract, cssProps, expanded };
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
  margin: 0 var(--margin-picture) 0 0;
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
  width: var(--width);
}
.abstract {
  margin-bottom: 0;
}
</style>
