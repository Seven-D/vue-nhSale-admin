/*这个文件模拟用户数据，进行用户管理*/
import {Random} from 'mockjs'

let userList = [];
const count = 5;

//用户数据的生成
for (let i = 0; i < count; i++) {
    let newUserObj = {
        id: Random.increment,
        name: Random.cname(),
        sex: Random.int(0,1),
        age: Random.int(18,60),
        tel: /^1[385][1-9]\d{8}/,  //生成手机号
        add: '@province' + '@city' + '@county', //生成中国地址
        comments: Random.csentence(5, 10)
    };
    userList.push(newUserObj); //将模拟数据放到数组中
}

//数据的删除操作
let delData = option => { //option是请求类型
    let rType = option.type.toLowerCase(); //将请求类型字符转换为小写，以便以下进行判断
    switch (rType) {
        case 'get':
            break;
        case 'post':
            let id = parseInt(JSON.parse(option.body).params.id);//获取请求的id，将options.body转换为JSON对象
            userList.filter(val => {
                return val.id != id; //过滤掉前台传过来的id对应的相应数据，并重新返回
            });
            break;
        default:
            break
    }
    return {
        data: userList
    }
};

//添加数据
let addData = option => {
    let rType = option.type.toLowerCase();
    switch (rType) {
        case 'get':
            break;
        case 'post':
            let obj = JSON.parse(option.body).params.obj; //将请求内容转换成JSON对象
            userList = userList.concat(obj); // 将前台返回来的数据，拼接到数组中
            break;
        default:break
    }
    return {
        data:userList
    }
};

//修改数据
let editData = option => {
    let rType = option.type.toLowerCase();
    switch (rType){
        case 'get':
            break;
        case 'post':
            let obj = JSON.parse(option.body).params.obj; //将请求内容转换成JSON对象
            userList.map(val =>{
                return val.id === obj.id ? obj : val; //将需要替换的数据替换掉
            });
            break;
        default:break
    }
    return {
        data:userList
    }
};

export default {userList,delData,addData,editData}
