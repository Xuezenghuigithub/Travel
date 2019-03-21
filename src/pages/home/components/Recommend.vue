<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img"
             :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/59/594e60a1366e1741.water.jpg_200x200_b1e2d39d.jpg',
          title: '华山',
          desc: '华山论剑，少侠你敢来吗？'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/76/765e4c83bfdd9ae9a3.img.png_200x200_b331b257.png',
          title: '中华郡水上乐园',
          desc: '带给你独一无二的清凉盛宴'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/fc/fce82172e1b43b4e.img.jpg_200x200_22962186.jpg',
          title: '少华山国家森林公园',
          desc: '关中名山，与华山并称“二华”'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    text-indent: .2rem
    background: #eee
  .item
    display flex
    overflow: hidden
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin: .16rem 0 0 .16rem
        background: #ff9300
        color: #fff
        padding: 0 .2rem
        border-radius: .06rem
</style>
