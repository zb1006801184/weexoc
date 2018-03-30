//
//  BaseViewController.h
//  weexios
//
//  Created by 朱标 on 2018/3/28.
//  Copyright © 2018年 zhubiao. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <WeexSDK/WXSDKInstance.h>
#import <WeexSDK/WeexSDK.h>
#import <SocketRocket/SocketRocket.h>

@interface BaseViewController : UIViewController
@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;
@property (nonatomic, assign) CGFloat weexHeight;
@property (nonatomic,assign) CGFloat weexFrameY;
@property (nonatomic, strong) SRWebSocket *hotReloadSocket;

/**
 加载的JS名称
 */
@property (nonatomic, copy) NSString *bundlejsName;

/**
 渲染方法
 */
- (void)render;
@end
