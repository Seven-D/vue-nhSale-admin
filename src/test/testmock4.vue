<template>
    <div>
        <h2 style="text-align: center;">这是一个测试页面</h2>
        <ul>
            <li><h3>模拟数据来自本地mock.js的 function(option) 生成</h3></li>
            <li><h3 style="color: green">用封装了axios的request进行请求。import{API},然后调用其中的方法如getList，OK</h3></li>
            <li><h3 style="color: blue">用 表格 来显示数据：</h3></li>
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
            <el-table-column align="center" label="企业名称" >
                <template slot-scope="scope">
                    {{ scope.row.name }}
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据0" >
                <template slot-scope="scope">
                    {{scope.row.data0}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据1" >
                <template slot-scope="scope">
                    {{scope.row.data1}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据2">
                <template slot-scope="scope">
                    {{ scope.row.data2 }}
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据3" >
                <template slot-scope="scope">
                    {{ scope.row.data3 }}
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据4" >
                <template slot-scope="scope">
                    {{ scope.row.data4 }}
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据5">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data5 |dataFilter">{{ scope.row.data5 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据6" >
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data6 |dataFilter">{{ scope.row.data6 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据7">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data7 |dataFilter">{{ scope.row.data7 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据8">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data8 |dataFilter">{{ scope.row.data8 }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="数据9" >
                <template slot-scope="scope">
                    <el-tag :type="scope.row.data9 |dataFilter">{{ scope.row.data9 }}</el-tag>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>

<script>
import {getList} from "../api/table";

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
                const dataMap = {   //不同条件显示不同色，提供给标签
                    hig: 'gray',
                    nom: 'success',
                    low: 'danger',
                };
                return dataMap[res]
            }
        },
        created() {
            this.getListData();
        },
        methods: {
            getListData() {
                this.listLoading = true;
                //用封装了axios的request来请求本地Mock数据，成功
                getList()
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
