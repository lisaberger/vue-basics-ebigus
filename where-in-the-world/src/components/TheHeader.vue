<template>
  <header class="header">
    <div>
      <h1>Where in the world?</h1>
    </div>

    <div>
      <div class="btn">
        <font-awesome-icon :icon="['fas', 'moon']" />
        <span class="btn__name">Dark Mode</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
@import "../assets/base.css";

h1 {
  font-size: 1rem;
  font-weight: 800;
}

.header {
  padding: 20px 20px;
  min-height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text);
  box-shadow: 0 5px 10px hsla(200, 15%, 8%, 0.1);
}

.btn {
  background-color: var(--color-background);
  font-weight: 600;
  border: none;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-text);
}

.btn__name {
  margin-left: 10px;
}

@media (min-width: 1440px) {
  .header {
    padding: 10px 80px;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>
