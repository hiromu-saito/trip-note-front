<template>
  <div>
    <TripHeader :signout="signout" />
    <section>
      <TripNavigationBar />
      <main>
        <router-view />
      </main>
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
main {
  /* margin:0 auto; */
  margin: 20px;
  flex-basis: 1400px;
}
</style>