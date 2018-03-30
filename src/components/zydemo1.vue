<template>
  <div class="wrapper">
    <div class="panel">
      <text class="text1">Weex 是一套简单易用的跨平台开发方案，能以 Web 的开发体验构建高性能、可扩展的原生应用。Vue 是一个轻量并且功能强大的渐进式前端框架。</text>
    </div>
    <div class="panel1">
      <text class="lefttext"> 居左边 </text>
    </div>
    <div class="panel1">
      <text class="contertext"> 居中间 </text>
    </div>
    <div class="panel1">
      <text class="righttext"> 居右边 </text>
    </div>
    <div class="panel1">
      <text class="datatext">{{message}}</text>
    </div>
    <div class="panel1">
      <text class="click" @click="onclick" @longpress="onlongpress" @appear="onappear"  @disappear="ondisappear"> 可以点击的text </text>
    </div>
  </div>
</template>


<style scoped>
  /* .wrapper {
    flex-direction: column;
    justify-content: center;
  } */
  .panel {
    width: 600px;
    margin-left: 75px;
    /* 边框 */
    border-width: 2px;
    border-style: solid;
    border-color: #BBB;
    /* 内边距-文字离边框的距离 */
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 50px;
    padding-right: 15px;
    /* 外边距 */
    margin-bottom: 30px;
  }
  .panel1 {
    width: 600px;
    margin-left: 75px;
    /* 边框 */
    border-width: 2px;
    border-style: solid;
    border-color: #286090;
 
    /* 外边距 */
    margin-bottom: 30px;
  }
  
  /* 第一个文本 */
  .text1 {
    /* 指定文本行数。默认值是 0， 代表不限制行数。 */
    /* lines: 1; */

    /* 字体大小和颜色(设置颜色的方法有三种。下面都有写) 字体大小默认值为32px*/
    color: #666666;
    font-size: 32px;
  }
  /* 居左的文本 */
  .lefttext {
    color: #286090;
    font-size: 50px;
    /* 设置文字风格 */
    font-style: italic;
    /* 文字居左的属性 */
    text-align: left;
  }

  /* 居中的文本 */
  .contertext {
    color: rgb(238, 162, 54);
    font-size: 50px;
    /* 字体加粗 */
    font-weight: bold;
    /* 文字中间加划线 */
    text-decoration: line-through;
    /* 文字居中的属性 */
    text-align: center;
  }
  /* 居右的文本 */
  .righttext {
    color: rgba(238, 62, 154, 0.5);
    font-size: 50px;
    /* 文字下面加下划线 */
    text-decoration: underline;
    /* 文字居右的属性 */
    text-align: right;

  }
  /* 可以点击的text */
  .click {
    color: rgb(238, 162, 54);
    font-size: 50px;
    /* 文字居中的属性 */
    text-align: center;
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
        message: '          首尾有空格（使用数据绑定）  '
      }
    },

    // 处理点击事件
    methods: {
      onclick (event) {
        console.log('onclick:', event)
        modal.toast({
          message: '单击',
          duration: 1
        })
      },
      onlongpress (event) {
        console.log('onlongpress:', event)
        modal.toast({
          message: '长按',
          duration: 1
        })
      },
      onappear (event) {
        console.log('onappear:', event)
        modal.toast({
          message: 'text出现',
          duration: 1
        })
      },
      ondisappear (event) {
        console.log('ondisappear:', event)
        modal.toast({
          message: 'text消失',
          duration: 1
        })
      }
    }
  }
</script>