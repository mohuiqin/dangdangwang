<template>
	<main>
		<div class="header">
			<div class="head-l">
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-dangdangwang"></use>
				</svg>
			</div>
			<div class="head-m">
				<ul>
					<li>下载当当购物app</li>
					<li>在此页打开app</li>
				</ul>
			</div>
		</div>
		<p class="h1">
			<svg class="icon floatl" aria-hidden="true" @click="back()">
			  <use xlink:href="#icon-fanghui"></use>
			</svg>
			<h1>当当快讯</h1>
			<svg class="icon floatr" aria-hidden="true">
			  <use xlink:href="#icon-gengduo1"></use>
			</svg>
		</p>
		
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.header{
		background: turquoise;
		overflow: hidden;
	}
	.head-l{
		position: absolute;
		top: 0;
		left: 0;
		width: 3.75rem;
		height:3.5rem;
	}
	.head-l .icon{
		font-size: 2.5rem;
		margin-top: .42rem;
	}
	.head-m{
		position: relative;
		top: 0;
		margin-left: 3rem;
		margin-right: 1rem;
		height: 3.5rem;
		color: #b5bec5;
	}
	ul{
		display: flex;
	}
	li{
		flex:1;
		text-align: center;
		height: 2em;
		line-height: 2em;
		border: 1px solid #000;
		margin-top: .7rem;
		margin-left: .5rem;
		font-size: 1em;
		overflow: hidden;
	}
	li:nth-last-of-type(1){
		background: #dedede;
		color:#000;
		border:0.5px solid #777;
	}
	li:nth-last-of-type(2){
		background: #dedede;
		color:#000;
		border:0.5px solid #777;
	}
	
	.icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	p.h1{
		position: relative;
	}
	p.h1 svg{
		z-index: 9;
		display: inline-block;
		position: absolute;
		width: 1.5rem;
		height: 2rem;
		top: 50%;
		margin-top: .3rem;
	}
	.floatl{
		left: 1rem;
	}
	.floatr{
		float:right;
		margin-right: 1rem;
		margin-top: 1rem;
	}
	h1{
		margin-top: .4rem;
		width: 5rem;
		position: absolute;
		left: 50%;
		margin-left: -2.5rem;
		font-size: 1.05rem;
		text-align: center;
		}
</style>