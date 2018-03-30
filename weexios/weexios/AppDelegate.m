//
//  AppDelegate.m
//  weexios
//
//  Created by 朱标 on 2018/3/28.
//  Copyright © 2018年 zhubiao. All rights reserved.
//

#import "AppDelegate.h"
#import <WeexSDK/WeexSDK.h>
#import "WeexMainViewController.h"
#import "imageHelper.h"
#import "showLoadingView.h"
#import "CellDemo.h"
#ifdef DEBUG
#import <TBWXDevTool/WXDevTool.h>

#endif

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    self.window.backgroundColor = [UIColor whiteColor];
    WeexMainViewController *mainVC = [[WeexMainViewController alloc] init];
    UINavigationController *nav = [[UINavigationController alloc]initWithRootViewController:mainVC];
    self.window.rootViewController = nav;
    [self.window makeKeyAndVisible];
#ifdef DEBUG
    //use weex-devtool to start debug server and paste debug url here
    //    [WXDevTool setDebug:YES];
    [WXDevTool launchDevToolDebugWithUrl:@"ws://169.254.110.18:59148/debugProxy/native/31b40677-9e5d-49a3-9631-1e610efcd53e"];
#endif
    //business configuration
    [WXAppConfiguration setAppName:@"weexDemo"];
    //init sdk enviroment
    [WXSDKEngine initSDKEnvironment];
    //注册组件
    [WXSDKEngine registerHandler:[imageHelper new] withProtocol:@protocol(WXImgLoaderProtocol)];
    [WXSDKEngine registerModule:@"showLoading" withClass:[showLoadingView class]];
    [WXSDKEngine registerComponent:@"cell-demo" withClass:[CellDemo class]];

    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
