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
</style>
