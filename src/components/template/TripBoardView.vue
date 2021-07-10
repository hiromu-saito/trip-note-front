<template>
  <div>
    <TripHeader :signout="signout" />
    <section>
      <TripNavigationBar />
      <router-view />
    </section>
  </div>
</template>

<script>
import TripHeader from '../moleclues/TripHeader.vue'
import TripNavigationBar from '../moleclues/TripNavigationBar.vue'
export default {
  name: 'TripBoardView',
  components: {
    TripHeader,
    TripNavigationBar
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

<style scoped>
section{
  display: flex;
}
</style>