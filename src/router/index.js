"use strict";
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/client/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/foreigntravel',
      name: 'foreigntravel',
      component: () => import('../views/client/ForeignTravel.vue')
    },
    {
      path: '/domestictravel',
      name: 'domestictravel',
      component: () => import('../views/client/DomesticTravel.vue')
    },
    {
      path: '/hottour',
      name: 'hottour',
      component: () => import('../views/client/HotTourView.vue')
    },
    {
      path: '/chinatravel',
      name: 'chinatravel',
      component: () => import('../views/client/ChinaTravel.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/DashboardView.vue')
    },
    {
      path: '/tourdetail',
      name: 'tourdetail',
      component: () => import('../views/client/TourView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/client/AboutView.vue'),
      children: [
        { path: 'introduction', component: () => import('../views/about/IntroductionView.vue') },
        { path: 'aboutus', component: () => import('../views/about/AboutUsView.vue') },
        { path: 'chinh-sach-va-quy-dinh', component: () => import('../views/about/PolicyView.vue') },
        { path: 'bao-hiem-dich-vu', component: () => import('../views/about/InsuranceView.vue') },
        { path: 'quy-trinh', component: () => import('../views/about/ProcedureView.vue') },

      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/DashboardView.vue'),
      children: [
        { path: 'dat-tour', component: () => import('../views/admin/OrderManage.vue') },
        { path: 'quan-ly-tour', component: () => import('../views/admin/TourManage.vue') },
        { path: 'bai-viet', component: () => import('../views/admin/PostManage.vue') },
        { path: 'quan-li-tour/them-tour', component: () => import('../views/admin/AddTour.vue') },
        { path: 'thong-ke', component: () => import('../views/admin/StatisticPage.vue') },
        { path: 'dang-ky-tu-van', component: () => import('../views/admin/AdvisoryManage.vue') },
        { path: 'quan-ly-hot-tour', component: () => import('../views/admin/HotTourManage.vue') },
        { path: 'quan-ly-slider', component: () => import('../views/admin/SliderManage.vue') },
        { path: 'tai-khoan-admin', component: () => import('../views/admin/AdminAccount.vue') },




      ]
    }
  ]

})

export default router
