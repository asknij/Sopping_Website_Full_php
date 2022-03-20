<template>
    <div class="drawer-background" :class="{'show': active.productdrawerstate}" @click="$emit('closeDrawer')" />
    <div class="drawer" :class="{'show': active.productdrawerstate}">
        <div class="drawer-close" @click.prevent="$emit('closeDrawer')">
            X
        </div>
        <div v-if="product" class="product-details">
            <h3 class="text-center">{{ product.name }}</h3>
            <p class="description">{{ product.description }}</p>
            <h3 class="text-center">${{ product.price.toFixed(2) }}</h3>

            <div class="cart-total" v-if="product_count">
                <h3>In Cart</h3>
                <h4>{{ product_count }}</h4>
            </div>
        
            
        <div class="button">
        <button class="add" @click="add()">Add</button>
        <button class="remove" @click="remove()">Remove</button>
        </div>
        </div>
    </div>
</template>



<script>
    export default {
        props: ['product', 'active'],
        data() {
            return {

            }
        },
        computed: {

            product_count() {
                return this.$store.getters.productQuantity(this.product)
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
            }
        }
    }
</script>
