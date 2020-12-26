import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/properties',
    name: 'Properties',
    component: () => import('../views/Properties.vue')
  },
  {
    path: '/tenancies',
    name: 'TenancyList',
    component: () => import('../views/Tenancy/TenancyList.vue')
  },
  {
    path: '/tenancies/create',
    name: 'TenancyCreate',
    component: () => import('../views/Tenancy/TenancyEdit.vue')
  },
  {
    path: '/tenancies/:id/edit',
    name: 'TenancyEdit',
    component: () => import('../views/Tenancy/TenancyEdit.vue')
  },
  {
    path: '/tenancies/:id',
    name: 'TenancyItem',
    component: () => import('../views/Tenancy/TenancyItem.vue')
  },
  {
    path: '/tenants',
    name: 'TenantList',
    component: () => import('../views/Tenant/TenantList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
