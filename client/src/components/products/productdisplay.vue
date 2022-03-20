<template>
<div class="container2"  >
    <button @click="$emit('view-product',product); commentcall()"  style="border-radius: 30px; padding:3pt; background-color:white">
    <div class="row" >
    <div class="col-sm-4">
    <div class="best_shoes">
        <p class="best_text">{{this.product.name}} </p>
        <div class="shoes_icon"><img style="max-height:200px; max-width:250pt" :src="require(`@/components/images/${image}`)"></div>
        <div class="star_text">
        <div class="left_part">
        <div style="display:flex;flex-direction:row;">
    <div style="display:flex; ;margin-left:7pt" v-for='index in rating' :key='index' ><a href="#"><img src="../images/star-icon.png"></a> </div>
    </div>
    </div>
    <div class="right_part">
    <div class="shoes_price">$ <span style="color: #ff4e5b;">{{this.product.price}}</span></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
</button></div>
</template>


<script>
import axios from 'axios'
export default {
    props:['product'],
    computed:{
        description()
        {
            console.log(this.product.image1);
            return this.product.description.substring(0,150)
        }
    },
    data: function () {
    return {
     image: this.product.image1,
     rating:1
    }
  },
  methods:{
    

commentcall(){
        axios.post("http://localhost/Shopping_website_PHP/fetchcomment.php", { 
        product: this.product.name,

        }) 

        .then((response) => { 
            
          this.$store.commit('addcomment',response.data);
          console.log(response.data);
          
          
          

        }) 

        .catch((error) => { 

          console.log(error); 

        }); 

        },




  },
  mounted(){
        axios.post("http://localhost/Shopping_website_PHP/getrating.php", { 
        product: this.product.name,

        }) 
         .then((response) => { 
            console.log(Math.round(response.data.average));
            this.rating= (Math.round(response.data.average));
          
          
          
          

        }) 

        .catch((error) => { 

          console.log(error); 

        });
    },

}
</script>




