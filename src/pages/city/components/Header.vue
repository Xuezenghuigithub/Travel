<template>
<div class="header">
  城市选择
  <router-link to="/">
  <div class="iconfont header-back">&#xe624;</div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    height: $headerHeightm
    line-height: $headerHeight
    text-align: center
    overflow: hidden
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-back
      position: absolute
      width: .64rem
      text-align: center
      fonnt-size: .4rem
      top: 0
      left: 0
      color: #fff
</style>
