<template>
  <div>
    <ValidationObserver
      v-slot="{invalid}"
      tag="form"
      @submit.prevent="onSignin">
      <label for="mailAddress">メールアドレス</label>
      <TripValidationForm
        class="h-20"
        name="mailAddress"
        rules="email|required"
        input-type="text"
        placeholder="メールアドレス"
        :value.sync="mailAddress" />
      <label for="password">パスワード</label>
      <TripValidationForm
        class="h-20"
        name="password"
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

</style>