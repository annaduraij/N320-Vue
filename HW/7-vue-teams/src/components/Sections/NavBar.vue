<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 04 December 2023         -->
<!-- Desc: Navigation Bar (Router)  -->

<template>
  <div class="navbar">

    <div class="nav-section">
      <RouterLink to="/members" class="nav-button"> Members</RouterLink>
    </div>

    <div class="nav-section">
      <RouterLink to="/" id="nav-title" class="nav-button">
      Vue by Jay
      </RouterLink>
    </div>

    <div class="nav-section">
      <RouterLink to="/teams" class="nav-button">Teams</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  // Component logic here
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 1000;

  height: 10vh; /* Adjust height as needed */
  margin-bottom: 20px;

  background: #000;
  /*background: linear-gradient(0deg, rgba(80,80,80,0.9) 0%, rgba(100,100,100,0.8) 25%, rgba(250,250,250,0.5) 100%); */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Optional: adds shadow for depth */
}

.nav-section {
  flex: 1;
  text-align: center;
}

.nav-section > a {
  color: rgba(255,255,255,0.8);
  font-size: 4vh;
}

.nav-button {
  display: inline-block;
  padding: 5px 10px;
  /*background-color: #000; */
  text-decoration: none;
  border-radius: 20px;
  transition: color 0.3s, border 0.3s, box-shadow 0.1s;
}

.nav-button:hover {
  color: rgba(255,255,255,1);
  border: solid 1px white;
  box-shadow:
      0 0 5px white,
      0 0 10px white;
}

#nav-title {
  font-size: 6vh;
  color: #41B883;
  text-shadow:
      0 0 1vh black,
      0 0 0.5vh RGB(53, 73, 94),
      0 0 0.5vh RGB(53, 73, 94),
      0 0 0.5vh RGB(53, 73, 94),
      0 0 0.5vh RGB(53, 73, 94),
      0 0 0.5vh RGB(53, 73, 94),
      0 0 0.5vh white;
}
#vue {
  color: #41B883;
}
</style>
