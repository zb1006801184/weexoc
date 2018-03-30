## Commands
###
 one test demo for weex .     main project  for oc  on  weexoc -> weexios
一个简单OC视角 weexDemo  仅公司内部交流。
###   一 、 Weex 自定义组件（JS调用native）
1、创建一个类继承NSObject
2、遵循WXModuleProtocol协议
3、WX_EXPORT_METHOD  暴露方法给JS调用
4、WXSDKEngine注册组件     [WXSDKEngine registerModule:@"showLoading" withClass:[showLoadingView class]];
5、JS中调用        weex.requireModule("showLoading").showView({"1":"2"})
### 二 、    native调用JS

JS中代码：var globalEvent = weex.requireModule('globalEvent');

globalEvent.addEventListener("callJS", function (e) {
console.log('JS回调了');
});

native(oc)代码：   [self.instance fireGlobalEvent:@"callJS" params:@{@“1":@"2"}]
I           备注：WXSDKInstance是实例层对象非应用层对象，所有只能是接收的实例对象才能调用。

###  三、 混编
1、pod ‘WeexSDK'  导入
2、初始化WeexSDK（在AppDelegate）
//基础的配置
[WXAppConfiguration setAppGroup:@"AliApp"];
[WXAppConfiguration setAppName:@"WeexDemo"];
[WXAppConfiguration setAppVersion:@"1.0.0"];
//初始化SDK（initSDKEnvironment新版本的初始化方法名称  之前initSDKEnviroment命名错误开发团队已纠正）
[WXSDKEngine initSDKEnvironment]
//注册自定义视图
a [WXSDKEngine registerComponent:@"MyView" withClass:[MyViewComponent class]];
//注册自定义组件
b [WXSDKEngine registerModule:@"event" withClass:[WXEventModule class]];
//备注：以上俩个注册的区别在于  a是原生的供JS使用和<text/>用法一样    b原生的 给JS调用 调用 调用
//图片下载注册（weex并不提供此功能 需要原生实现 oc视角使用SDWebImage）
[WXSDKEngine registerHandler:[WXNavigationDefaultImpl new] withProtocol:@protocol(WXNavigationProtocol)];
//打印日志  [WXLog setLogLevel: WXLogLevelAll];
3、渲染页面
[_instance destroyInstance];
_instance = [[WXSDKInstance alloc] init];
_instance.viewController = self;
CGFloat width = self.view.frame.size.width;
_instance.frame = CGRectMake(self.view.frame.size.width-width, 0, width, _weexHeight);

__weak typeof(self) weakSelf = self;
_instance.onCreate = ^(UIView *view) {
[weakSelf.weexView removeFromSuperview];
weakSelf.weexView = view;
[weakSelf.view addSubview:weakSelf.weexView];
UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, weakSelf.weexView);
};
_instance.onFailed = ^(NSError *error) {
NSLog(@"failed %@",error);
};

_instance.renderFinish = ^(UIView *view) {
NSLog(@"render finish");
[weakSelf _updateInstanceState:WeexInstanceAppear];
};

_instance.updateFinish = ^(UIView *view) {
NSLog(@"update Finish");
};
NSString *url = [NSString stringWithFormat:@"file://%@/index.js",[NSBundle mainBundle].bundlePath];

[_instance renderWithURL:[NSURL URLWithString:url] options:@{@"bundleUrl":url} data:nil];
4、导入Weex SDK framework功能

1、git clone https://github.com/apache/incubator-weex.git  下载工程
2、编译 之后在  weex/ios/sdk/Products 目录下找到framework  导入自己的工程
###  四、调试
1、pod  'WXDevtool',   '0.7.0', :configurations => [‘Debug']，集成库
2、[WXDevTool setDebug:YES];
[WXDevTool launchDevToolDebugWithUrl:@“ws://30.30.31.7:8088/debugProxy/native"];   地址是二维码地址   官方文档上的描述不清楚    -   二维码地址二维码地址二维码地址
3、在项目目录下输入 weex bug     编译运行项目
4、开始调试
###   五、编写原生组件
1、先以原生的方式实现需要使用的组件
2、实现初始化方法（详情参照CellDemo这个类）
### 六、加载本地的图片
WXImgLoaderProtocol  下载图片的协议方法中直接使用        UIImage *image = [UIImage imageNamed:@“”];加载本地图片   回调给weex使用
1、  //实现加载xcassets 本地资源文件
if ([url hasPrefix:@"assets:"]) {
UIImage *image = [UIImage imageNamed:[url substringFromIndex:7]];
completedBlock(image, nil, YES);
return [WXLoaderOperation new];
}

2、 JS中可以这样直接调用本地资源文件   zan: ‘assets:zan',


3、具体参照imageHelper这个类
