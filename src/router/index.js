import { createRouter, createWebHistory } from 'vue-router';
import EmpleadoList from '../components/EmpleadoList.vue';
import EmpleadoForm from '../components/EmpleadoForm.vue';

const routes = [
  { path: '/', name: 'home', component: EmpleadoList },
  { path: '/agregar', name: 'add', component: EmpleadoForm },
  { path: '/editar/:id', name: 'edit', component: EmpleadoForm }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
