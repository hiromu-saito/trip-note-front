<template>
  <div>
    <h1>Trip Note</h1>
    <TripButton
      :disabled="signoutProgress"
      :label="buttonLabel"
      @onClick="onSignout" />
  </div>
</template>

<script>
import TripButton from '../atoms/TripButton.vue'
export default {
  components: {
    TripButton
  },
  props: {
    signout: {
      type: Function,
      required: true
    }
  },
  data(){
    return {
      signoutProgress: false
    }
  },
  computed: {
    buttonLabel(){
      if (this.signoutProgress){ return 'サインアウト中...'}
      return 'サインアウト'
    }
  },
  methods: {
    onSignout(){
      if (this.signoutProgress) { return }
      this.signoutProgress = true
      this.signout()
        .catch(err => { throw err })
    }
  }
}
</script>

<style>

</style>