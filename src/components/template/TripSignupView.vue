<template>
  <div class="signup-view">
    <h1>Signup</h1>
    <TripSignupForm
      :signup="signup"
      class="signup-form" />
    <router-link to="/signin">
      サインインはこちら
    </router-link>
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
      return this.$store.dispatch('signup', authInfo)
        .then(() => {
          this.$router.push({path: '/signin'})
        }).catch(err => {
          this.throwReject(err)
        })
    },
    throwReject(err){
      throw err
    }
  }
}
</script>

<style scoped>
.signup-view{
  margin: 100px 200px;
}
.signup-form{
  height: 400px;
}

</style>