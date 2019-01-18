<script>
import { get } from './util'
export default {
  async created () {
    const res = await get('/weapp/demo')
    console.log(123, res)
    // wx.request({
    //   url: config.host + '/wxapp/demo',
    //   success: res => {
    //     console.log(res)
    //   }
    // })
    console.log('小程序登录成功')
  }
}
</script>

<style>
.btn{
  color: white;
  background: #EA5A49;
  margin-bottom: 10px;
  padding-left: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
}
.btn:active{
  background: #FA5A49;
}
</style>
