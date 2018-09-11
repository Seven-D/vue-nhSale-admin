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
                    <a>
                        <span @click="extLink(scope.row.link)">{{ scope.row.link}}</span>
                    </a>

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
    import request from '@/utils/request'
    export default {
        name: "testRequest",
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
                //request('http://api.komavideo.com/news/list','post') //这句不行，repuest已封装了基地址了,会在这个地址之前加上基地址
                //this.$http.post('http://api.komavideo.com/news/list') //OK,效果与下面这句相同
                this.axios.post('http://api.komavideo.com/news/list') //OK
                    .then(res => {
                        this.dataList = res.data;
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            //在Vue内，用新的页面打开一个外部链接
            extLink(url) {
                window.open(url,'_blank'); //‘_blink’参数是相当于<a>标签的'_blank'属性，即新窗口打开
            }
        }

    }
</script>

<style scoped>
    /*给<a>标签加上样式，鼠标移入，字体变色加上下划线*/
    a:hover{
        color:blue;
        text-decoration: underline;
    }
</style>
