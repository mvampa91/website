<template>
  <div id="nav" :class="'nav ' + grid">
    <router-link
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      v-slot="{ isExactActive }"
    >
      {{ route.name }}
      <transition name="nav">
        <div v-if="isExactActive" class="selected" />
      </transition>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["routes", "grid"],
};
</script>

<style>
#nav {
  padding: 1.5em 1.5em 1em 1.5em;
  text-align: end;
  text-transform: uppercase;
  background-color: #eee;
  color: #031c38;
  display: flex;
  justify-content: flex-end;
  left: 0;
  right: 0;
  border-bottom: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #326ce9, #80d0b8);
  z-index: 1;
  position: fixed;
}

#nav a {
  font-weight: bold;
  display: flex;
  flex-direction: column;
  color: #031c38;
  text-decoration: none;
  border-image-slice: 1;
  margin: 0.25em 0.5em;
  overflow: hidden;
}

.selected {
  height: 5px;
  background-image: linear-gradient(to right, #326ce9, #80d0b8);
  margin: 0.25em 0;
}
span {
  margin: 0 0.75em 0 0;
}
</style>
