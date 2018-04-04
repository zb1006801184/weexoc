//
//  WXTabBar.h
//  weexios
//
//  Created by 朱标 on 2018/4/4.
//  Copyright © 2018年 zhubiao. All rights reserved.
//

#import <UIKit/UIKit.h>
@class WXTabBar;

@protocol WXTabBarDelegate <NSObject>
@optional
- (void)tabBarPlusBtnClick:(WXTabBar *)tabBar;

@end

@interface WXTabBar : UITabBar

/** tabbar的代理 */
@property (nonatomic, weak) id<WXTabBarDelegate> myDelegate ;

@end
