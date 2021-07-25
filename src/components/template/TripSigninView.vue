<template>
  <div class="signin-form">
    <h1>Signin</h1>
    <TripSigninForm
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
.signin-form{
  margin: 100px 200px;
}

</style>