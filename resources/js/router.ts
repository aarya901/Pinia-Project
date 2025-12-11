import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from './Pages/Dashboard.vue';
import Jobs from './Pages/Jobs.vue';
import Clients from './Pages/Clients.vue';
import Plumbers from './Pages/Plumbers.vue';
import Invoices from './Pages/Invoices.vue';

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/jobs', name: 'jobs', component: Jobs },
  { path: '/clients', name: 'clients', component: Clients },
  { path: '/plumbers', name: 'plumbers', component: Plumbers },
  { path: '/invoices', name: 'invoices', component: Invoices },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
