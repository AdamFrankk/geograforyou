import { createRouter, createWebHistory } from "vue-router"
import { routes } from "@/pages"

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("user") === null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem("user") === null) {
      next()
    } else {
      next({
        path: "/profile",
        params: { nextUrl: to.fullPath }
      })
    }
  } else {
    next()
  }
})
