<template>
  <section>
    <router-link to="/">
      <i>fafa</i>
      <span>Back Home</span>
    </router-link>
    <article>
      <div class="country">
        <div class="country__flag">
          <img :src="country.flags.svg" :alt="country.name.common" />
        </div>
        <div class="country__details">
          <div>
            <h2>{{ country.name.common }}</h2>
            <h5>
              Name: <span>{{ country.name.native }}</span>
            </h5>
            <h5>
              Native Name: <span>{{ country.name.native }}</span>
            </h5>
            <h5>
              Population: <span>{{ country.population.toLocaleString() }}</span>
            </h5>
            <h5>
              Region: <span>{{ country.region }}</span>
            </h5>
            <h5>
              Sub-Region: <span>{{ country.subregion }}</span>
            </h5>
            <h5>
              Capital: <span>{{ country.capital }}</span>
            </h5>
          </div>
          <div>
            <h5>
              Top Level Domain: <span>{{ country.tld[0] }}</span>
            </h5>
            <h5>
              Currencies: <span>{{ country.currencies }}</span>
            </h5>
            <h5>
              Languages: <span>{{ country.languages[0] }}</span>
            </h5>
          </div>
        </div>
      </div>
      <div>
        <h3>Border Countries</h3>
        <div class="border-countries">
          <ul>
            <li v-for="borderCountry in country.borders" :key="borderCountry">
              {{ borderCountry }}
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailView",
  data() {
    return {
      country: {},
    };
  },
  computed: {
    currentCountryName() {
      return this.$route.params.name;
    },
  },
  async beforeMount() {
    await axios
      .get(`https://restcountries.com/v3.1/name/${this.$route.params.name}`)
      .then((res) => {
        this.country = res.data[0];
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
@import "../assets/main.css";
.country__details h2 {
  font-size: 30px;
  font-weight: 800;
}

.country__details h5 span {
  font-weight: 600;
}
.country-details div {
  margin: 30px 0;
}
.country {
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
