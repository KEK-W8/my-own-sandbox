import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {},
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/m-q',
    name: 'MediaQueries',
    meta: {},
    component: () => import('@/views/MediaQueries.vue'),
  },
  {
    path: '/s-t',
    name: 'SpeedTest',
    meta: {},
    component: () => import('@/views/SpeedTest.vue'),
  },
  {
    path: '/el-plus-table',
    name: 'ElPlusTable',
    meta: {},
    component: () => import('@/views/ElementPlusTable.vue'),
  },
];

export default routes;
