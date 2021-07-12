<template>
  <div>
    <p>キーワード検索</p>
    <form @submit.prevent="search">
      <input
        v-model="keyword"
        type="text">
      <p>
        <button type="submit">
          検索
        </button>
      </p>
    </form>
  </div>
</template>

<script>

export default {
  name: 'TripHotelForm',
  data(){
    return {
      keyword: ''
    }
  },
  methods: {
    search(){
      this.$emit('search')
      this.onClick()
    },
    onClick(){
      this.$emit('onClick', this.keyword)
    },

  }
}
</script>

<style>

</style>