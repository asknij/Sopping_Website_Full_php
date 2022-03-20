<template>

<div style="width:900pt;margin-left:150pt">

<div class="container px-4 py-5 mx-auto"  style="padding:30pt">
    <div class="row d-flex justify-content-center" style="display:flex;flex-direction:row;margin:auto">
                    <div >
                    <h4 style="font-size:18pt">Shopping Bag</h4></div>
                    
                    <div style="display:flex;flex-direction:row;margin-left:200pt">
                    <div style="display:flex;flex-direction:row;margin-left:130pt;"><h6 style="font-size:14pt">Format</h6></div>
                    <div style="display:flex;flex-direction:row;margin-left:130pt;"><h6 style="font-size:14pt">Quantity</h6></div>
                    <div style="display:flex;flex-direction:row;margin-left:130pt;"><h6 style="font-size:14pt">Price</h6></div></div>      

            </div>
        </div>

    <div style="margin-top:10pt;padding:0pt">
        <cartItemDisplay
        v-for="product in items"
        :key="product.id"
        :product="product"
        
        />

        <FinalPriceAndPay

        />
    </div>
 </div>
</template>
<script>
import cartItemDisplay from "../components/cart/cartItemDisplay.vue"
import FinalPriceAndPay from "../components/cart/FinalPriceAndPay.vue"
export default {
    components:{
        cartItemDisplay,FinalPriceAndPay
    },
    computed:
    {
        
        items()
        {
            return this.$store.getters.cartitems
        }
    },
    mounted(){
        this.$store.commit('updatecart');
    }
}
</script>



