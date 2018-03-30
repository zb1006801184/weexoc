//
//  WXCustMoudelViewController.m
//  weexios
//
//  Created by 朱标 on 2018/3/28.
//  Copyright © 2018年 zhubiao. All rights reserved.
//

#import "WXCustMoudelViewController.h"

@interface WXCustMoudelViewController ()

@end

@implementation WXCustMoudelViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.bundlejsName = @"CustModule.js";
    self.weexFrameY = 64;
    [self render];
}

@end
