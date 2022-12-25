<template>
    <Controls />
    <CountryList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Controls from '@/components/Controls.vue';
import CountryList from '@/components/CountryList.vue';

export default defineComponent({
    name: 'Home',
    components: {
        Controls,
        CountryList
    }
})
</script>

<style scoped>

</style>