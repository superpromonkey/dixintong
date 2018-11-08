<template>
<keep-alive include="test-keep-alive">
	<div class="classify">
		<div id="kindbox">
			<!-- tab标签 -->
			<ul class="tabb">
				<li v-for="(item) in goodslist" :key="item.id" @click="showgoods(item.id)" :class="item.id==show ? 'active':''">
					<p>{{item.title}}</p>
				</li>
			</ul>
			
			<!-- 商品展示 -->
			<div class="tabbox">
				<router-link  :to= "{path:kindurl, query: {product: mapdata.id}}">
					<img :src="mapdata.picture" alt="" width="100%" style="margin-top:10px" />
				</router-link>
					<div class="tabot" v-for="(items) in mapdata.children" :key="items.id">
						<p class="goodsbt">{{items.title}}</p>
						<ul class="tabc">	
							<!-- 编程式导航实现路由跳转，通过routerlink下to的属性中的path设置跳转路径，在query中设置路由要传的参数-->
							<router-link  :to= "{path:kindurl, query: {product: goods.id}}"  v-for="(goods) in items.children" :key="goods.id" tag="li">	
								<img :src="goods.picture" :alt="goods.title" style="width:100%" loaded="true">
								<p>{{goods.title}}</p>
							</router-link>
						</ul>
					</div>
				</div>
			</div>	
		</div>
	</keep-alive>
</template>
<script>
	

	export default {
		name: 'test-keep-alive',
		data(){
			return {
				show:'',
				goodslist:[],
				mapdata: [],
				kindurl:'/allkind',//这里是配置router-link中path属性的跳转路径
				includedComponents: "test-keep-alive"
			}
		},
		created(){
			// 进入先请求一次数据
			this.getGoodslist();
			// this.goodsmap(1)
			
		},
		// 有数据更新的时候触发
		updated() {
			this.showgoods()
		},
		methods:{
			// 向后端发起数据请求
			getGoodslist(){
				this.$axios({
					method:'get',
					url:'api/web/api/products/category/v1',
				}).then((res) =>{   
					//请求成功返回的数据       
					let data = res.data.data
					this.goodslist = data;  
					this.showgoods(data[0].id)   
				}).catch((res) =>(
					//请求失败返回的数据
					console.log('数据请求失败',res)	
					
				))
			},
			// 判断当前的tab
			showgoods(id){
				let data = this.goodslist;
				// 高亮判断
				if(id!=undefined){
				this.show = id;
				}
				for(var i=0;i<data.length;i++){
					if(id==data[i].id){
						return this.mapdata = data[i];
					}
				}
			}
		
		}
	

	

	}
</script>
<style scoped lang="scss">
	.classify{
		#kindbox{
			background-color: #eee;
			width: 100%;
			height: 610px;
			display:flex;

			.tabb{
				flex:1;
				height: 610px;
				flex-wrap: wrap;
				// overflow-y:scroll;
				li{
					display: flex;
					flex-direction: column;
					background-color: #fff;
					text-align: center;
					flex-wrap: wrap;
					p{
						padding: 14px 0px;
						border-bottom: 1px solid #eee;
						font-size: 14px;
					}
				}
				.active {
				background-color: #eee;
				}
			}
			.tabbox{
				height: 610px;
				flex:3;
				padding: 0px 10px;
				overflow-y:scroll;
				.tabanner{
					width: 100%;
					height: 150px;
				}

				.tabot{
					.goodsbt{
						font-size: 14px;
						text-align: left;
						padding: 4px ;
					}
					.tabc{
						overflow: hidden;
						// width: 300px !important;
						height: 100%;
						background-color: #fff;
						border-radius: 6px;
						li{
							width: 33%;
							float:left;
							padding:10px 0;
							img{
								margin-bottom: 5px;
								padding: 0px 10px;
							}
							p{
								line-height: 19px;
								margin:0px;
								font-size: 12px !important; 
							}
							
						}
					}
				}

			}
		}
	}
</style>