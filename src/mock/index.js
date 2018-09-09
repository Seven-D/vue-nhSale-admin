/*
*这里集中进行后台模拟,如果模拟数据在其它文件中，记得用import来引入
* */
import Mock from 'mockjs' //引入mockjs，npm已安装
import loginAPI from './login'//引入登陆相关的模拟文件
import test from './test'
import userAdmin from './userAdmin'

/*
Mock.setup({
    timeout:1000  //设置请求延时时间
});
*/
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
Mock.mock('/get',/post|get/i,userAdmin.userList);//获取用户列表
Mock.mock('/del',/post|get/i,userAdmin.delData); //删除数据
Mock.mock('/add',/post|get/i,userAdmin.addData); //新增数据
Mock.mock('/edit',/post|get/i,userAdmin.editData); //修改数据
