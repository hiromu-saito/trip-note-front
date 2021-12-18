<template>
  <div class="p-4">
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img
        class="md:h-28 w-full object-cover object-center"
        :src="memory.hotelImage">
      <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
          {{ memory.accommodationDate }}
        </h2>
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
          {{ memory.hotelName }}
        </h1>
        <p class="leading-relaxed mb-5 h-8">
          {{ memory.impression }}
        </p>
      </div>
      <div class="flex justify-between m-4">
        <TripButton
          label="削除する" 
          button-style="text-blue-500 border border-blue-500 font-semibold py-2 px-8 rounded-md"
          @onClick="removeMemory" />
        <TripButton
          label="更新する"
          button-style="bg-blue-500 text-white font-semibold py-2 px-8 rounded-md"
          @onClick="displayMordal" />
      </div>
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

