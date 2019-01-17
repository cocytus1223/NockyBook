import Vue from 'vue'
import Books from './Books'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(Books)
app.$mount()
