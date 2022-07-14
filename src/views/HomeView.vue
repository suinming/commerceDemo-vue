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

      <div v-for="product in latestProducts" :key="product.id">
        
        <div class= 'box'>
          <figure class='img mb-4'>
            <img :src='product.get_thumbnail'>
          </figure>

          <h3 class='is-size-4'>{{ product.name }}</h3>
          <p class='is-size-6 has-text-grey'>
            {{ product.price }}
          </p>

          <router-link 
            class="button is-dark mt-4" 
            :to="product.get_absolute_url">View detail</router-link> 
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import axios from 'axios'
import {reactive, onMounted, ref} from 'vue'

const latestProducts = ref([])

async function getLatestProducts(){
  try{
    const response = await axios.get('/api/v1/latest-products/')
    // .value is important to assign value to ref
    latestProducts.value = response.data
  } catch(error){
    console.error(error)
  }
}

onMounted(() => {
  getLatestProducts()
})

</script>
