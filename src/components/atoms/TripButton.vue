<template>
  <button
    :type="type"
    :class="classes"
    :disabled="disabled"
    @click="onClick">
    {{ label }}
  </button>
</template>

<script>

export default {
  name: 'TripButton',
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    buttonStyle: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    classes(){
      if (this.disabled){
        return `cursor-not-allowed ${this.buttonStyle}`
      }
      return this.buttonStyle
    }
  },
  methods: {
    onClick(){
      this.$emit('onClick')
    }
  }
}
</script>
