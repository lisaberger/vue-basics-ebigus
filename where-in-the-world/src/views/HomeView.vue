<template>
  <header>
    <the-header />
  </header>
  <main>
    <section>
      <form class="form">
        <div class="search-input">
          <font-awesome-icon :icon="['fas', 'search']" />
          <input
            id="search"
            v-model="searchInput"
            type="search"
            placeholder="Search for a country..."
          />
        </div>
        <div class="select">
          <select id="select" v-model="selectedRegion">
            <option value="">Filter by Region</option>
            <option v-for="region in regions" :key="region.id" :value="region">
              {{ region }}
            </option>
          </select>
        </div>
      </form>
    </section>
    <section>
      <div class="countries__container">
        <country-item
          v-for="country in filteredCountries"
          :key="country.cca3"
          :country="country"
        />
      </div>
    </section>
  </main>
</template>

<script>
import CountryItem from "@/components/CountryItem.vue";
import TheHeader from "@/components/TheHeader.vue";
import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

export default {
  components: {
    CountryItem,
    TheHeader,
  },
  data() {
    return {
      searchInput: "",
      selectedRegion: "",
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      countries: [],
    };
  },
  computed: {
    filteredCountries() {
      let filteredCountries = [];
      filteredCountries = this.countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(this.searchInput.toLowerCase());
      });
      if (this.selectedRegion !== "") {
        filteredCountries = filteredCountries.filter((country) => {
          return (
            country.region.toLowerCase() === this.selectedRegion.toLowerCase()
          );
        });
      }

      return filteredCountries;
    },
  },
  async beforeMount() {
    await axios
      .get(url)
      .then((res) => {
        this.countries = res.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
@import "../assets/base.css";
.countries__container {
  padding: 0 40px 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

@media (min-width: 576px) {
  .countries__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .countries__container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1440px) {
  .countries__container {
    padding: 0 80px 80px;
    grid-template-columns: repeat(4, 1fr);
  }
}

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

.form input:focus {
  outline: none;
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
