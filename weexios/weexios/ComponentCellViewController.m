//
//  ComponentCellViewController.m
//  weexios
//
//  Created by 朱标 on 2018/3/29.
//  Copyright © 2018年 zhubiao. All rights reserved.
//

#import "ComponentCellViewController.h"

@interface ComponentCellViewController ()

@end

@implementation ComponentCellViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.bundlejsName = @"CellDemoComponents.js";
    self.weexFrameY = 64;
    [self render];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
