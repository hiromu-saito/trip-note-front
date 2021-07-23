<template>
  <div>
    <ValidationObserver
      v-slot="{invalid}"
      tag="form"
      @submit.prevent="onSignup">
      <label for="メールアドレス">メールアドレス</label>
      <TripValidationInput
        class="validate-form"
        name="メールアドレス"
        rules="required|email"
        placeholder="メールアドレス"
        input-type="text"
        :value.sync="mailAddress" />
      <label for="パスワード">パスワード</label>
      <TripValidationInput
        class="validate-form"
        name="パスワード"
        rules="required|minmax:8,20|numalpha"
        placeholder="パスワード"
        input-type="password"
        vid="パスワード"
        :value.sync="password" />
      <label for="確認用パスワード">確認用パスワード</label>
      <TripValidationInput
        class="validate-form"
        name="確認用パスワード"
        rules="required|minmax:8,20|numalpha|passmatch:パスワード"
        placeholder="確認用パスワード"
        input-type="password"
        :value.sync="confirmPassword" />
      <TripButton
        :label="buttonLabel"
        :disabled="invalid || signupProgress"
        type="submit" />
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
      mailAddress: '',
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
      
      this.signup({mailAddress: this.mailAddress, password: this.password})
        .then(() => {})
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.validate-form{
  height: 60px;
}

</style>