<template>
	<main class="main">
		<p class="h1">
			<svg class="icon floatl" aria-hidden="true" @click="back()">
				<use xlink:href="#icon-fanghui_ico"></use>
			</svg>
			
			<h1>我的当当</h1>
			<svg class="icon floatr" aria-hidden="true">
			  <use xlink:href="#icon-gengduo1"></use>
			</svg>
		</p>
		
		<div class="login-box">
			<router-link to="login">
				<button>登录/注册</button>
			</router-link>
		</div>
		
		<ul class="like">
			<li><p>0</p>收藏的商品</li>
			<li><p>0</p>关注的店铺</li>
			<li><p>10</p>我的足迹</li>
		</ul>
		<div>
			<p class="order">
				<svg class="icon biji" aria-hidden="true">
				  <use xlink:href="#icon-biji"></use>
				</svg>我的订单
				<i>查看全部购买商品》</i>
			</p>
			<ul class="order">
				<li>
					<svg class="icon biji" aria-hidden="true">
					  <use xlink:href="#icon-tuihuanhuo1"></use>
					</svg>
					<p>待付款</p>
				</li>
				<li>
					<svg class="icon biji" aria-hidden="true">
					  <use xlink:href="#icon-daishouhuo"></use>
					</svg>
					<p>待收货</p>
				</li>
				<li>
					<svg class="icon biji" aria-hidden="true">
					  <use xlink:href="#icon-tuihuanhuo"></use>
					</svg>
					<p>退换款</p>
				</li>
			</ul>
		</div>
		
		<ul class="zhongxin">
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-huiyuanzhongxin"></use>
				</svg>会员中心
				<i>》</i>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-liquan"></use>
				</svg>我的礼券
				<i>》</i>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-jifen"></use>
				</svg>积分抵现
				<i>》</i>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-dianzishu"></use>
				</svg>我的电子书
				<i>》</i>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-lipinqia"></use>
				</svg>我的礼品卡
				<i>》</i>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-shouhuodizhi1"></use>
				</svg>收货地址
				<i>》</i>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-manjianzhekou"></use>
				</svg>精简图书，每满199减100
				<i>》</i>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-manjianzhekou"></use>
				</svg>三只松鼠，狂欢现场，满150减60
				<i>》</i>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-qiang"></use>
				</svg>羽绒联合，低至3折
				<i>》</i>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.main{
		margin-bottom: 3.2rem;
	}
	a{
		color: #555;
	}
	.h1 svg{
		position: absolute;
		width: 1.4rem;
		height: 2.5rem;
	}
	.floatl{
		z-index: 9;
		left: 1rem;
		color: #999;
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
	}
	.icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	
	.login-box{
		width:100%;
		height: 7.2rem;
		background:url('../../assets/images/mine/user-bg (1).jpg') no-repeat center center;
		background-size: 100% 100%;
	}
	
	.login-box button{
		height: 2.4rem;
		width: 7.3rem;
		margin-top: 2.4rem;
		background: transparent;
		border-radius: 1.1rem;
		border: 1px solid #fff;
		color: #fff;
		font-size: 1rem;
	}	
	
	ul.like{
		zoom: 1;
		display: flex;
		margin-top: .5rem;
	}
	.like li{
		flex:1;
		text-align: center;
		font-size: .9rem;
		color:#111;
	}
	
	.icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	p.order .biji{
		position: absolute;
		left: .3rem;
		font-size: 1.8rem;
		padding-top: 1rem;
	}
	p.order{
		position: relative;
		text-align: left;
		text-indent: 2.3rem;
		height: 4rem;
		line-height: 4rem;
		font-size: .8rem;
	}
	p.order i{
		position: absolute;
		right: 1rem;
		font-size: .5rem;
		font-style: normal;
		color:#777;
	}
	
	ul.order{
		display: flex;
		zoom: 1;
	}
	ul.order li{
		flex:1;
		text-align: center;
	}
	ul.order li p{
		font-size: .6rem;
		color: #555;
	}
	ul.order svg{
		font-size: 1.5rem;
	}
	
	ul.zhongxin li{
		position: relative;
		height: 3rem;
		line-height: 3rem;
		text-align: left;
		text-indent: 1rem;
		text-indent: 2.3rem;
		font-size: .8rem;
	}
	ul.zhongxin svg{
		position: absolute;
		left: .3rem;
		font-size: 1.6rem;
		padding-top: .6rem;
		
	}
	ul.zhongxin i{
		position: absolute;
		right:1rem;
		font-style: normal;
	}
</style>