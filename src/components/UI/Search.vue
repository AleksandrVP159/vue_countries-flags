<template>
    <label class="input-container">
        <MagnifyingGlassIcon />
        <input class="input" type="search" placeholder="Search for a country..." v-model="search"
            @input="setSearch(search)">
    </label>
</template>

<script lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { defineComponent } from 'vue';
import { useControlsStore } from '@/stores/controls';
import { mapActions } from 'pinia';

export default defineComponent({
    name: 'Search',
    data: () => {
        return {
            search: ''
        }
    },
    components: {
        MagnifyingGlassIcon
    },
    methods: {
        ...mapActions(useControlsStore, ['setSearch'])
    }
})

</script>

<style>
.input-container {
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1rem;
}

@media (min-width: 767px) {
    .input-container {
        margin-bottom: 0;
        width: 280px;
    }
}

.input {
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--color-text);
    background-color: var(--colors-ui-base);
}
</style>