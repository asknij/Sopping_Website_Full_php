<template>

<head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">

      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1">
      <title>Shoes</title>
      <meta name="keywords" content="">
      <meta name="description" content="">
      <meta name="author" content="">

</head>

<div class='banner' >
<div class=split>
<div class="col-sm-5">
  <div class="banner_taital">
    <h1 class="banner_text" style="color:gray">New S22 Ultra </h1>
    <h1 class="mens_text" style="color:black"><strong>Welcome to the epic standard</strong></h1>
    <p class="lorem_text">   </p>
    <p class="lorem_text">   </p>
    <p class="lorem_text">   </p>
    <div >
      <button class="more_bt" ><font color="white">Coming Soon.....</font></button>
    </div>
  </div>
</div>

</div>
</div>

  
<div class="collection_text" style="height:80pt;background-color:#000000">New Arrivals</div>

<div class="layout_padding gallery_section container1" >

      <productdisplay
      v-for="product in items"
      :key="product.productid"
      :product="product" 
      v-on:view-product="DisplayProduct($event)"
      />
</div>
<div class="homePage"> 
      <productDrawer
      :product="product"
      :active="active"
      v-on:closeDrawer="closeDrawer()"
      />


    



   <body class="main-layout">
    <div class="section_footer">
    <div class="container">
    <div class="mail_section">
    <div class="row">
    <div class="col-sm-6 col-lg-2">
    <div><a href="#"><img class="logo2" src="../images/logo.png"></a></div>
    </div>
    <div style="display:flex;flex-direction:row;margin-left:30%;margin-right:100pt">
    <div style="display:flex;flex-direction:column">
       <h2 class="shop_text">Our Company </h2>
       <div class="delivery_text">
    <ul style="display:flex;flex-direction:column">
      <li>Delivery</li>
      <li>Legal Notice</li>
      <li>About us</li>
      <li>Secure payment</li>
      <li>Contact us</li>
    </ul>
    </div>
      </div>
    <div style="margin-left:150pt">
    <h2 class="adderess_text">Products</h2>
    <div class="delivery_text">
    <ul style="display:flex;flex-direction:column;">
    <li>Prices drop</li>
    <li>New products</li>
    <li>Best sales</li>
    <li>Contact us</li>
    <li>Sitemap</li>
    </ul>
       </div>
    </div>
   </div>
    </div>
          </div> 
	</div>
</div>

   </body>


  
  </div>
</template>

<script>
import axios from 'axios';
import productdisplay from '../components/products/productdisplay.vue'
import productDrawer from '../components/products/productDrawer.vue'
export default {
  name: 'Home',
  components: { productdisplay, productDrawer },
  mounted(){
     console.log("inside");
      axios.post("http://localhost/Shopping_website_PHP/product.php", { 
        }) 

        .then((response) => { 
          this.items=response.data;
          console.log(this.items[0]);
          
          

        }) 

        .catch((error) => { 

          console.log(error); 

        }); 

     
  },
  data() 
  {
    return {
      items: [],
      product:null,
      active:{ productdrawerstate:false  }
      
    }
  },
  methods:{
    DisplayProduct(product)
    {
      if(product!=null){
      this.product=product
      this.active.productdrawerstate=true
      }
    },
    closeDrawer()
    {
      
      this.active.productdrawerstate=false
    },
     logout(){
      this.$store.commit('logoutuser')
    },
    
  },
  
}
</script>
<style>
@import '../css/style.css';
@import '../css/style2.css';
@import '../css/stylecart.css';
@import url(https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
.logo2{
  max-height: 120pt;
  max-width: 120pt;
  margin-left: 45%;
  
}
</style>

