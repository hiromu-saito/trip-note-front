<template>
  <div class="signin-view">
    <h1>Signin</h1>
    <TripSigninForm
      class="signin-form"
      :signin="signin" />
    <router-link to="/signup">
      サインアップはこちら
    </router-link>
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

<style scoped>
.signin-view{
  margin: 100px 200px;
}
.signin-form{
  height: 400px;
}

</style>