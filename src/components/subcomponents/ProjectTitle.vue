<template>
  <div class="title">
    <p>{{ project.title }}</p>
  </div>
</template>

<script>
export default {
  props: ["project"],
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
