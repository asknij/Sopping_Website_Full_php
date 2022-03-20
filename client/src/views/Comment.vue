<template>
    <div>
        <h1 style="font-style:italic">Comments</h1>
        <CommentView
        v-for="product in items"
        :key="product.id"
        :product="product"
        
        />

        </div>
</template>
<script>
import CommentView from "../components/cart/CommentView.vue"
export default {
    components:{
        CommentView
    },
    
    computed:
    {
        
        items()
        {
            return this.$store.getters.cartitems
        }
    }
}
</script>