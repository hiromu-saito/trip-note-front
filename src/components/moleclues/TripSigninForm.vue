<template>
  <div>
    <ValidationObserver
      v-slot="{invalid}"
      tag="form"
      @submit.prevent="onSignin">
      <label for="mail">メールアドレス</label>
      <TripValidationForm
        class="validate-form"
        name="mail"
        rules="email|required"
        input-type="text"
        placeholder="メールアドレス"
        :value.sync="mail" />
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
      mail: '',
      password: '',
      signinProgress: false,
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
      if (this.signinProgress === true){return}
      this.signinProgress = true
      this.signin({
        mail: this.mail,
        password: this.password
      })
        .catch(err => {throw err})
    },
    
  }
}
</script>

<style scoped>
.validate-form{
  height: 60px;
}

</style>