import Vue from 'vue'
import Comments from './Comments'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(Comments)
app.$mount()
