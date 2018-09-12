<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
        <breadcrumb/>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <!--头像,直接用图片显示 --->
                <img :src="avatar" :username="name" class="user-avatar">

                <!--这是用头像插件avatar，就是根据用户名的文字默认自动生成一个圆形头像 ，src图片要带上绝对地址！
                <avatar :size="40" :username="name" src="/src/assets/img/avatar2.gif" ></avatar> -->
                <!--还可以自定义前景色，背景色，大小，是圆是方，等等
                其它常用属性如下：
                background-color
                color
                :size
                :round
                :lighten
                src
                initials -->
                <i class="el-icon-caret-bottom"/>
            </div>
            <el-dropdown-menu slot="dropdown" class="user-dropdown">
                <router-link class="inlineBlock" to="/">
                    <el-dropdown-item>
                        主页
                    </el-dropdown-item>
                </router-link>
                <el-dropdown-item divided>
                    <span style="display:block;" @click="logout">注销</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
    import {mapGetters} from 'vuex' //获取store中一些变量状态
    import Breadcrumb from '@/components/Breadcrumb'  //面包屑组件
    import Hamburger from '@/components/Hamburger'   //收缩侧栏

    //自动生成头像组件.通过npm安装后，在需要用的组件导出在components中
    //然后在模板template中使用<Avatar>标签
    //它会以用户名的文字自动生成头像
    import Avatar from 'vue-avatar'

    export default {
        components: {
            Breadcrumb,
            Hamburger,
            Avatar
        },
        computed: {
            ...mapGetters([
                'sidebar',
                'avatar', //获取用户头像源
                'name',   //获取登陆的用户
                'roles'   //获取登陆的角色
            ])
        },
        methods: {
            toggleSideBar() {
                this.$store.dispatch('ToggleSideBar')
            },
            logout() {
                this.$store.dispatch('LogOut').then(() => {
                    location.reload() // 为了重新实例化vue-router对象 避免bug
                })
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {

        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .screenfull {
            position: absolute;
            right: 90px;
            top: 16px;
            color: red;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>

