<template>
  <div>
    <h2>思い出一覧</h2>
    <ul class="memory-board">
      <li
        v-for="(memory,index) in memories"
        :key="index">
        <TripMemoryCard :memory="memory" />
      </li>
    </ul>
  </div>
</template>

<script>
import TripMemoryCard from '../moleclues/TripMemoryCard.vue'

export default {
  name: 'TripMemoryBoard',
  components: {
    TripMemoryCard
  },
  computed: {
    memories(){
      return this.$store.state.memories
    }
  }
}
</script>

<style scoped>
h2 {
  padding-left: 40px;
}

.memory-board  {
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  list-style: none;
}
</style>