<template>
    <Button @click="goBack">
        <ArrowLeftIcon /> Back
    </Button>
    <CountryDetails />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../components/UI/Button.vue'
import CountryDetails from '@/components/CountryDetails.vue';

import { ArrowLeftIcon } from '@heroicons/vue/20/solid';

import { useDetailsStore } from '@/stores/details';
import { mapActions, mapState } from 'pinia';

export default defineComponent({
    name: 'Details',
    components: {
        Button,
        CountryDetails,
        ArrowLeftIcon
    },
    methods: {
        goBack() {
            this.$router.go(-1)
            this.clearDetails()
        },
        ...mapActions(useDetailsStore, ['clearDetails', 'loadCountryByName'])
    },
    mounted() {
        this.loadCountryByName(this.$route)
    }
})
</script>

<style scoped>

</style>