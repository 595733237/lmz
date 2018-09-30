<template id="111">
  <div class="el-card__body">
    <el-row :gutter="24">
      <el-col :span="20" :offset="2">
        <div class="table" id="table">
          <el-table :data="tableData" @selection-change='selectRow' style="width: 100%;" max-height="500">
            <el-table-column type="selection" width="40">
            </el-table-column>
            <el-table-column prop="Questionnaire" label="问卷名称">
            </el-table-column>
            <el-table-column prop="f_date" label="发布日期" width="250">
            </el-table-column>
            <el-table-column prop="l_date" label="结束日期" width="250">
            </el-table-column>
            <el-table-column label="问卷状态" width="200">
              <template slot-scope="scope">
                <span v-if="scope.row.state" style="color: red">已结束</span>
                <span v-else style="color: green;">未发布</span>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                <el-button v-if="!scope.row.state" type="text" size="middle"><i class="el-icon-edit"></i>编辑</el-button>
                <el-button @click="handleClick(scope.row)" type="text" size="middle"><i class="el-icon-view"></i>
                  <router-link to="/text">查看</router-link>
                </el-button>
                <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small"><i class="el-icon-delete"></i>移除</el-button>
              </template>
            </el-table-column>
            <el-table-column align="right" fixed="right" :render-header="renderHeader" width="200">
            </el-table-column>
          </el-table>
          <div class="delbtn">
            <p>
              <el-button class="btn_w" @click.prevent="delData()">多行删除</el-button>
            </p>
          </div>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row)
    },
    renderHeader() {
      return (
        <div>
          <router-link to="/about" class="btn_w btn btn-warning"><i class="el-icon-plus"></i> 新建表格</router-link>
          <div>
            <router-view></router-view>
          </div>
        </div>
      )
    },
    selectRow(val) {
      this.selectlistRow = val
    },
    deleteRow(index, rows) {
      this.$confirm('此操作将永久删除该问卷, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        rows.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    open2() {

    },
    delData() {
      this.$confirm('此操作将永久删除该问卷, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        for (let i = 0; i < this.selectlistRow.length; i++) {
          let val = this.selectlistRow
          val.forEach((val, index) => {
            this.tableData.forEach((v, i) => {
              if (val.rowNum === v.rowNum) {
                // i 为选中的索引
                this.tableData.splice(i, 1)
              }
            })
          })
        }
        // 删除完数据之后清除勾选框
        this.$refs.tableData.clearSelection()

      }).catch(() => {

      });

    }
  },
  data() {
    return {
      tableData: [{
        rowNum: 1,
        Questionnaire: '创新创业现状调查',
        f_date: '2018-9-24',
        l_date: '2018-10-24',
        state: true,
      },
      {
        rowNum: 2,
        Questionnaire: '创新创业现状调查',
        f_date: '2018-9-24',
        l_date: '2018-10-24',
        state: false,
      },
      {
        rowNum: 3,
        Questionnaire: '创新创业现状调查',
        f_date: '2018-9-24',
        l_date: '2018-10-24',
        state: false,
      },
      {
        rowNum: 4,
        Questionnaire: '创新创业现状调查',
        f_date: '2018-9-24',
        l_date: '2018-10-24',
        state: false,
      },
      {
        rowNum: 5,
        Questionnaire: '创新创业现状调查',
        f_date: '2018-9-24',
        l_date: '2018-10-24',
        state: true,
      },
      {
        rowNum: 6,
        Questionnaire: '创新创业现状调查',
        f_date: '2018-9-24',
        l_date: '2018-10-24',
        state: false,
      },

      ],
      selectlistRow: []
    }
  }
}
</script>

<style type="text/css">
.el-card__body {
  background: #efefef;
}
.table {
  box-shadow: 5px 5px 5px #888888;
}
.table th {
  background: #efefef;
  font-size: 16px;
  font-weight: 600;
  color: black;
}
.btn_w {
  background: #ee7419 !important;
  color: #ffffff !important;
}
.delbtn {
  float: left;
  background: #ffffff;
  width: 100%;
  box-shadow: 5px 5px 5px #888888;
}
.delbtn button {
  margin: 10px 0 0 40px;
}
.delbtn button :hover {
  background: #ee7419;
  color: #ffffff;
}
</style>
