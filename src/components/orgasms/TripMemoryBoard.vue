<template>
  <div class="memory-board">
    <TripMemoryCard />
  </div>
</template>

<script>
import TripMemoryCard from '../moleclues/TripMemoryCard.vue'

export default {
  name: 'TripMemoryBoard',
  components: {
    TripMemoryCard
  }
}
</script>

<style scoped>
.memory-board{
  margin: 10px;
}
</style>