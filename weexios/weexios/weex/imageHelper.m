//
//  imageHelper.m
//  PuJiTown
//
//  Created by 朱标 on 2018/3/27.
//  Copyright © 2018年 yst.com. All rights reserved.
//

#import "imageHelper.h"
#import <SDWebImage/UIImageView+WebCache.h>
#import <SDWebImage/SDWebImageManager.h>
#import "WXLoaderOperation.h"

@implementation imageHelper
- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)options completed:(void (^)(UIImage *, NSError *, BOOL))completedBlock
{
    if (![self isValidString:url]) {
        return nil;
    }
    //实现加载xcassets 本地资源文件
    if ([url hasPrefix:@"assets:"]) {
        UIImage *image = [UIImage imageNamed:[url substringFromIndex:7]];
        completedBlock(image, nil, YES);
        
        return [WXLoaderOperation new];
    }
    if ([url hasPrefix:@"//"]) {
        url = [@"http:" stringByAppendingString:url];
    }
    
    SDWebImageManager *mgr = [SDWebImageManager sharedManager];
    
    id op = [mgr downloadImageWithURL:[NSURL URLWithString:url]
                              options:SDWebImageRetryFailed
                             progress:nil
                            completed:^(UIImage *image, NSError *error, SDImageCacheType cacheType, BOOL finished, NSURL *imageURL) {
                                if (completedBlock) {
                                    completedBlock(image, error, finished);
                                }
                            }];
    return (id<WXImageOperationProtocol>)op;
}

- (BOOL)isValidString:(NSString *)str
{
    if (str && [str isKindOfClass:[NSString class]] && [str length] > 0) {
        return YES;
    }
    
    return NO;
}

@end
