/*
*使用mock.js
* */
import Mock from 'mockjs'
const rd = Mock.Random; //引入mock的随机函数
//mock制造一组数据
const produceNewData = () => {
    let test = [];
    for (let i = 0; i < 10; i++) {
        const newTestObj = {
            title: rd.csentence(5, 30),
            img: rd.image('150*100', '#894FC4', '#FFF', 'png', 'mockImg'), //生成一段随机的base64图片码
            authName: rd.cname(), //随机生成中文的名字
            date: rd.date() + ' ' + rd.time() //随机日期时间显示
        };
        test.push(newTestObj)
    }
    return {
        data:test
    }
};
//响应API
//Mock.mock(url,get/post,返回数据)
Mock.mock('/testMock1/list','get',produceNewData);


