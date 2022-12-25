<template>
    <button class="base-button">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button'
})
</script>

<style>
.base-button {
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 2.5;
    border-radius: var(--radii);

    border: none;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: var(--color-text);
    cursor: pointer;
}
</style>