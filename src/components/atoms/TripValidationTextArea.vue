<template>
  <div>
    <validation-provider
      v-slot="{errors}"
      :name="name"
      :rules="rules">
      <textarea
        v-model="inputValue"
        :class=" textAreaStyle"
        :name="name"
        :placeholder="placeholder" />
      <br>
      <span
        class="text-red-500 text-sm">{{ errors[0] }}</span>
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
    textAreaStyle: {
      type: String,
      default: ''
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