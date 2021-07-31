<template>
  <div>
    <p>キーワード検索</p>
    <ValidationObserver v-slot="{invalid}">
      <form @submit.prevent="onClick">
        <TripValidationInput
          class="search-form"
          name="keyword"
          input-type="text"
          :value.sync="keyword"
          :disp-error="false"
          rules="required" />
        <TripButton
          label="ホテルを検索する"
          type="submit"
          :disabled="invalid" />
      </form>
    </validationobserver>
  </div>
</template>

<script>
import TripValidationInput from '../atoms/TripValidationInput.vue'
import TripButton from '../atoms/TripButton.vue'
import { ValidationObserver } from '@/common/validate'

export default {
  name: 'TripHotelForm',
  components: {
    TripValidationInput,
    ValidationObserver,
    TripButton
  },
  data(){
    return {
      keyword: ''
    }
  },
  methods: {
    search(){
      this.$emit('search', this.keyword)
    },
    onClick(){
      this.$emit('onClick')
      this.search()
    },

  }
}
</script>

<style scoped>
.search-form{
  margin-bottom: 10px;
}
</style>