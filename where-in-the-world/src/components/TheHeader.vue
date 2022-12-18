<template>
  <header class="header">
    <div>
      <h1>Where in the world?</h1>
    </div>

    <div>
      <button className="btn">
        <i className="fas fa-moon"></i>
        Dark Mode
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style>
.header {
  padding: 10px 80px;
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: var(--text-color);
  box-shadow: 0 5px 10px hsla(200, 15%, 8%, 0.1);
}

.btn {
  background-color: var(--background-color);
  border: none;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-text);
}
</style>
