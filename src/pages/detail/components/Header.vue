<template>
  <div>
    <router-link
      tag="div"
      to="/"
      v-show="showAbs"
      class="header-abs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () { // 页面即将被隐藏或即将变为新的页面时执行
    window.removeEventListener('scroll', this.handleScroll) // 全局事件解绑
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position: absolute
  top: .2rem
  left: .2rem
  width: .8rem
  height: .8rem
  border-radius: .4rem
  background: rgba(0, 0, 0, .8)
  line-height: .8rem
  text-align: center
  .header-abs-back
    color: #fff
    font-size: .4rem
.header-fixed
  z-index: 2
  position: fixed
  top: 0
  right: 0
  left: 0
  height: $headerHeightm
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-fixed-back
    position: absolute
    width: .64rem
    text-align: center
    fonnt-size: .4rem
    top: 0
    left: 0
    color: #fff
</style>
