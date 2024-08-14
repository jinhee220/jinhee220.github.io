<template>
  <div>
    <div class="container">
      <h3>Technical Projects</h3>
      <div class="titles">
        <project-title
          v-for="project in projects"
          v-bind:key="project.id"
          v-bind:project="project"
        />
      </div>
      <project-card
        v-for="project in projects"
        v-bind:key="project.id"
        v-bind:project="project"
        v-show="project.selected"
      />
    </div>
  </div>
</template>

<script>
import ProjectTitle from "./subcomponents/ProjectTitle.vue";
import ProjectCard from "./subcomponents/ProjectCard.vue";

export default {
  components: {
    ProjectTitle,
    ProjectCard,
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
  background-color: rgb(187, 187, 250);
  padding: 15px;
  padding-top: 5px;
  border-radius: 50px;
}
.titles {
  display: flex;
}
</style>
