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
        path: '/reports',
        component: Layout,
        name: 'Reports',
        meta: {title: '报表', icon: 'nested'},
        alwaysShow: true,
        children: [
            {
                path: 'sale',
                name: 'SaleReport',
                meta: {title: '销售报表'},
                component: () => import('@/service/reports/sale-reports/index'),

            },
            {
                path: 'snt',
                name: 'sntReport',
                component: () => import('@/service/reports/snt-reports/index'),
                meta: {title: '储运报表'},

            },
            {
                path: 'finance',
                name: 'FinanceReport',
                meta: {title: '财务报表'},
                component: () => import('@/service/reports/finance-reports/index')
            }
        ]
    },
    //销售
    {
        path: '/sale',
        component: Layout,
        name: 'Sale',
        meta: {title: '销售', icon: 'example'},
        alwaysShow: true,
        children: [
            {
                path: 'price',
                name: 'Price',
                meta: {title: '报价'},
                component: () => import('@/service/sale/price/Price'),

            },
            {
                path: 'order',
                name: 'Order',
                meta: {title: '订单'},
                component: () => import('@/service/sale/order/index'), //父页面路由视图，这个要有
                children: [
                    {
                        path: 'new',
                        name: 'NewOrder',
                        meta: {title: '新增订单'},
                        component: () => import('@/service/sale/order/newOrder')
                    },
                    {
                        path: 'list',
                        name: 'ListOrder',
                        meta: {title: '订单列表'},
                        component: () => import('@/service/sale/order/listOrder')
                    },
                    {
                        path: 'view',
                        name: 'ViewOrder',
                        meta: {title: '订单显示'},
                        component: () => import('@/service/sale/order/viewOrder')
                    },
                    {
                        path: 'print',
                        name: 'PrintOrder',
                        meta: {title: '订单打印'},
                        component: () => import('@/service/sale/order/printOrder')
                    }
                ]
            },
            {
                path: 'contract',
                name: 'Contract',
                meta: {title: '合同'},
                component: () => import('@/service/sale/contract/index'),
                children: [
                    {
                        path: 'pre',
                        name: 'PreContract',
                        meta: {title: '待签合同列表'},
                        component: () => import('@/service/sale/contract/preContract')
                    },
                    {
                        path: 'list',
                        name: 'ListContract',
                        meta: {title: '合同列表'},
                        component: () => import('@/service/sale/contract/listContract')
                    },
                    {
                        path: 'view',
                        name: 'ViewContract',
                        meta: {title: '合同显示'},
                        component: () => import('@/service/sale/contract/viewContract')
                    },
                    {
                        path: 'print',
                        name: 'PrintContract',
                        meta: {title: '订单打印'},
                        component: () => import('@/service/sale/contract/printContract')
                    }
                ]
            },
            {
                path: 'settle',
                name: 'Settle',
                meta: {title: '结算'},
                component: () => import('@/service/sale/settle/index'),
                children: [
                    {
                        path: 'pre',
                        name: 'PreSettle',
                        meta: {title: '待结算列表'},
                        component: () => import('@/service/sale/settle/preSettle')
                    },
                    {
                        path: 'list',
                        name: 'ListSettle',
                        meta: {title: '结算单列表'},
                        component: () => import('@/service/sale/settle/listSettle')
                    },
                    {
                        path: 'view',
                        name: 'ViewSettle',
                        meta: {title: '结算单显示'},
                        component: () => import('@/service/sale/settle/viewSettle')
                    },
                    {
                        path: 'print',
                        name: 'PrintSettle',
                        meta: {title: '结算单打印'},
                        component: () => import('@/service/sale/settle/printSettle')
                    }
                ]
            }
        ]
    },
    //财务
    {
        path: '/finance',
        component: Layout,
        name: 'Finance',
        meta: {title: '财务', icon: 'form'},
        alwaysShow: true,
        children: [
            {
                path: 'rec',
                name: 'Rec',
                meta: {title: '收款'},
                alwaysShow: true,
                component: () => import('@/service/finance/receivables/index'), //父页面路由视图，这个要有
                children: [
                    {
                        path: 'list',
                        name: 'ListRec',
                        meta: {title: '待收款列表'},
                        component: () => import('@/service/finance/receivables/listRec'),
                    }
                ]
            }
        ]
    },
    //储运
    {
        path: '/snt',
        component: Layout,
        name: 'SNT',
        meta: {title: '储运', icon: 'table'},
        alwaysShow: true,
        children: [
            {
                path: 'delivery',
                name: 'Delivery',
                meta: {title: '发货'},
                component: () => import('@/service/snt/delivery/index')
            },
            {
                path: 'instore',
                name: 'Instore',
                meta: {title: '入库'},
                component: () => import('@/service/snt/instore/index')
            }, {
                path: 'outstore',
                name: 'Outstore',
                meta: {title: '出库'},
                component: () => import('@/service/snt/outstore/index')
            }, {
                path: 'transtore',
                name: 'Transtore',
                meta: {title: '移库'},
                component: () => import('@/service/snt/transtore/index')
            }
        ]
    },

    //基础信息管理
    {
        path: '/baseinfo',
        component: Layout,
        name: 'Baseinfo',
        meta: {title: '基础信息', icon: 'table'},
        alwaysShow: true,
        children: [
            {
                path: 'contacts',
                name: 'Contacts',
                meta: {title: '联系人信息'},
                component: () => import('@/service/baseinfo/contacts/index')
            },
            {
                path: 'customer',
                name: 'Customer',
                meta: {title: '客户信息'},
                component: () => import('@/service/baseinfo/customer/index')
            },
            {
                path: 'product',
                name: 'Product',
                meta: {title: '产品信息'},
                component: () => import('@/service/baseinfo/product/index')
            },
            {
                path: 'enterprise',
                name: 'Enterprise',
                meta: {title: '企业信息'},
                component: () => import('@/service/baseinfo/enterprise/index')
            },
            {
                path: 'warehouse',
                name: 'Warehouse',
                meta: {title: '仓库信息'},
                component: () => import('@/service/baseinfo/warehouse/index')
            }
        ]
    },

/*
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
*/

    //测试
    {
        path: '/test',
        name: 'Test',
        meta: {title: '测试', icon: 'table'},
        component: Layout,
        children: [
            {
                path: 'test1',
                meta: {title: '测试1'},
                component: () => import('@/test/testmock1')
            },
            {
                path: 'test2',
                meta: {title: '测试2'},
                component: () => import('@/test/testmock2')
            },
            {
                path: 'test3',
                meta: {title: '测试3'},
                component: () => import('@/test/testmock3')
            },
            {
                path: 'test4',
                meta: {title: '测试4'},
                component: () => import('@/test/testmock4')
            },
        ]
    },
//外部链接
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
