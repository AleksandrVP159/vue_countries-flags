<template>
    <article class="wrapper-card" @click="onClick">
        <img class="card-image" :src="img" :alt="name">
        <div class="card-body">
            <h3 class="card-title">{{ name }}</h3>
            <ul class="card-list">
                <li class="card-list-item">
                    <b>Population:</b> {{ population?.toLocaleString() }}
                </li>
                <li class="card-list-item">
                    <b>Region:</b> {{ region }}
                </li>
                <li class="card-list-item">
                    <b>Capital:</b> {{ capital }}
                </li>
            </ul>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Card',
    props: {
        name: String,
        img: String,
        population: Number,
        region: String,
        capital: String
    },
    emits: ["onClick"],
    methods: {
        onClick() {
            this.$emit('onClick')
        }
    }
})
</script>

<style>
.wrapper-card {
    border-radius: var(--radii);
    background-color: car(--colors-ui-base);
    box-shadow: var(--shadow);
    cursor: pointer;
    overflow: hidden;
}

.card-image {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow);
}

.card-body {
    padding: 1rem 1.5rem 2rem;
}

.card-title {
    margin: 0;
    font-size: var(--fs-md);
    font-weight: var(--fw-bold);
}

.card-list {
    list-style: none;
    margin: 0;
    padding: 1rem 0 0;
}

.card-list-item {
    font-size: var(--fs-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);
}

.card-list-item>b {
    font-weight: var(--fw-bold);
}
</style>