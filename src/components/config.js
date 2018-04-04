
var stream = weex.requireModule('stream');

export default {
    tabTitles: [
      {
        title: '关注',
        },
      {
        title: '推荐',
        },  
     {
        title: '金融',
        },  
     {
        title: '咨询动态',
        },  
    {
        title: '长城提问',
        badge: 5
        },
    ],
    tabStyles: {
      bgColor: '#FFFFFF',
      titleColor: '#787888',
      activeTitleColor: '#F44B50',
      activeBgColor: '#FFFFFF',
      isActiveTitleBold: true,
      iconWidth: 70,
      iconHeight: 70,
      width: 140,
      height: 74,
      fontSize: 30,
      hasActiveBottom: true,
      activeBottomColor: '#F44B50',
      activeBottomHeight: 6,
      activeBottomWidth: 30,
      textPaddingLeft: 10,
      textPaddingRight: 10
    },
    // 使用 iconfont 模式的tab title配置
    tabIconFontTitles: [
      {
        title: '首页',
        codePoint: '\ue623'
      },
      {
        title: '特别推荐',
        codePoint: '\ue608'
      },
      {
        title: '消息中心',
        codePoint: '\ue752',
        badge: 5
      },
      {
        title: '我的主页',
        codePoint: '\ue601',
        dot: true
      }
    ],
    tabIconFontStyles: {
      bgColor: '#FFFFFF',
      titleColor: '#666666',
      activeTitleColor: '#3D3D3D',
      activeBgColor: '#FFFFFF',
      isActiveTitleBold: true,
      width: 160,
      height: 120,
      fontSize: 24,
      textPaddingLeft: 10,
      textPaddingRight: 10,
      iconFontSize: 50,
      iconFontColor: '#333333',
      iconFontMarginBottom: 8,
      activeIconFontColor: 'red',
      iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
    },
  //网络请求
        wxReloadData(url, params,callback) {
          return stream.fetch({
            method: 'POST',
            url: url,
            type: 'json',
            body:this.toParams(params)
            }, callback);
        },
    //拼接地址
        toParams(obj) {
          var param = ""
          for(const name in obj) {
              if(typeof obj[name] != 'function') {
                  param += "&" + name + "=" + encodeURI(obj[name])
              }
          }
          return param.substring(1)
        }
  
  }