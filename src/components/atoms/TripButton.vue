<template>
  <button
    type="button"
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
    onClick(ev){
      console.log(ev)
      this.$emit('onClick', ev)
    }
  }
}
</script>

<style scoped>
.not-allowed{
  cursor: not-allowed;
}

</style>