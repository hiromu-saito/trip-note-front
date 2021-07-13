<template>
  <div class="hotel-card">
    <div>
      <p class="hotel-name">
        {{ hotel.name }}
      </p>
      <p>
        〒{{ hotel.postalCode }}<br>
        {{ hotel.address }}
      </p>
      <p>{{ hotel.special }}</p>
    </div>
    <div>
      <p>
        <a
          :href="hotel.url"
          target="”_blank”">
          <img :src="hotel.image">
        </a>
      </p>
      <p>
        <TripButton
          label="思い出を残す"
          @onClick="displayMordal" />
      </p>
    </div>
    <TripCardMordal
      v-show="overlay"
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
      overlay: false
    }
  },
  methods: {
    displayMordal(){
      this.overlay = true
    },
    closeMordal(){
      this.overlay = false
    },
    addMemory({impressions, date}){
      const memory = {
        name: this.hotel.name,
        image: this.hotel.image,
        impressions,
        date,
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
  border: solid 1px black;
  display: grid;
  grid-template-columns: 300px 100px;
  height: 200px;
  column-gap: 10px;
  row-gap: 1em;
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