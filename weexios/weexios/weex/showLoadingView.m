//
//  showLoadingView.m
//  PuJiTown
//
//  Created by 朱标 on 2018/3/27.
//  Copyright © 2018年 yst.com. All rights reserved.
//

#import "showLoadingView.h"
#import <MBProgressHUD/MBProgressHUD.h>
#import "WXCustMoudelViewController.h"
#import "CellDemoViewController.h"
#import "ComponentCellViewController.h"
#import "ZYDemoViewController.h"
#import "LFYDemoViewController.h"
#import "ZYDemoImageViewController.h"
@implementation showLoadingView
WX_EXPORT_METHOD(@selector(showView:))
WX_EXPORT_METHOD(@selector(callJS:))
WX_EXPORT_METHOD(@selector(pushCustModuleVC:))


- (void)showView:(NSDictionary *)dic {
    // 快速显示一个提示信息
    MBProgressHUD *hud = [MBProgressHUD showHUDAddedTo:[self getCurrentVC].view animated:YES];
    hud.labelText = @"自定义module";
    // 隐藏时候从父控件中移除
    hud.removeFromSuperViewOnHide = YES;
    // 1秒之后再消失
//    [hud hideAnimated:YES afterDelay:1.5];
    [hud hide:YES afterDelay:2];
   
}
- (void)pushCustModuleVC:(NSDictionary *)dic {
    NSInteger selectVC = [dic[@"VC"] integerValue];
    if(selectVC == 1) {
        WXCustMoudelViewController *custVC = [[WXCustMoudelViewController alloc]init];
        [[self getCurrentVC].navigationController pushViewController:custVC animated:YES];
    }else if (selectVC == 2) {
        CellDemoViewController *cellVC = [[CellDemoViewController alloc]init];
        [[self getCurrentVC].navigationController pushViewController:cellVC animated:YES];
    }else if (selectVC == 3) {
        ComponentCellViewController *cellVC = [[ComponentCellViewController alloc]init];
        [[self getCurrentVC].navigationController pushViewController:cellVC animated:YES];
    }else if (selectVC == 4) {
        LFYDemoViewController *cellVC = [[LFYDemoViewController alloc]init];
        [[self getCurrentVC].navigationController pushViewController:cellVC animated:YES];
    }else if (selectVC == 5) {
        ZYDemoViewController *cellVC = [[ZYDemoViewController alloc]init];
        [[self getCurrentVC].navigationController pushViewController:cellVC animated:YES];
    }else if (selectVC == 6) {
        ZYDemoImageViewController *imageVC = [[ZYDemoImageViewController alloc]init];
        [[self getCurrentVC].navigationController pushViewController:imageVC animated:YES];
    }
}

- (void)callJS:(NSDictionary *)dic {
}
- (UIViewController *)getCurrentVC
{
    UIWindow * window = [[UIApplication sharedApplication] keyWindow];
    if (window.windowLevel != UIWindowLevelNormal){
        NSArray *windows = [[UIApplication sharedApplication] windows];
        for(UIWindow * tmpWin in windows){
            if (tmpWin.windowLevel == UIWindowLevelNormal){
                window = tmpWin;
                break;
            }
        }
    }
    UIViewController *result = window.rootViewController;
    
    while (result.presentedViewController) {
        result = result.presentedViewController;
    }
    if ([result isKindOfClass:[UITabBarController class]]) {
        result = [(UITabBarController *)result selectedViewController];
    }
    if ([result isKindOfClass:[UINavigationController class]]) {
        result = [(UINavigationController *)result topViewController];
    }
    return result;
}
@end
