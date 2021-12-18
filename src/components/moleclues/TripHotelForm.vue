<template>
  <div>
    <ValidationObserver v-slot="{invalid}">
      <form @submit.prevent="onClick">
        <TripValidationInput
          class="w-1/4"
          name="keyword"
          input-type="text"
          placeholder="ホテル名を入力してください"
          :value.sync="keyword"
          :disp-error="false"
          rules="required" />
        <TripButton
          label="検索"
          type="submit"
          button-style="bg-blue-500 hover:bg-blue-600 text-xs text-white  mt-4 py-2 px-4 w-32 rounded-md "
          :disabled="invalid || isSearching" />
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
  computed: {
    isSearching(){
      return this.$store.state.isSearching
    },
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
