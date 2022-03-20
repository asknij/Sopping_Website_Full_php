<template >

<div >
<form  method="post" class="form1" @submit.prevent="validate" >
  <div class="imgcontainer">
    <img src="@/components/images/avathar.png" alt="Avatar" class="avatar">
  </div>

  <div class="container" style="display:flex;flex-direction:column;margin-left:270pt;">
    <label for="uname" style="color:white;font-size:16pt;margin-left:190pt"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" v-model="username" required >

    <label for="psw" style="color:white;font-size:16pt;margin-left:190pt"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" v-model="pass" required>

    <button class="button1" type="submit" style="font-size:18pt;margin-top:20pt" >Login</button>
  </div>
  
</form>
</div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            username: null,
            pass: null,
            image: null
        }
    },
    methods:{

 validate() { 
      axios.post("http://localhost/Shopping_website_PHP/user.php", { 

          name: this.username, 

          password: this.pass, 
  

        }) 

        .then((response) => { 

          console.log(response.data); 

          if(response.data === "True")
          {
            console.log(response.data)
            
            this.$store.commit('changeuser',this.username)
            this.$store.commit('updatecart')
            this.$router.push('/')
          }

        }) 

        .catch((error) => { 

          console.log(error); 

        }); 

    },  

    }
}
</script>
<style>
.form1 {
    margin: auto;
    width: 100%;
    height: 100%;
    border: solid rgb(209, 206, 206);
}

input[type=text], input[type=password] {
  width: 49%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
.button1 {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 49%;
}

/* Add a hover effect for buttons */
.button1:hover {
  opacity: 0.8;
}


/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 10px 0 -70px 0;
}

/* Avatar image */
img.avatar {
  margin-top:180pt;
  width: 10%;
  border-radius: 20%;
}

/* Add padding to containers */
.container {
  padding: 70pt;
}

.form1{
background-image: url("../b.jpg");
 background-color: #cccccc;
 background-size: cover;
}



</style>