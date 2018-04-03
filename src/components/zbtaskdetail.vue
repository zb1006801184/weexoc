<template>
  <list>
    <cell class="firstCell">
        <text class="titleStyle">{{userInfo.title}}</text>
        <!-- 中间用户信息部分 -->
        <div class="topDiv1">
           <div class="headLeft1">
               <image  :src = userInfo.logo  style="width:88px;height:88px;"  class="headImage1"/>
               <div class="headName1"> 
                   <text class="nameStyle">{{userInfo.memberName}}</text>
                   <text class="timeStyle">22小时前</text>
               </div>
           </div>
           <div class="rightDivStyle">
            <text style="width: 118px;height: 56px; font-size: 24px;background-color: #FB3C3C;border-radius: 6px;text-align: center;justify-content:center;color: white; ">关注</text>
           </div>
        </div>
        <!-- 文字内容部分 -->
        <text class="contentTextStyle">{{userInfo.contentList[0].content}}</text>
        <text class="moneyStyle">悬赏：{{userInfo.reward}}个长城币</text>
        <div class="contentMoreImageStyle">
            <image :src = userInfo.imageUrl[0] class="MoreImageCell" style="margin-left:30px"/>
            <image :src = userInfo.imageUrl[0] class="MoreImageCell" style="margin-left:10px"/>
            <image :src = userInfo.imageUrl[0] class="MoreImageCell" style="margin-left:10px"/>
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
               <image  :src = index.logo style="width:70px;height:70px;"  class="headImage"/>
               <div class="headName"> 
                   <text class="nameStyle">{{index.memberName}}</text>
                   <text class="timeStyle">22小时前</text>
               </div>
           </div>
          
           <div class="rightStyle">
                <image :src="zan" style="width:32px;height:32px;margin-right:10px;" />
                <text class="numberStyle">{{index.fabulousSum}}</text>
                <text class="numberStyle">举报</text>
           </div>
        </div>
        <div >
            <text class="cellContentStyle">{{index.content}}</text>
        </div>
        <div class="bottomStyle">
            <text class="bottomCommentStyle">{{index.report}}评论</text>
            <text class="bottomeTimeStyle">2012-12-12</text>
        </div>
        <div style="height:30px;"></div>
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
    margin-top: 10px;
  }
.headLeft1 {
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
  }
.headName1 {
    height: 88px;
    width: 160px;
    justify-content: center;
    align-content: center;
    margin-left: 10px;
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
    margin-left:10px ;
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
      top: 50px;
      left: 30px;
  }
.contentMoreImageStyle{
      height: 152px;
      top: 70px;
      flex-direction: row;
  }
.MoreImageCell{
      width: 224px;
      height: 152px;
      background-color: saddlebrown;
      border-radius: 8px;
  }
  .bottomDivStyle{
      flex-direction: row;
      justify-content: space-around;
  }
  .bottomButtonStyle{
      background-color: saddlebrown;
      top: 114px;
      width: 224px;
      height: 78px;
      border-radius: 39px;
  }
.panel {
    width: 750px;
    /* height: 264px; */
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
      margin-top: 20px;
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
      /* justify-content: center; */
      /* align-content: center; */
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
  .cellContentStyle {
      color: #444444;
      font-size: 26px;
      margin-top: 30px;
      margin-left: 120px;
  }
</style>
<script>
var stream = weex.requireModule('stream');
var POST_URL = 'http://192.168.50.251:18181/mobile/releaseConsultation/selectConsultationByTitle?publishMemberId=243&consultationType=2&consultationId=1770';
var COMMENT_URL = 'http://192.168.50.251:18181/mobile/comment/selectAllComment?consultationId=1770';
export default {
 data () {
      return {
        zan: 'assets:zan',
        lists: ['1', '2', '3', '4','5','6','7'],
        userInfo:{},
      }
    },
created () {
    this.reloadData(POST_URL,res=>{
    this.userInfo = res.data.data;
    // console.log('信息数据'+JSON.stringify(this.userInfo));
    });
    this.reloadData(COMMENT_URL,res=>{
    this.lists = res.data.data;
    // console.log('评论数据'+JSON.stringify(this.lists));
    });
},
 methods: {
    //网络请求
    //加载数据
    reloadData(url, callback) {
        return stream.fetch({
            method: 'POST',
            url: url,
            type: 'json'
        }, callback);
    },
}

}
</script>
