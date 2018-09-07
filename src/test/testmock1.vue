<template>
    <div>
        <h2 style="text-align: center;">这是一个测试页面</h2>
        <ul>
            <li><h3>模拟数据来自本地mock.js的数据模拟template生成</h3></li>
            <li><h3>测试axios的http请求及响应，返回数据，显示数据</h3></li>
        </ul>
        <hr/>
        <p>{{mkData}}</p>
        <hr/>
        <h4 style="color: blue">解析，用列表来显示如下：</h4>
        <ul>
            <li v-for="item in mkData">
                <h3>{{item}}</h3>
            </li>
        </ul>
        <hr/>
    </div>
</template>

<script>
    export default {
        name: "testmock1",
        data() {
            return {
                mkData: '', //接收本地mock字符串对象
            }
        },
        created() {
            this.createData();
        },
        methods: {
            createData() {
                this.$http.get('/test1') //请求数据1
                    .then(res => {
                        this.mkData = res.data;//存放数据
                    })
                    .catch(err => {
                        console.log(err);  //错误处理
                    });
            }
        },
    }

</script>

<style scoped>

</style>
