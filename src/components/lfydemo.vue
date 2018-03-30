<template>
	<list class="list">
		<refresh class="refreshcom" @refresh="refreshData" :display="isShowRefresh?'show':'hide'">
			<text class="refreshText">正在刷新</text>
			<loading-indicator class="indicator"></loading-indicator>
		</refresh>
		<cell v-for="(item, i) in lists" :key="i">
			<div class="floor">
				<!--头部-->
				<div class="section-wrap">
					<!--头像,昵称div-->
					<div class="headeimage-nickname-wrap">
						<!--昵称,时间-->
						<image class="headimage" src="https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg"></image>
						<div class="nicknamewrap">
							<text class="nickname">{{item.newsTitle}}</text>
							<text class="time">22小时前</text>
						</div>
					</div>
					<!--点赞,举报,采纳div-->
					<div class="actionbtn-wrap">
						<text class="actiontext" @click="prase">❤️点赞</text>
						<text class="actiontext" @click="report">举报</text>
						<text class="actiontext" @click="aopt">采纳</text>
					</div>
				</div>
				<!--内容-->
				<text class="desc">{{item.newsContent}}</text>
				<!--评论及时间-->
				<text class="comment">324评论    2012-12-12</text>
			</div>
		</cell>
		<loading class="loadingcom" @loading="loadmore" :display="isLoading?'show':'hide'">
			<text class="loadingtext">加载更多</text>
			<loading-indicator class="indicator"></loading-indicator>
		</loading>

	</list>
</template>

<script>
	var stream = weex.requireModule('stream');
	var modal = weex.requireModule('modal');
	var POST_URL = 'http://www.jspang.com/DemoApi/newsApi.php';

	export default {
		data() {
			return {
				//页面渲染的数据源
				lists: [],
				isLoading: false,
				isShowRefresh:false
			}
		},
		//生命周期方法
		created: function() {
//			var me = this;
//			//请求数据
//			stream.fetch({
//				method: 'POST',
//				url: POST_URL,
//				type: 'json',
//				// body:'uuid=b2c19b4a288147c6824b9f460cb626bf&phone=15169559644&rows=5&mark=1&source=0&page=1'
//			}, function(ret) {
//				if(!ret.ok) {
//					// me.postResult = "request failed";
//				} else {
//					// console.log('get:'+JSON.stringify(ret));
//					// me.postResult = JSON.stringify(ret.data);
//					me.lists = ret.data;
//				}
//			}, function(response) {
//				console.log('get in progress:' + response.length);
//				me.postResult = "bytes received:" + response.length;
//			});
			modal.toast({message:'正在创建数据',duration:0.5})
			this.reloadData(POST_URL,res=>{
				this.lists = res.data
			})
		},
		methods: {
			//点赞
			prase: function(e) {
				modal.toast({
					message: '点赞成功',
					duration: 1
				})
			},
			//举报
			report: function(e) {

				modal.confirm({
						message: '确定要举报吗?',
						okTitle: '确定',
						cancelTitle: '取消',
						duration: 1
					},
					function(value) {
						console.log('返回值:', value);
					}
				)

			}, //采纳
			aopt(e) {
				modal.toast({
					message: '采纳成功',
					duration: 1
				})
			},
			//加载数据
			reloadData(url, callback) {
				return stream.fetch({
					method: 'POST',
					url: url,
					type: 'json'
				}, callback);
			},
			//加载更多数据
			loadmore(enent) {
				this.isLoading = true;
				modal.toast({
					message: 'loading',
					duration: 1
				});
				this.reloadData(POST_URL, restult => {
					this.lists = this.lists.concat(restult.data);
					setTimeout(() => {
						this.isLoading = false;
					}, 2000)
				})

			},
			//刷新数据
			refreshData(e){
				this.isShowRefresh = true;
				modal.toast({
					message: 'refresh',
					duration: 1
				});
				this.reloadData(POST_URL,res=>{
					this.lists = res.data;
					setTimeout(()=>{
						this.isShowRefresh = false;
					},2000)
				});
				
			}
		}
	}
</script>
<style scoped>
	.list {
		background-color: #F5F5F5;
	}
	
	.floor {
		margin-bottom: 2px;
		background-color: #FFFFFF;
	}
	/*头部分div*/
	
	.section-wrap {
		/*background-color: red;*/
		flex-direction: row;
		justify-content: space-between;
		/*align-items: stretch;*/
	}
	/*头像,昵称*/
	
	.headeimage-nickname-wrap {
		/*background-color: green;*/
		flex-direction: row;
		justify-content: flex-start;
	}
	
	.headimage {
		margin-top: 20px;
		margin-left: 30px;
		width: 70px;
		height: 70px;
		border-radius: 35px;
	}
	
	.nicknamewrap {
		/*background-color: orange;*/
		margin-left: 20px;
		width: 200px;
	}
	
	.nickname {
		font-size: 28px;
		text-align: left;
		padding-top: 25px;
		color: #B98080;
		/*background-color: blue;*/
		lines: 1;
		font-weight: bold;
	}
	
	.time {
		color: #999999;
		lines: 1;
		font-size: 20px;
		margin-top: 2px;
	}
	/*点赞,举报,采纳*/
	
	.actionbtn-wrap {
		/*background-color: orange;*/
		flex-direction: row;
		margin-right: 30px;
		justify-content: space-between;
		width: 264px;
		align-items: center;
	}
	
	.actiontext {
		color: #AAAAAA;
		font-size: 24px;
		/*text-align:center;*/
		/*background-color: purple;*/
	}
	
	.desc {
		lines: 0;
		color: #999999;
		font-size: 30px;
		margin-left: 120px;
		margin-right: 34px;
		margin-top: 23px;
	}
	
	.comment {
		color: #BBBBBB;
		font-size: 24px;
		padding-right: 50px;
		margin-top: 22px;
		margin-left: 120px;
		margin-bottom: 25px;
	}
	/*加载更多*/
	
	.loadingcom {
		width: 750px;
		display: -ms-flex;
		display: -webkit-flex;
		display: flex;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-webkit-box-align: center;
		align-items: center;
	}
	
	.loadingtext {
		color: #888888;
		font-size: 24px;
		text-align: center;
		/*background-color: red;*/
	}
	
	.indicator {
		margin-top: 16px;
		height: 40px;
		width: 40px;
		color: #888888;
		background-color: blue;
	}
	/*刷新*/
	.refreshcom{
		width: 750px;
		display: -ms-flex;
		display: -webkit-flex;
		display: flex;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-webkit-box-align: center;
		align-items: center;
	}
	.refreshText{
		color: #888888;
		font-size: 24px;
		text-align: center;
	}
</style>