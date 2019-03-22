<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img"
               :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        paginationType: 'fraction', // 分式分页器
        observeParents: true, // 监听到父级元素DOM结构发生变化时自我刷新
        observer: true // 监听到本元素DOM结构发生变化时自我刷新
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column // 垂直排列
    justify-content: center // 排列居中
    z-index: 99
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        position absolute
        left: 0
        right: 0
        margin: auto
        height: .3rem
        bottom: -1rem
</style>
