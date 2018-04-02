<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting" @click="textClick">自定义的module</text>
    <text class="greeting" @click="pushClick">click to push!</text>
    <text class="greeting" @click="pushOneCellClick">一个cell</text>
    <text class="greeting" @click="pushOneComponentClick">一个原生的cell</text>
    <text class="greeting" @click="lfyClick">李飞燕demo-网络请求</text>
    <text class="greeting" @click="zy1Click">曾勇demo-text</text>
    <text class="greeting" @click="zy2Click">曾勇demo-image</text>
    <text class="greeting" @click="zbClick">4.2任务-zb</text>

    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
const modal = weex.requireModule('modal')
const navigator = weex.requireModule('navigator')
var globalEvent = weex.requireModule('globalEvent')
globalEvent.addEventListener("callJS", function (e) {
  console.log('JS回调了 参数：'+e);
    });

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      logo: 'assets:moren2'
    }
  },

  methods: {
    textClick(){
      weex.requireModule("showLoading").pushCustModuleVC({"VC":"1"})
    },
    //push
    pushClick(){
      navigator.push({
         url:'http://192.168.10.229:8081/dist/next.js',
         animated: 'true'
      })
    },
    //一个cell
    pushOneCellClick(){
      weex.requireModule("showLoading").pushCustModuleVC({"VC":"2"})
    },
    //一个原生的cell
    pushOneComponentClick(){
      weex.requireModule("showLoading").pushCustModuleVC({"VC":"3"})
    },
    lfyClick(){
      weex.requireModule("showLoading").pushCustModuleVC({"VC":"4"})
    },
    zy1Click(){
      weex.requireModule("showLoading").pushCustModuleVC({"VC":"5"})
    },
    zy2Click(){
      weex.requireModule("showLoading").pushCustModuleVC({"VC":"6"})
    },
    zbClick(){
      weex.requireModule("showLoading").pushCustModuleVC({"VC":"7"})
    },
    show(){
        modal.toast({
          message: '展示展示1',
          duration: 2
        })
 },
  
 }
}
</script>

<style scoped>
  .wrapper {
    /* justify-content: center; */
    align-items: center;
    
  }
  .logo {
    width: 424px;
    height: 200px;
    border-radius: 20px;
    background-color: steelblue;
  }
  .greeting {
    text-align: center;
    margin-top: 10px;
    font-size: 50px;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
