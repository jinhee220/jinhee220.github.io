<template>
  <div id="main">
    <!-- <nav-bar class="nav" /> -->
    <div class="bar center nav">
      <a href="#about"><img class="navImg" src="./assets/profile.jpg" /></a>
      <a href="#projects"><img class="navImg" src="./assets/bulb.jpg" /></a>
      <a href="#toolbar"><img class="navImg" src="./assets/gear.png" /></a>
      <a href="#contacts"><img class="navImg" src="./assets/phone.png" /></a>
    </div>
    <about-me id="about" class="comp" />
    <page-spacer />
    <technical-projects class="comp" id="projects" />
    <page-spacer />
    <toolkit class="comp" id="toolbar" />
    <contact class="footer" id="contacts" />
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import TechnicalProjects from "./components/TechnicalProjects.vue";
import Toolkit from "./components/Toolkit.vue";
import PageSpacer from "./components/PageSpacer.vue";
import Contact from "./components/Contact.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    AboutMe,
    Toolkit,
    TechnicalProjects,
    PageSpacer,
    Contact,
    NavBar,
  },
};
</script>

<style>
#main {
  overflow-x: hidden;
  width: 100vw;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 3rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 1;
  scroll-behavior: smooth;
}
.comp {
  width: 65%;
  margin: auto;
  margin-top: 20rem;
  margin-bottom: 15rem;
  padding-left: 3rem;
  padding-right: 3rem;
}
.footer {
  margin-top: 40rem;
  margin-left: 0;
  margin-right: 0;
  background-color: rgb(255, 216, 109);
  padding-bottom: 50px;
  margin-bottom: 0;
}

#about,
#projects,
#toolbar,
#contacts {
  scroll-behavior: smooth;
  scroll-margin-block: 20rem;
}

/* NAV CSS */
.bar {
  background-color: rgb(255, 216, 109);
  padding: 10px;
  box-shadow: 3px 3px 3px rgb(73, 84, 134);
}
.center {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.navImg {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
  border: solid rgb(190, 157, 138) 3px;
}
</style>
