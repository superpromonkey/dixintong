<template>
	<div class="home">

		<div class="home-nav">
			<div class="logo">
				<img src="../assets/img/logo.png" alt="迪信通" width="100%" >
			</div>

			<div class="searchbox">
				<input type="text" icon="search" class="search" @click="search" />
			</div>
				<!-- 城市 -->
			<div  class="icon-size">
				<router-link to="/citylist" >
						<font-awesome-icon icon="map-marker-alt" style="color:#fff"/>
				</router-link>
			</div>
		</div>
		<!-- 轮播图 -->
		<mt-swipe :auto="4000" class="banner">
			<mt-swipe-item v-for="(item) in banners" :key="item.id" widthi="100px">
				<img :src="item.imagePath" width="100%"/>
			</mt-swipe-item>
		</mt-swipe>

		<!-- 主页按钮 -->
		<ul class="home-btn" >
			<li class="btn-item" v-for="(btn,idx) in btns" :key="idx">		
				<img :src="btn.btnimg" :atl="btn.title" width="50px" height="50px"/>
				<p>{{btn.title }}</p>
			<li/>
		</ul>
		<!-- 热门 -->
		<ul class="home-hot">
			<li>
				<img src="../assets/img/hot/hot1.jpg" alt="">
			</li>
			<li>
				<img src="../assets/img/hot/hot2.jpg" alt="">
			</li>	
		</ul>

		<!-- 头条 -->
		<div >	
			<img src="../assets/img/top-line/hot-line.png" class="home-first" alt="" width="100%">
		</div>



		<!-- 商品列表 -->
		<div class="goods-box">
			<!-- 热卖商品 -->
			<img src="../assets/img/hotlit/hotlist1.png" alt="" width="100%" class="best">
			<ul class="datalist flexlist best-hot">
				<li v-for="(item,idx) in datalist" @click="showDetail(item.idx)" :key="item.idx">
					<h2>{{item.sellingPoint}}</h2>
					<img :src="item.imagePath" :atl="item.title" />
					<h4>{{item.title}}</h4>
					<p>{{item.sellingPoint}}</p>
					<p class="price">{{item.price}}</p>
				</li>
			</ul>
			<!-- 特卖单品 -->
			<div class="preference"> 
			<img src="../assets/img/hotlit/hotlist2.png" alt="" width="100%">
			<ul class="datalist flexlist">
				<li v-for="(item) in datalist" @click="showDetail(item.price)" :key="item.idx">
					<h2>{{item.sellingPoint}}</h2>
					<img :src="item.imagePath" :atl="item.title" />
					<h4>{{item.title}}</h4>
					<p>{{item.sellingPoint}}</p>
					<p class="price">{{item.price}}</p>
				</li>
			</ul>
			</div>

			<div class="preference"> 
			<img src="../assets/img/hotlit/hotlist3.png" alt="" width="100%">
			<ul class="datalist flexlist">
				<li v-for="(item,idx) in datalist" @click="showDetail(item.idx)" :key="item.idx">
					<h2>{{item.sellingPoint}}</h2>
					<img :src="item.imagePath" :atl="item.title" />
					<h4>{{item.title}}</h4>
					<p>{{item.sellingPoint}}</p>
					<p class="price">{{item.price}}</p>
				</li>
			</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import { Header } from 'mint-ui';

	Vue.use(Header);

	import axios from 'axios';

	export default {
		props:['city'],
		data(){
			return {
				banners:[],
				datalist:[],
				currentCity:this.city || '广州',
				btns:[
					{
						btnimg:'btn1',
						title:'门面查询'
					},{
						btnimg:'btn2',
						title:'限时抢购'
					},{
						btnimg:'btn3',
						title:'手机维护'
					},{
						btnimg:'btn4',
						title:'以旧换新'
					},{
						btnimg:'btn5',
						title:'在线服务'
					}
					
				]
			}
		},
		watch:{
			// 只要currentCity有修改，则执行函数中的代码
			currentCity(){
				console.log(666)
			}
		},
		created(){
			// 进入先请求一次数据
			this.getGoods();
			
		},
		mounted() {
			this.btns.forEach(item=>{
			
            item.btnimg = require('../assets/img/btn/'+item.btnimg +'.png');
       	 	});
		},
		methods:{
			showDetail(id){
				this.$router.push({name:'Detail',params:{id}});
			},
			search(){
				// 手动跳转路由
				this.$router.push({name:'Search',query:{keyword:this.keyword}});
			},
			loadTop(){
				this.$refs.loadmore.onTopLoaded();
			},

			loadMore(){

			},
			getGoods(){
			
				this.$axios({
					method:'get',
					url:'api/web/api/floors/v1',
					data:this.qs.stringify({  
						//这里是发送给后台的数据  
							label:0,
							page :1,
							random :0 
					})
				}).then((res) =>{   
					//请求成功返回的数据       
					let data = res.data.data
					this.banners = data.container.floor[0].content
					this.datalist = data.container.floor[25].content
					console.log(res.data.data.container)       
					console.log(this.banners)       

				}).catch((res) =>(
					//请求失败返回的数据
					console.log(res)		
				)
						
				)
			}
			
	}
}
</script>
<style scoped lang="scss">
.home{
	padding-bottom:100px;

.home-nav{
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	top:0px;
	z-index: 1000;
	width: 100%;
	background-color: #ea4234;
	vertical-align: middle;
	padding: 0px 10px;
	height: 40px;
	h1{
		display: none !important;
	}
	.logo{
		flex:2;
		vertical-align: middle;
	}
	.searchbox{
		flex:9;
		.search{
			border:none;
			width: 100%;
			height: 26px;
			margin: 0px 10px;
			float:left;
			// margin-right: 20px;
	}
	}

	.icon-size{
		flex:1;
		text-align: right;
	}
}

.banner{
	
	margin-top:40px;
	overflow: hidden;
	}

// 主页按钮

.home-btn{
	font-size: 12px;
	width: 100%;
	height: 80px;
	display:flex;
	
	.btn-item{
		flex: 1;		
		width: 80px;
		height: 80px;
		
	}
}

// 热门

.home-hot{
	display:flex;
	width: 100%;
	
	
	li{
		flex: 1;	
		// background-color: #ff6600;
		img{
			width: 100%;
		}
	}
}

// 头条
.home-first{
	display:flex;
	width: 100%;
	// height: 66px;
	background-color: #aaa;
}

// 商品列表
.goods-box{
	.best{margin: 10px 0px}
	.best-hot{background-color:#111;}
	
	.preference{
		width: 100%;
		background-color: #EA4234;
		
	}
			
		
	.datalist{
		width: 100%;
		margin: 0 auto;
		padding-top:4px;
		padding-left:4px;
		overflow:hidden;font-size:12px;

		img{height:140px;}
		li{float:left;
			width:181px;
			height:296px;
			margin-right:4px;
			margin-bottom:4px;
			overflow:hidden;
			padding: 0 10px;
			background-color: #fff;
			p{
				font-size: 16px;
				line-height: 26px;
			}
			.price{
				color:red;
				font-weight: bold;
			}
		}
		h4{margin:0;}

	}
}

	.mint-swipe{height:200px;}
	.mint-swipe img{width:100%;}
}
</style>