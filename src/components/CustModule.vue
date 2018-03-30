<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting" @click="textClick">自定义的module</text>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  methods: {
    textClick(){
      weex.requireModule("showLoading").showView({"1":"2"})
    }, 
 }
}
</script>

<style scoped>
  .wrapper {
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 10px;
    font-size: 50px;
  }

</style>
