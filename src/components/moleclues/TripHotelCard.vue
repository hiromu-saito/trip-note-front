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
        <button>思い出を残す</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TripHotelCard',
  props: {
    hotel: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.hotel-card{
  border: solid 1px black;
  display: grid;
  grid-template-columns: 300px 100px;
  height: 160px;
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