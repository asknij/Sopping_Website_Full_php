<template>
    <div style="display:flex;flex-direction:row;">
        <div style="display:flex;margin:auto;"><h3>{{this.review.user}}</h3></div>
        <div style="display:flex;margin:auto;width:250pt"><p>{{this.review.comment}}</p></div>
        <div style="display:flex;margin:auto;">
        <div v-for='index in parseInt(this.review.rating)' :key='index' style="margin-left:7pt" ><a href="#"><img src="../images/star-icon.png"></a> </div>
        </div>
    </div>
</template>
<script>
export default 
        {
        
        props: ['review'],
        }
</script>