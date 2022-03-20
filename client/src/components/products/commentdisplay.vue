<template>

    <div style="display:flex;flex-direction:row;font-style:italic;margin-top:-30pt">
        <div style="display:flex;margin:auto;"><h3>USER</h3></div>
        <div style="display:flex;margin:auto;max-width:300pt"><h3>COMMENT</h3></div>
        <div style="display:flex;margin:auto"><h3>STAR</h3></div>
        
    </div>
<hr>
    <div style="display:flex;flex-direction:column;"> 
    <commentcard
      v-for="review in this.$store.getters.getreviews"
      :key="review.id"
      :review="review"  
      />

    </div>
    <hr>
</template>
<script>
import commentcard from "../products/commentcard.vue"
export default {
    components:{commentcard},
    props:['product'],
     data: function(){
            return{
                reviews:[],
                usercomment: null,
            }
        },



}
</script>
