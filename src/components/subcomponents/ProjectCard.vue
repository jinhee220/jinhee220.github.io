<template>
  <div class="card">
    <img v-bind:src="project.image" v-bind:alt="project.title" />
    <div class="desc"></div>
  </div>
</template>

<script>
export default {
  props: ["project"],
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
