<template>
  <el-card>
    <div class="header">
      <h2 class="header-title">问卷列表</h2>

      <div>
        <el-button type="primary" icon="el-icon-plus" @click="_">新增问卷</el-button>
      </div>
    </div>

    <el-table ref="questions" :data="questions" border @selection-change="selectQuestion">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="createDate" label="创建时间"></el-table-column>
      <el-table-column prop="status" label="状态" width="100"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" @click="_"></el-button>
          <el-button size="mini" type="primary" icon="el-icon-document" @click="_"></el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="confirmDelete(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px">
      <el-button type="danger" :disabled="!selection.length" @click="confirmDelete()">删除</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      selection: []
    }
  },
  computed: {
    questions () {
      return this.$store.state.questionnaires.map(item => ({
        title: item.title,
        createDate: item.createDate.toLocaleString(),
        status: ['未发布', '已发布', '已结束'][item.status]
      }))
    }
  },
  methods: {
    _ (ev) {
      console.log(ev)
    },
    selectQuestion (selection) {
      this.selection = selection
    },
    clearQuestion () {
      this.$refs.questions.clearSelection();
    },
    removeQuest (rows) {
      if (rows) {
        this.$store.commit('removeQuest', rows)
      } else {
        this.selection.forEach((item) => {
          this.$store.commit('removeQuest', item)
        })
      }
      this.clearQuestion()
      this.$message.success('删除成功!')
    },
    confirmDelete (rows) {
      this.$confirm('此操作将删除问卷, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.removeQuest(rows)
      })
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  margin-bottom: 20px;
  line-height: 40px;
}
.header-title {
  display: flex;
  flex: auto;
  margin: 0;
}
</style>
