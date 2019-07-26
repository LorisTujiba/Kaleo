<template>
  <div class="container">
      <SearchBar/>
      <Result/>
  </div>
</template>

<script>
import SearchBar from '~/components/SearchBar.vue'
import Result from '~/components/Result.vue'

export default {
  components: {
    SearchBar,
    Result
  }
}
</script>
