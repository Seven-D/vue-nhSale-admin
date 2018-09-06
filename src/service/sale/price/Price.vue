<template>
    <div class="hello">
        <h2>模拟数据，以下数据来自mock模拟，function（option）方式</h2>
        <p>{{datalist}}</p>
        <ul>
            <li v-for="(item,index) in datalist" :key='index'>
                <h4>{{item.personName}}:<span>{{item.viewName}}</span></h4>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "price",
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
                this.$http.get('/user') //全局引入使用vue原型中的方法this.$http,已经把axios添加到原型中
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

<style scoped>

</style>
