<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 04 December 2023         -->
<!-- Desc: Navigation Bar (Router)  -->

<template>
  <nav>
    <div class="nav-bar">

      <div class="nav-section">
        <RouterLink to="/sessions" class="nav-button">
          Sessions
        </RouterLink>
      </div>

      <div class="nav-section">
        <RouterLink to="/" id="nav-title" class="nav-button">
          JV
        </RouterLink>
      </div>

      <div class="nav-section">
        <RouterLink to="/usersessions" class="nav-button">
          User Sessions
        </RouterLink>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  // Component logic here
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 1000;

  height: var(--nav-bar-size);
  margin-bottom: 20px;

  background: var(--background-color-dark);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-section {
  flex: 1;
  text-align: center;
}

.nav-section > a {
  color: var(--text-color);
  font-size: calc(var(--nav-bar-size)*0.375);
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
  color: var(--text-color-emphasis);
  border: solid 1px var(--color-white);
  box-shadow:
      0 0 5px var(--color-white),
      0 0 10px var(--color-white);
  cursor: pointer;
}

#nav-title:hover {
  border: 0;
  box-shadow: 0 0 0 var(--color-white);
}

#nav-title {
  font-size: calc(var(--nav-bar-size)*0.6);
  color: var(--primary-color);
  text-shadow:
      0 0 1vh black,
      0 0 0.5vh RGB(53, 73, 94),
      0 0 0.5vh RGB(53, 73, 94),
      0 0 0.5vh RGB(53, 73, 94),
      0 0 0.5vh RGB(53, 73, 94),
      0 0 0.5vh RGB(53, 73, 94),
      0 0 0.5vh white;
}

</style>
