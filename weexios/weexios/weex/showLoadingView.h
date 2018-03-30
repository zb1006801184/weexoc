//
//  showLoadingView.h
//  PuJiTown
//
//  Created by 朱标 on 2018/3/27.
//  Copyright © 2018年 yst.com. All rights reserved.
//  自定义组件的使用

#import <Foundation/Foundation.h>
#import <WeexSDK/WeexSDK.h>
@interface showLoadingView : NSObject<WXModuleProtocol>
- (void)callJS:(NSDictionary *)dic;
@end
