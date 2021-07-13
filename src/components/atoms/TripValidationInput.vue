<template>
  <div>
    <validation-provider
      v-slot="{errors}"
      :name="name"
      :rules="rules">
      <input
        v-model="inputValue"
        :type="inputType"
        :name="name"
        :placeholder="placeholder">
      <br>
      <span
        v-show="dispError"
        class="validate-error">{{ errors[0] }}</span>
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

<style scoped>
.validate-error{
  color: red;
  font-size: 0.6em;
}

</style>