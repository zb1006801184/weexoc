//
//  WXTabBarViewController.m
//  weexios
//
//  Created by 朱标 on 2018/4/4.
//  Copyright © 2018年 zhubiao. All rights reserved.
//

#import "WXTabBarViewController.h"
#import "WXTabBar.h"
#import "HomeViewController.h"
#import "LiveViewController.h"
#import "IssueViewController.h"
#import "PersonViewController.h"
#import "MineViewController.h"
#import "WeexMainViewController.h"

#define kScreenHeight [UIScreen mainScreen].bounds.size.height//获取设备屏幕的长
#define kScreenWidth [UIScreen mainScreen].bounds.size.width//获取设备屏幕的宽
#define kTabbarHeight  (([[UIApplication sharedApplication] statusBarFrame].size.height) > (20) ? 83 : 49 ) //底部tabbar高度

@interface WXTabBarViewController ()<WXTabBarDelegate,UITabBarControllerDelegate>

@end

@implementation WXTabBarViewController

#pragma mark - 第一次使用当前类的时候对设置UITabBarItem的主题
+ (void)initialize
{
    UITabBarItem *tabBarItem = [UITabBarItem appearanceWhenContainedInInstancesOfClasses:@[self]];
    
    NSMutableDictionary *dictNormal = [NSMutableDictionary dictionary];
    dictNormal[NSForegroundColorAttributeName] = [UIColor blackColor];
    dictNormal[NSFontAttributeName] = [UIFont systemFontOfSize:11];
    
    NSMutableDictionary *dictSelected = [NSMutableDictionary dictionary];
    dictSelected[NSForegroundColorAttributeName] = [UIColor redColor];
    dictSelected[NSFontAttributeName] = [UIFont systemFontOfSize:11];
    
    [tabBarItem setTitleTextAttributes:dictNormal forState:UIControlStateNormal];
    [tabBarItem setTitleTextAttributes:dictSelected forState:UIControlStateSelected];
    
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.delegate = self;
    
    [self setUpAllChildVc];
    
    //创建自己的tabbar，然后用kvc将自己的tabbar和系统的tabBar替换下
    WXTabBar *tabbar = [[WXTabBar alloc] init];
    tabbar.myDelegate = self;
    //kvc实质是修改了系统的_tabBar
    [self setValue:tabbar forKeyPath:@"tabBar"];
    
}

- (void)presentCenterView {
    
    
}

- (void)centerIssueButton {
    //发布
    UIButton *centerButton = [[UIButton alloc]initWithFrame:CGRectMake((kScreenWidth - 70)/2, 0, 70, kTabbarHeight)];
    centerButton.backgroundColor = [UIColor clearColor];
    [centerButton addTarget:self action:@selector(centerIssueButtonClick:) forControlEvents:UIControlEventTouchUpInside];
    [self.tabBar addSubview:centerButton];
}
- (void)centerIssueButtonClick:(UIButton *)button {
    NSLog(@"发布发布");
}



#pragma mark - 初始化tabBar上除了中间按钮之外所有的按钮
- (void)setUpAllChildVc
{
    
    
    WeexMainViewController *homeVC = [[WeexMainViewController alloc]init];
    [self setUpOneChildVcWithVc:homeVC Image:@"icon-首页" selectedImage:@"icon-首页拷贝" title:@"首页"];
    
    LiveViewController *liveVC = [[LiveViewController alloc]init];
    [self setUpOneChildVcWithVc:liveVC Image:@"icon直播" selectedImage:@"icon直播拷贝" title:@"直播"];
    

    PersonViewController * personVC = [[PersonViewController alloc]init];
    [self setUpOneChildVcWithVc:personVC Image:@"icon-长城人物" selectedImage:@"icon-长城人物拷贝" title:@"长城人物"];
    
    MineViewController *mineVC = [[MineViewController alloc]init];
    [self setUpOneChildVcWithVc:mineVC Image:@"icon-我的" selectedImage:@"icon-我的拷贝" title:@"我的"];

    
    
}

#pragma mark - 初始化设置tabBar上面单个按钮的方法

/**
 *  @author li bo, 16/05/10
 *
 *  设置单个tabBarButton
 *
 *  @param Vc            每一个按钮对应的控制器
 *  @param image         每一个按钮对应的普通状态下图片
 *  @param selectedImage 每一个按钮对应的选中状态下的图片
 *  @param title         每一个按钮对应的标题
 */
- (void)setUpOneChildVcWithVc:(UIViewController *)Vc Image:(NSString *)image selectedImage:(NSString *)selectedImage title:(NSString *)title{
    UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:Vc];
    
    //tabBarItem，是系统提供模型，专门负责tabbar上按钮的文字以及图片展示
    UIImage *myImage = [UIImage imageNamed:image];
    //    myImage = [self image:myImage];//设置未选中image大小
    myImage = [myImage imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
    Vc.tabBarItem.image = myImage;
    
    
    UIImage *mySelectedImage = [UIImage imageNamed:selectedImage];
    //    mySelectedImage = [self image:mySelectedImage];//设置选中image大小
    mySelectedImage = [mySelectedImage imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
    Vc.tabBarItem.selectedImage = mySelectedImage;
    
    Vc.tabBarItem.title = title;
    //    Vc.navigationItem.title = title;
    
    [self addChildViewController:nav];
    
}

//修改image大小的方法
-(UIImage *)image:(UIImage *)UIImage{
    
    UIGraphicsBeginImageContext(CGSizeMake(26, 26));
    [UIImage drawInRect:CGRectMake(0.0f, 0.0f, 26, 26)];
    UIImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    return UIImage;
}


#pragma mark - ------------------------------------------------------------------
#pragma mark - LBTabBarDelegate
//点击中间按钮的代理方法
- (void)tabBarPlusBtnClick:(WXTabBar *)tabBar
{
    
    [self presentCenterView];
    
    
//    IssueViewController *IssueVC = [[IssueViewController alloc]init];
//
//    [self presentViewController:IssueVC animated:YES completion:nil];
}

#pragma mark - UITabBarControllerDelegate
- (void)tabBarController:(UITabBarController *)tabBarController didSelectViewController:(UIViewController *)viewController{
    
    NSLog(@"%ld",tabBarController.selectedIndex);
    
}


@end
