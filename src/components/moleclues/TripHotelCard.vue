<template>
  <div class="p-4">
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img
        class="md:h-28 w-full object-cover object-center"
        :src="hotel.image"
        alt="blog">
      <div class="p-6">
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
          {{ hotel.name }}
        </h1>
        <p class="leading-relaxed mb-5 h-8">
          {{ hotel.special }}
        </p>
        <div class="flex items-center flex-wrap justify-between">
          <a
            :href="hotel.url"
            target="_blank"
            class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">ホテル詳細
            <svg
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
          <TripButton
            label="思い出を残す"
            button-style="bg-blue-500  text-white  font-semibold py-2 px-4 w-36 rounded-md hover:bg-blue-600 text-xs"
            @onClick="displayMordal" />
        </div>
      </div>
    </div>
    <TripCardMordal
      v-show="overlay"
      :down-impression.sync="impression"
      :down-accommodation-date.sync="accommodationDate"
      @addMemory="addMemory"
      @close="closeMordal" />
  </div>
</template>

<script>
import TripButton from '../atoms/TripButton.vue'
import TripCardMordal from '../orgasms/TripCardMordal.vue'

export default {
  name: 'TripHotelCard',
  components: {
    TripButton,
    TripCardMordal
  },
  props: {
    hotel: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      overlay: false,
      impression: '',
      accommodationDate: '',
    }
  },
  methods: {
    displayMordal(){
      this.overlay = true
    },
    closeMordal(){
      this.overlay = false
    },
    addMemory(){
      const memory = {
        hotelName: this.hotel.name,
        hotelImage: this.hotel.image,
        impression: this.impression,
        accommodationDate: this.accommodationDate,
        detailUrl: this.hotel.url
      }
      this.$store.dispatch('addMemory', memory)
        .then(() => {
          this.$router.push({path: '/'})
        })
    }
  }
}
</script>

<style scoped>
.hotel-card{

}
.hotel-name{
  font-weight:  bold;
}
.image-test{
  height: 200px;
  width: 200px;
  border: dotted black 1px;
}
</style>