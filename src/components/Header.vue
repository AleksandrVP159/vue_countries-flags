<template>
    <header class="header">
        <div class="container-header">
            <div class="wrapper-header">
                <RouterLink to="/" @click="clearControls">
                    Where is the World?
                </RouterLink>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useControlsStore } from '@/stores/controls';
import { mapActions } from 'pinia';


export default defineComponent({
    name: 'Header',
    methods: {
        ...mapActions(useControlsStore, ['clearControls'])
    }
})
</script>

<style>
.header {
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
}

.container-header {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
}

.wrapper-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
}

a {
    color: var(--colors-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
}
</style>