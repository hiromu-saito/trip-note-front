<template>
  <button
    :class="classes"
    :disabled="disabled"
    @click.prevent="handleClick">
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
    handleClick(ev){
      this.$emit('click', ev)
    }
  }
}
</script>

<style scoped>
.not-allowed{
  cursor: not-allowed;
}

</style>