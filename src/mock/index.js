/*
*这里集中进行后台模拟,如果模拟数据在其它文件中，记得用import来引入
* */
import Mock from 'mockjs' //引入mockjs，npm已安装
import loginAPI from './login'//引入登陆相关的模拟文件
import test from './test'
import user from './user'
import articleAPI from './article'


Mock.setup({
    timeout:300  //设置请求延时时间
});

////当post或get请求到/user路由时Mock会拦截请求并返回上面的数据
Mock.mock(/\/table\/list/, /post|get/i, test.prodNewData);
Mock.mock('/test3', /post|get/i, test.getdata);
Mock.mock('/test2', /post|get/i, test.produceNewData);
Mock.mock('/test1', 'get', test.tpl);

// 登陆相关
Mock.mock(/\/login\/login/, 'post', loginAPI.login);
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getInfo);

//用户管理
Mock.mock('/get',/post|get/i,user.userList);//获取用户列表
Mock.mock('/del',/post|get/i,user.delData); //删除数据
Mock.mock('/add',/post|get/i,user.addData); //新增数据
Mock.mock('/edit',/post|get/i,user.editData); //修改数据

// 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)
