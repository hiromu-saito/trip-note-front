<template>
  <div>
    <TripHeader :signout="signout" />
    <section>
      <main>
        <router-view />
      </main>
    </section>
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