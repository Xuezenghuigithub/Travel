<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_600x330_38b03512.jpg">
      <div class="banner-info">
        <div class="banner-title">华山(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe674;</span>29</div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    >
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1503/ea/ea77c45da747ec88.img.jpg_r_800x800_474b122c.jpg',
        'http://img1.qunarzz.com/sight/p0/1504/78/78f1b7afe860c34a.water.jpg_r_800x800_da502abc.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0,  .8)) // 底部渐变
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      height: .32rem
      margin-top: .14rem
      padding: 0 .4rem
      line-height: .4rem
      border-radius: .2rem
      background: rgba(0,0,0,.8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
