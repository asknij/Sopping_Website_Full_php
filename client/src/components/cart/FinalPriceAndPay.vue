<template>

<div class="row justify-content-center" >
        <div class="col-lg-12" style="margin-bottom:100pt">
            <div class="card" >
                <div class="row" style="display:flex;flex-direction:row;height:200pt;">
                    <div class="col-lg-3 radio-group" style="display:flex;flex-direction:column;padding:1pt;width:80pt">
                        <div style="height:70pt"> <img style="width:60pt" class="pay" src="https://i.imgur.com/WIAP9Ku.jpg">
                            <p style="margin:1pt;width:80pt">Credit Card</p>
                        </div>
                        <div style="height:70pt"> <img class="pay" src="https://i.imgur.com/OdxcctP.jpg">
                            <p style="margin:1pt;width:80pt" >Debit Card</p>
                        </div>
                        <div style="height:70pt"> <img class="pay" src="https://i.imgur.com/cMk1MtK.jpg">
                            <p style="margin:1pt;width:80pt">PayPal</p>
                        </div>
                    </div>
                    <div class="col-lg-5" style="display:flex;flex-direction:row;margin:auto">
                        <div class="row px-2" style="display:flex;flex-direction:column ;margin:20pt">
                            <div class="form-group col-md-6" style="width:400pt;="> <label class="form-control-label" >Name on Card  </label> <input type="text" id="cname" name="cname" placeholder="Account Name" style="margin-left:30pt"> </div>
                            <div class="form-group col-md-6" style="width:400pt;="> <label class="form-control-label">Card Number  </label> <input type="text" id="cnum" name="cnum" placeholder="XXXX XXXX XXXX XXXX" style="margin-left:35pt"> </div>
                        </div>
                    </div>
                    <div  style="display:flex;flex-direction:column;">
                        <div style="display:flex;flex-direction:row;">
                            <p style="font-size:12pt">Subtotal </p>
                            <h6 style="margin-top:18pt;;padding-left:53pt;font-weight: bold;font-size:11pt">${{this.$store.getters.Cart_beforediscount.toFixed(2)}}</h6>
                        </div>
                        <div style="display:flex;flex-direction:row;">
                            <p style="font-size:12pt">Discount({{this.$store.getters.getdiscount}}%) </p>
                            <h6 style="margin-top:18pt;padding-left:26pt;font-weight: bold;font-size:11pt">${{this.$store.getters.getdiscountamount.toFixed(2)}}</h6>
                        </div>
                        <div class="row d-flex justify-content-between px-4" id="tax" style="display:flex;flex-direction:row;">
                            <p style="font-size:12pt">Total (tax excluded) </p>
                            <h6 style="margin-top:18pt;font-weight: bold;font-size:11pt" >${{cart_total.toFixed(2)}}</h6>
                        </div> <button class="btn-block btn-blue" @click="savesales()"> <span> <span id="checkout">Checkout :</span> <span id="check-amt">${{cart_total.toFixed(2)}}</span> </span> </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

</template> 
<script>
import axios from 'axios'
export default {
    computed:{
        cart_total(){
            return this.$store.getters.Cart_total
        },
        Date_calc(){
            var currentDate = new Date();
            console.log(currentDate);
  
            var formatted_date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
            return formatted_date;
     
        }
    },
    
    methods:{


        savesales(){
         console.log("inside save");
      axios.post("http://localhost/Shopping_website_PHP/saleSave.php", { 
          user: this.$store.getters.getuser,
          total:this.$store.getters.Cart_total.toFixed(2),
          date: this.Date_calc
        }) 

        .then((response) => { 
        
          console.log(response.data);  

        }) 

        .catch((error) => { 

          console.log(error); 

        });



        axios.post("http://localhost/Shopping_website_PHP/removeusercart.php", { 
          user: this.$store.getters.getuser,
        }) 

        .then((response) => { 
        
          console.log(response.data);  

        }) 

        .catch((error) => { 

          console.log(error); 

        });
        this.$store.commit('updatecart');
        this.$router.push('/thankyou');

        },


    


    }
    }
</script>
