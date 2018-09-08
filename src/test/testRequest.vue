<template>
    <div>
        <h1>请求到外网提供的一个API</h1>
        <ul>
            <li><h4>API地址:http://api.komavideo.com/news/list ,他指定请求方式是post</h4></li>
            <li><h4>尝试用不同的请求方法</h4></li>
        </ul>
        <hr/>
        <p>{{dataList}}</p>
        <hr/>
        <el-table
            v-loading="listLoading"
            :data="dataList"
            element-loading-text="数据加载中"
            border
            fit
            highlight-current-row>
            <el-table-column align="center" label="序号" width="80">
                <template slot-scope="scope">
                    {{ scope.$index }}
                </template>
            </el-table-column>
            <el-table-column align="center" label="版权" width="80">
                <template slot-scope="scope">
                    {{ scope.row.copyright}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="标题" width="150">
                <template slot-scope="scope">
                    {{ scope.row.title}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="内容" width="600">
                <template slot-scope="scope">
                    {{ scope.row.content}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="图片">
                <template slot-scope="scope">
                    {{ scope.row.image}}
                </template>
            </el-table-column>
            <el-table-column align="center" label="链接">
                <template slot-scope="scope">
                    <a>{{ scope.row.link}}</a>
                </template>
            </el-table-column>
            <el-table-column align="center" label="时间">
                <template slot-scope="scope">
                    {{ scope.row.pubdate}}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "test-request",
        data() {
            return {
                dataList: null,
                listLoading: false
            }
        },
        created() {
            this.getDataList();
        },
        methods: {
            getDataList() {
                this.axios.post('http://api.komavideo.com/news/list')
                    .then(res => {
                        this.dataList = res.data;
                        console.log(res);
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
