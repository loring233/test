<template>
  <div>
    <h1>心情日记</h1>
    <div v-if="diaries.length > 0">
      <ul>
        <li v-for="diary in diaries" :key="diary._id">
          {{ diary.content }} - {{ diary.mood }} ({{ diary.date }})
        </li>
      </ul>
    </div>
    <div v-else>
      <p>暂无日记，快去写一篇吧！</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      diaries: [],
    };
  },
  async created() {
    await this.fetchDiaries();
  },
  methods: {
    async fetchDiaries() {
      try {
        const response = await axios.get('/diary');
        this.diaries = response.data;
      } catch (error) {
        console.error('获取日记失败', error);
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>