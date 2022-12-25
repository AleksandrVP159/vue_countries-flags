<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router'

import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})

</script>

<template>
  <Header />
  <main class="wrapper-main">
    <div class="container">
      <RouterView v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key:="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </RouterView>
    </div>
  </main>
</template>

<style>
.wrapper-main {
  padding: 2rem 0;
}

@media (min-width: 767px) {
  .wrapper-main {
    padding: 4rem 0;
  }
}

.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0s linear;
  opacity: 0;
}
</style>
