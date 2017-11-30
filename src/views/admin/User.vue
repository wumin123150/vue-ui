<template>
  <section>
    <el-col :span="24" class="toolbar">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.searchKey" placeholder="筛选关键词"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="onSearch">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-table :data="users" v-loading.body="loading" @selection-change="onSelectionChange" border fit highlight-current-row>
      <el-table-column type="index" width="60"></el-table-column>
      <el-table-column prop="loginName" label="账号" width="150" sortable>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="mobile" label="手机" width="120">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="status" label="状态">
      </el-table-column>
      <el-table-column label="操作" align="center" width="150">
        <template scope="scope">
          <el-button size="small" icon="edit"
                     @click="onEdit(scope.row, scope.$index)">编辑</el-button>
          <el-button size="small" type="danger" icon="delete"
                     @click="onDelete(scope.row, scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <el-button type="danger" @click="batchRemove" :disabled="this.selected.length===0">批量删除</el-button>
      <el-pagination layout="prev, pager, next" @current-change="onCurrentChange" :page-size="20" :total="total" style="float:right;">
      </el-pagination>
    </el-col>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        filters: {
          searchKey: ''
        },
        users: [
        ],
        total: 0,
        pageNo: 1,
        selected: []
      }
    },
    computed: {
      ...mapGetters({ loading: 'loading' })
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        this.$http.post('/api/user', { pageNo: this.pageNo, searchKey: this.filters.searchKey }).then(result => {
          if (result.success) {
            this.total = result.data.totalElements;
            this.users = result.data.content;
          }
        }).catch(error => {
          console.log(error);
        })
      },
      onSearch() {
        this.getData();
      },
      onCurrentChange(val) {
        this.pageNo = val;
        this.getData();
      },
      onSelectionChange(selected) {
        this.selected = selected;
      },
      onAdd() {
        this.$router.push('/user/add');
      },
      onEdit(row) {
        this.$router.push('/user/edit/' + row.id);
      },
      onDelete(row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$http.post('/api/user/delete/' + row.id).then(result => {
            if (result.success) {
              this.$message({ message: '删除成功', type: 'success' });
              this.getUsers();
            }
          }).catch(error => {
            console.log(error);
          })
        });
      },
      batchRemove() {
        const id = this.selected.map(item => item.id).toString();
        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        }).then(() => {
          this.$http.post('/api/user/delete', { ids: id }).then(result => {
            if (result.success) {
              this.$message({ message: '删除成功', type: 'success' });
              this.getUsers();
            }
          }).catch(error => {
            console.log(error);
          })
        });
      }
    }
  }
</script>

<style lang='less' rel='stylesheet/less' scoped>

</style>
