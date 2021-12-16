<template>
  <div class="text-gray-700">
    <TripButton
      v-if="!isFirstPage"
      :disabled="isSearching"
      label="←"
      @onClick="transitionPage(currentPage-1)" />
    <TripButton
      v-if="!isFirstPage"
      class="ml-4"
      :disabled="isSearching"
      label="1 "
      @onClick="transitionPage(1)" />
    <span
      v-if="currentPage > 2">...</span>
    <span class="mx-4 font-bold"> {{ currentPage }}</span>
    <span v-if="currentPage < lastPage -1">...</span>
    <TripButton
      v-if="!isLastPage"
      class="mr-4"
      :disabled="isSearching"
      :label="lastPageLabel"
      @onClick="transitionPage(lastPage)" />
    <TripButton
      v-if="!isLastPage"
      :disabled="isSearching"
      label=" →"
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
    },
    lastPageLabel(){
      return String(this.lastPage)
    },
    isSearching(){
      return this.$store.state.isSearching
    },
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