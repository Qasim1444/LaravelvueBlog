import {createRouter,createWebHistory} from 'vue-router';

import Home from '../pages/website/Home.vue';
import BlogList from '../pages/website/BlogList.vue';
import BlogDetail from '../pages/website/BlogDetail.vue';
import About from '../pages/website/About.vue';
import Contact from '../pages/website/Contact.vue';
import Login from '../pages/auth/Login.vue';
import Register from '../pages/auth/Register.vue';

import Dashboard from '../pages/admin/Dashboard.vue';
import Posts from '../pages/admin/Posts.vue';
import Categories from '../pages/admin/Categories.vue';
import Users from '../pages/admin/Users.vue';
const routes = [
 { path: '/', component: Home },
  { path: '/blogs', component: BlogList },
  { path: '/blog/:id', component: BlogDetail },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },

  // Auth
  { path: '/login', component: Login },
  { path: '/register', component: Register },

  // Admin
  { path: '/admin', component: Dashboard },
  { path: '/admin/posts', component: Posts },
  { path: '/admin/categories', component: Categories },
  { path: '/admin/users', component: Users },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
