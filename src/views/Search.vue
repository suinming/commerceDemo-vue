<template>
  <div class="page-search">
      <div class="columns is-multiline">
          <div class="column is-12">
              <h1 class="title">Search</h1>

              <h2 class="is-size-5 has-text-grey">Search term: "{{ query }}"</h2>
          </div>

          <ProductBox 
              v-for="product in products"
              v-bind:key="product.id"
              v-bind:product="product" />
      </div>
  </div>
  <div class="page-search">
      <div class="columns is-multiline">
          <div class="column is-12">
              <h1 class="title">Search</h1>

              <h2 class="is-size-5 has-text-grey">Search term: "{{ query }}"</h2>
          </div>

          <ProductBox 
              v-for="product in products"
              v-bind:key="product.id"
              v-bind:product="product" />
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductBox from '../components/ProductBox.vue'

export default {
  name: 'Search',
  components:{
    ProductBox
  },
  data(){
    return{
      products:[],
      query:''
    }
  },
  mounted(){
    document.title = 'search'
    // window.location will return a Location obj which contains href value
    // one prop calls search and the value is ?query='bla'
    // in order to ignore the '?' start from index 1
    let uri = window.location.search.substring(1)
    let params = new URLSearchParams(uri)

    if (params.get('query')) {
        this.query = params.get('query')
        this.performSearch()
    }
  },
  methods:{
    async performSearch(){
      try {
        this.$store.commit('setIsLoading', true) 

        const {data} = await axios.post('/api/v1/products/search', {'query': this.query})
        this.products = data

        this.$store.commit('setIsLoading', false)
      } catch (error) {
        console.error(error) 
      }
    }
  }
}
</script>
