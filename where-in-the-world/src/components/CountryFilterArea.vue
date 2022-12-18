<template>
  <form class="form">
    <input
      id="search"
      type="search"
      name="search"
      placeholder="Search Country"
    />
    <div class="select">
      <select id="select" name="select">
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
.form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 40px 80px;
}
.form input,
.form select {
  background-color: var(--color-elements);
  box-shadow: 0 5px 10px hsla(200, 15%, 8%, 0.1);
  padding: 12px;
  font-family: inherit;
  border: none;
  border-radius: 5px;
  color: var(--text-color);
}

.form input {
  width: 40rem;
}

.form .select select {
  width: 20rem;
}
</style>
