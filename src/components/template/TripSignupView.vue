<template>
  <div>
    <h1>Signup</h1>
    <TripSignupForm :signup="signup">
      <router-link to="/signin">
        サインイン
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
    signup: () =>{}
  }
}
</script>

<style>

</style>