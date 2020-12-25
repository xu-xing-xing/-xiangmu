import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'

Vue.use(Router)

const routes = ({
    routes: [{
            // 登录
            path: '/',
            name: 'Login',
            component: () =>
                import ('./views/Login.vue')
        },
        {
            //首页
            path: '/index',
            name: 'index',
            component: () =>
                import ('./views/index.vue')
        },
        {
            //搜索
            path: '/find',
            component: () =>
                import ('../src/views/find.vue')
        },
        {
            //知识库
            path: '/zsk',
            component: () =>
                import ('../src/views/zsk.vue')
        },
        {
            //个人中心
            path: '/grsz',
            component: () =>
                import ('./views/grzx.vue')
        },
        {
            //系统设置
            path: '/xtsz',
            component: () =>
                import ('./views/xtsz.vue')
        },
        {
            //仪表盘
            path: '/ybp',
            component: () =>
                import ('./views/ybp.vue')
        },
        {
            //数据报表
            path: '/sjbb',
            component: () =>
                import ('./views/sjbb.vue')
        },
        {
            //销售分析
            path: '/xsfx',
            component: () =>
                import ('./views/xsfx.vue')
        },
        {
            //客户分析
            path: '/khfx',
            component: () =>
                import ('./views/khfx.vue')
        },
        {
            //产品管理
            path: '/cpgl',
            component: () =>
                import ('./views/cpgl.vue')
        },
        {
            //销售
            path: '/xs',
            component: () =>
                import ('./views/xs.vue')
        },
        {
            //合同
            path: '/ht',
            component: () =>
                import ('./views/ht.vue')
        },
        {
            //客户公共池
            path: '/khggc',
            component: () =>
                import ('./views/khggc.vue')
        },
        {
            //客户管理
            path: '/khgl',
            component: () =>
                import ('./views/khgl.vue')
        },
        {
            //日程
            path: '/rc',
            component: () =>
                import ('./views/rc.vue')
        },
        {
            //联系人
            path: '/lxr',
            component: () =>
                import ('./views/lxr.vue')
        },
        {
            //销售任务
            path: '/xsrw',
            component: () =>
                import ('./views/xsrw.vue')
        },
        {
            //产品
            path: '/cpgl',
            component: () =>
                import ('./views/cpgl.vue')
        },
        {
            //商机
            path: '/sj',
            component: () =>
                import ('./views/sj.vue')
        },
        {
            //外勤管理
            path: '/wqgl',
            component: () =>
                import ('./views/wqgl.vue')
        }
    ]
});
const router = new Router({
    routes
});

router.beforeEach((to, from, next) => {
    let abc = sessionStorage.getItem("Login");
    if (abc) {
        next();
    } else {
        if (to.path === "/") {
            next("/");
        }
    }
});