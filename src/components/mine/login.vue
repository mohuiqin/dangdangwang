<template>
	<main class="loginye">
		<p class="h1">
			<svg class="icon floatl" aria-hidden="true" @click="back()">
			  <use xlink:href="#icon-fanghui_ico"></use>
			</svg>
			<h1>登录</h1>
			<svg class="icon floatr" aria-hidden="true">
			  <use xlink:href="#icon-gengduo1"></use>
			</svg>
		</p>
		
		<div class="user-box">
				<svg class="icon yonghu" aria-hidden="true">
				  <use xlink:href="#icon-home"></use>
				</svg>
			<input type="text" placeholder="用户名/邮箱/昵称" />
		</div>
		<div class="pass-box">
			<svg class="icon mima" aria-hidden="true">
			  <use xlink:href="#icon-zhidemai21"></use>
			</svg>
			<input type="text" placeholder="密码" />
			<span>
				<svg class="icon kejian" aria-hidden="true">
				  <use xlink:href="#icon-kejian1"></use>
				</svg>
			</span>
		</div>
		<div class="button-box">
			<button class="login" @click="tologin()">登录</button>
		</div>
		
		<p class="spans"><span>找回密码</span><span class="login-tip"></span><span>注册</span></p>
		<p class="tip">为保障账户安全，请您不要设置与邮箱密码相同的账户登录密码或支付密码</p>
		<p class="tip center">第三方账号登录</p>
		
		<div class="methods">
			<ul class="othermethods">
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-weixin3"></use>
				</svg><p>微信</p>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-qq"></use>
				</svg><p>腾讯QQ</p>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-zhifubao1"></use>
				</svg><p>支付宝</p>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-weibohover"></use>
				</svg><p>新浪微博</p>
			</li>
		</ul>
		</div>
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
	main{
		/*background-image: -webkit-linear-gradient(top,#42b2fc,#a0d7fc);*/
	}
	.h1 svg{
		z-index: 9;
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
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: 1.05rem;
		border-bottom:0.2px solid #ddd;
	}
	.icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	
	.user-box,.pass-box{
		position:relative;
		margin:2.5rem 2rem;
		text-align: left;
		vertical-align: middle;
	}
	.user-box>svg,.pass-box>svg{
		position: absolute;
		left: 0;
		font-size: 1.2rem;
	}
	.user-box>input,.pass-box>input{
		padding-left: 1.6rem;
		box-sizing: border-box;
		border:.5px solid #ccc;
		border-radius: 4px;
		width: 100%;
		height: 2rem;
		margin-right: 5rem;
		font-size: 1rem;
		color: #666;
	}
	input:focus{
		border:.5px solid deepskyblue; 
		outline:none;
	}
	input::-webkit-input-placeholder {/*Chrome/Safari*/
    	color:#888;
    }
	svg.yonghu{
		margin-top: .4rem;
	}
	svg.mima{
		margin-top: .3rem;
		font-size: 1.5rem;
	}
	.kejian{
		z-index: 9;
		position: absolute;
		top: 0;
		right:0;
		font-size: 1.6rem;
	}
	
	.button-box{
		margin:2.5rem 2rem 0 2rem;
	}
	button.login{
		width:100%;
		height: 2.5rem;
		color: #fff;
		background-color: #90d5fc;
		font-size: 1.1rem;
		border:none;
		border-radius: 1rem;
		outline:none;
		box-sizing: border-box;
	}
	p.spans{
		width: 100%;
		font-size: .6rem;
		margin:.8rem auto;
		}
	.spans span:nth-of-type(1){
		float: left;
		margin-left: 2rem;
		text-decoration: underline;
		color: #F60;
	}
	.spans span:nth-of-type(3){
		float: right;
		margin-right: 2rem;
		text-decoration: underline;
		color: #F60;
	}
	
	.tip{
		width: 100%;
		margin:4rem 2rem 1rem 2rem;
		color: #999;
		font-size: .6rem;
		text-align: left;
	}
	.center{
		text-align: center;
		margin:0 auto;
		font-size: .7rem;
	}
	
	box.methods{
		width: 100%;
	}
	ul.othermethods{
		display: flex;
		left: 0;
		margin:1.5rem 2rem;
		font-size: .8rem;
	}
	ul.othermethods li{
		flex:1;
		text-align: center;
	}
	ul.othermethods li svg{
		font-size: 2.5rem;
	}
</style>