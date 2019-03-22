<template>
  <div id="app">
    <!--exclude属性取消Detail组件直接从内存中拉取json数据-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
