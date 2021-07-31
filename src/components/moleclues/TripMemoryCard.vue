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
        <a
          :href="memory.detailUrl"
          target="_blank">
          <img :src="memory.hotelImage">
        </a>
      </p>
      <TripButton
        label="更新する"
        @onClick="displayMordal" />
      <TripButton
        label="削除する" 
        @onClick="removeMemory" />
    </div>
    <TripCardMordal
      v-show="overlay"
      update-mode
      :down-impression.sync="impression"
      :down-accommodation-date.sync="accommodationDate"
      @updateMemory="updateMemory"
      @close="closeMordal" />
  </div>
</template>

<script>
import TripButton from '@/components/atoms/TripButton'
import TripCardMordal from '../orgasms/TripCardMordal.vue'

export default {
  name: 'TripMemoryCard',
  components: {
    TripButton,
    TripCardMordal
  },
  props: {
    memory: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      overlay: false,
      impression: '',
      accommodationDate: ''
    }
  },
  mounted(){
    this.propsMemoryReset()
  },
  methods: {
    updateMemory(){
      this.$store.dispatch('updateMemory', {
        id: this.memory.id,
        memory: {impression: this.impression, accommodationDate: this.accommodationDate}
      })
      this.closeMordal()
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    },
    removeMemory(){
      if (!confirm('本当に思い出を消してしまいますか。')){ return }
      this.$store.dispatch('removeMemory', this.memory.id)
    },
    displayMordal(){
      this.overlay = true
    },
    closeMordal(){
      this.overlay = false
    },
    propsMemoryReset(){
      this.impression = this.memory.impression
      this.accommodationDate = this.memory.accommodationDate
    }
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