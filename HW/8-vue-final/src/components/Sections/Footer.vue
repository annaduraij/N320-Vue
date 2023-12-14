<!-- Auth: Jay Annadurai            -->
<!-- Proj: N320: Vue - Teams        -->
<!-- Date: 04 December 2023         -->
<!-- Desc: Footer Bar (Router)  -->

<template>
  <footer>
    <div class="footer-bar">

      <div class="footer-section">
        N320 Final
      </div>

      <div class="footer-section">
        Sessions Application
      </div>

      <div class="footer-section">
        Jay Annadurai
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  // Component logic here
}
</script>

<style scoped>
.footer-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  bottom: 0;
  z-index: 1000;

  height: var(--footer-bar-size);
  margin-top: 20px;

  background: var(--background-color-dark);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.footer-section {
  flex: 1;
  text-align: center;
  color: var(--text-color-dim);
  font-size: calc(var(--footer-bar-size)*0.5);
}
</style>
