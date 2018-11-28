<template>
	<main class="sortcar">
		<p class="h1">
			<svg class="icon floatl" aria-hidden="true"  @click="back()" style="z-index: 9;">
			  <use xlink:href="#icon-fanghui_ico"></use>
			</svg>
			<h1>购物车</h1>
			<svg class="icon floatr" aria-hidden="true">
			  <use xlink:href="#icon-gengduo1"></use>
			</svg>
		</p>
		<div class="cart_null">
			<div class="bottom">
				<p>您还没有购买任何商品</p>
				<router-link to="./index">逛一逛</router-link><router-link to="./login">我的收藏</router-link>
			</div>
		</div>
		<h2>
			<svg class="icon dui" aria-hidden="true"><use xlink:href="#icon-dui1"></use></svg>
			<b>根据您的偏好猜您可能喜欢</b>
		</h2>
		<ul class="likes-ul">
			<li v-for="(v,i) in likes">
				<img :src="v.img" />
				<p class="title">{{v.title}}</p>
				<p class="spans"><span>{{v.dangdang[0]}}</span><span>{{v.dangdang[1]}}</span><span>{{v.dangdang2}}</span></p>
				<p class="price"><svg class="icon cash" aria-hidden="true"><use xlink:href="#icon-renminbi"></use></svg>
					{{v.price[0]}}<sub>{{v.price[1]}}</sub>
				</p>
				<p class="critic">{{v.critic}}</p>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		data(){
			return{
				likes:[]
			}
		},
		mounted(){
			this.$http.get('./data/likes.json')
			.then((res)=>{
				this.likes=res.data.likes;
				console.log(res.data.likes);
			})
			.catch((err)=>{
				console.log('err');
			})
		}
	}
</script>

<style scoped>
	.sortcar{
		padding-bottom: 50px;
	}
	.h1 svg{
		position: absolute;
		width: 1.4rem;
		height: 2.5rem;
	}
	.floatl{
		left: 1rem;
	}
	.floatr{
		position: absolute;
		top: 1rem;
		width: 1.4rem;
		height: 2.5rem;
		right: 1rem;
	}
	h1{
		position: relative;
		height: 2.3rem;
		font-size: 1.05rem;
		padding-top: .5rem;
		border-bottom: 1px solid #ccc;
	}
	.icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	
	.cart_null{
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 75.81%;
		background: url('../../assets/images/sorts/cart_null.gif') 50% 35% no-repeat;
		background-size:48% 48%;
	}
	.cart_null .bottom{
		position: absolute;
		bottom: 8px;
		text-align: center;
		width: 100%;
		margin: 0 auto;
	}
	.cart_null .bottom p{
		font-size: .85rem;
		font-weight: 700;
		color: #999;
		margin-bottom: 20px;
	}
	.cart_null .bottom a{
		border: 1px solid #777;
		border-radius: 6px;
		padding: 5px 28px;
		font-size: 1.3rem;
		font-weight: 900;
		color: #999;
		margin: 0px 10px;
	}
	h2{
		margin-top: 35px;
		font-size: .9rem;
		color: #555;
		height: 1.3rem;
	}
	.dui{
		font-size: 1.3rem;
		height: 1.3rem;
		vertical-align: middle;
	}
	
	.likes-ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.likes-ul li{
		width: 50%;
		padding: 15px 5px;
		font-size: .85rem;
		text-align: left;
		box-sizing: border-box;
	}
	img{
		width: 100%;
	}
	.likes-ul .title{
		margin-bottom: 8px;
	}
	.likes-ul .spans span{
		border: .3px solid #f00;
		margin: 0 2px;
		color: red;
		border-radius: 3px;
		font-size: .6rem;
		padding:1px 2px;
	}
	.likes-ul span:nth-of-type(3){
		color: #fff;
		background-color: #e33;
	}
	.likes-ul .price{
		font-size: 1rem;
		color: #f00;
		font-weight: bold;
		margin:5px 0;
	}
	.cash{
		font-size: .6rem !important;
		font-weight: bolder !important;
	}
	.likes-ul .critic{
		font-size: .6rem;
		color:#888;
	}
	
</style>