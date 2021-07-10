<template>
  <div class="trip-header">
    <h1>
      Trip Note
    </h1>
    <TripButton
      class="trip-button"
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

<style scoped>
.trip-header{
  border: dotted 1px #000;
  height: 80px;
  margin: 10px;
  padding-left: 30px;
}

.trip-button{
  float: right;
  height: 40px;
  margin-right: 50px;
  margin-top: 20px;
}
h1{
  display: inline-block;
  margin: 0;
  line-height: 80px;
}
</style>