<template>
<ul class="list">
  <li class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
  >
    {{ item }}
  </li>
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null // 函数节流
    }
  },
  updated () { // 页面更新时
    this.startY = this.$refs['A'][0].offsetTop // 获取A离Header底部的高度,在此处计算可优化页面性能
  },
  computed: {
    letters () {
      const letters = [] // 字母的数组['A','B','C'...]
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // 函数节流,如果正在执行handleTouchMove，延迟16毫秒再执行；
          // 如果在16毫秒之内再执行，则清除上一次的函数，重新执行
          const touchY = e.touches[0].clientY - 79 // 获取拉取时鼠标距离Header底部的高度
          const index = Math.floor((touchY - this.startY) / 20) // 计算差值，表示到第几个字母
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: #999
</style>
