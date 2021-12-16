<template>
  <div class="w-1/2 m-auto mt-16">
    <h1
      class="sm:text-3xl
      text-2xl
      font-medium
      title-font
      mb-4
      text-gray-600
      text-center">
      Signup
    </h1>
    <div class="w-1/2 m-auto">
      <TripSignupForm
        class="mb-12"
        :signup="signup" />
      <router-link
        to="/signin"
        class="text-center block text-gray-500">
        ログインはこちら
      </router-link>
    </div>
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

