<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-input v-model="title" placeholder="请输入标题"></el-input>
      <el-button class="contorls" type="primary" icon="el-icon-plus" circle @click="addAnswer"></el-button>
    </div>

    <div v-if="type === 1 || type === 2">
      <div class="inputBox" v-for="(answer, index) in value" :key="answer.id">
        <el-input v-model="answer.value" placeholder="请输入答案"></el-input>
        <div class="contorls">
          <el-button type="primary" icon="el-icon-arrow-up" circle @click="putUp(index)" :disabled="index === 0"></el-button>
          <el-button type="primary" icon="el-icon-arrow-down" circle @click="putDown(index)" :disabled="index === value.length - 1"></el-button>
          <el-button type="danger" icon="el-icon-minus" circle @click="removeAnswer(index)"></el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'question',
  props: ['title', 'type', 'value'],
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.value)
  },
  methods: {
    updateResult (result) {
      this.$emit('change', result)
    },

    addAnswer () {
      const answers = this.value
      answers.push({
        id: answers.length + 1,
        value: ''
      })
    },

    putUp (index) {
      const answers = this.value
      const current = answers.splice(index, 1)[0]
      answers.splice(index - 1, 0, current)
    },

    putDown (index) {
      const answers = this.value
      const current = answers.splice(index, 1)[0]
      answers.splice(index + 1, 0, current)
    },

    removeAnswer (index) {
      const answers = this.value
      answers.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.clearfix {
  position: relative;
  padding-right: 60px;
}

.inputBox {
  position: relative;
  padding-right: 160px;
  margin-bottom: 20px;
}

.contorls {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
