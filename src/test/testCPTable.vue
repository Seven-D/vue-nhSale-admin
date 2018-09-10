<template>
    <div>
        <div class="add">
            <input type="number" v-model="obj.id" placeholder="id">
            <input type="text" v-model="obj.name" placeholder="name">
            <input type="text" v-model="obj.sex" placeholder="sex">
            <input type="text" v-model="obj.age" placeholder="age">
            <input type="text" v-model="obj.tel" placeholder="tel">
            <input type="text" v-model="obj.add" placeholder="add">
            <input type="text" v-model="obj.comments" placeholder="comments">
            <button @click="addList">添加</button>
            <button @click="updateList">修改</button>
        </div>
        <ul>
            <li v-for="item in userList">
                {{item.id}}**
                {{item.name}}**
                {{item.sex}}**
                {{item.age}}**
                {{item.tel}}**
                {{item.add}}**
                {{item.comments}}**
                <button @click="deleteList(item.id)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'testCPTable',
        data(){
            return {
                userList: [],
                //将添加的数据存到obj对象中
                obj: {
                    id: 0,
                    name: '',
                    sex:'',
                    age:0,
                    tel:'',
                    add:'',
                    comments: ''
                }
            }
        },
        created(){
            this.getData();
        },
        methods: {

            // 查询列表数据
            getData(){
                this.axios.get('/get').then(res => {
                    this.userList = res.data;
                    console.log(res);
                });
            },

            // 删除列表数据
            deleteList(id){
                this.axios.post('/del',{
                    params: {
                        id: id
                    }
                }).then(res => {
                    this.userList = res.data.data;
                    console.log(res.data);
                });
            },

            // 增加列表数据
            addList(){
                // console.log("****"+this.obj);
                this.axios.post('/add',{
                    params: {
                        obj: this.obj
                    }
                }).then(res => {
                    // console.log("请求成功"+res.data.data);
                    this.userList = res.data.data;
                });
            },

            // 修改列表数据
            updateList(){
                let that = this;
                this.axios.post('/edit',{
                    params: {
                        obj: this.obj
                    }
                }).then(function(res){
                    // console.log("请求的数据"+res.data.data);
                    that.userList = res.data.data;
                });
            }
        }

    }
</script>

<style scoped>
    *{
        padding: 0;
        margin: 0;
    }
    li{
        list-style: none;
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
</style>
