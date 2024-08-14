<template>
  <div>
    <div id="toolkit">
      <h3>My Toolkit</h3>
      <section id="icons">
        <div class="fours">
          <span>
            <img
              class="java"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            />Java</span
          >

          <span>
            <img
              class="css3"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />CSS</span
          >

          <span>
            <img
              class="js"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />Javascript</span
          >

          <span>
            <img
              class="vue"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
            />Vue.js</span
          >
        </div>
        <div class="fours">
          <span>
            <img
              class="sql"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            />PostgreSQL</span
          >

          <span>
            <img
              class="vscode"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            />VS Code</span
          >

          <span>
            <img
              class="git"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            />Git</span
          >

          <span>
            <img
              class="bash"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
            />Bash</span
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#toolkit {
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  border: 10px rgb(187, 187, 250);
  border-style: dashed none dashed none;
}

h3 {
  font-size: 2rem;
  text-align: left;
  padding: 30px 30px 5px 30px;
  text-align: center;
}

#icons {
  padding: 5px 30px 20px 30px;
}

span {
  display: grid;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
}

.fours {
  display: flex;
  justify-content: space-between;
  margin: auto;
}

img {
  height: 75px;
  width: 75px;
  padding: 5px;
}
</style>
