import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import cart from '@/components/cart';
import mine from '@/components/mine';
import classify from '@/components/classify';
import search from '@/components/page/home/search';
import allkind from '@/components/page/classify/allkind';
import details from '@/components/page/classify/details';
import citylist from '@/components/page/home/citylist';


Vue.use(Router)

export default new Router({
  
	routes:[
	{
		path: '/',
		name: 'home',
		component: home,
		props:true
	},{
		path: '/citylist',
		name: 'cityList',
		component: citylist,
		props: true
	},{
		path: '/search',
		name: 'Search',
		component: search
	},{
		path: '/classify',
		name: 'classify',
		component: classify,
		meta: {
		keepAlive: true // 需要被缓存
		}
	},{
		path: '/allkind',
		name: 'allkind',
		component: allkind,
		meta: {
		  keepAlive: true // 需要被缓存
		}
	}, {
	  path: '/details',
	  name: 'details',
	  component: details
	},{
		path: '/cart',
		name: 'cart',
		component: cart
	},{
		path: '/mine',
		name: 'mine',
		component: mine
	}]
});