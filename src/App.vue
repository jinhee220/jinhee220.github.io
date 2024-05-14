<template>
  <div>
    <about-me class="comp" />
    <technical-projects class="comp" />
    <toolkit class="comp" />
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import TechnicalProjects from "./components/TechnicalProjects.vue";
import Toolkit from "./components/Toolkit.vue";

export default {
  components: {
    AboutMe,
    Toolkit,
    TechnicalProjects,
  },
};
</script>

<style>
.comp {
  margin-top: 300px;
}
</style>
