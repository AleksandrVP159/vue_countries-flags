<template>
    <section class="wrapper-info">
        <img class="info-image" :src="currentCountry.flag" :alt="currentCountry.name">
        <div>
            <h1 class="info-title">{{ currentCountry.name }}</h1>
            <div class="list-group">
                <ul class="list">
                    <li class="list-item"> <b>Native Name:</b> {{ currentCountry.nativeName }}</li>
                    <li class="list-item"><b>Population</b> {{ currentCountry.population }}</li>
                    <li class="list-item"><b>Region:</b> {{ currentCountry.region }}</li>
                    <li class="list-item"><b>Sub Region:</b> {{ currentCountry.subregion }}</li>
                    <li class="list-item"><b>Capital:</b> {{ currentCountry.capital }}</li>
                </ul>
                <ul class="list">
                    <li class="list-item">
                        <b>Top Level Domain</b>{{ " " }}
                        <span v-for="d in currentCountry.topLevelDomain" :key="d">
                            {{ d }}
                        </span>
                    </li>
                    <li class="list-item">
                        <b>Currency</b>{{ " " }}
                        <span v-for="c in currentCountry.currencies" :key="c.code">
                            {{ c.name }}
                        </span>
                    </li>
                    <li class="list-item">
                        <b>Languages</b>{{ " " }}
                        <span v-for="l in currentCountry.languages" :key="l.name">
                            {{ l.name }}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="meta">
                <b>Border Countries</b>
                <span v-if="!currentCountry.borders">There is no border countries</span>
                <div v-else class="tag-group">
                    <span v-for="name in neighbors" :key="name" class="tag" @click="toCountryName(name)">
                        {{ name }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDetailsStore } from '@/stores/details';
import { mapState, mapActions } from 'pinia';

export default defineComponent({
    name: 'Info',
    methods: {
        toCountryName(name: string) {
            this.$router.push(`/country/${name}`)

        },
        ...mapActions(useDetailsStore, ['loadNeighborsByBorder'])
    },
    computed: {
        ...mapState(useDetailsStore, ['currentCountry', 'neighbors'])
    },
    watch: {
        '$route'() {
            this.$router.go(0);
        }
    },
    mounted() {
        if (this.currentCountry.borders) {
            this.loadNeighborsByBorder(this.currentCountry.borders)
        }

    }
})
</script>

<style>
.wrapper-info {
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;
}

@media (min-width: 767px) {
    .wrapper-info {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }
}

@media (min-width: 1024px) {
    .wrapper-info {
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
}

.info-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.info-title {
    margin: 0;
    font-weight: var(--fw-normal);
}

.list-group {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.list-item {
    line-height: 1.8;
}

.list-item>b {
    font-weight: var(--fw-bold);
}

.meta {
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
}

.meta>b {
    font-weight: var(--fw-bold);
}

@media (min-width: 767px) {
    .meta {
        flex-direction: row;
        align-items: center;
    }
}

.tag-group {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.tag {
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
}
</style>