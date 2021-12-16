<template>
  <div>
    <ValidationObserver
      v-slot="{invalid}"
      tag="form"
      @submit.prevent="onSignin">
      <label for="メールアドレス">メールアドレス</label>
      <TripValidationInput
        class="h-20"
        name="メールアドレス"
        rules="email|required"
        input-type="text"
        placeholder="メールアドレス"
        :value.sync="mailAddress" />
      <label for="パスワード">パスワード</label>
      <TripValidationInput
        class="h-20"
        name="パスワード"
        rules="required|minmax:8,20|numalpha"
        input-type="password"
        placeholder="パスワード"
        :value.sync="password" />
      <div class="text-center">
        <TripButton
          :disabled="invalid || signinProgress"
          button-style="bg-blue-500  text-white font-semibold py-2 px-4 w-56 rounded-md hover:bg-blue-600"
          :label="buttonLabel"
          type="submit" />
        <p
          v-if="authError"
          class="text-red-500 mt-4">
          メールアドレスまたはパスワードが正しくありません。
        </p>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import {ValidationObserver} from '../../common/validate'
import TripButton from '../atoms/TripButton.vue'
import TripValidationInput from '../atoms/TripValidationInput.vue'

export default {
  name: 'TripSigninForm',
  components: {
    TripButton,
    TripValidationInput,
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