<template>
  <div>
    <about-me class="comp" />
    <page-spacer />
    <technical-projects class="comp" />
    <page-spacer />
    <toolkit class="comp" />
    <contact class="footer" />
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import TechnicalProjects from "./components/TechnicalProjects.vue";
import Toolkit from "./components/Toolkit.vue";
import PageSpacer from "./components/PageSpacer.vue";
import Contact from "./components/Contact.vue";

export default {
  components: {
    AboutMe,
    Toolkit,
    TechnicalProjects,
    PageSpacer,
    Contact,
  },
};
</script>

<style>
.comp {
  margin-top: 20%;
}
.footer {
  margin-top: 30%;
  position: absolute;
  left: 0;
  background-color: rgb(255, 216, 109);
  width: 100%;
  padding-bottom: 50px;
  margin-bottom: 0;
}
</style>
