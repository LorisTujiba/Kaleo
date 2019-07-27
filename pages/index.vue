<template>
  <div class="container">
      <div class="jumbotron">
          <h1 class="display-4">Kaleo</h1>
          <p class="lead">Find your country!</p>
          <hr class="my-4">
          <SearchBar v-model="query"/>
      </div>
      <Result :detail="detail" :error="error"/>
  </div>
</template>

<script>
    import { mapState } from 'vuex'
    import axios from "axios";

    import SearchBar from '~/components/SearchBar.vue'
    import Result from '~/components/Result.vue'

    export default {
        components: {
            SearchBar,
            Result
        },        
        data(){
            return{
                query: ''
            }
        },
        computed:{
            ...mapState([
                'data',
                'detail',
                'error'
            ])
        }
    }
</script>
