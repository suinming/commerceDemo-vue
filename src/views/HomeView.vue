<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
        <div class="hero-body has-text-centered">
            <p class="title mb-6">
                Welcome to Suinming jacket store 
            </p>
            <p class="subtitle">
                The best jacket store online
            </p>
        </div>
    </section>
    <!-- product list  -->
    <div class="columns is-multiline">
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">Latest products</h2>
      </div>

       <ProductBox 
        v-for="product in latestProducts"
        :key="product.id"
        :product="product" />       
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import ProductBox from '../components/ProductBox.vue'

export default {
  name: 'Home',
  components:{
    ProductBox
  },
  data() {
    return {
      latestProducts: []
    }
  },
  mounted() {
    this.getLatestProducts()
    document.title = 'Home | Suinming store'
  },
  methods: {
    async getLatestProducts() {
      this.$store.commit('setIsLoading', true)
      try {
        const {data} = await axios.get('/api/v1/latest-products')
        this.latestProducts = data
      } catch (error) {
        console.errer(error)
      }
      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>

