<template>


    <div class="row d-flex justify-content-center border-top" style="display:flex;flex-direction:row;">
        <div class="col-5">
            <div class="row d-flex" style="display:flex;flex-direction:row;">
                <div class="book"> <img :src="require(`@/components/images/${image}`)" class="book-img" style="max-height:100pt;max-width:150pt"> </div>
                    <h6 style="margin-top:60pt;margin-left:20pt;font-size:18pt;width:310pt">{{product.name.substr(0, 23)}}</h6>
            </div>
        </div>
        <div class="my-auto col-7" >
            <div class="row text-right" style="display:flex;flex-direction:row">
                    
                    <div><p style="margin-top:60pt;;font-size:12pt;width:190pt;font-size:16pt">Smart Phone</p></div>

                    <div  style="display:flex;flex-direction:row;margin-top:60pt;width:150pt">
                    <div class=" plus-minus" style="margin-top:-7pt;font-size:20pt"> <span class="vsm-text plus"  @click="add()" >+</span>  </div>
                    <p style="margin-top:0pt;font-size:16pt;width:20pt;text-align:center;margin-right:5pt">{{this.product.quantity}}</p>
                    <div class=" plus-minus" style="margin-top:-30pt;font-size:23pt"><span class="vsm-text minus" @click="remove() " style="margin-top:10pt;">-</span></div>  
                     </div>
                    <div ><h6 style="margin-top:60pt;font-size:15pt;font-style:italic" >${{item_cost.toFixed(2)}}</h6></div>
            </div>
        </div>
    </div>



</template>
<script>
export default {
    props:['product']  ,
    computed:  {
        item_cost(){
            return this.product.price*this.product.quantity
        }
    },
    methods:{
            add(){
                this.$store.commit('addcart',this.product)
            },
            remove()
            {
                this.$store.commit('removecart',this.product)
            },
            deleteall(){
                this.$store.commit('deleteall',this.product)
            }
    },
    data: function () {
    return {
        
        image: this.product.image1
    }}
}
</script>
