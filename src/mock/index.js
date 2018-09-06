/*
*
* */
import Mock from 'mockjs' //引入mockjs，npm已安装

import {Random} from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）

/*
Mock.setup({
    timeout:1000  //设置请求延时时间
});
*/

//模拟数据1，函数方式生成
const getdata = function (option) { //定义请求数据方法
    let datalist = [];
    for (let i = 0; i < 10; i += 1) {
        const o = {  //mockjs模拟随机生成数据，生成10条
            recipeId: Random.guid(),
            billId: Random.string(10),
            orgId: Random.string('number', 8, 10),
            Date: Random.date('yyyy-MM-dd'),
            time: Random.time('A HH:mm:ss'),
            adress: Random.county(),
            viewName: Random.cword(4, 16), // 随机生成任意名称
            personName: Random.cname(), //随机生成中文名字
            reason: Random.csentence(10, 32), //随机生成文本
        };
        datalist.push(o)
    }
    return {
        data: datalist
    }
};

//模拟数据2，函数方式生成
const produceNewData = () => {
    let test = [];
    for (let i = 0; i < 10; i++) {
        const newTestObj = {
            title: Random.csentence(5, 30),
            img: Random.image('150*100', '#894FC4', '#FFF', 'png', 'mockImg'), //生成一段随机的base64图片码
            authName: Random.cname(), //随机生成中文的名字
            date: Random.date() + ' ' + Random.time() //随机日期时间显示
        };
        test.push(newTestObj)
    }
    return {
        data: test
    }
};

//模拟数据3，数据模板方式生成
Mock.mock('/myMockUrl', {
    'firstName|2': 'Solo',  //重复Solo这个字符串 2 次，打印出来就是'SoloSolo'。
    'lastName|2-3': 'zh',  //重复zh这个字符串 2-3 次。
    'big|+1': 0,  //属性值自动加 1，初始值为 0
    'age|20-30': 25,  //生成一个大于等于 20、小于等于 30 的整数，属性值 25 只是用来确定类型
    'weight|100-120.2-5': 110.24,  //生成一个浮点数,整数部分大于等于 100、小于等于 120，小数部分保留 2 到 5 位。
    'likeMovie|1': Boolean,  //随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
    'friend3|2-3': ['momo', 'yanzi', 'ziwei'],  //通过重复属性值 arr 生成一个新数组，重复次数大于等于 2，小于等于 3。
    'life2|1-2': {'host': 'www.baidu', 'port': '12345', 'node': 'selector'},  //从对象 中随机选取 1 到 2 个属性。
    'regexp1': /^[a-z][A-Z][0-9]$/,  //生成的符合正则表达式的字符串
});


Mock.mock('/user', /post|get/i, getdata);////当post或get请求到/user路由时Mock会拦截请求并返回上面的数据
Mock.mock('/testMock1/list', /post|get/i, produceNewData);
