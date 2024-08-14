<template>
  <button class="title" v-on:click="setSelected">
    <p>{{ project.title }}</p>
  </button>
</template>

<script>
export default {
  props: ["project"],
  methods: {
    setSelected() {
      this.project.selected = true;
      for (let i = 0; i < this.$store.state.projects.length; i++) {
        if (this.$store.state.projects[i].id !== this.project.id) {
          this.$store.state.projects[i].selected = false;
        }
      }
    },
  },
};
</script>

<style scoped>
.title {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgb(73, 84, 134);
  padding: 3px;
  margin: 10px;
  width: 45%;
}
p {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
