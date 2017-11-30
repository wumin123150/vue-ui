import Layout from '@/components/FrontLayout'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
import Index from '@/views/front/Index'

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/
export default [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: NotFound, hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/front',
    name: '前台',
    hidden: true,
    children: [{ path: 'front', component: Index }]
  }
]
