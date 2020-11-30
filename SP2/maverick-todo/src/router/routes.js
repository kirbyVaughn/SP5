
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/page todo.vue') 
      },
      { 
        path: '/settings', 
        component: () => import('pages/page settings.vue') 
      },
      { 
        path: '/auth', 
        component: () => import('pages/PageAuth.vue') 
      } 
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
