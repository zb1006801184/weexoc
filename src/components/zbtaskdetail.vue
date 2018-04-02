<template>
  <list>
    <cell class="firstCell">
        <text class="titleStyle">怎么样用手机拍出丁达尔光的效果怎么样用手机拍出丁达尔光的效果？</text>
        <!-- 中间用户信息部分 -->
        <div class="topDiv1">
           <div class="headLeft1">
               <image  style="width:88px;height:88px;"  class="headImage1"/>
               <div class="headName"> 
                   <text class="nameStyle">浅浅最爱笑</text>
                   <text class="timeStyle">22小时前</text>
               </div>
           </div>
           <div class="rightDivStyle">
            <text style="width: 118px;height: 56px; font-size: 24px;background-color: #FB3C3C;border-radius: 6px;text-align: center;justify-content:center;color: white; ">关注</text>
           </div>
        </div>
        <!-- 文字内容部分 -->
        <text class="contentTextStyle">给手机充电是我们每天必须要做的事情，也许你觉得拿起充电器随便冲一下就搞定了，@马云 真的是这样吗?其实不然，很多朋友的充电方式</text>
        <text class="moneyStyle">悬赏：4个长城币</text>
        <div class="contentMoreImageStyle">
            <image class="MoreImageCell" style="margin-left:30px"/>
            <image class="MoreImageCell" style="margin-left:10px"/>
            <image class="MoreImageCell" style="margin-left:10px"/>
        </div>
        <div class="bottomDivStyle">
            <image class="bottomButtonStyle"/>
            <image class="bottomButtonStyle"/>

        </div>
    </cell>
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
<style>
.firstCell{
    height: 800px;
}
.titleStyle{
    height: 98px;
    color: #222222;
    font-size: 38px;
    lines:2;
    margin-left: 30px;
    margin-top: 40px;
    margin-right: 30px;
}
.userInfoStyle{
    height: 88px;
}
 .topDiv1 {
    flex-direction: row;
    height: 88px;
    justify-content:space-between;
    align-items: center;
    margin-top: 30px;
  }
.headLeft1 {
    flex-direction: row;
    justify-content: space-around;
    margin-left: 30px;
  }
.headName1 {
    height: 88px;
    width: 160px;
    justify-content: center;
    align-content: center;
    margin-left: 20px;
  }
.nameStyle1{
    font-size: 28px;
    color:#B98080;
  }
.timeStyle1{
    font-size: 20px;
    color: #999999;
  }
.headImage1{
    background-color: blue;
    margin-left:30px ;
    border-radius: 44;
  }
  .rightButton{
    width: 118px;
    height: 56px;
    font-size: 24px;
    background-color: #FB3C3C;
    border-radius: 6px;
    text-align: center;
    justify-content:center;
    color: white;
  }
  .rightDivStyle{
      justify-content: center;
      align-items: center;
      max-width: 118px;
      height: 58px;   
      margin-right: 30px;
  }
  .contentTextStyle{
      color: #666666;
      font-size: 28px;
      left: 30px;
      top: 30px;
      margin-right: 30px;
  }
  .moneyStyle{
      color: #ffae00;
      font-size: 28px;
      top: 30px;
      left: 30px;
  }
.contentMoreImageStyle{
      height: 152px;
      top: 50px;
      flex-direction: row;
  }
.MoreImageCell{
      width: 224px;
      height: 152px;
      background-color: saddlebrown;
  }
  .bottomDivStyle{
      flex-direction: row;
      justify-content: space-around;
  }
  .bottomButtonStyle{
      background-color: saddlebrown;
      top: 94px;
      width: 224px;
      height: 78px;
      border-radius: 39px;
  }
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
