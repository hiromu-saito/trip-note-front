<template>
  <div class="hotel-card">
    <div>
      <p class="hotel-name">
        {{ hotel.name }}
      </p>
      <p>{{ hotel.address }}</p>
      <p>{{ hotel.special</p>
    </div>
    <div>
      <p class="image-test">
        {{ hotel.image }}
      </p>
      <a :href="hotel.url">詳細を見る</a>
      <br>
      <button>思い出を残す</button>
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
  grid-template-columns: 200px 200px;
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