<template>
  <form class="form">
    <div class="search-input">
      <font-awesome-icon :icon="['fas', 'search']" />
      <input
        id="search"
        type="search"
        name="search"
        placeholder="Search for a country..."
      />
    </div>

    <div class="select">
      <select id="select" name="select">
        <option>Filter by Region</option>
        <option v-for="region in regions" :key="region.id" :value="region.name">
          {{ region }}
        </option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  name: "CountryFilterArea",
  data() {
    return {
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    };
  },
};
</script>

<style scoped>
@import "../assets/base.css";
.form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
}
.search-input,
.form select {
  background-color: var(--color-elements);
  box-shadow: 0 5px 10px hsla(200, 15%, 8%, 0.1);
  padding: 12px;
  font-family: inherit;
  border: none;
  border-radius: 5px;
  color: var(--color-text);
}

.form input {
  min-width: 30vw;
  border: none;
  margin-left: 10px;
}
.search-input {
  display: flex;
  align-items: center;
}

@media (min-width: 1440px) {
  .form {
    padding: 45px 80px;
  }
}
</style>
