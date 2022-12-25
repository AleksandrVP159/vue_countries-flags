<template>
    <h2 v-if="getCountriesInfo.error">Can't fetch data</h2>
    <h2 v-else-if="getCountriesInfo.status === 'loading'">Loading...</h2>
    <section v-else-if="getCountriesInfo.status === 'received'" class="wrapper-list">
        <Card v-for="c in getVisibleCountries" :key="c.name" :name="c.name" :population="c.population"
            :region="c.region" :capital="c.capital" :img="c.flags.png" @on-click="navigateToCountry(c.name)" />
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia'
import { useCountriesStore } from '../stores/countries.js'
import { useControlsStore } from '@/stores/controls';

import Card from './Card.vue';

export default defineComponent({
    name: "CountryList",
    components: {
        Card
    },
    computed: {
        ...mapState(useCountriesStore, ['getVisibleCountries', 'getCountriesInfo']),
        ...mapState(useControlsStore, ['region', 'search'])
    },
    methods: {
        ...mapActions(useCountriesStore, ['loadCountries']),
        navigateToCountry(name: string) {
            this.$router.push(`/country/${name}`)
        }
    },
    mounted() {
        if (!this.getCountriesInfo.qty) {
            this.loadCountries()
        }
    }
})
</script>

<style>
.wrapper-list {
    width: 100%;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
}

@media (min-width: 767px) {
    .wrapper-list {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
        padding: 2.5rem 0;
    }
}

@media (min-width: 1024px) {
    .wrapper-list {
        grid-template-columns: repeat(4, 1fr);
        gap: 4rem;
    }
}
</style>