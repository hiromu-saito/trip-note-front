<template>
  <div class="signin-view w-1/2 m-auto mt-16">
    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-center">
      Signin
    </h1>
    <div class="w-1/2 m-auto">
      <TripSigninForm
        class="mb-12"
        :signin="signin" />
      <router-link
        to="/signup"
        class="text-center block  text-gray-500">
        サインアップはこちら
      </router-link>
    </div>
  </div>
</template>

<script>
import TripSigninForm from '@/components/moleclues/TripSigninForm'

export default {
  name: 'TripSigninView',
  components: {
    TripSigninForm
  },
  methods: {
    signin(authInfo){
      return this.$store.dispatch('signin', authInfo)
        .then(() => {
          this.$router.push({path: '/'})
        }).catch(err => {
          console.log('signin view')
          this.throwReject(err)
        })
    },
    throwReject (err) {
      throw err
    }
  }
}
</script>
