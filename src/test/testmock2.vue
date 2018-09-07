<template>
    <div>
        <h2 style="text-align: center;">这是一个测试页面</h2>
        <ul>
            <li><h3>模拟数据来自本地mock.js的function(option)生成</h3></li>
            <li><h3>测试axios的http请求及响应，返回数据，显示数据</h3></li>
        </ul>
        <hr/>
        <p>{{listData}}</p>
        <hr/>
        <h4 style="color: blue">解析，用列表来显示部分字段数据如下：</h4>
        <ul>
            <li v-for="(item,index) in listData" :key='index'>
                <h3>{{item.authName}}--{{item.title}}--{{item.date}}</h3>
                <img class="" :src="item.img"/>
            </li>
        </ul>
        <hr/>
    </div>
</template>

<script>
    export default {
        name: "testmock2",
        data() {
            return {
                listData: [],//接收本地mock数组对象
            }
        },
        created(){
            this.createData();
        },
        methods:{
            createData(){
                this.$http.get('/test2') //请求数据2
                    .then(res => {
                        this.listData = res.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
