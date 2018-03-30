<template>
  <list>
    <cell v-for="index in lists" :key="index">
      <div class="panel">
        <div class="topDiv">
           <div class="headLeft">
               <image  style="width:70px;height:70px;"  class="headImage"/>
               <div class="headName"> 
                   <text class="nameStyle">浅浅最爱笑</text>
                   <text class="timeStyle">22小时前</text>
               </div>
           </div>
          
           <div class="rightStyle">
                <image :src="zan" style="width:32px;height:32px;margin-right:10px;" />
                <text class="numberStyle">999</text>
                <text class="numberStyle">举报</text>
           </div>
        </div>
        <div class="contentText">
            <text>这篇文章对我很有用，我希望有更多的优秀方法可以展示给大家，供大家学习</text>
        </div>
        <div class="bottomStyle">
            <text class="bottomCommentStyle">324评论</text>
            <text class="bottomeTimeStyle">2012-12-12</text>
        </div>
      </div>
    </cell>
  </list>
</template>

<script>
  export default {
    data () {
      return {
        zan: 'assets:zan',
        lists: [
          '1', '2', '3', '4','5','6','7'
        ]
      }
    }
  }
</script>

<style scoped>

  .panel {
    width: 750px;
    height: 264px;
    border-width: 1px;
    border-style: solid;
    border-color: #eeeeee;
    background-color: white;
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
  .topDiv {
      flex-direction: row;
      height: 90px;
      justify-content: space-between;
  }
  .headImage {
      background-color: tomato;
      margin-left:30px ;
      margin-top: 30px;
      border-radius: 35;
  }
  .headLeft {
      flex-direction: row;
      justify-content: space-around;
      /* padding-top: 30px; */
  }
  .headName {
      height: 90px;
      width: 160px;
      justify-content: center;
      align-content: center;
      margin-left: 20px;
      margin-top: 20px;
  }
  .contentText {
      margin-left: 120px;
      margin-top: 30px;
      font-size: 26;
      color: #444444;
  }
  .nameStyle {
      font-size: 28px;
      color:#B98080;
  }
  .timeStyle {
      font-size: 20px;
      color: #999999;
  }
  .rightStyle {
      width: 200px;
      height: 40px;
      flex-direction: row;
      margin-top: 50px;
  }
  .numberStyle {
      font-size: 26px;
      color: #bbbbbb;
      margin-right: 20px;
  }
  .buttonStyle {
      margin-right: 10px;
      background-color: #41B883;
  }
  .bottomStyle {
      margin-left: 120px;

      flex-direction: row;
      margin-top: 20;
  }
  .bottomCommentStyle {
      color: #999999;
      font-size: 20px;
  }
  .bottomeTimeStyle {
      color: #999999;
      font-size: 20px;
      margin-left:40px;
  }
</style>
