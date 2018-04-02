//
//  ZBTaskDetailViewController.m
//  weexios
//
//  Created by 朱标 on 2018/4/2.
//  Copyright © 2018年 zhubiao. All rights reserved.
//

#import "ZBTaskDetailViewController.h"

@interface ZBTaskDetailViewController ()

@end

@implementation ZBTaskDetailViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.bundlejsName = @"zbtaskdetail.js";
    self.weexFrameY = 64;
    [self render];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
