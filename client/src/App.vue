
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


<body class="main-layout" style="height:150px;">
	<!-- header section start -->
	<div class="header_section header_main" >
		<div class="container" style="padding-bottom:13pt" >
			<div class="row">
				<div class="col-sm-3" style="height:30px">
					<div class="logo1" style="margin-top:-80pt"><a href="#"><img src="../src/images/logo.png"></a></div>
				</div>
				<div class="col-sm-9" >
					<nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                           <router-link :class="{active : $router.name==='Home'}" to="/"><a class="nav-item nav-link" ><i class="fa fa-fw fa-home"></i>Home</a></router-link>
                           <a class="nav-item nav-link" style="float:right;"><button @click="logout()" style="height: 22pt; width:22pt; background-color:transparent"><img  src="../src/components/images/logout.png" style="height:22pt; "></button></a>
                           <router-link :class="{active : $router.name==='Cart'}"  to="/cart" style="float:right" ><a class="nav-item nav-link last" ><img  src="../src/images/shop_icon.png" style="height:22pt; "></a></router-link>
                            <router-link to="/login" :class="{active : $router.name==='Login' }" style="float:right"><a class="nav-link" style="float:right; padding-left:2pt">{{$store.getters.getuser}}</a><img class="nav-image " :src="require(`@/components/images/${image}`)"  style="float:right"/></router-link>
                            
                        </div>
                    </div>
                    </nav>
				</div>
			</div>
		</div>
	</div>
</body>
<router-view/>
<!--<div class="navbar">
  <div id="nav">
    <a><router-link :class="{active : $router.name=== 'Comment'}" to="/Comment"><i class="fa fa-comments-o" aria-hidden="true"></i>Comment</router-link> </a>
    <img  class="userimage" style="float:right" :src="require(`@/components/images/${image}`)"  />
  </div>
</div>
-->
  
  






</template>

<style lang="scss">

@import '../src/css/style.css';
@import url(https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
.logo1{
  height: 100pt;
  max-width: 100pt;
  margin-left: 50%;
  
}
.banner{
  background-image: url("../src/images/banner2.jpg");
  background-color: #cccccc;
  height: 600pt;
  width: 100%;
}
.split{
  display: flex;
  flex-direction: row;
}
</style>

<script>

export default {
  mounted(){
      this.$store.commit('updatecart')
  },
  methods:{
     logout(){
       this.$store.commit('logoutuser')
      this.$store.commit('updatecart')
      
      },
    
   
  },
  data: function () {
    return{
          image : this.$store.getters.getimage
    }
  },

}
</script>
