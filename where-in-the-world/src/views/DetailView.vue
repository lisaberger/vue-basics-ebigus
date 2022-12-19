<template>
  <header>
    <the-header />
  </header>
  <section>
    <article class="navigation">
      <router-link to="/" class="btn">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        <span>Back</span>
      </router-link>
    </article>

    <article>
      <div class="country">
        <div class="country__flag">
          <img :src="country.flags.svg" :alt="country.name.common" />
        </div>
        <div class="country__details">
          <h2>{{ country.name.common }}</h2>
          <div class="country__details__info">
            <div>
              <h5>
                Native Name:
                <span>{{ country.name.nativeName }}</span>
              </h5>
              <h5>
                Population:
                <span>{{ country.population.toLocaleString() }}</span>
              </h5>
              <h5>
                Region: <span>{{ country.region }}</span>
              </h5>
              <h5>
                Sub-Region: <span>{{ country.subregion }}</span>
              </h5>
              <h5>
                Capital:
                <span v-for="capital in country.capital" :key="capital">{{
                  capital
                }}</span>
              </h5>
            </div>
            <div>
              <h5>
                Top Level Domain: <span>{{ country.tld[0] }}</span>
              </h5>
              <h5>
                Currencies:
                <span v-for="currency in country.currencies" :key="currency">{{
                  currency.name
                }}</span>
              </h5>
              <h5>
                Languages:
                <span v-for="language in country.languages" :key="language">{{
                  language
                }}</span>
              </h5>
            </div>
          </div>
          <div>
            <h5>Border Countries:</h5>
            <div class="borders__container">
              <span
                v-for="borderCountry in borders"
                :key="borderCountry.cca3"
                class="borders"
              >
                {{ borderCountry.name.common }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import axios from "axios";

export default {
  name: "DetailView",
  components: {
    TheHeader,
  },
  data() {
    return {
      country: {},
      borders: [],
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

    this.country.borders.forEach((e) => {
      axios.get(`https://restcountries.com/v3.1/alpha/${e}`).then((res) => {
        this.borders.push(res.data[0]);
      });
    });
  },
};
</script>

<style scoped>
@import "../assets/base.css";

.navigation {
  margin: 60px 20px;
}

.navigation span {
  padding: 20px;
}

.btn {
  background-color: var(--color-elements);
  box-shadow: 0 5px 10px hsla(200, 15%, 8%, 0.1);
  padding: 12px;
  font-family: inherit;
  border: none;
  border-radius: 5px;
  color: var(--color-text);
}

.country {
  display: block;
  align-items: center;
  padding: 0 20px;
}
.country__flag {
  width: 100%;
}
.country__flag img {
  border-radius: 5px;
  box-shadow: 0 5px 10px hsla(200, 15%, 8%, 0.1);
}
.country__details {
  width: 100%;
}

.country__details__info {
  display: block;
  gap: 40px;
  width: 100%;
}

.country__details__info div {
  width: 100%;
  margin-bottom: 40px;
}
.country__details h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
}
.country__details h5 {
  margin: 0.5rem 0;
}
.country__details h5 span {
  font-weight: 300;
}

.borders {
  background-color: var(--color-elements);
  box-shadow: 0 5px 10px hsla(200, 15%, 8%, 0.1);
  padding: 12px;
  font-family: inherit;
  border: none;
  border-radius: 5px;
  color: var(--color-text);
}
.borders + .borders {
  margin-left: 10px;
}

@media (min-width: 1440px) {
  .navigation {
    margin: 60px 80px;
  }
  .country {
    display: flex;
    align-items: center;
    gap: 80px;
    padding: 0 80px;
  }

  .country__details__info {
    display: flex;
    gap: 40px;
    width: 100%;
  }
}
</style>
