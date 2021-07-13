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
      defalt: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    classes(){
      if (this.disabled){
        return 'not-allowed'
      }
      return ''
    }
  },
  methods: {
    onClick(){
      this.$emit('onClick')
    }
  }
}
</script>

<style scoped>
.not-allowed{
  cursor: not-allowed;
}

</style>