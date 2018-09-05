<template>
    <div class="app-container">
        <h1 style="text-align:center">销售报表</h1>
        <pre>{{list}}</pre>
        <el-table
            v-loading="listLoading"
            :data="list"
            element-loading-text="Loading"
            border
            fit
            highlight-current-row>
            <el-table-column align="center" label="序号" width="95">
                <template slot-scope="scope">
                    {{ scope.$index }}
                </template>
            </el-table-column>
            <el-table-column label="标题">
                <template slot-scope="scope">
                    {{ scope.row.title }}
                </template>
            </el-table-column>
            <el-table-column label="作者" width="110" align="center">
                <template slot-scope="scope">
                    <span>{{ scope.row.author }}</span>
                </template>
            </el-table-column>
            <el-table-column label="查看次数" width="110" align="center">
                <template slot-scope="scope">
                    {{ scope.row.pageviews }}
                </template>
            </el-table-column>
            <el-table-column class-name="status-col" label="状态" width="110" align="center">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="显示时间" width="100">
                <template slot-scope="scope">
                    <i class="el-icon-time"/>
                    <span>{{ scope.row.display_time }}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="显示时间1" width="120">
                <template slot-scope="scope">
                    <i class="el-icon-time"/>
                    <span>{{ scope.row.display_time }}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="显示时间2" width="140">
                <template slot-scope="scope">
                    <i class="el-icon-time"/>
                    <span>{{ scope.row.display_time }}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="显示时间3" width="160">
                <template slot-scope="scope">
                    <i class="el-icon-time"/>
                    <span>{{ scope.row.display_time }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import { getList } from '@/api/table'

    export default {
        filters: {
            statusFilter(status) {
                const statusMap = {
                    published: 'success',
                    draft: 'gray',
                    deleted: 'danger'
                }
                return statusMap[status]
            }
        },
        data() {
            return {
                list: null,
                listLoading: true
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                this.listLoading = true
                getList(this.listQuery).then(response => {
                    this.list = response.data.items
                    this.listLoading = false
                })
            }
        }
    }
</script>


<style scoped>

</style>
