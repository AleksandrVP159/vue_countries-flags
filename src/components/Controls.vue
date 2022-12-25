<template>
    <div class="wrapper">
        <Search />
        <label> Filter by Region
            <select v-model="region" @change="setRegion(region)">
                <option v-for="opt in options" :value="opt">{{ opt }}</option>
            </select>
        </label>
    </div>
</template>

<script lang="ts">
import Search from './UI/Search.vue';
import { defineComponent } from 'vue';
import { useControlsStore } from '@/stores/controls';
import { mapActions, mapState } from 'pinia';

export default defineComponent({
    name: 'Controls',
    components: {
        Search,
    },
    data: () => {
        return {
            options: ['Africa',
                'America',
                'Asia',
                'Europe',
                'Oceania'],
            region: <any>null
        }
    },
    methods: {
        ...mapActions(useControlsStore, ['setRegion']),
    }
})
</script>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

@media (min-width: 767px) {
    .wrapper {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

select {

    border-radius: var(--radii);
    font-family: var(--family);
    border: none;
    cursor: pointer;
}

select>* {
    box-shadow: var(--shadow);
}

option {
    cursor: pointer;
    color: var(--colors-text);
    background-color: var(--colors-bg)
}

label {
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
}

@media (min-width: 767px) {
    label {
        margin-bottom: 0;
    }
}
</style>