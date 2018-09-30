import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questionnaires: [
      // {
      //   title: '问卷标题',
      //   questions: [{
      //     id: 1,
      //     // 1: 单选, 2: 多选, 3: 文本
      //     type: 1,
      //     title: '问题',
      //     answers: [
      //       {
      //         id: 1,
      //         value: ''
      //       }
      //     ],
      //     result: []
      //   }],
      //   createDate: new Date(),
      //   status: false,
      // }
    ]
  },
  mutations: {
    // 增加问卷
    createQuest (state, quest) {
      state.questionnaires.push(quest)
    },
    // 删除问卷
    removeQuest (state, quest) {
      // 找到当前下标并移除
      const questionnaires = state.questionnaires
      const index = questionnaires.indexOf(quest)
      questionnaires.splice(quest, 1)
    }
  },
  actions: {

  }
})
