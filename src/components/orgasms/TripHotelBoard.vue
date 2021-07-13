<template>
  <div>
    <TripHotelForm
      ref="form"
      @search="pageReset"
      @onClick="searchHotels" />
    <TripPagination
      v-if="isDisplayPagination"
      :disable-next="disableNext"
      :disable-prev="disablePrev"
      :page-num="page"
      @prev="prev"
      @next="next" />
    <ul class="hotel-board">
      <li
        v-for="( hotel,index ) in hotels"
        :key="index">
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
      page: 1,
      pageCount: 0
    }
  },
  computed: {
    isDisplayPagination(){
      return this.pageCount !== 0
    },
    disablePrev(){
      return this.page === 1
    },
    disableNext(){
      return this.page === this.pageCount
    }
  },
  methods: {
    async searchHotels(keyword){
      this.hotels = []
      const url = HOTEL_SEARCH_URL.replace('%keyword', keyword).replace('%page', String(this.page))
      await axios.get(url).then(res => {
        this.pageCount = res.data.pagingInfo.pageCount

        res.data.hotels.forEach(h => {
          const hotelBasicInfo = h.hotel[0].hotelBasicInfo
          const hotel = {
            name: hotelBasicInfo.hotelName,
            address: hotelBasicInfo.address1 + hotelBasicInfo.address2,
            special: hotelBasicInfo.special,
            image: hotelBasicInfo.hotelThumbnailUrl,
            url: hotelBasicInfo.hotelInformationUrl,
            postalCode: hotelBasicInfo.postalCode,
            phone: hotelBasicInfo.telephoneNo
          }
          this.hotels.push(hotel)
        })
      })
        .catch(err => { throw err })
    },
    prev(){
      this.page--
      this.$refs.form.onClick()
    },
    next(){
      this.page++
      this.$refs.form.onClick()
    },
    pageReset(){
      this.page = 1
    },
  }
}
</script>

<style scoped>
.hotel-board{
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  list-style: none;
}

</style>