<template>
  <div class="nav-bar">
    <TripIcon>
      <router-link to="/">
        <img src="@/assets/memory.svg">
      </router-link>
    </TripIcon>
    <TripIcon>
      <router-link to="/search">
        <img src="@/assets/search.svg">
      </router-link>
    </TripIcon>
  </div>
</template>

<script>
import TripIcon from '../atoms/TripIcon.vue'

export default {
  name: 'TripNavigationBar',
  components: {
    TripIcon
  }
}
</script>

<style scoped>
.nav-bar{
  height: 600px;
  /* border: 1px dotted black; */
  margin: 10px;
}

</style>