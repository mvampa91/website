<template>
  <div style="display: inherit">
    <div v-if="grid.includes('md')" id="nav" :class="'nav ' + grid">
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
    <div
      id="nav"
      v-if="!grid.includes('md')"
      :class="'nav mobile ' + grid + (expanded ? ' shadow' : '')"
    >
      <span style="margin: 0" @click="expanded = !expanded">
        <svg
          class="svg-icon"
          viewBox="0 0 20 20"
          stroke="black"
          stroke-width="1"
          width="35"
          height="35"
        >
          <path
            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
          ></path>
        </svg>
      </span>
      <transition name="nav">
        <span style="margin: 0" @click="expanded = !expanded">
          <svg
            :class="{
              'rotate-90': expanded,
              'rotate-0': !expanded,
            }"
            class="menu"
            viewBox="0 0 100 70"
            width="35"
            height="35"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </span>
      </transition>
      <transition name="slide-top" appear>
        <div v-if="expanded">
          <router-link
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            v-slot="{ isExactActive }"
            @click.prevent="expanded = !expanded"
          >
            {{ route.name }}
            <transition name="nav">
              <div v-if="isExactActive" class="selected" />
            </transition>
          </router-link>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["routes", "grid"],
  setup() {
    const expanded = ref(false);

    return { expanded };
  },
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

.nav.mobile {
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  transition: all 0.5s ease;
  justify-content: space-between !important;
}

.slide-top-enter-from,
.slide-top-leave-to {
  margin-top: -100%;
  opacity: 0;
}
.slide-top-enter-active {
  transition: all 0.5s ease;
}
.slide-top-leave-active {
  transition: all 0.5s ease-in;
}
.menu {
  transition: transform 0.5s ease;
  transform: rotate(0);
}
.rotate-90 {
  transform: rotate(90deg);
}
.shadow {
  box-shadow: -2px -3px 17px 6px grey;
}
</style>
