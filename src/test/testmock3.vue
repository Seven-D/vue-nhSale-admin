<template>
    <div>
        <h2 style="text-align: center;">测试页面</h2>
        <ul>
            <li><h3>模拟数据来自本地mock.js的 function(option) 生成</h3></li>
            <li><h3 style="color: green">使用axios进行请求。调用this.axios.get('/test3')</h3></li>
            <li><h3 style="color: blue">用 表格 来显示数据：</h3></li>
        </ul>
        <hr/>
        <p>{{listData2}}</p>
        <hr/>
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
            <el-table-column class-name="status-col" label="adress" align="center">
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
        name: "testmock3",
        filters: {
            addressFilter(adress) {  //地址名称过滤器
                let s = adress.length;
                let res = '';
                if (s < 3) {
                    res = 'l';
                } else if (s < 5) {
                    res = 'd';
                } else {
                    res = 'm';
                }
                const addressMap = {   //不同条件显示不同色，提供给标签
                    m: 'success',
                    d: 'gray',
                    l: 'danger'
                };
                return addressMap[res]
            }
        },
        data() {
            return {
                listData2: [], //
                listLoading: false
            }
        },
        mounted() {
            this.createData();
        },
        methods: {
            createData() {
                this.axios.get('/test3')  //请求数据3
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
