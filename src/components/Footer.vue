<template>
  <div :class="'foot ' + grid">
    <transition name="footer" appear>
      <p>Made with &#10084;&#65039; by Marco Vampa</p>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["grid"],
};
</script>

<style scoped>
.foot {
  font-size: 0.8em;
  position: fixed;
  bottom: 0;
  margin: 0 1em;
  left: 0;
  right: 0;
  color: #eee;
  text-align: right;
  display: flex;
  justify-content: flex-end;
}
.foot > p {
  display: flex;
  background-image: linear-gradient(90deg, #426291 0%, #426291 100%);
  padding: 0.25em 0.5em;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.295);
}
.footer-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.footer-enter-active {
  transition: all 1s ease;
}
.foot.xs {
  font-size: 0.7em;
  justify-content: center;
}
.foot.md {
  font-size: 1em;
  justify-content: flex-end;
}
</style>
