import Vue from "vue"
import VueRouter from "vue-router"
import Server from "../views/Server.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Servers",
    component: Server,
    meta: {
      title: "Servers"
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  }

  next()
})

export default router
