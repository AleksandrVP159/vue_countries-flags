<template>
    <h2 v-if="status === 'loading'">Loading...</h2>
    <h2 v-else-if="error">{{ error }}</h2>
    <Info v-else-if="currentCountry" />
</template>

<script lang="ts">
import Info from './Info.vue';
import { useDetailsStore } from '@/stores/details';
import { mapState } from 'pinia';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'CountryDetails',
    components: {
        Info
    },
    computed: {
        ...mapState(useDetailsStore, ['currentCountry', 'status', 'error'])
    },
})

</script>