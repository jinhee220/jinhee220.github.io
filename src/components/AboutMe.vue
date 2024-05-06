<template>
  <div>
    <div id="name">
      <h1 class="joanne">Joanne Lee</h1>
      <p class="aka">aka</p>
      <h1 class="joanne">Jinhee</h1>
    </div>

    <div id="description">
      <p class="about">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
        adipisci nisi, cum iure sint rem odio expedita obcaecati reiciendis eum
        atque, iste eaque illum voluptates hic sapiente ea aperiam ex. <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
        adipisci nisi, cum iure sint rem odio expedita obcaecati reiciendis eum
        atque, iste eaque illum voluptates hic sapiente ea aperiam ex.
      </p>

      <img class="prof-pic" src="../assets/logo.png" alt="logo" />
    </div>

    <div>
      <span class="material-symbols-outlined"> expand_more </span>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#name {
  display: flex;
  justify-content: center;
}

.joanne,
.aka {
  display: flex;
  align-items: flex-end;
  margin: 150px 10px 5px 10px;
  font-weight: 400;
  font-size: 3rem;
  padding: 10px 7px 10px 7px;
}

.aka {
  font-size: 1.5rem;
  color: rgb(252, 130, 130);
}

#description {
  display: flex;
  align-items: center;
  width: 750px;
  padding: 10px;
  margin: auto;
  border: 3px dashed rgb(165, 165, 245);
  border-radius: 50px;
}

.about {
  padding: 10px;
  text-align: left;
}

.prof-pic {
  width: 20%;
  height: 20%;
  padding: 20px;
  border-radius: 150%;
}

/* imports */

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
  color: rgb(62, 184, 184);
  margin-top: 175px;
  /* margin-bottom: 10px; */
  font-size: 50px;
}
</style>
