<template>
    <div class="hello">
        <h2 style="text-align: center">模拟数据，以下数据来自mock模拟，function（option）方式</h2>
        <p>{{datalist}}</p>
        <ol>
            <li v-for="(item,index) in datalist" :key='index'>
                <h3>{{item.authName}}--{{item.title}}--{{item.date}}</h3>
            </li>
        </ol>
    </div>
</template>
<!--mockjs应用页面-->
<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                datalist: []
            }
        },
        mounted() {
            this.showdata()
        },
        methods: {
            showdata() {
//		import axios from 'axios' 在main.js中引入
//    Vue.prototype.$http = axios  在main.js中把axios添加到vue原型中，则可在每个组件中调用
                this.$http.get('/testMock1/list')
                    .then((res) => {
                        console.log(res.data.data)
                        this.datalist = res.data.data
                    })
                    .catch((err) => {
                        console.log('调用失败', err)
                    })
            }
        }
    }
</script>
