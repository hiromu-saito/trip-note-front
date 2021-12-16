<template>
  <div>
    <ValidationObserver
      v-slot="{invalid}"
      tag="form"
      @submit.prevent="onSignup">
      <label for="メールアドレス">メールアドレス</label>
      <TripValidationInput
        class="h-20"
        name="メールアドレス"
        rules="required|email"
        placeholder="メールアドレス"
        input-type="text"
        :value.sync="mailAddress" />
      <label for="パスワード">パスワード</label>
      <TripValidationInput
        class="h-20"
        name="パスワード"
        rules="required|minmax:8,20|numalpha"
        placeholder="パスワード"
        input-type="password"
        vid="パスワード"
        :value.sync="password" />
      <label for="確認用パスワード">確認用パスワード</label>
      <TripValidationInput
        class="h-20"
        name="確認用パスワード"
        rules="required|minmax:8,20|numalpha|passmatch:パスワード"
        placeholder="確認用パスワード"
        input-type="password"
        :value.sync="confirmPassword" />
      <div class="text-center">
        <TripButton
          :label="buttonLabel"
          :disabled="invalid || signupProgress"
          button-style="bg-blue-500  text-white font-semibold py-2 px-4 w-56 rounded-md hover:bg-blue-600"
          type="submit" />
      </div>
    </ValidationObserver>
    <p
      v-if="duplicateError"
      class="duplicate-error">
      登録済みのメールアドレスです
    </p>
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
      signupProgress: false,
      duplicateError: false
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
      if (this.signupProgress === true){ return }
      this.signupProgress = true
      this.signup({
        mailAddress: this.mailAddress,
        password: this.password
      })
        .catch(err => {
          if (err.response.status = 409){
            this.signupProgress = false
            this.duplicateError = true
          } else {
            throw err
          }
        })
    }
  }
}
</script>

<style scoped>
.validate-form{
  height: 60px;
}
.duplicate-error{
  color: red;
}

</style>