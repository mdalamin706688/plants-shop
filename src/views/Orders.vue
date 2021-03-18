<template>
 <v-container fluid>
     <v-row>
         <v-col offset-md="1" md="6">
             <h1>Orders</h1>
             <div class="pa-2" id="info">
                 <v-row class="ma-0">
                     <v-col cols="12" md="1" class="pa-2">
                         <p class="font-weight-bold body-1 pt-1 darkgrey--text">
                             Info
                         </p>
                         </v-col>

                         <v-col cols="12" md="5" class="pa-2 pl-5">
                        
                         <v-row align="center">
                             <div id="status_box" class="complete">Completed</div>
                             <span class="font-weight-light caption pl-1">Done</span>
                         </v-row>

                         <v-row align="center">
                             <div id="status_box" class="orange">In-Progress</div>
                             <span class="font-weight-light caption pl-1">Somebody working on it</span>
                         </v-row>

                         <v-row align="center">
                             <div id="status_box" class="incomplete">Not Started</div>
                             <span class="font-weight-light caption pl-1">Not Started yet</span>
                         </v-row>

                         </v-col>

                         <v-col cols="12" md="6" class="pa-2">
                           <v-row>
                               <div id="status_box" class="complete">COMPLETED</div>
                               <div id="status_box" class="orange">In Progress</div>
                               <div id="status_box" class="incomplete">Not Started</div>
                           </v-row>
                           <v-row>
                               <p class="font-weight-light caption pl-1">
                                   <b> Single-Click </b>to switch stage: complete => in progress =>
                                   <b>Double-Click</b>thr box to reset to "not started"
                               </p>
                               <span class="font-weight-light caption pl-1">
                                   <v-icon color="grey">archive</v-icon>
                                   Archive to "hide" it from orders list
                               </span>
                           </v-row>
                     </v-col>
                 </v-row>
             </div>
             <!----orders list area ---->
            <div class="pa-2 mt-1" id="info">
                <p class="font-weight-bold body-1 pa-3 darkgrey--text">
                    ORDERS:
                </p>
                 <v-simple-table id="menu-table">
                     <thead>
                         <tr>
                             <th class="text-left" style="width:10%;">Order mr.</th>
                             <th class="text-left" style="width:10%;">QTY</th>
                             <th class="text-left" style="width:40%">Item</th>
                             <th class="text-left" style="width:10%">Price</th>
                             <th class="text-left" style="width:10%;">Status</th>
                             <th class="text-left" style="width:10%;">Archive</th>
                             <th class="text-left" style="width:10%;">Remove</th>
                         </tr>
                     </thead>
                     <tbody class="font-weight-light">
                         <tr v-for="item in menuItems" :key="item.name">
                             <td>
                                 {{ item.price }}
                             </td>
                             <td>
                                 {{ item.price }}
                             </td>
                             <td>{{ item.name }}</td>
                             <td>
                                 {{ item.price }}
                             </td>
                             <td>
                                 <div id="status_box" class="orange">IN-PROGRESS</div>
                             </td>
                             <td>
                                 <v-btn small text @click="addToBasket(item)">
                                     <v-icon color="darkgrey">archive</v-icon>
                                 </v-btn>
                             </td>
                             <td>
                                 <v-btn small text @click="addToBasket(item)">
                                     <v-icon color="incomplete">delete</v-icon>
                                 </v-btn>
                             </td>
                         </tr>
                     </tbody>
                 </v-simple-table>
             </div>
         </v-col>
         <v-col offset-md="0" md="4">
             <h1>Revenue</h1>
             <div class="pa-2" id="info">
                 Revenue
             </div>
             <div class="pa-2 mt-1" id="info">
                 Completed Orders
             </div>
         </v-col>
     </v-row>
 </v-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { dbMenuAdd } from '../../firebase'

  export default {

     data () {
         return {
             basketDump: [],
             
         }
     },
     beforeCreate() {
          this.$store.dispatch('setMenuItems')
     },
         methods: {
         addToBasket (item) {
         /* if(this.basket.find(itemInArray => item.name === itemInArray.name)) {
             item = this.basket.find(itemInArray => item.name === itemInArray.name)
         }
         else {
             this.basket.push({
                 name: item.name,
                 price: item.price,
                 quantity: 1
             })
         } */
         this.basketDump.push({
             name: item.name,
             price: item.price,
             quantity: 1
         });
         this.$store.commit('addBasketItems', this.basketDump);
         this.basketDump = [];
    },
         increaseQtn(item) {
             item.quantity++
         },
         decreaseQtn(item){
             item.quantity--;

             if (item.quantity === 0) {
                 this.basket.splice(this.basket.indexOf(item), 1)
             }
         }
     },
     computed: {
         basket() {
            // return this.$store.state.basketItems
            return this.$store.getters.getBasketItems
         },
         menuItems() {
             return this.$store.getters.getMenuItems
         },
         subTotal() {
             var subCost = 0;
             for(var items in this.basket) {
                 var individualItem = this.basket[items];
                 subCost += individualItem.quantity * individualItem.price;
             }
             return subCost
         },
         total() {
             var deliveryPrice = 10;
             var totalCost = this.subTotal
             return totalCost + deliveryPrice
         }
     }
  }
</script>

<style lang="scss" scoped>
  #status_box {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 35px;
      width: 90px;
      font-size: 12px;
      border-radius: 2px;
      margin: 5px 0;
      color: map-get($colorz, white);
      text-shadow: 1px 1px 1px #aaa;
  }
</style>