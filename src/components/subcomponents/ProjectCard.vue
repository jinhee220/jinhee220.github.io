<template>
  <div class="card">
    <img
      v-bind:src="getImageUrl(project.image)"
      v-bind:alt="project.title"
      v-show="project.selected"
    />
    <div class="desc"></div>
  </div>
</template>

<script>
import VendingMachine from "../../assets/VendingMachine.jpg";

export default {
  props: ["project"],

  methods: {
    getImageUrl(path) {
      return `${path}`;
    },
  },
};
</script>

<style scoped>
img {
  width: 80%;
  height: 80%;
  border: white solid 3px;
  box-shadow: 3px 3px 3px rgb(73, 84, 134);
}
</style>
