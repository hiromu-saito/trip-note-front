<template>
  <div
    id="overlay">
    <div class=" bg-gray-200 w-1/2">
      <div class="rounded-lg border border-gray-300 shadow-xl">
        <div
          class="flex flex-row justify-between w-full p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p class="font-semibold text-gray-800 w-full">
            思い出を残す
          </p>
          <button @click="close">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ValidationObserver
          v-slot="{invalid}"
          tag="form"
          @submit.prevent="onSubmit">
          <div class="flex flex-col px-6 py-5 bg-gray-50">
            <p class="mb-2 font-semibold text-gray-700">
              日時
            </p>
            <TripValidationInput
              form-style="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm w-full"
              class="h-32"
              name="日時"
              input-type="date"
              rules="required"
              :value.sync="accommodationDate" />
            <p class="mb-2 font-semibold text-gray-700">
              感想
            </p>
            <TripValidationTextArea
              class="h-48"
              name="感想"
              rules="max:200"
              text-area-style="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36 w-full"
              :value.sync="impression" />
            <div class="text-center">
              <TripButton
                :disabled="invalid"
                :label="buttonLabel"
                button-style="mt-4 px-4 py-2 text-white font-semibold bg-blue-500 rounded w-1/4"
                type="submit" />
            </div>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import TripValidationInput from '../atoms/TripValidationInput.vue'
import TripValidationTextArea from '../atoms/TripValidationTextArea.vue'
import TripButton from '../atoms/TripButton.vue'
import {ValidationObserver} from '../../common/validate'

export default {
  name: 'TripCardMordal',
  components: {
    TripValidationInput,
    TripButton,
    ValidationObserver,
    TripValidationTextArea
  },
  props: {
    downImpression: {
      type: String,
      required: true
    },
    downAccommodationDate: {
      type: String,
      required: true
    },
    updateMode: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    impression: {
      get(){
        return this.$props.downImpression
      },
      set(impression){
        this.$emit('update:downImpression', impression)
      }
    },
    accommodationDate: {
      get(){
        return this.$props.downAccommodationDate
      },
      set(accommodationDate){
        this.$emit('update:downAccommodationDate', accommodationDate)
      }
    },
    buttonLabel(){
      return this.updateMode ? '記録を更新する':'記録を残す'
    }
  },
  methods: {
    close(){
      this.$emit('close')
    },
    onSubmit(){
      if (this.updateMode){
        this.updateMemory()
      } else {
        this.addMemory()
      }
    },
    addMemory(){
      this.$emit('addMemory')
    },
    updateMemory(){
      this.$emit('updateMemory')
    }
  }
}
</script>

<style scope>
#overlay{
  /*要素を重ねた時の順番*/
  z-index:1;

  /*画面全体を覆う設定*/
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /* 画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>