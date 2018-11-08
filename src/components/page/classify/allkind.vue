<template>
  <div>
      {{mine}}
     <p>'从商品分类传过来的id' <strong>{{getID}}</strong></p>
  </div>
</template>
<script>
	

	export default {
		data(){
			return {
                mine:'指定商品分类',
                getID:''
			}
        },
        created() {
           this.getID = this.$route.query.product
        },


	}
</script>
<style>
	
</style>