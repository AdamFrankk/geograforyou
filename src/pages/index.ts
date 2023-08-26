import { LoginPage, SignUpPage } from "./auth"
import { Page500, PageNotFound } from "./errors"
import Routing from "./index.vue"
import {
  AttractionsRecommendPage,
  HotelsRecommendPage,
  ProfilePage,
  RestaurantsRecommendPage
} from "./profile"
import { TestPage } from "./test"

export const routes = [
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
    // meta: {
    //   requiresAuth: true
    // }
    children: []
  },
  {
    path: "/profile/restaurants-recommends",
    name: "restaurants-recommends",
    component: RestaurantsRecommendPage
  },
  {
    path: "/profile/attractions-recommends",
    name: "attractions-recommends",
    component: AttractionsRecommendPage
  },
  {
    path: "/profile/hotels-recommends",
    name: "hotels-recommends",
    component: HotelsRecommendPage
  },
  {
    path: "/test",
    name: "test",
    component: TestPage
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      guest: true
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpPage,
    meta: {
      guest: true
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: PageNotFound
  },
  {
    name: "error-500",
    path: "/500",
    component: Page500
  }
]
export { Routing }
