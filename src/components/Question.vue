<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{title}}</span>
    </div>

    <div v-if="type === 1">
      <div v-for="(answer, index) in answers" :key="index">
        <el-radio v-model="radio" :label="index" @change="updateResult">{{answer}}</el-radio>
      </div>
    </div>

    <div v-else-if="type === 2">
      <el-checkbox-group v-model="checkList" @change="updateResult">
        <div v-for="(answer, index) in answers" :key="index">
          <el-checkbox :label="answer"></el-checkbox>
        </div>
      </el-checkbox-group>
    </div>

    <div v-if="type === 3">
      <el-input type="textarea" autosize v-model="textarea" placeholder="请输入内容" @change="updateResult"></el-input>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'question',
  props: ['title', 'type', 'answers'],
  data () {
    return {
      radio: '',
      checkList: [],
      textarea: ''
    }
  },
  methods: {
    updateResult (result) {
      this.$emit('change', result)
    }
  }
}
</script>

<style>
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
</style>
