<template>
  <div class="bar center">
    <router-link class="center" v-scroll-to="`#about`"
      ><img src="../assets/profile.jpg"
    /></router-link>
    <router-link class="center" v-scroll-to="{ name: projects }"
      ><img src="../assets/bulb.jpg"
    /></router-link>
    <router-link class="center" v-scroll-to="toolkit"
      ><img src="../assets/gear.png"
    /></router-link>
    <router-link class="center" v-scroll-to="contact"
      ><img src="../assets/phone.png"
    /></router-link>
  </div>
</template>

<script></script>

<style scoped>
/* imports */
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
img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
  border: solid rgb(190, 157, 138) 3px;
}
@media (hover: hover) {
  img:hover {
    box-shadow: 3px 3px 3px rgb(112, 91, 141);
  }
}
</style>
