import { createStore } from 'vuex'
import axios from'axios'
function updateLocalStorage(cart){
  localStorage.setItem('cart',JSON.stringify(cart))
 
}

export default createStore({
  state: {
    userreviews:[],
    cart:[],
    comments:"",
    cartuserbackup:[],
    cartguestbackup:[],
    discountguest:0.1,
    discountregistered: 0.2,
    discount: 0.1,
    user:"Guest",
    userimage:"guestavatar.png"
  },
  getters:{

    productQuantity: state=> product=> {
      const item=state.cart.find(i=> i.productid === product.productid)
      console.log("cart")
      console.log(state.cart)
      if(item) return item.quantity
      else return null
    },
    cartitems: state=> {
      return state.cart
    },
    Cart_total: state=>{
      return state.cart.reduce((a,b)=> a + ((b.price * b.quantity)-(b.price * b.quantity*state.discount)  ),0)
    },
    Cart_beforediscount:state=>{
      return state.cart.reduce((a,b)=> a + ((b.price * b.quantity)  ),0)
    },
    getusername: state=>{
      return state.savedusername
    },
    getpassword: state=>{
      return state.savedpassword
    },
    getuser: state=>{
      return state.user
    },
    getdiscount: state=>{
      return state.discount*100
    },
    getimage: state=>{
      return state.userimage
    },
    getdiscountamount: state=>{
      return state.cart.reduce((a,b)=> a + ((b.price * b.quantity*state.discount)  ),0)
    },
    getid: state=>{
      return state.userreviews.id
    },
    getcomment: state=>{
      return state.userreviews.comment
    },
    getname: state=>{
      return state.userreviews.user
    },
    getreviews: state=>{
      return state.userreviews
    }
    
  },
  mutations: {
    addcart(state,product){
      var temp=1;
      var item = state.cart.find(i=> i.productid === product.productid)
      if (item){
        item.quantity++
        temp=item.quantity
  
        console.log(item.name);
        axios.post("http://localhost/Shopping_website_PHP/quantityUpdateCart.php", { 

          user: state.user,
          quantity: temp,
          productname: product.name,
        }) 

        .then((response) => { 
          
          console.log(response.data); 
           

        }) 

        .catch((error) => { 
          
          console.log(error); 
           

        });


      }else{
        state.cart.push({...product , quantity: 1})
        console.log(product.name);
        axios.post("http://localhost/Shopping_website_PHP/addcart.php", { 

          user: state.user,
          quantity: temp,
          productname: product.name,
        }) 

        .then((response) => { 

          console.log(response.data); 

        }) 

        .catch((error) => { 

          console.log(error); 

        });


      }
      
    },
  
    removecart(state,product ){
      let item = state.cart.find(j=> j.productid === product.productid)
      if(item){
        if(item.quantity > 1){
            item.quantity--

            axios.post("http://localhost/Shopping_website_PHP/quantityUpdateCart.php", { 

          user: state.user, 
          productname: product.name,
          quantity:item.quantity
        }) 

        .then((response) => { 

          console.log(response.data); 

        }) 

        .catch((error) => { 

          console.log(error); 

        }); 
        }
        else {
            state.cart = state.cart.filter(j=> j.productid !== product.productid)

            axios.post("http://localhost/Shopping_website_PHP/removecart.php", { 

          user: state.user, 
          productname:product.name
        }) 

        .then((response) => { 

          console.log(response.data); 

        }) 

        .catch((error) => { 

          console.log(error); 

        }); 
        }
      }
      updateLocalStorage(state.cart)  
    },
    deleteall(state,product){
      let item = state.cart.find(j=> j.id === product.id)
      if(item){
        state.cart = state.cart.filter(j=> j.id !== product.id)
      }
      axios.post("http://localhost/Shopping_website_PHP/removecart.php", { 

          user: state.user, 
          productname: product.name,
        }) 

        .then((response) => { 

          console.log(response.data); 

        }) 

        .catch((error) => { 

          console.log(error); 

        }); 
    },
    updatecart(state)
    {
        console.log(state.user)

        axios.post("http://localhost/Shopping_website_PHP/viewcart.php", { 

          user: state.user, 
        }) 

        .then((response) => { 
          console.log(state.user)
          console.log(response.data); 
          state.cart=response.data;

        }) 

        .catch((error) => { 

          console.log(error); 

        });

      
    },
    changeuser(state,name)
    {
      state.user=name
      state.userimage="avathar.png"
      state.discount=state.discountregistered
      state.cartguestbackup=state.cart
      state.cart=state.cartuserbackup
      
    },
    logoutuser(state)
    {
      state.user="Guest"
      state.userimage="guestavatar.png"
      state.discount=state.discountguest
      state.cartuserbackup=state.cart
      state.cart=state.cartguestbackup
      
    },
    addcomment(state,comments){
      state.userreviews=comments
      console.log("insde fn")
      console.log(state.userreviews)
    },

    


  },
  actions: {
  },
  modules: {
  }
});
