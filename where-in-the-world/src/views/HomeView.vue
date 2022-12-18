<template>
  <main>
    <section>
      <country-filter-area />
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
import CountryFilterArea from "@/components/CountryFilterArea.vue";
import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

export default {
  components: {
    CountryItem,
    CountryFilterArea,
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
        console.log(res.data);
        this.countries = res.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
@media (min-width: 375px) {
  .countries__container {
    padding: 0 80px 80px;
    display: grid;
    grid-template-columns: repeat(1fr);
    gap: 40px;
  }
}

@media (min-width: 1440px) {
  .countries__container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
