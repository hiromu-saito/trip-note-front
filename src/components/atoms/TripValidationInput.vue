<template>
  <div>
    <validation-provider
      v-slot="{errors}"
      :name="name"
      :rules="rules">
      <input
        v-model="inputValue"
        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        :type="inputType"
        :name="name"
        :placeholder="placeholder">
      <br>
      <span
        v-show="dispError"
        class="text-red-500 text-xs">{{ errors[0] }}</span>
    </validation-provider>
  </div>
</template>

<script>
import {ValidationProvider} from '../../common/validate'

export default {
  name: 'TripValidationInput',
  components: {
    ValidationProvider
  },
  props: {
    rules: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    dispError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    inputValue: {
      get(){
        return this.$props.value
      },
      set(value){
        this.$emit('update:value', value)
      }
    },
  }
}
</script>