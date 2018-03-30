//
//  BaseViewController.m
//  weexios
//
//  Created by 朱标 on 2018/3/28.
//  Copyright © 2018年 zhubiao. All rights reserved.
//

#import "BaseViewController.h"

@interface BaseViewController ()

@end

@implementation BaseViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    self.view.backgroundColor = [UIColor whiteColor];
    _weexHeight = self.view.frame.size.height - 64;
    _weexFrameY = 64.0;
    //    SRWebSocket *hotReloadSocket = [[SRWebSocket alloc] initWithURL:[NSURL URLWithString:@"ws://169.254.110.18:8082"]];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(notificationRefreshInstance:) name:@"RefreshInstance" object:nil];
    
    _hotReloadSocket = [[SRWebSocket alloc] initWithURL:[NSURL URLWithString:@"ws://169.254.110.18:8081"]];
    _hotReloadSocket.delegate = self;
    [_hotReloadSocket open];
//    [self render];
    
}
- (void)notificationRefreshInstance:(NSNotification *)notification {
    [self refreshWeex];
}
#pragma mark - websocket
- (void)webSocketDidOpen:(SRWebSocket *)webSocket
{
    NSLog(@"123");
}

- (void)webSocket:(SRWebSocket *)webSocket didReceiveMessage:(id)message
{
    if ([@"refresh" isEqualToString:message]) {
        [self render];
    }
    @try {
        NSDictionary * messageDic = [WXUtility objectFromJSON:message];
        NSString *method = messageDic[@"method"];
        if ([method hasPrefix:@"WXReload"]) {
            if ([method isEqualToString:@"WXReloadBundle"] && messageDic[@"params"]) {
                //                self.url = [NSURL URLWithString:messageDic[@"params"]];
            }
            [self render];
        }
        
    }@catch(NSError * error) {
        NSLog(@"error");
    }
}

- (void)webSocket:(SRWebSocket *)webSocket didFailWithError:(NSError *)error
{
    NSLog(@"%@",error);
}


#pragma mark - refresh
- (void)refreshWeex
{
    [self render];
}
- (void)dealloc
{
    //    if (_hotReloadSocket) {
    //        [_hotReloadSocket close];
    //    }
    [_instance destroyInstance];
    [[NSNotificationCenter defaultCenter] removeObserver:self];
    //    _hotReloadSocket = nil;
}

- (void)render
{
    //    [_instance destroyInstance];
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    CGFloat width = self.view.frame.size.width;
    _instance.frame = CGRectMake(self.view.frame.size.width-width, _weexFrameY, width, _weexHeight);
    
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:weakSelf.weexView];
        UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, weakSelf.weexView);
//        [weakSelf initButton];
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
    NSString *url = [NSString stringWithFormat:@"file://%@/%@",[NSBundle mainBundle].bundlePath,self.bundlejsName];
    //
    //    [_instance renderWithURL:[NSURL URLWithString:url] options:@{@"bundleUrl":url} data:nil];
    
    NSURL *URL = [self testURL: [[NSURL URLWithString:url] absoluteString]];
    NSString *randomURL = [NSString stringWithFormat:@"%@%@random=%d",URL.absoluteString,URL.query?@"&":@"?",arc4random()];
    [_instance renderWithURL:[NSURL URLWithString:randomURL] options:@{@"bundleUrl":URL.absoluteString} data:nil];
}

//
- (void)initButton {
    UIButton *button = [[UIButton alloc]initWithFrame:CGRectMake(100, 100, 100, 100)];
    [button addTarget:self action:@selector(buttonClick:) forControlEvents:UIControlEventTouchUpInside];
    button.backgroundColor = [UIColor blackColor];
    [self.view addSubview:button];
    [self.view bringSubviewToFront:button];
}
- (void)buttonClick:(UIButton *)button {
    [self.instance fireGlobalEvent:@"callJS" params:@{@"zzz":@"21"}];
}
- (void)viewDidAppear:(BOOL)animated
{
    [super viewDidAppear:animated];
    [self _updateInstanceState:WeexInstanceAppear];
}

- (void)viewDidDisappear:(BOOL)animated
{
    [super viewDidDisappear:animated];
    [self _updateInstanceState:WeexInstanceDisappear];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    [self _updateInstanceState:WeexInstanceMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (void)_updateInstanceState:(WXState)state
{
    if (_instance && _instance.state != state) {
        _instance.state = state;
        
        if (state == WeexInstanceAppear) {
            [[WXSDKManager bridgeMgr] fireEvent:_instance.instanceId ref:WX_SDK_ROOT_REF type:@"viewappear" params:nil domChanges:nil];
        } else if (state == WeexInstanceDisappear) {
            [[WXSDKManager bridgeMgr] fireEvent:_instance.instanceId ref:WX_SDK_ROOT_REF type:@"viewdisappear" params:nil domChanges:nil];
        }
    }
}

#pragma mark - load local device bundle
- (NSURL*)testURL:(NSString*)url
{
    NSRange range = [url rangeOfString:@"_wx_tpl"];
    if (range.location != NSNotFound) {
        NSString *tmp = [url substringFromIndex:range.location];
        NSUInteger start = [tmp rangeOfString:@"="].location;
        NSUInteger end = [tmp rangeOfString:@"&"].location;
        ++start;
        if (end == NSNotFound) {
            end = [tmp length] - start;
        }
        else {
            end = end - start;
        }
        NSRange subRange;
        subRange.location = start;
        subRange.length = end;
        url = [tmp substringWithRange:subRange];
    }
    return [NSURL URLWithString:url];
}


@end
