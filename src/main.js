import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import store from './store'
import router from "./router"

import counter from "./components/counter/counter.vue"
import show from "./components/counter/show.vue"
import iButton from "./components/counter/iButton.vue"
Vue.component("show", show);
Vue.component("counter", counter);
Vue.component("iButton", iButton);


import mains from "./components/todolist/mains.vue";
import showS from "./components/todolist/showS.vue";
import todolist from "./components/todolist/todolist.vue";
import allbutton from "./components/todolist/allbutton.vue";
Vue.component("mains", mains);
Vue.component("showS", showS);
Vue.component("todolist", todolist);
Vue.component("allbutton", allbutton);

// import todoList from "./components/todos/todoList.vue";
// import addTodo from "./components/todos/addTodo.vue";
// import todos from "./components/todos/todos.vue";
// import filters from "./components/todos/filters.vue";
// Vue.component("todoList", todoList);
// Vue.component("addTodo", addTodo);
// Vue.component("todos", todos);
// Vue.component("filters", filters);

import mainss from "./components/shopping/mainss.vue"
import shoptable from "./components/shopping/shoptable.vue"
import allcount from "./components/shopping/allcount.vue"
Vue.component("mainss", mainss);
Vue.component("shoptable", shoptable);//注册
Vue.component("allcount", allcount);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  el:"#app",
  render: h => h(App)
})
