<template>
  <a
    :disabled="disabled"
    :class="classes"
    @click="onClick">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'TripIcon',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes(){
      if (this.disabled){ return 'not-allowed'}
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