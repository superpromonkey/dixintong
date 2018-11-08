<template>
  <!-- <div>
      
	   <x-header>{{cart}}</x-header>
	
	   		<flexbox direction="flex-wrap">
				<flexbox-item  class="test-vux" />
				<flexbox-item  class="test-vux" />
				<flexbox-item  class="test-vux" />
					<flexbox>
						<flexbox-item  class="test-vux" />
						<flexbox-item  class="test-vux" />
						<flexbox-item  class="test-vux" />
						<flexbox-item  class="test-vux" />
						<flexbox-item  class="test-vux" />
					</flexbox>
				<flexbox-item />
	   </flexbox>
	   <grid  :cols="3">
		<grid-item label="Grid" v-for="i in 9" :key="i">
			<img slot="icon" src="../assets/logo.png">
		</grid-item>
		</grid>
	<div class="vux-slider text-scroll">

		<swiper :list="bannert" :auto="true" :loop="true" :direction="plumb" :interval="1000"> 

		</swiper>
	</div>

  </div> -->
</template>
<script>
	
// import { XHeader, Confirm, Flexbox, FlexboxItem,Swiper} from 'vux'
	// export default {
	// 	data(){
	// 		return {
	// 			cart:'购物车',
	// 			bannert:[{
	// 				// url: 'javascript:',
	// 				// img: require('../assets/logo.png'),
	// 				txt: '送你一朵fua'
	// 				},{
	// 				// url: 'javascript:',
	// 				// img: require('../assets/logo.png'),
	// 				txt: '送你一次旅行',
	// 				// fallbackImg: 'https://static.vux.li/demo/3.jpg'
	// 			}]
	// 		}
	// 	},
		
    
    //     components: {
    //         Confirm,
	// 		XHeader,
	// 		Flexbox,
	// 		FlexboxItem,
	// 		Swiper
	
    //     }
    

	// }
</script>
<style>
	.test-vux{
		width: 100px;
		height: 100px;
		background-color: #ccc;
	}
		.test-vuxs{
		width: 100px;
		height: 100px;
		background-color: #111;
	}
</style>