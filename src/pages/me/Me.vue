<template>
  <div class="container">
    <div class="userinfo">
      <img
        :src="userinfo.avatarUrl"
        alt=""
      >
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button
      open-type="getUserInfo"
      lang="zh_CN"
      @click="doLogin"
    >获取用户信息</button>
    <button @click="scanBook" class="btn">添加图书</button>
  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import { showSuccess } from '@/util'
import config from '@/config'
import YearProgress from '@/components/YearProgress'
export default {
  data () {
    return {
      userinfo: {}
    }
  },
  created () {
    this.userinfo = wx.getStorageSync('userinfo')
    console.log(this.userinfo)
  },
  methods: {
    doLogin () {
      qcloud.setLoginUrl(config.loginUrl)
      qcloud.login({
        success: res => {
          console.log('登录成功', res)
          showSuccess('登录成功')
          wx.setStorageSync('userinfo', res)
        },
        fail: err => {
          console.error('登录失败', err)
        }
      })
    },
    scanBook () {
      wx.scanCode({
        success: res => {
          console.log(res)
        }
      })
    }
  },
  components: {
    YearProgress
  }
}
</script>

<style scoped lang="scss">
.container {
  padding: 0 30rpx;
  .userinfo {
    margin-top: 100rpx;
    text-align: center;
    img {
      width: 150rpx;
      height: 150rpx;
      margin: 20rpx;
      border-radius: 50%;
    }
  }
}
</style>
