import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import search from '@/components/search';
import citylist from '@/components/citylist';
import classify from '@/components/classify';
import cart from '@/components/cart';
import mine from '@/components/mine';

Vue.use(Router)

export default new Router({
  
		routes:[{
				path: '/',
				name: 'Home',
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
					component: classify
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