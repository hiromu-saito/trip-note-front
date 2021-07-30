<template>
  <div>
    <ValidationObserver
      v-slot="{invalid}"
      tag="form"
      @submit.prevent="onSignin">
      <label for="mailAddress">メールアドレス</label>
      <TripValidationForm
        class="validate-form"
        name="mailAddress"
        rules="email|required"
        input-type="text"
        placeholder="メールアドレス"
        :value.sync="mailAddress" />
      <label for="password">パスワード</label>
      <TripValidationForm
        class="validate-form"
        name="password"
        rules="required|minmax:8,20|numalpha"
        input-type="password"
        placeholder="パスワード"
        :value.sync="password" />
      <TripButton
        :disabled="invalid || signinProgress"
        :label="buttonLabel"
        type="submit" />
    </ValidationObserver>
    <p
      v-if="authError"
      class="auth-error">
      メールアドレスまたはパスワードが正しくありません。
    </p>
  </div>
</template>

<script>
import TripButton from '../atoms/TripButton.vue'
import TripValidationForm from '../atoms/TripValidationInput.vue'
import {ValidationObserver} from '../../common/validate'

export default {
  name: 'TripSigninForm',
  components: {
    TripButton,
    TripValidationForm,
    ValidationObserver
  },
  props: {
    signin: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      mailAddress: '',
      password: '',
      signinProgress: false,
      authError: false
    }
  },
  computed: {
    buttonLabel(){
      if (this.signinProgress === true){return 'ログイン中...'}
      return 'ログイン'
    }
  },
  methods: {
    onSignin(){
      if (this.signinProgress === true){ return }
      this.signinProgress = true
      this.signin({
        mailAddress: this.mailAddress,
        password: this.password
      })
        .catch(err => {
          if (err.response.state = 401){

            this.signinProgress = false
            this.authError = true
          } else {
            throw err
          }
        })
    },
    
  }
}
</script>

<style scoped>
.validate-form{
  height: 60px;
}
.auth-error{
  color: red;
}
</style>