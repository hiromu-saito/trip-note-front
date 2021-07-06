<template>
  <div>
    <ValidationObserver
      v-slot="{invaid}"
      tag="form">
      <label for="メールアドレス">メールアドレス</label>
      <TripValidationInput
        name="メールアドレス"
        rules="required|email"
        placeholder="メールアドレス"
        input-type="text"
        :value.sync="mail" />
      <label for="パスワード">パスワード</label>
      <TripValidationInput
        name="パスワード"
        rules="required|minmax:8,20|numalpha"
        placeholder="パスワード"
        input-type="password"
        vid="パスワード"
        :value.sync="password" />
      <label for="確認用パスワード">確認用パスワード</label>
      <TripValidationInput
        name="確認用パスワード"
        rules="required|minmax:8,20|numalpha|passmatch:パスワード"
        placeholder="確認用パスワード"
        input-type="password"
        :value.sync="confirmPassword" />
      <TripButton
        :label="buttonLabel"
        :disabled="invaid && !signupProgress"
        @onClick="onSignup" />
    </ValidationObserver>
  </div>
</template>

<script>
import {ValidationObserver} from '../../common/validate'
import TripButton from '@/components/atoms/TripButton'
import TripValidationInput from '@/components/atoms/TripValidationInput'

export default {
  name: 'SignupForm',
  components: {
    TripButton,
    TripValidationInput,
    ValidationObserver
  },
  props: {
    signup: {
      type: Function,
      required: true
    }
  },
  data(){
    return {
      mail: '',
      password: '',
      confirmPassword: '',
      signupProgress: false
    }
  },
  computed: {
    buttonLabel(){
      if (this.signupProgress){ return 'サインアップ中...'}
      return 'サインアップ'
    }
  },
  methods: {
    onSignup(){
      if (this.signupProgress === true){return}
      this.signupProgress = true
      
      this.signup({mail: this.mail, password: this.password})
        .catch(err => {throw err})
    }
  }
}
</script>

<style>

</style>