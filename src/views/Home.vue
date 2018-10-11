<template>
  <div class="home">
    <QuestionList class="questionList" />
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionList from '@/components/QuestionList.vue'

export default {
  name: 'home',
  components: {
    QuestionList
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}
.questionList {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
