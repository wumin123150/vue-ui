import Layout from '@/components/Layout'

const Index = r => require.ensure([], () => r(require('@/views/admin/Index')), 'admin');
const User = r => require.ensure([], () => r(require('@/views/admin/User')), 'admin');

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/
export default [
  {
    path: '/index',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: '/dashboard', component: Index }]
  },

  {
    path: '/admin/user',
    component: Layout,
    icon: 'icon-favorite',
    noDropdown: true,
    children: [{ path: '', component: User, name: '用户管理' }]
  },

  { path: '*', redirect: '/404', hidden: true }
];
