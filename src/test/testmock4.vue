<template>
    <div>
        <h2 style="text-align: center;">这是一个测试页面</h2>
        <ul>
            <li><h3>模拟一组生产数据，来自本地mock.js的template生成</h3></li>
            <li><h3>测试axios的http请求及响应，返回数据，表格显示数据</h3></li>
        </ul>
        <hr/>
        <p>{{listData}}</p>
        <hr/>
        <h4 style="color: blue">解析，用表格显示数据如下：</h4>
        <el-table
            v-loading="listLoading"
            :data="listData"
            element-loading-text="数据加载中"
            border
            fit
            highlight-current-row>
            <el-table-column align="center" label="序号" width="80">
                <template slot-scope="scope">
                    {{ scope.$index }}
                </template>
            </el-table-column>
            <el-table-column align="center" label="企业编码" width="100">
                <template slot-scope="scope">
                    {{ scope.row.id }}
                </template>
            </el-table-column>
            <el-table-column align="center" label="企业名称" width="220">
                <template slot-scope="scope">
                    {{ scope.row.name }}
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据1" >
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data0 |dataFilter">{{ scope.row.data0 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据2" >
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data1 |dataFilter">{{ scope.row.data1 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据3">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data2 |dataFilter">{{ scope.row.data2 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据4" >
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data3 |dataFilter">{{ scope.row.data3 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据5" >
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data4 |dataFilter">{{ scope.row.data4 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据6">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data5 |dataFilter">{{ scope.row.data5 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据7" >
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data6 |dataFilter">{{ scope.row.data6 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据8">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data7 |dataFilter">{{ scope.row.data7 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据9">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data8 |dataFilter">{{ scope.row.data8 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据10" >
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data9 |dataFilter">{{ scope.row.data9 }}</el-tag>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
    export default {
        name: "testmock4",
        data() {
            return {
                listData: [],
                listLoading: true
            }
        },
        filters: {
            dataFilter(arg) {  //数据过滤器
                let s = arg;
                let res = '';
                if (s < 20) {
                    res = 'low';
                } else if (s < 80) {
                    res = 'nom';
                } else {
                    res = 'hig';
                }
                const addressMap = {   //不同条件显示不同色，提供给标签
                    hig: 'success',
                    nom: 'gray',
                    low: 'danger'
                };
                return addressMap[res]
            }
        },
        created() {
            this.getListData();
        },
        methods: {
            getListData() {
                this.listLoading = true;
                this.$http.get('/test4')
                    .then(res => {
                        this.listData = res.data.data;
                        console.log(res.data.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                this.listLoading = false;
            }
        }
    }
</script>

<style scoped>

</style>
