<template>
    <div>
        <h1>本组数据为Mock模拟，来自于数据模板</h1>
        <p>{{dataList}}</p>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                dataList: []
            }
        },
        mounted() {
            this.newData()
        },
        methods: {
            newData() {
                this.$http.get('/myMockUrl')
                    .then((result) => {
                        console.log(result.data.data);
                        this.datalist = result.data.data;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }
    }
</script>
<style scoped>

</style>
