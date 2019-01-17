import Vue from 'vue'
import Me from './Me'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(Me)
app.$mount()
