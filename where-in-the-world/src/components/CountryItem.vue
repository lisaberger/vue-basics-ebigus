<template>
  <article class="country">
    <router-link :to="'/country/' + country.name.common">
      <div class="country__flag">
        <img :src="country.flags.svg" alt="{{country.name.common}}" />
      </div>
      <div class="country__details">
        <h3 class="country__details__name">{{ country.name.common }}</h3>
        <h5>
          Population: <span>{{ country.population.toLocaleString() }}</span>
        </h5>
        <h5>
          Region: <span>{{ country.region }}</span>
        </h5>
        <h5>
          Capital:
          <span v-for="capital in country.capital" :key="capital">{{ capital }}</span>
        </h5>
      </div>
    </router-link>
  </article>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "CountryItem",
  components: {
    RouterLink,
  },
  props: {
    country: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style scoped>
@import "../assets/base.css";

.country {
  background-color: var(--color-elements);
  box-shadow: 0 5px 10px hsla(200, 15%, 8%, 0.1);
  color: var(--color-text);
  border-radius: 5px;
}

.country h5 span {
  font-weight: 300;
}
.country h5 {
  margin: 5px 0;
}
.country__flag img {
  height: 250px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.country__details {
  background-color: var(--color-elements);
  margin: -10px 0 30px;
  padding: 20px;
  border-radius: 5px;
  color: var(--color-text);
}
.country__details__name {
  margin: 10px 0;
}
</style>
