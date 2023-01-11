import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import examfailrecord from '@/views/modules/examfailrecord/list'
    import putongguanliyuan from '@/views/modules/putongguanliyuan/list'
    import xinwenzixun from '@/views/modules/xinwenzixun/list'
    import examquestion from '@/views/modules/examquestion/list'
    import discusszhiyuanhuodong from '@/views/modules/discusszhiyuanhuodong/list'
    import exampaper from '@/views/modules/exampaper/list'
    import storeup from '@/views/modules/storeup/list'
    import fuwuleixing from '@/views/modules/fuwuleixing/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import dakatuiqian from '@/views/modules/dakatuiqian/list'
    import discussxinwenzixun from '@/views/modules/discussxinwenzixun/list'
    import dakaqiandao from '@/views/modules/dakaqiandao/list'
    import zhiyuanshizhang from '@/views/modules/zhiyuanshizhang/list'
    import exampaperlist from '@/views/modules/exampaperlist/list'
    import messages from '@/views/modules/messages/list'
    import huodongxinde from '@/views/modules/huodongxinde/list'
    import config from '@/views/modules/config/list'
    import examrecord from '@/views/modules/examrecord/list'
    import zhiyuanhuodong from '@/views/modules/zhiyuanhuodong/list'
    import zhiyuanzhe from '@/views/modules/zhiyuanzhe/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/examfailrecord',
        name: '错题本',
        component: examfailrecord
      }
      ,{
	path: '/putongguanliyuan',
        name: '普通管理员',
        component: putongguanliyuan
      }
      ,{
	path: '/xinwenzixun',
        name: '新闻资讯',
        component: xinwenzixun
      }
      ,{
	path: '/examquestion',
        name: '测试试题管理',
        component: examquestion
      }
      ,{
	path: '/discusszhiyuanhuodong',
        name: '志愿活动评论',
        component: discusszhiyuanhuodong
      }
      ,{
	path: '/exampaper',
        name: '技能测试管理',
        component: exampaper
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/fuwuleixing',
        name: '服务类型',
        component: fuwuleixing
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/dakatuiqian',
        name: '打卡退签',
        component: dakatuiqian
      }
      ,{
	path: '/discussxinwenzixun',
        name: '新闻资讯评论',
        component: discussxinwenzixun
      }
      ,{
	path: '/dakaqiandao',
        name: '打卡签到',
        component: dakaqiandao
      }
      ,{
	path: '/zhiyuanshizhang',
        name: '志愿时长',
        component: zhiyuanshizhang
      }
      ,{
	path: '/exampaperlist',
        name: '技能测试列表',
        component: exampaperlist
      }
      ,{
	path: '/messages',
        name: '留言板',
        component: messages
      }
      ,{
	path: '/huodongxinde',
        name: '活动心得',
        component: huodongxinde
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/examrecord',
        name: '考试记录',
        component: examrecord
      }
      ,{
	path: '/zhiyuanhuodong',
        name: '志愿活动',
        component: zhiyuanhuodong
      }
      ,{
	path: '/zhiyuanzhe',
        name: '志愿者',
        component: zhiyuanzhe
      }
    ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
