<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination', // 轮播图小圆点
          type: 'bullets',
          clickable: true
        },
        loop: true // 无缝轮播
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: '//img1.qunarzz.com/vc/2a/96/76/d149c7a3a5b113f876f9a66e09.png'
        },
        {
          id: '0002',
          imgUrl: '//img1.qunarzz.com/vc/80/80/1a/72b8f423c33e581ca72fc136da.jpg'
        }]
    }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important

  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 30.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
