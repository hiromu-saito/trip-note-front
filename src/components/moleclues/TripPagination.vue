<template>
  <div>
    <TripIcon
      class="trip-icon"
      :disabled="disablePrev"
      @onClick="prev">
      &lt;前へ
    </TripIcon>
    {{ pageNum }}
    <TripIcon
      class="trip-icon"
      :disabled="disableNext"
      @onClick="next">
      次へ&gt;
    </TripIcon>
  </div>
</template>

<script>
import TripIcon from '../atoms/TripIcon.vue'
export default {
  name: 'TripPagination',
  components: {
    TripIcon
  },
  props: {
    pageNum: {
      type: Number,
      require: true,
      default: 0
    },
    disablePrev: {
      type: Boolean,
      required: true,
      default: false
    },
    disableNext: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    prev() {
      this.$emit('prev')
    },
    next(){
      this.$emit('next')
    }
  }
}
</script>

<style scoped>
.trip-icon{
  display: inline-block;
}
</style>