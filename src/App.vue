<template>
  <div id="app">
    <div id="nav">
      <label><i class="el-icon-question"></i><strong> 问卷管理</strong></label>
      <router-link to="/">我的问卷</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
function createQuest () {
  return {
    title: '问卷标题',
    questions: [{
      id: 1,
      // 1: 单选, 2: 多选, 3: 文本
      type: 1,
      title: '问题',
      answers: [
        {
          id: 1,
          value: ''
        }
      ],
      result: []
    }],
    createDate: new Date(),
    status: 0,
  }
}

export default {
  mounted () {
    this.$store.commit('createQuest', createQuest())
    this.$store.commit('createQuest', createQuest())
    this.$store.commit('createQuest', createQuest())
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
.row label {
  color: #ffffff;
}
#nav {
  padding: 10px;
  padding-left: 100px;
  width: 100%;
  background: #ee7419;
  font-size: 20px;
}

#nav a {
  color: #ffffff;
  padding-left: 100px;
}
#nav label {
  color: #ffffff;
}
#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
