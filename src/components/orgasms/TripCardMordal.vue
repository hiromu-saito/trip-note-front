<template>
  <div
    id="overlay">
    <div id="content">
      <TripIcon
        class="close-icon"
        @onClick="close">
        ×
      </TripIcon>
      <ValidationObserver
        v-slot="{invalid}"
        tag="form"
        @submit.prevent="addMemory">
        <span>日時</span>
        <TripValidationInput
          class="date-form"
          name="日時"
          input-type="date"
          rules="required"
          :value.sync="date" />
        <label>感想
          <TripValidationInput
            class="impressions-form"
            name="impressions"
            input-type="text"
            rules="max:30"
            :value.sync="impressions" />
        </label>
        <TripButton
          :disabled="invalid"
          label="思い出を残す"
          type="submit" />
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import TripIcon from '../atoms/TripIcon.vue'
import TripValidationInput from '../atoms/TripValidationInput.vue'
import TripButton from '../atoms/TripButton.vue'
import {ValidationObserver} from '../../common/validate'

export default {
  name: 'TripCardMordal',
  components: {
    TripIcon,
    TripValidationInput,
    TripButton,
    ValidationObserver
  },
  data(){
    return {
      impressions: '',
      date: ''
    }
  },
  methods: {
    close(){
      this.$emit('close')
    },
    addMemory(){
      this.$emit('addMemory', {impressions: this.impressions, date: this.date})
    }
  }
}
</script>

<style scope>
#overlay{
  /*要素を重ねた時の順番*/
  z-index:1;

  /*画面全体を覆う設定*/
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);

  /* 画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;

}
#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}

#content input,
#content textarea{
  width: 100%;
}
#content p button{
  float: right;
}
.close-icon{
  float: right;
  margin: 0;
}
.date-form{
  margin-bottom: 10px;
height: 70px;
}
.impressions-form{
  margin: 10px 0;
}
.impressions-form input{
  height: 30px;
}
</style>