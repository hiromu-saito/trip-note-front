<template>
  <div>
    <TripHeader :signout="signout" />
    <main>
      <router-view class="m-16" />
    </main>
  </div>
</template>

<script>
import TripHeader from '../moleclues/TripHeader.vue'
export default {
  name: 'TripBoardView',
  components: {
    TripHeader,
  },
  methods: {
    signout(){
      return this.$store.dispatch('signout')
        .then(()=> {
          this.$router.push('/signin')
        })
        .catch(err => Promise.reject(err))
    }
  }
}
</script>
