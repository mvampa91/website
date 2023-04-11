<template>
  <transition
    name="book"
    appear
    @before-enter="hide = false"
    @after-enter="show = true"
    @after-leave="hide = true"
  >
    <div
      v-if="(!hide || display) && (grid.includes('md') || profile)"
      :class="'book-wrapper ' + grid + (profile ? ' profile' : '')"
    >
      <transition
        name="book"
        appear
        @before-enter="hide = false"
        @after-enter="show = true"
        @after-leave="hide = true"
      >
        <div v-if="showBookmark" class="bookmark">
          <transition-group name="image">
            <img
              v-if="show && showBookmark"
              src="../assets/1520700434266.jpeg"
              alt="pic"
            />
            <div v-if="show && showBookmark" class="skills">
              <h2>Technical Skills</h2>
              <div v-if="show && showBookmark" class="list">
                <p v-for="(skill, index) in skills" :key="index">{{ skill }}</p>
              </div>
            </div>
            <div v-if="show && showBookmark" class="skills">
              <h2>Languages</h2>
              <div v-if="show && showBookmark" class="list">
                <p
                  v-for="(lang, index) in languages"
                  :key="index"
                  v-html="lang"
                />
              </div>
            </div>
          </transition-group>
        </div>
      </transition>
      <div v-if="!grid.includes('md')" class="overlay" @click="handleClick" />
    </div>
  </transition>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  props: ["showBookmark", "display", "grid", "profile", "handleClick"],
  setup(props) {
    const show = ref(null);
    const hide = ref(!props.display);
    const skills = ref([
      "ReactJS",
      "Redux",
      "JavaScript ES6+",
      "TypeScript",
      "VueJS",
      "Vuex",
      "Vuetify",
      "Material UI",
      "Storybook",
      "Jest",
      "TestCafè",
      "NodeJS",
      "HTML",
      "CSS",
      "Styled-Components",
      "Git",
      "REST",
      "Scrum",
      "Kanban",
      "Jira",
      "Jenkins",
    ]);
    const languages = ref([
      "Italian &#x1f1ee;&#x1f1f9;: Native",
      "English &#127468;&#127463;: Advanced",
      "Korean &#127472;&#127479;: Basic",
    ]);

    return { show, skills, languages, hide };
  },
};
</script>

<style>
.bookmark {
  width: 270px;
  height: 100%;
  position: absolute;
  background-color: white;
  top: 0;
  z-index: 1;
  box-shadow: 0px 5px 10px #0006;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  overflow: auto;
}

.book-wrapper {
  margin: auto;
  width: 50em;
  position: fixed;
  height: calc(100% - 5em);
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
}

.bookmark > img {
  width: 150px;
  border-radius: 100%;
  margin: 2.5em 0 1.5em;
}

.hide {
  display: none;
}

.skills > h2 {
  color: #eee;
  font-size: 1em;
  text-transform: uppercase;
  text-align: left;
  margin: 1em 0 0.75em 2em;
}
.skills {
  margin: 0 0 2em 0;
}
.list > p {
  color: #eee;
  font-size: 0.8em;
  font-weight: bold;
  margin: 0.75em 0.5em 0 0;
}
.list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 2em;
}
.profile {
  display: block !important;
}
.overlay {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  z-index: -1;
}
</style>
