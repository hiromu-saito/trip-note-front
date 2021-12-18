<template>
  <header class="text-gray-600 body-font m-4">
    <div class=" mx-auto ml-6 flex  flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      <div class=" mx-auto ml-6 flex items-center ">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          <span class="ml-3 text-xl">Trip Note</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <router-link
            to="/"
            class="mr-8">
            旅行の記録を見る
          </router-link>
          <router-link
            to="/search"
            class="flex">
            <img src="@/assets/search.svg">
            ホテル検索
          </router-link>
        </nav>
      </div>
      <TripButton
        button-style="bg-red-500 text-white  py-2 px-4 rounded-md text-xs mr-16"
        :disabled="signoutProgress"
        :label="buttonLabel"
        @onClick="onSignout" />
    </div>
  </header>
</template>

<script>
import TripButton from '../atoms/TripButton.vue'
export default {
  components: {
    TripButton
  },
  props: {
    signout: {
      type: Function,
      required: true
    }
  },
  data(){
    return {
      signoutProgress: false
    }
  },
  computed: {
    buttonLabel(){
      if (this.signoutProgress){ return 'サインアウト中...'}
      return 'サインアウト'
    }
  },
  methods: {
    onSignout(){
      if (this.signoutProgress) { return }
      this.signoutProgress = true
      this.signout()
        .catch(err => { throw err })
    }
  }
}
</script>

