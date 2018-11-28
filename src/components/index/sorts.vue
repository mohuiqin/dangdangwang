<template>
	<main class="sorts">
		<div class="header border">
			<div class="head-l">
				<svg class="icon floatl" aria-hidden="true" @click="back()">
				  <use xlink:href="#icon-fanghui_ico"></use>
				</svg>
			</div>
			<div class="head-m">
				<form>
					<div>
						<i class="iconfont icon-search"></i>
					<input type="text" placeholder="海量图书,每满199-100"/>
					</div>
				</form>
			</div>
			<div class="head-r">
				<router-link to="./sorts">
					<i class="iconfont icon-gengduo"></i>
				</router-link>
			</div>
		</div>
		
		<aside class="aside">
			<ul>
				<li>图腾</li>
				<li v-for="(v,i) in sorts_lists">{{v}}</li>
			</ul>
		</aside>
		
		<div class="main">
			<div class="pic-top">
				<img src="../../assets/images/sorts/pic_top.jpg" />
			</div>
			<ul class="enter">
				<li>
					<span class="">进入儿童书城</span>
					<span> 低至1.9折</span>
					<i class="iconfont icon-arr-right"></i>
				</li>
				<li>
					<span class="">进入当当书城</span>
					<span> 低至1.9折</span>
					<i class="iconfont icon-arr-right"></i>
				</li>
			</ul>
			<div class="bangdan-box border">
				<p class="text-left">榜单</p>
				<dl class="bangdan">
					<dd><img src="../../assets/images/sorts/bang_2.png"></dd>
				</dl>
				<dl class="bangdan">
					<dt></dt>
					<dd><img src="../../assets/images/sorts/bang_1.png"></dd>
				</dl>
				<dl class="bangdan">
					<dt></dt>
					<dd><img src="../../assets/images/sorts/bang_3.png"></dd>
				</dl>
			</div>
			
			<div class="artical-box border" v-for="i in 35">
				<p class="text-left">小说{{i}}</p>
				<ul class="">
					<li>世界名著</li><li>社会</li><li>侦探</li><li>情感</li><li>历史</li><li>展开<i class="iconfont icon-een"></i></li>
				</ul>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		data(){
			return{
				sorts_lists:[]
			}
		},
		mounted(){
			this.$http.get('./data/sorts-lists.json')
				.then((res)=>{
					this.sorts_lists=res.data.sorts_lists;
				})
				.catch((err)=>{
					console.log(err)
				});
		}
	}
</script>

<style scoped>
	main.sorts{
		position: fixed;
		padding: 4.5rem 0 50px;
		overflow: auto;
		height: -moz-calc(100% - 122px);
		height: -webkit-calc(100% - 122px);
		height: calc(100% - 122px);
	}
	.sorts{
		padding-bottom: 50px;
		position: fixed;
	}
	.header{
		position: fixed;
		top: 0;
		line-height: 4.5rem;
		width: 100%;
	}
	.head-l{
		position: absolute;
		top: 0;
		left: 0;
		width: 3.75rem;
		height:4.5rem;
	}
	.floatl{
		font-size: 1.4rem;
	}
	.head-m{
		position: relative;
		top: 0;
		margin-left: 3.75rem;
		margin-right: 3.75rem;
		height: 4.5rem;
		color: #b5bec5;
	}
	form{
		margin-left: .4rem;
		line-height: 3rem;
		background:#e8ecf0;
	}
	form>div{
	    position: absolute;
    	top: .7rem;
    	width: 100%;
    	height: 70%;
    	background: #e8e8e8;
		border-radius: 1.8rem;
	}
	form input{
		width: 70%;
		background: #e8e8e8;
		border: none;
		outline: none;
		line-height: 3rem;
	}
	.head-r{
		position: absolute;
		top: 0;
		right: 0;
		width: 3.75rem;
		height: 4.5rem;
		line-height: 4.5rem;
	}
	
	.icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	
	.aside{
		float: left;
		width: 22%;
		height: 100%;
		min-width: 50px;
		box-sizing: border-box;
		border-right: 4px solid #eff4fa;
		overflow: auto;
		font-size: .9rem;
	}
	.aside ul{
		width: 100%;
	}
	.aside li{
		line-height: 45px;
		height: 45px;
		width: 100%;
	}
	.main{
		width: 78%;
		float: right;
		top: 68px;
		box-sizing: border-box;
		overflow: auto;
		height: 100%;
		font-size: .8rem;
	}
	.pic-top{
		width: 100%;
		height: 0;
		padding-bottom:37.8%;
	}
	img{
		width: 100%;
	}
	ul.enter{
		overflow: hidden;
	}
	.enter li{
		position: relative;
		width: 50%;
		float: left;
		text-align: left;
		border-bottom: 3px solid #eff4fa;
		border-top: 3px solid #eff4fa;
		padding:12px  10px 12px 20px
	}
	.enter li:nth-of-type(1){
		border-right: 3px solid #eff4fa;
	}
	.enter li span{
		display: block;
	}
	.enter li span:nth-of-type(1){
		font-size: .9rem;
		color: #000;
	}
	.enter li span:nth-of-type(2){
		font-size: .6em;
		color: #888;
	}
	.enter li i{
		display: block;
		position: absolute;
		right: 10px;
		top: 50%;
		margin-top: -.5rem;
	}
	
	.bangdan-box{
		width: 100%;
		overflow: hidden;
		padding: 10px 0;
	}
	.bangdan-box dl{
		float: left;
		width: 33%;
		padding:auto 10px;
	}
	
	.artical-box{
		padding: 10px 0;
	}
	.artical-box ul{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		margin-bottom: 10px;
	}
	.artical-box ul li{
		width: 30%;
		margin-top: 15px;
	}
	
	
	.text-left{
		text-align: left;
		padding-left: 20px;
		margin-bottom: 7px;
	}
	.border{
		border-bottom: 3px solid #eff4fa;
	}
</style>