import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1(默认 false)
 * alwaysShow: true               当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                若你想不管路由下面的 children 声明的个数都显示你的根路由，你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noredirect           重定向，当设置 noredirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 *                                设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    title: 'title'                设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'              设置该路由的图标
    roles:['admin', 'editor']     设置该路由进入的权限，支持多个权限叠加
    noCache: true                 如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
  }
 **/
export const constantRouterMap = [
    {path: '/login', component: () => import('@/views/login/index'), hidden: true},
    {path: '/404', component: () => import('@/views/404'), hidden: true},

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index')
        }]
    },
    //报表
    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Reports',
        meta: {title: '报表', icon: 'nested'},
        children: [
            {
                path: 'menu2',
                name: 'SaleReport',
                meta: {title: '销售报表'},
                component: () => import('@/views/nested/menu2/index'), // Parent router-view

            },
            {
                path: 'menu1',
                name: 'sntReport',
                component: () => import('@/views/nested/menu1/index'),
                meta: {title: '储运报表'},
                alwaysShow: true,
                children: [
                    {
                        path: 'menu1-2',
                        component: () => import('@/views/nested/menu1/menu1-2'),
                        name: 'Menu1-2',
                        meta: {title: '仓库报表'},
                        alwaysShow: true,
                        children: [
                            {
                                path: 'menu1-2-1',
                                component: () => import('@/views/nested/menu1//menu1-2/menu1-2-1'),
                                name: 'Menu1-2-1',
                                meta: {title: '入库'}
                            }
                        ]
                    },
                ]
            },
            {
                path: 'menu2',
                name: 'FinanceReport',
                meta: {title: '财务报表'},
                component: () => import('@/views/nested/menu2/index')
            }
        ]
    },
    //销售
    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Sale',
        meta: {title: '销售', icon: 'nested'},
        alwaysShow: true,
        children: [
            {
                path: 'menu2',
                name: 'Price',
                meta: {title: '报价'},
                component: () => import('@/views/nested/menu2/index'), // Parent router-view

            },
            {
                path: 'menu1',
                name: 'Order',
                component: () => import('@/views/nested/menu1/index'),
                meta: {title: '订单'},
            },
            {
                path: 'menu2',
                name: 'Contract',
                meta: {title: '合同'},
                component: () => import('@/views/nested/menu2/index')
            },
            {
                path: 'menu2',
                name: 'Settle',
                meta: {title: '结算'},
                component: () => import('@/views/nested/menu2/index')
            }
        ]
    },
    //财务
    {
        path: '/form',
        component: Layout,
        name: 'Finance',
        meta: {title: '财务', icon: 'form'},
        alwaysShow: true,
        children: [
            {
                path: 'index',
                name: 'Unsettled',
                meta: {title: '待结算'},
                component: () => import('@/views//form/index')
            }
        ]
    },
    //储运
    {
        path: '/table',
        component: Layout,
        name: 'StorageTransport',
        meta: {title: '储运', icon: 'table'},
        alwaysShow: true,
        children: [
            {
                path: 'index',
                name: 'Deliver',
                meta: {title: '发货'},
                component: () => import('@/views//table/index')
            }
        ]
    },
    //仓库
    {
        path: '/table',
        component: Layout,
        name: 'Repository',
        meta: {title: '仓库', icon: 'eye'},
        alwaysShow: true,
        children: [
            {
                path: 'index',
                name: 'In',
                meta: {title: '入库'},
                component: () => import('@/views//table/index')
            },
            {
                path: 'index',
                name: 'Out',
                meta: {title: '出库'},
                component: () => import('@/views//table/index')
            }
        ]
    },


    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: {title: 'Example', icon: 'example'},
        children: [
            {
                path: 'table',
                name: 'Table',
                component: () => import('@/views/table/index'),
                meta: {title: 'Table', icon: 'table'}
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () => import('@/views/tree/index'),
                meta: {title: 'Tree', icon: 'tree'}
            }
        ]
    },
    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
            title: 'nested',
            icon: 'nested'
        },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/nested/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: {title: 'menu1'},
                children: [
                    {
                        path: 'menu1-1',
                        component: () => import('@/views/nested/menu1/menu1-1'),
                        name: 'Menu1-1',
                        meta: {title: 'menu1-1'}
                    },
                    {
                        path: 'menu1-2',
                        component: () => import('@/views/nested/menu1/menu1-2'),
                        name: 'Menu1-2',
                        meta: {title: 'menu1-2'},
                        children: [
                            {
                                path: 'menu1-2-1',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                                name: 'Menu1-2-1',
                                meta: {title: 'menu1-2-1'}
                            },
                            {
                                path: 'menu1-2-2',
                                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                                name: 'Menu1-2-2',
                                meta: {title: 'menu1-2-2'}
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () => import('@/views/nested/menu1/menu1-3'),
                        name: 'Menu1-3',
                        meta: {title: 'menu1-3'}
                    }
                ]
            },
            {
                path: 'menu2',
                component: () => import('@/views/nested/menu2/index'),
                meta: {title: 'menu2'}
            }
        ]
    },

    {
        path: 'external-link',
        component: Layout,
        children: [
            {
                path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
                meta: {title: '外部链接', icon: 'link'}
            }
        ]
    },

    {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})
