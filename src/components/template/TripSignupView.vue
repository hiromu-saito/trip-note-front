<template>
  <div>
    <h1>Signup</h1>
    <TripSignupForm :signup="signup">
      <router-link to="/signin">
        サインインはこちら
      </router-link>
    </tripsignupform>
  </div>
</template>

<script>
import TripSignupForm from '@/components/moleclues/TripSignupForm'

export default {
  name: 'TripSignupView',
  components: {
    TripSignupForm
  },
  methods: {
    signup(authInfo) {
      this.$store.dispatch('signup', authInfo)
        .then(() => {
          this.$router.push({path: '/signup'})
        }).catch((err) => {
          this.throwReject(err)
        })
    },
    throwReject(err){
      return Promise.reject(err)
    }
  }
}
</script>

<style>

</style>