<template>
  <div class="memory-card">
    <div>
      <p class="hotel-name">
        {{ memory.hotelName }}
      </p>
      <p>
        {{ memory.accommodationDate }}
      </p>
      <p>
        {{ memory.impression }}
      </p>
    </div>
    <div>
      <p>
        <img :src="memory.hotelImage">
      </p>
      <TripButton
        label="更新する" />
      <TripButton
        label="削除する" />
    </div>
  </div>
</template>

<script>
import TripButton from '@/components/atoms/TripButton'

export default {
  name: 'TripMemoryCard',
  components: {
    TripButton,
  },
  props: {
    memory: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      overlay: false
    }
  },
  methods: {
    updateMemory(){
      if (!confirm('本当に思い出をアップデートしますか。')){
        return
      }
      //update処理
    },
    removeMemory(){
      if (!confirm('本当に思い出を消してしまいますか。')){ return }
      this.$store.dispatch('removeMemory', this.memory.id)
    },
  }
}
</script>

<style　scoped>
.memory-card button{
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}
.memory-card img{
  height: 80px;
  width: 140px;
  }
.memory-card{
  border: solid 1px black;
  display: grid;
  grid-template-columns: 250px 150px;
  height: 200px;
  column-gap: 10px;
  row-gap: 1em;
}
.hotel-name{
  font-weight: bold;
}
.date-form,
.impressions-form{
  margin-left: 10px;
  height: 50px;
}

</style>