<template>
  <div>
    <TripHotelForm
      ref="form"
      @onClick="pageReset"
      @search="searchHotels" />
    <TripPagination
      v-if="isDisplayPagination"
      class="text-center"
      :current-page="currentPage"
      :last-page="lastPage"
      @transition-page="transitionPage" />
    <ul class="flex flex-wrap items-stretch">
      <li
        v-for="( hotel,index ) in hotels"
        :key="index"
        class="w-1/3">
        <TripHotelCard
          :hotel="hotel" />
      </li>
    </ul>
  </div>
</template>

<script>
import TripHotelCard from '../moleclues/TripHotelCard.vue'
import TripHotelForm from '../moleclues/TripHotelForm.vue'
import TripPagination from '../moleclues/TripPagination.vue'
import axios from 'axios'
import {HOTEL_SEARCH_URL} from '@/api'
import * as types from '@/store/mutation-types'

export default {
  name: 'TripHotelBoard',
  components: {
    TripHotelCard,
    TripHotelForm,
    TripPagination
  },
  data(){
    return {
      hotels: [],
      currentPage: 1,
      lastPage: 0,
      isSearching: false
    }
  },
  computed: {
    isDisplayPagination(){
      return this.lastPage !== 0
    },
  },
  methods: {
    async searchHotels(keyword){
      this.hotels = []
      const url = HOTEL_SEARCH_URL.replace('%keyword', keyword).replace('%page', String(this.currentPage))
      this.$store.commit(types.UPDATE_IS_SEARCHING, true)
      await axios.get(url).then(res => {
        this.lastPage = res.data.pagingInfo.pageCount

        res.data.hotels.forEach(h => {
          const hotelBasicInfo = h.hotel[0].hotelBasicInfo
          const hotel = {
            name: hotelBasicInfo.hotelName,
            address: hotelBasicInfo.address1 + hotelBasicInfo.address2,
            special: hotelBasicInfo.hotelSpecial.length <= 30 ? hotelBasicInfo.hotelSpecial : hotelBasicInfo.hotelSpecial.slice(0, 100) + '...',
            image: hotelBasicInfo.hotelImageUrl,
            url: hotelBasicInfo.hotelInformationUrl,
            postalCode: hotelBasicInfo.postalCode,
            phone: hotelBasicInfo.telephoneNo
          }
          this.hotels.push(hotel)
        })
      })
        .then(() => {
          this.$store.commit(types.UPDATE_IS_SEARCHING, false)
        })
        .catch(err => { throw err })
    },
    pageReset(){
      this.currentPage = 1
    },
    transitionPage(page){
      this.currentPage = page
      this.$refs.form.search()
    }
  }
}
</script>

