<template>



<div class="card1">
<div class="rightdescription">




 <div class="services-home-page" >
            <div class="row" style="display:flex;flex-direction:row;text-align: justify">
                <div class="col-md-4" style="width:250pt;margin-left:40pt">
                    
                    <h4>User 1</h4>
                    <p>{{this.product.comments1.substring(0,180)}}</p>
                </div>
                <div class="col-md-4" style="width:250pt;margin-left:40pt">
                    
                    <h4>User 2</h4>
                    <p>{{this.product.comments2.substring(0,180)}}</p>
                </div>
                <div class="col-md-4" style="width:250pt;margin-left:40pt">
                    
                    <h4>User 3</h4>
                    <p>""</p>
                </div>
            </div>
      <div>
      <input type="text" v-model="usercomment"/>
      <div>
        <button class="buttonclass" style="margin-left:300px"  >Comment </button> 
      </div>
      </div>
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
                this.$store.commit()
            },

    },
    data: function () {
    return {
        usercomment: null,
        image: this.product.image
    }}
}
</script>

<style>


</style>