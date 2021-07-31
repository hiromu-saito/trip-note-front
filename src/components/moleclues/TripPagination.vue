<template>
  <div>
    <span v-if="isFirstPage">
      ← 前へ
    </span>
    <TripButton
      v-else
      label="← 前へ"
      @onClick="transitionPage(currentPage-1)" />
    {{ currentPage }}
    <span v-if="isLastPage">
      次へ →
    </span>
    <TripButton
      v-else
      label="次へ →"
      @onClick="transitionPage(currentPage+1)" />
  </div>
</template>

<script>

import TripButton from '../atoms/TripButton.vue'

export default {
  name: 'TripPagination',
  components: {
    TripButton
  },
  props: {
    currentPage: {
      type: Number,
      require: true,
      default: 0
    },
    lastPage: {
      type: Number,
      require: true,
      default: 0
    }
  },
  computed: {
    isFirstPage(){
      return this.currentPage === 1
    },
    isLastPage(){
      return this.currentPage === this.lastPage
    }
  },
  methods: {
    transitionPage(page){
      this.$emit('transition-page', page)
    }
  }
}
</script>

<style scoped>
</style>