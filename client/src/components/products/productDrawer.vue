<template>


    <div class="drawer-background" :class="{'show': active.productdrawerstate}" @click="$emit('closeDrawer')" />
    <div class="drawer" :class="{'show': active.productdrawerstate}">
        <div class="drawer-close" @click.prevent="$emit('closeDrawer')">
            X
        </div>
        <div v-if="product" class="product-details">
 
        <div class="left-column">

 
 

    
 

    <div class="containerobject" >
        <div class="slider-wrapper">
            <div class="slider-description" >
                <div class="slider-description-inner"  >
                    <h1 ><span>{{ product.name }}</span></h1>
                </div>                
            </div>
            <div class="imagebackground" >
                <img  :src="require(`@/components/images/${this.product.image1}`)" alt="adada" style="margin-left:500pt; margin-top:40pt;height:400pt">
            </div>
        </div>
    </div>
    <div class="container margin-top">
        <div class="history-wrapper" style="display:flex;flex-direction:row">
            <div style="width:60%;text-align: justify;">
                <div  style="width:95%;">
                    <article >
                        <h1 >DESCRIPTION</h1>
                        <hr>
                        <h4 style="padding:30pt;" >{{product.description}}</h4>
                        </article>
                </div>
            </div>
            <div >
                    <div style="margin-top:75pt">
                        <div><img class="img-responsive center-block" :src="require(`@/components/images/${this.product.image2}`)" alt="About" style="max-height:400pt"></div>

                    </div>
            </div>
        </div>
    </div>
    <div class="container margin-top">
        <div class="main-title">
            <h1>DETAILS</h1>
            <hr>
            
        </div>
        <div class="services-home-page" >
            <div class="row" style="display:flex;flex-direction:row;text-align: justify;">
                <div class="col-md-4" style="width:250pt;margin-left:40pt;box-shadow: 3px 3px 3px 3px lightgray;padding:10pt">
                    
                    <h4 style="text-align: center;font-size:15pt"><i class="fa fa-cog" aria-hidden="true"></i>  Specification</h4>
                    <p>{{this.product.specification}}</p>
                </div>
                <div class="col-md-4" style="width:250pt;margin-left:40pt;box-shadow: 3px 3px 3px 3px lightgray;padding:10pt">
                    
                    <h4 style="text-align: center;font-size:15pt"><i class="fa fa-undo" aria-hidden="true"></i>  Return Policy</h4>
                    <p>{{this.product.return_policy}}</p>
                </div>
                <div class="col-md-4" style="width:250pt;margin-left:40pt;box-shadow: 3px 3px 3px 3px lightgray;padding:10pt">
                    
                    <h4 style="text-align: center;font-size:15pt"><i class="fa fa-shield" aria-hidden="true"></i>  Warranty</h4>
                    <p>{{this.product.warrenty}}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container margin-top"   >
        
            <div class="js-masonry">
                <div class="row" id="work-grid" style="display:flex;flex-direction:row;">
                    
                    
                        <div class="img home-portfolio-image "  >
                            <img style="width:400pt;margin:10pt;padding:50pt" :src="require(`@/components/images/${this.product.image3}`)" alt="Portfolio Item">
                            <div class="overlay-thumb">
                                <span class="btnBefore"></span>
                                <span class="btnAfter"></span>   
                            </div>
                        </div>
                        <div class="img home-portfolio-image productdis">
                            <img style="width:400pt;margin:10pt;padding:50pt" :src="require(`@/components/images/${this.product.image4}`)" alt="Portfolio Item">
                            <div class="overlay-thumb"> 
                                <span class="btnBefore"></span>
                                <span class="btnAfter"></span>           
                            </div>
                        </div>
                        <div class="img home-portfolio-image productdis" >
                            <img style="width:400pt;margin:10pt;padding:50pt" :src="require(`@/components/images/${this.product.image5}`)" alt="Portfolio Item">
                            <div class="overlay-thumb">
                            
                                <span class="btnBefore"></span>
                                <span class="btnAfter"></span>
                                
                            </div>
                        </div>

                </div>
            </div>
            
        </div>
      <div style="margin-left:300pt;display:flex;flex-direction:row">
      <button class="buy_bt" @click="add()">Add to cart</button>
      <p  class="quantity" >{{product_count}}</p>
      <button class="buy_bt" @click="remove()">Remove from Cart</button>
      </div>
      
    <div class="container margin-top" v-if="user_name === 'admin'">


<div class="alert" >


            <div class="main-title">
                <h1>User Reviews</h1>
                <hr>
            </div>

            <div style="max-height:300pt;overflow-y: scroll;margin-top:-35pt">
            <commentdisplay
            :product="product" 
            />
            </div>





<div style="padding:50pt">  

<h2 id="fh2">WE APPRECIATE YOUR REVIEW</h2>
<h6 id="fh6">Your review will help us to improve our products and delivery services.</h6>


<div id="feedback" >
  <div class="pinfo">Your name.</div>
  
<div class="form-group">
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="fa fa-user"></i></span>
  <input  name="name" placeholder="John Doe" class="form-control" v-model="username1" type="text" required>
    </div>
  </div>
</div>




 <div class="pinfo">Rate our product.</div>
  

<div class="form-group">
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="fa fa-heart"></i></span>
   <select class="form-control" id="rate" v-model.number="userrating" required>
      <option >1</option>
      <option >2</option>
      <option >3</option>
      <option >4</option>
      <option >5</option>
    </select>
    </div>
  </div>
</div>
 <div class="pinfo">Write your feedback.</div>
  

<div class="form-group">
  <div class="col-md-4 inputGroupContainer">
  <div class="input-group">
  <span class="input-group-addon"><i class="fa fa-pencil"></i></span>
  <textarea class="form-control" id="review" rows="3" v-model="usercomment" required></textarea>
 
    </div>
  </div>
</div>

 <button  class="btn btn-primary" style="margin-left:45%" @click=" commentload()">Submit</button>


</div>

</div>
  

</div>
</div>
</div>
    






 

  </div>




        </div>
    
</template>

<script>
import axios from 'axios'
import commentdisplay from './commentdisplay.vue'

export default 
        {
        components:{commentdisplay},
        props: ['product', 'active'],
        emits: ['closeDrawer'],
        data: function(){
            return{
                usercomments:[],
                usercomment: null,
                userrating:0,
                name:"Guest"
            }
        },
        
        computed: {

            product_count() {
              console.log(this.product)
                return this.$store.getters.productQuantity(this.product)
            }   ,
            item_cost(){
            return this.product.price*this.product.quantity
        },
        user_name(){
            console.log(this.$store.getters.getuser);
            return this.$store.getters.getuser;
            
        }      
           
        },

        
        methods:
        {


            add(){
                this.$store.commit('addcart',this.product)

              

            },
            remove()
            {
                this.$store.commit('removecart',this.product)
            },



            commentload()
            {
           

            axios.post("http://localhost/Shopping_website_PHP/addcomment.php", { 

          user: this.username1, 

          comment: this.usercomment, 

          rating: this.userrating, 

          product: this.product.name,  

        }) 

        .then((response) => { 

          console.log(response.data); 
         

        }) 

        .catch((error) => { 

          console.log(error); 
          

        }); 


            }
        },

    }
</script>

<style lang="scss">



#feedback {
  max-width: 60%;
  width: 100%;
  margin: 10px auto;
  padding: 20px;
  border: solid 1px #f1f1f1;
  background: #fbfbfb;
  box-shadow: #e6e6e6 0 0 4px ;
  border-radius: 0.25rem;
}

@media (max-width: 720px) {
  #feedback{
    max-width: 90%;
  }
}

@media (max-width: 500px) {
  #feedback{
    padding: 10px;
  }
}

#fh2{
 padding: 2px 15px;
 color: #36109c;
 text-align: center;
 
 
}

@media (max-width: 400px) {
  #fh2{
    font-size: 18px;
  }
}


#fh6 {
 padding: 2px 15px;
 text-align: center;
 font-weight: normal;
}

@media (max-width: 400px) {
  #fh6{
    font-size: 12px;
  }
}

.pinfo {
 margin: 8px auto;
 font-weight: bold;
 line-height: 1.5;
 color: #0d0d0d;
}
.form-group {
  margin-bottom: 1rem;
}
  
.form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  font-weight: bold;
  color: #6C6262;
  background-color: #fff;
  background-image: none;
  -webkit-background-clip: padding-box;
          background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:focus {
  color: #696060;
  background-color: #fff;
  border-color: #5cb3fd;
  outline: none;
}

.form-control::-webkit-input-placeholder {
  color: #F34949;
  opacity: 1;
}

.form-control::-moz-placeholder {
  color: brown;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: blue;
  opacity: 1;
}

.form-control::placeholder {
  color: white;
  opacity: 1;
}

.form-control:disabled, .form-control[readonly] {
  background-color: red;
  opacity: 1;
}

.form-control:disabled {
  cursor: not-allowed;
}

select.form-control:not([size]):not([multiple]) {
  height: calc(2.25rem + 2px);
}

select.form-control:focus::-ms-value {
  color: green;
  background-color: #fff;
}

.form-control-file,
.form-control-range {
  display: block;
}

.input-group {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}

.input-group .form-control {
  position: relative;
  z-index: 2;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {
  z-index: 3;
}

.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}

.input-group-addon,
.input-group-btn {
  white-space: nowrap;
  vertical-align: middle;
}

.input-group-addon {
  width: 45px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.25;
  color: #2e2e2e;
  text-align: center;
  background-color: #eceeef;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.input-group-addon.form-control-sm,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .input-group-addon.btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.input-group-addon.form-control-lg,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .input-group-addon.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}

.input-group .form-control:not(:last-child),
.input-group-addon:not(:last-child),
.input-group-btn:not(:last-child) > .btn,
.input-group-btn:not(:last-child) > .btn-group > .btn,
.input-group-btn:not(:last-child) > .dropdown-toggle,
.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.input-group-addon:not(:last-child) {
  border-right: 0;
}

.input-group .form-control:not(:first-child),
.input-group-addon:not(:first-child),
.input-group-btn:not(:first-child) > .btn,
.input-group-btn:not(:first-child) > .btn-group > .btn,
.input-group-btn:not(:first-child) > .dropdown-toggle,
.input-group-btn:not(:last-child) > .btn:not(:first-child),
.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.form-control + .input-group-addon:not(:first-child) {
  border-left: 0;
}

.btn {
  display: inline-block;
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.btn:focus, .btn:hover {
  text-decoration: none;
}

.btn:focus, .btn.focus {
  outline: 0;
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);
}

.btn.disabled, .btn:disabled {
  cursor: not-allowed;
  opacity: .65;
}

.btn:active, .btn.active {
  background-image: none;
}

a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8; 
}

.btn-primary:hover {
  color: #fff;
  background-color: #025aa5;
  border-color: #01549b;
}

.btn-primary:focus, .btn-primary.focus {
  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);
}

.btn-primary.disabled, .btn-primary:disabled {
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-primary:active, .btn-primary.active,
.show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #025aa5;
  background-image: none;
  border-color: #01549b;
}



body {
  display: block;
}

.span3:focus ~ .alert {
  display: none;
}
.span2:focus ~ .alert {
  display: block;
}



.quantity{
  height: 38pt;
  width:38pt;
    font-size: 16pt;
    padding: 6pt;
  margin-top:0pt;
  text-align: center;
  border: 3px solid rgb(11, 6, 85);

}
.productdis{
  max-width:2500pt;
}
    .drawer-background {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(124, 124, 124, 0.541);
        z-index: 100;
        display: none;
        transition: display .2s;
        border: black;

        &.show {
            display: block;
            
            
        }
    }

    .drawer-background.show {
        display: block;
    }

    .drawer {
        width: 95vw;
        height: 90vh;
        background-color: white;
        position: fixed;
        top: -105vw;
        padding: 15px;
        transition: top 1s ;
        z-index: 101;
        overflow-y: scroll;

        &.show {

            position:fixed; 
            top: calc(50% - 375px); // half of width
            left: calc(50% - 810px);
            
        }
    }

    .drawer-close {
        font-size: 2.2rem;
        margin-right: 50%;
        color: rgb(70, 69, 69);
        width: 30px;
        float: right;
        cursor: pointer;
    }

  .containerobject{
    height: 400pt;
    padding-top: 50pt;
  }
.imagebackground{
background-image: linear-gradient(to right,#010513,#30447a );
height:400pt;
width:800pt;
margin-left:100pt;
}
</style>