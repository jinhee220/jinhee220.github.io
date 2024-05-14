<template>
  <div>
    <div class="container">
      <h3>Technical Projects</h3>
      <project-title
        v-for="project in projects"
        v-bind:key="project.id"
        v-bind:project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectTitle from "./subcomponents/ProjectTitle.vue";

export default {
  components: {
    ProjectTitle,
  },
  data() {
    return {
      projects: this.$store.state.projects,
    };
  },
};
</script>

<style scoped>
h3 {
  font-size: 30px;
  color: white;
}
.container {
  background-color: rgb(165, 165, 245);
  padding: 15px;
  padding-top: 5px;
  border-radius: 50px;
}
</style>
