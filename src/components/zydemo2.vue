<template>
  <div class="wrapper">
    <!-- 加载图片必须注意3点
    1.在使用 <image> 之前，请在 native(本机) 侧先接入相应的 adapter 或者 handler（原生凡人图片处理工具）
    (Weex没有提供图片下载的能力，在WXImgLoaderProtocol 定义了一些获取图片的接口, image 组件正是通过 
    WXImgLoaderProtocol 获得并展示图片，开发例如，如果你使用 SDWebImage 作为iOS上的图片 handler，
    你可以使用像 JPEG、PNG、GIF、WebP 等图片格式。)
    2.<image> 必须指定样式中的宽度和高度。
    3.<image> 不支持内嵌子组件。
    -->
    <div>
      <!-- 这是第一张图片resize=缩放图片以完全覆盖<image>区域，可能图片部分看不见src=图片地址 -->
      <image class="image" resize="cover"
        src="https://gw.alicdn.com/tfs/TB1dZ4WowoQMeJjy0FnXXb8gFXa-950-1267.jpg">
      </image>
      <text class="title">cover</text>
    </div>
    <div>
      <!-- contain=缩放图片以完全装入<image>区域，可能背景区部分空白，可能图片部分看不见src=图片地址 -->
      <!-- 是否支持 GIF 取决于 App 内置的图片库 并不是由 Weex SDK 实现的-->
      <image class="image" resize="contain"
        src="https://gw.alicdn.com/tfs/TB1MRzvdwMPMeJjy1XdXXasrXXa-400-300.gif">
      </image>
      <text class="title">contain</text>
    </div>
    <div>
      <!-- stretch=按照<image>区域的宽高比例缩放图片src=图片地址，texe和image在一个容器里面。所以text在图片上面显示 -->
      <!--  给图片点击事件名字loadImage。图片加载完成走这个方法onImageLoad。一开始显示text文本。图片没值。点击以后text没值。图片展示图片.-->
      <image class="image" @click="loadImage" @load="onImageLoad" resize="stretch" :src="imageurl">
      <!-- <text class="title">{{message}}</text> -->
      </image>
      <text class="title">{{message}}</text>

    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    padding: 30px;
    justify-content: space-around;
    align-items: center;
  }
  .title {
    width: 500px;
    text-align: center;
    font-size: 60px;
    color: rgb(0, 180, 255);
  }
  .image {
    width: 500px;
    height: 280px;
    border-color: #41B883;
    border-style: solid;
    border-width: 2px;
    background-color: #666666;
      /* 圆角 */
    /* border-radius: 40px; */
  }
</style>

<script>

// 提示框
  const modal = weex.requireModule('modal')
  export default {

    // 处理数据的地方
    data () {
      return {
        // 动态获取数据
        message: 'stretch点击加载图片',
        imageurl: ''
      }
    },
    methods: {
      // 给图片加的点击方法
      loadImage () {

         if (!this.imageurl) {
              this.message = '图片加载完成',
              this.imageurl = 'https://gw.alicdn.com/tfs/TB1dZ4WowoQMeJjy0FnXXb8gFXa-950-1267.jpg'
         }
      },

      // 图片加载完成调用的方法
      onImageLoad (event) {
        if (event.success) {
           modal.toast({
            message: '图片加载完成',
            duration: 2
           })
        }
      }
    }
  }
</script>