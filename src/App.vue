<template>
  <header>
    <Navigator />
  </header>
  <main class="router-view">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigator from '@/components/Navigator.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navigator,
  },
});
</script>

<style lang="less">
@import url('~@/assets/style/variables.less');

#app {
  display: flex;
  flex-flow: column;
  font-family: @default-font-family;
  background-color: @background-color;
  color: @text-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //min-width: 600px;
  header {
    height: fit-content;
  }
  .router-view {
    min-width: 100vw;
    height: 100vh;
  }
}
</style>
