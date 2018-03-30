//
//  CellDemo.m
//  weexios
//
//  Created by 朱标 on 2018/3/29.
//  Copyright © 2018年 zhubiao. All rights reserved.
//

#import "CellDemo.h"
#import "CellDemoTableViewCell.h"
@interface CellDemo ()
@property (nonatomic, strong) NSString *titleName;
@end
@implementation CellDemo

-(instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance
{
    if (self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance]) {
        //设置属性
        _titleName = [WXConvert NSString:attributes[@"titleName"]];        
    }
    return self;
}
- (void)viewDidLoad {
    [super viewDidLoad];
    CellDemoTableViewCell *cell = [[[NSBundle mainBundle]loadNibNamed:@"CellDemoTableViewCell" owner:self options:nil ]firstObject];
    cell.frame = CGRectMake(0, 0,375, 134);
    cell.titleName.text = _titleName;
    [self.view addSubview:cell];

}
@end
