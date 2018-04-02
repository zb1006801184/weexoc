<template>
  <wxc-tab-page ref="wxc-tab-page"
                :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                title-type="iconFont"
                :tab-page-height="tabPageHeight"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
    <list v-for="(data,index) in tabList"
          :key="index"
          class="item-container"
          :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
      <cell class="border-cell"></cell>
      <cell v-for="(dicModel,key) in data"
            class="cell"
            :key="key">
             <!-- 第一种cell  无图模式 -->
        <wxc-pan-item :url="url" 
                      @wxcPanItemClicked="wxcPanItemClicked"
                      @wxcPanItemPan="wxcPanItemPan">
            <div class="contentStyle" v-if="dicModel===2 ? true:false">
                <text class="contextStyle">手机每天充电，一定要记得避开这4大误区1</text>
                <text class="bottomTextStyle">泡芙小姐   869评论   1小时前</text>
            </div>
        </wxc-pan-item>
             <!-- 第二种cell  单图模式-->
            <div class="contengImageCell" v-if="dicModel===2 ? true:false">
                <text class="contextStyle" >手机每天充电，一定要记得避开这4大误区2</text>
                <image :src="'assets:zan'" class="contentImageStyle" />
                <text class="bottomTextStyle">泡芙小姐   869评论   1小时前</text>
            </div>
             <!-- 第三种cell  三图模式 -->
            <div class="contentMoreImageCell" v-if="dicModel===2 ? true:false">
                <text class="contextStyle" >手机每天充电，一定要记得避开这4大误区3</text>
                <div class="contentMoreImageStyle">
                    <image class="MoreImageCell" style="margin-left:30px"/>
                    <image class="MoreImageCell" style="margin-left:10px"/>
                    <image class="MoreImageCell" style="margin-left:10px"/>
                </div>
                <text class="bottomTextStyle">泡芙小姐   869评论   1小时前</text>         
            </div>
      </cell>
    </list>
  </wxc-tab-page>
</template>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
  }

  .border-cell {
    background-color: #f2f3f4;
    width: 750px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
  }

  .cell {
    background-color: #ffffff;
  }

  .content{
    width:750px;
    height:128px;
    border-bottom-width:1px;
    align-items: center;
    justify-content: center;
  }
  /* 文字内容布局 */
  .contextStyle{
      font-size: 32px;
      color: #222222;
      margin-top: 30px;
      margin-left: 30px;
      
  }
  /* cell底部信息布局 */
  .bottomTextStyle{
      color: #838383;
      font-size: 22px;
      margin-left: 30px;
      margin-top: 30px;
  }
  /* 单图 */
  .contentStyle{
      width: 750px;
      height: 158;
      border-bottom-width:1px;
      border-bottom-color: #F2F2F3;
  }
  .contengImageCell{
      width: 750px;
      height: 488;
      border-bottom-width:1px;
      border-bottom-color: #F2F2F3;
  }
  .contentImageStyle{
      /* width: 750 - 60; */
      height: 300px;
      margin-left: 30px;
      margin-top: 30px;
      margin-right: 30px;
      background-color: skyblue;
  }
  .contentMoreImageStyle{
      height: 152px;
      margin-top: 30px;
      flex-direction: row;
  }
  .contentMoreImageCell{
      width: 750px;
      height: 334px;
      border-bottom-width:1px;
      border-bottom-color: #F2F2F3; 
  }
  .MoreImageCell{
      width: 224px;
      height: 152px;
      background-color: saddlebrown;
  }
</style>
<script>
  const dom = weex.requireModule('dom');
  import { WxcTabPage, WxcPanItem, Utils, BindEnv } from 'weex-ui';
  import Config from './config'

  export default {
    components: { WxcTabPage, WxcPanItem },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles,
      tabList: [],
      demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      tabPageHeight: 1334
    }),
    created () {
      this.tabPageHeight = Utils.env.getPageHeight();
      this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
      Vue.set(this.tabList, 0, this.demoList);
    },
    methods: {
      wxcTabPageCurrentTabSelected (e) {
        const self = this;
        const index = e.page;
        /* Unloaded tab analog data request */
        if (!Utils.isNonEmptyArray(self.tabList[index])) {
          setTimeout(() => {
            Vue.set(self.tabList, index, self.demoList);
          }, 100);
        }
      },
      wxcPanItemPan (e) {
        if (BindEnv.supportsEBForAndroid()) {
          this.$refs['wxc-tab-page'].bindExp(e.element);
        }
      },
    //   cell的点击事件
      wxcPanItemClicked(e){
          console.log("123"+e);
         weex.requireModule("showLoading").pushCustModuleVC({"VC":"8"})
      },
    }
  };
</script>
