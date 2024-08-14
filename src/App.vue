<template>
  <div>
    <about-me class="comp" />
    <page-spacer />
    <technical-projects class="comp" />
    <toolkit class="comp" />
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import TechnicalProjects from "./components/TechnicalProjects.vue";
import Toolkit from "./components/Toolkit.vue";
import PageSpacer from "./components/PageSpacer.vue";

export default {
  components: {
    AboutMe,
    Toolkit,
    TechnicalProjects,
    PageSpacer,
  },
};
</script>

<style>
.comp {
  margin-top: 20%;
}
</style>
