<template>
  <div>
    <h1 class="font-bold pl-4 mb-8 text-xl">
      旅の記録
    </h1>
    <ul class="flex flex-wrap items-stretch">
      <li
        v-for="(memory,index) in memories"
        :key="index"
        class="w-1/3">
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
  },
  async mounted(){
    await this.$store.dispatch('fetchMemory')
      .catch(err => {
        throw err
      })
  }
}
</script>
