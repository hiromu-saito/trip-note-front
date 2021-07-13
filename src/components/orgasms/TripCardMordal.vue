<template>
  <div
    id="overlay">
    <div id="content">
      <TripIcon
        class="close-icon"
        @onClick="close">
        ×
      </TripIcon>
      <form @submit.prevent="addMemory">
        <input
          id="date"
          v-model="date"
          type="date">
        <label for="impressions">感想</label>
        <textarea
          id="impressions"
          v-model="impressions"
          cols="30"
          rows="20" />
        <button type="submit">
          思い出を残す
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import TripIcon from '../atoms/TripIcon.vue'
export default {
  name: 'TripCardMordal',
  components: {
    TripIcon
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
</style>