/*
* 这个文件模拟了登陆过程的后台，其中有用户表，登陆方法，获取用户信息方法，登出方法
* 上一级调用是@/mock/index中的Mock.mock方法
* 上上一级调用是@/aip/login
* */

import { param2Obj } from '@/utils'

//定义一个用户表,里面是一个管理员admin,一个编辑editor
const userMap = {
    admin: {
        roles: ['admin'],
        token: 'admin',
        introduction: '我是超级管理员',
        avatar: '@/assets/img/touxiang.gif',
        name: 'Super Admin'
    },
    editor: {
        roles: ['editor'],
        token: 'editor',
        introduction: '我是编辑',
        avatar: '@/assets/img/touxiang.gif',
        name: 'Normal Editor'
    }
}

export default {
    //登陆请求响应
    login: config => {
        const {username} = JSON.parse(config.body)
        return userMap[username]
    },
    //获取用户信息请求响应
    getInfo: config => {
        const {token} = param2Obj(config.url)
        if (userMap[token]) {
            return userMap[token]
        } else {
            return false
        }
    },
    //登出响应
    logout: () => 'success'
}
