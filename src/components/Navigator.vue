<template>
  <div class="navigator">
    <div
      class="navigator-header"
      ref="navigatorHeader"
      @click="toggleNavigatorBodyIsVisible"
    >
      <h3>{{ currentRoute.name }}</h3>
    </div>
    <div
      v-if="navigatorBodyIsVisible"
      class="navigator-body"
      @click="toggleNavigatorBodyIsVisible"
    >
      <ul class="router-links-list">
        <li
          v-for="(route, index) in allRoutes"
          :key="index"
          class="router-links-list-item"
        >
          <router-link :to="{name: route.name}">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'Navigator',
  setup() {
    const currentRoute = useRoute();
    const allRoutes = useRouter().getRoutes();

    const navigatorBodyIsVisible = ref<boolean>(false);
    const toggleNavigatorBodyIsVisible = () => {
      navigatorBodyIsVisible.value = !navigatorBodyIsVisible.value;
    };

    return {
      currentRoute,
      allRoutes,
      navigatorBodyIsVisible,
      toggleNavigatorBodyIsVisible,
    };
  },
});
</script>

<style lang="less" scoped>
@import url('~@/assets/style/variables.less');

@header-height: 30px;

.navigator{
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  &-header {
    width: inherit;
    height: @header-height;
    transition: 0.15s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid @hovered-variant-color;
    &:hover {
      background-color: @hovered-color;
      cursor: pointer;
    }
  }
  &-body {
    width: inherit;
    height: 100%;
    position: absolute;
    top: @header-height;
    left: 0;
    z-index: 777;
    padding: 30px;
    background-color: @surface-color;
    display: flex;
    justify-content: center;
    opacity: .96;
    .router-links-list {
      max-width: 800px;
      max-height: 500px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      flex-wrap: wrap;
      &-item {
        margin: 10px;
      }
    }
  }
}
</style>
