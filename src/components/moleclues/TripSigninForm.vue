<template>
  <div>
    <ValidationObserver
      v-slot="{invalid}"
      tag="form">
      <label for="mail">メールアドレス</label>
      <TripValidationForm
        name="mail"
        rules="email|required"
        input-type="text"
        placeholder="メールアドレス"
        :value.sync="mail" />
      <label for="password">パスワード</label>
      <TripValidationForm
        name="password"
        rules="required|minmax:8,20|numalpha"
        input-type="password"
        placeholder="パスワード"
        :value.sync="password" />
      <TripButton
        :disabled="invalid && !loginProgress"
        label="ログイン"
        @onClick="onLogin" />
    </ValidationObserver>
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
    login: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      mail: '',
      password: '',
      loginProgress: false,
    }
  },
  computed: {
    buttonLabel(){
      if (this.loginProgress === true){return 'ログイン中...'}
      return 'ログイン'
    }
  },
  methods: {
    onLogin(){
      if (this.loginProgress === true){return}
      this.loginProgress = true
      this.login({
        mail: this.mail,
        password: this.password
      })
        .catch(err => {throw err})
    }
  }
}
</script>

<style>

</style>