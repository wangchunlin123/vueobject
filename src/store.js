import Vue from 'vue'
import Vuex from 'vuex'
// import store from "./components/shopping/store"
import counter from "./components/counter/store"
import todolist from "./components/todolist/store"
import getname from "./components/app/store"
import shopping from "./components/shopping/store"

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        counter, todolist,getname,shopping
    }
})
