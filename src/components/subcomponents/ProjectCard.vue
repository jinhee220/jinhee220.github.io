<template>
  <div class="card" @mouseenter="active = true" @mouseleave="active = false">
    <div class="details" v-if="active">
      <p class="t">{{ project.title }}</p>
      <a v-bind:href="project.githubLink" class="l">{{ project.githubLink }}</a>
      <p class="d">{{ project.description }}</p>
      <p class="s">{{ project.mainStacks }}</p>
    </div>
    <img
      v-bind:src="project.image"
      v-bind:alt="project.title"
      v-show="project.selected"
    />
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
.card {
  width: 750px;
  height: 450px;
  overflow: auto;
}

img {
  width: 80%;
  height: 80%;
  object-fit: cover;
  border: white solid 3px;
  box-shadow: 3px 3px 3px rgb(73, 84, 134);
}
.details {
  position: absolute;
  left: 0;
  right: 0;
  margin-inline: auto;
  width: 600px;
  height: 360px;
  color: white;
  border: white solid 3px;

  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  animation: fadeIn 0.7s;
}

.t {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 10px;
}
.l {
  margin-top: 15px;
  font-size: small;
}
.d {
  margin-top: 23px;
}
.s {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
}
</style>
