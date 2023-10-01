"use strict";
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/client/HomeView.vue'
import LoadingOverlay from '../components/LoadingOverlay.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue'),
    },
    {
      path: '/du-lich-quoc-te',
      name: 'du-lich-quoc-te',
      component: () => import('../views/client/ForeignTravel.vue')
    },
    {
      path: '/du-lich-trong-nuoc',
      name: 'du-lich-trong-nuoc',
      component: () => import('../views/client/DomesticTravel.vue')
    },
    {
      path: '/tour-hot',
      name: 'tour-hot',
      component: () => import('../views/client/HotTourView.vue')
    },
    {
      path: '/du-lich-trung-quoc',
      name: 'du-lich-trung-quoc',
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
      path: '/login',
      name: 'login',
      component: () => import('../views/admin/LoginView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/DashboardView.vue'),
      children: [
        { path: 'dat-tour',
         component: () => import('../views/admin/OrderManage.vue') 
        },
        { path: 'quan-ly-tour',
         component: () => import('../views/admin/TourManage.vue') 
        },
        { path: 'bai-viet', 
        component: () => import('../views/admin/PostManage.vue') 
        },
        { path: 'quan-li-tour/them-tour', 
        component: () => import('../views/admin/AddTour.vue') 
        },
        { path: 'quan-li-tour/chinh-sua-tour', 
        component: () => import('../views/admin/EditTour.vue') 
        },
        { path: 'thong-ke', 
        component: () => import('../views/admin/StatisticPage.vue') 
        },
        { path: 'dang-ky-tu-van', 
        component: () => import('../views/admin/AdvisoryManage.vue') 
        },
        { path: 'quan-ly-hot-tour', 
        component: () => import('../views/admin/HotTourManage.vue') 
        },
        { path: 'quan-ly-slider', 
        component: () => import('../views/admin/SliderManage.vue') 
        },
        { path: 'tai-khoan-admin', 
        component: () => import('../views/admin/AdminAccount.vue') 
        },
        { path: 'thu-vien', 
        component: () => import('../views/admin/ImageLibrary.vue') 
        },
       
      ]
    },
  ]

})

export default router
