<template>
     <div class="page-category">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h2 class="is-size-2 has-text-centered">{{ category.name }}</h2>
            </div>
        </div>
    </div> 
    <ProductBox 
      v-for="product in category.products"
      :key="product.id"
      :product="product" 
      :classObj="classObj"
    />
</template>

<script>
import axios from 'axios'
import {toast} from 'bulma-toast'
import ProductBox from '../components/ProductBox.vue'

export default {
  name:'Category',
  data(){
    return{
      category:{
        products:[]
      },
      classObj: {red:true, blue:false, green:false}
    }
  },
  components:{
    ProductBox
  },
  mounted(){
    this.getCategory()
  },
  watch: {/*  dig into the detail */
      $route(to, from) {
          if (to.name === 'category') {
              this.getCategory()
          }
      }
  },
  methods:{
    async getCategory(){
      try {
        this.$store.commit('setIsLoading', true)
    
        // fetch data from API
        const categorySlug = this.$route.params.category_slug
        const {data} = await axios.get(`/api/v1/products/${categorySlug}`) 
        this.category = data
        document.title = this.category.name + '| Suinming store'

        this.$store.commit('setIsLoading', false)
      } catch (error) {
        console.error(error) 

        toast({
            message: 'Something went wrong. Please try again.',
            type: 'is-danger',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right',
        })

      }
    }
  }
}
</script>
