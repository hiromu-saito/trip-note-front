<template>
  <div>
    <ValidationObserver
      v-slot="{invalid}"
      class="memory-card">
      <div>
        <p class="hotel-name">
          {{ memory.hotelName }}
        </p>
        <TripValidationInput
          class="date-form"
          name="日時"
          input-type="date"
          rules="required"
          :value.sync="date" />
        <TripValidationInput
          class="impressions-form"
          name="感想"
          input-type="text"
          rules="max:30"
          :value.sync="impressions" />
      </div>
      <div>
        <p>
          <img :src="memory.image">
        </p>
        <TripButton
          label="更新する"
          :disabled="!isUpdated ||invalid"
          @onClick="updateMemory" />
        <TripButton
          label="削除する"
          @onClick="removeMemory" />
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import {ValidationObserver} from '../../common/validate'
import TripButton from '@/components/atoms/TripButton'
import TripValidationInput from '@/components/atoms/TripValidationInput'

export default {
  name: 'TripMemoryCard',
  components: {
    ValidationObserver,
    TripButton,
    TripValidationInput
  },
  props: {
    memory: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      impressions: '',
      date: ''
    }
  },
  computed: {
    isUpdated(){
      return !(this.memory.impressions === this.impressions && this.memory.date === this.date)
    }
  },
  mounted(){
    this.impressions = this.memory.impressions
    this.date = this.memory.date
  },
  methods: {
    updateMemory(){
      if (!confirm('本当に思い出をアップデートしますか。')){ return }
      console.log('更新処理')
    },
    removeMemory(){
      if (!confirm('本当に思い出を消してしまいますか。')){ return }
      console.log('削除処理')
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