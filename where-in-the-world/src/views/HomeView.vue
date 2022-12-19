<template>
  <header>
    <the-header />
  </header>
  <main>
    <section>
      <country-filter />
    </section>
    <section>
      <div class="countries__container">
        <country-item
          v-for="country in countries"
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
import CountryFilter from "@/components/CountryFilter.vue";
import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

export default {
  components: {
    CountryItem,
    CountryFilter,
    TheHeader,
  },
  data() {
    return {
      countries: [],
    };
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
</style>
