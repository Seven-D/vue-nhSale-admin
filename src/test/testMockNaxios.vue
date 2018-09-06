<template>
    <div>
        <h2 style="text-align: center;">这是一个测试页面</h2>
        <ul>
            <li><h3>用于测试各种类型的模拟数据，包括本地mock.js模拟及线上easyMock模拟</h3></li>
            <li><h3>测试axios的http请求及响应，返回数据，解析数据，显示数据</h3></li>
        </ul>
        <hr/>

        <h4>本组数据为Mock模拟，来自于数据模板</h4>
        <p>{{mkData}}</p>
        <h4 style="color: blue">解析，用列表来显示如下：</h4>
        <ul>
            <li v-for="item in mkData">
                <h3>{{item}}</h3>
            </li>
        </ul>
        <hr/>

        <h4>本组数据为Mock模拟，来自于函数随机生成，数组对象</h4>
        <p>{{listData}}</p>
        <h4 style="color: blue">解析，用列表来显示部分字段数据如下：</h4>
        <ul>
            <li v-for="(item,index) in listData" :key='index'>
                <h3>{{item.authName}}--{{item.title}}--{{item.date}}</h3>
            </li>
        </ul>
        <hr/>

        <h4>模拟数据，以下数据来自mock模拟，function（option）方式</h4>
        <p>{{listData2}}</p>
        <h4 style="color: blue">解析，用表格显示数据如下：</h4>
        <el-table
            v-loading="listLoading"
            :data="listData2"
            element-loading-text="Loadingggggg"
            border
            fit
            highlight-current-row>
            <el-table-column align="center" label="序号" width="80">
                <template slot-scope="scope">
                    {{ scope.$index }}
                </template>
            </el-table-column>
            <el-table-column label="recipeId" width="130">
                <template slot-scope="scope">
                    {{ scope.row.recipeId }}
                </template>
            </el-table-column>
            <el-table-column label="billId" width="110" align="center">
                <template slot-scope="scope">
                    <span>{{ scope.row.billId }}</span>
                </template>
            </el-table-column>
            <el-table-column label="orgId" width="110" align="center">
                <template slot-scope="scope">
                    <span>{{ scope.row.orgId }}</span>
                </template>
            </el-table-column>
            <el-table-column label="viewName">
                <template slot-scope="scope">
                    {{ scope.row.viewName }}
                </template>
            </el-table-column>
            <el-table-column label="personName" width="110" align="center">
                <template slot-scope="scope">
                    <span>{{ scope.row.personName }}</span>
                </template>
            </el-table-column>
            <el-table-column label="reason">
                <template slot-scope="scope">
                    {{ scope.row.reason }}
                </template>
            </el-table-column>
            <el-table-column class-name="status-col" label="adress"  align="center">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.adress |addressFilter">{{ scope.row.adress }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="Date" width="110" align="center">
                <template slot-scope="scope">
                    {{ scope.row.Date }}
                </template>
            </el-table-column>
            <el-table-column align="center" width="120" label="time">
                <template slot-scope="scope">
                    <i class="el-icon-time"/>
                    <span>{{ scope.row.time }}</span>
                </template>
            </el-table-column>


        </el-table>
    </div>

</template>

<script>
    export default {
        name: "test-mock-axios",
        filters: {
            addressFilter(adress) {
                let res = '';
                switch (adress.length) {
                    case 3:
                        res = 'm';
                        break;
                    case 4:
                        res = 'd';
                        break;
                    case 5:
                        res = 'l';
                        break;
                    default:
                        res = ''
                }
                const addressMap = {
                    m: 'success',
                    d: 'gray',
                    l: 'danger'
                };
                return addressMap[res]
            }
        },
        data() {
            return {
                mkData: '', //接收本地mock字符串对象
                listData: [],//接收本地mock数组对象
                listData2: [], //

                listLoading: false
            }
        },
        mounted() {
            this.createData();
        },
        methods: {
            createData() {
                this.$http.get('/myMockUrl') //请求数据1
                    .then(res => {
                        this.mkData = res.data;//存放数据
                    })
                    .catch(err => {
                        console.log(err);  //错误处理
                    });
                this.$http.get('/testMock1/list') //请求数据2
                    .then(res => {
                        this.listData = res.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
                this.$http.get('/user')  //请求数据3
                    .then(res => {
                        this.listData2 = res.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    }
</script>

<style scoped>

</style>
