<template>
  <div class="container">
    <h3>Contact Me</h3>
    <div class="contact">
      <a
        href="https://www.linkedin.com/in/joanne-lee-dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="linkedin"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
        />
        <p>LinkedIn</p>
      </a>
      <a>
        <img
          class="email"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3yUvTvUZqfntI29S6J4FRMP0AjKqEG50rQ&s"
        />
        <p>jinhee.lee220@gmail.com</p>
      </a>
      <!-- <p class="email-text">
        <img
          class="email"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3yUvTvUZqfntI29S6J4FRMP0AjKqEG50rQ&s"
        />
        jinhee.lee220@gmail.com
      </p> -->
      <a
        href="https://docs.google.com/document/d/1KzgmojyHoufs7x6eSrg80v5KtKyG2FuctJ8HSCS-0Ec/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="resume"
          src="https://news-cdn.softpedia.com/images/news2/microsoft-creates-new-file-explorer-icon-for-windows-10-using-fluent-design-527244-2.jpg"
        />
        <p>Resume</p>
      </a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  width: 100vw;
}

h3 {
  font-size: 2rem;
  text-align: left;
  padding: 10px 30px 10px 30px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 20%;
  margin-right: 7px;
}

.contact {
  display: flex;
  justify-content: space-evenly;
}

.email-text {
  display: flex;
  text-align: center;
  margin: 0;
  align-items: center;
}

a {
  display: flex;
}
</style>
