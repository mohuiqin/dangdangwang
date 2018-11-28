<template>
	<main id="worth">
		<p class="h1">
			<svg class="icon floatl" aria-hidden="true" @click="back()">
				<use xlink:href="#icon-fanghui_ico"></use>
			</svg>
			
			<h1>值得买</h1>
			<svg class="icon floatr" aria-hidden="true">
			  <use xlink:href="#icon-gengduo1"></use>
			</svg>
		</p>
		<!--轮播图，使用mint-ui组件库-->
		<mt-swipe :auto="5000">
		  <mt-swipe-item>
		  	<img src="../../assets/images/sorts/worth.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/sorts/worth_1.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/sorts/worth_2.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/sorts/worth_3.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		</mt-swipe>
		
		<!--图文列表-->
		<ul class="p-ul">
			<li><img src="../../assets/images/sorts/worth_p01.png"></li>
			<li><img src="../../assets/images/sorts/worth_p02.png"></li>
			<li><img src="../../assets/images/sorts/worth_p03.png"></li>
			<li><img src="../../assets/images/sorts/worth_p04.png"></li>
			<li><img src="../../assets/images/sorts/worth_p05.png"></li>
			<li><img src="../../assets/images/sorts/worth_p06.png"></li>
			<li><img src="../../assets/images/sorts/worth_p07.png"></li>
			<li><img src="../../assets/images/sorts/worth_p08.png"></li>
			<li><img src="../../assets/images/sorts/worth_p09.png"></li>
			<li><img src="../../assets/images/sorts/worth_p10.png"></li>
		</ul>
		<!--促销专场  flex布局-->
		<section class="cu-box">
			<dl class="cu-dl">
				<dt>促销专场<span>更多></span></dt>
				<dd>
					<ul class="pi-ul">
						<li>
							<p>文艺童书</p>
							<p>每满100-50</p>
							<img src="../../assets/images/sorts/worth_pi01.jpg"/>
						</li>
						<li>
							<p>文艺童书</p>
							<p>每满100-50</p>
							<img src="../../assets/images/sorts/worth_pi02.jpg"/>
						</li>
						<li>
							<p>文艺童书</p>
							<p>每满100-50</p>
							<img src="../../assets/images/sorts/worth_pi03.jpg"/>
						</li>
						<li>
							<p>文艺童书</p>
							<p>每满100-50</p>
							<img src="../../assets/images/sorts/worth_pi04.jpg"/>
						</li>
						<li>
							<p>文艺童书</p>
							<p>每满100-50</p>
							<img src="../../assets/images/sorts/worth_pi05.jpg"/>
						</li>
						<li>
							<p>文艺童书</p>
							<p>每满100-50</p>
							<img src="../../assets/images/sorts/worth_pi06.jpg"/>
						</li>
					</ul>
				</dd>
			</dl>
		</section>
		
		<!--立刻秒杀  flex布局-->
		<section class="miao-box">
			<dl class="cu-dl">
				<dt>立刻秒杀<span>更多></span></dt>
				<dd>
					<ul class="pi-ul miao-ul">
						<li>
							<img src="../../assets/images/sorts/worth_pi04.jpg"/>
							<p>文艺童书</p>
							<p>每满100-50</p>
						</li>
						<li>
							<img src="../../assets/images/sorts/worth_pi06.jpg"/>
							<p>文艺童书</p>
							<p>每满100-50</p>
							
						</li>
						<li>
							<img src="../../assets/images/sorts/worth_pi05.jpg"/>
							<p>文艺童书</p>
							<p>每满100-50</p>
						</li>
						<li>
							<img src="../../assets/images/sorts/worth_pi03.jpg"/>
							<p>文艺童书</p>
							<p>每满100-50</p>
						</li>
						<li>
							<img src="../../assets/images/sorts/worth_pi01.jpg"/>
							<p>文艺童书</p>
							<p>每满100-50</p>
						</li>
						<li>
							<img src="../../assets/images/sorts/worth_pi02.jpg"/>
							<p>文艺童书</p>
							<p>每满100-50</p>
						</li>
					</ul>
				</dd>
			</dl>
		</section>
		
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
				bookdetails:[],
				leaderboard:[
					'新书热卖榜',
					'图书畅销榜',
					'图书新书榜',
					'童书畅销榜',
					'图书飙升榜',
					'五星图书榜',
				],
				num:0
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		mounted(){
			this.$http.get('./data/details.json')
				.then((res)=>{
					this.bookdetails=res.data.bookdetails;
				})
			   .catch((error)=>{
			     console.log(error);
			   });
		}
	}
</script>

<style>
	#worth{
		margin-bottom: 3.2rem;
	}
	#worth a{
		color: #555;
	}
	#worth h1{
		border-bottom: 1px solid #ccc;
	}
	#worth .h1 svg{
		position: absolute;
		width: 1.4rem;
		height: 2.5rem;
	}
	#worth .floatl{
		z-index: 9;
		left: 1rem;
		color: #999;
	}
	#worth .floatr{
		position: absolute;
		top: 1rem;
		width: 1.4rem;
		height: 2.5rem;
		right: 1rem;
	}
	#worth h1{
		position: relative;
		height: 2.3rem;
		font-size: 1.05rem;
		padding-top: .5rem;
	}
	
	/*轮播*/
	#worth .mint-swipe{
		/*height: 0;
		padding-bottom: 29.47%;*/
	}
	
	#worth img{
		width: 100%;
	}
	#worth .mint-swipe-indicators{
		display: none;
	}
	#worth .mint-swipe-indicator{
		opacity: 0.7;
		background: #fff;
	}
	#worth .is-active{
		opacity: 1;
		background: #f50 !important;
	}
	#worth .mint-swipe-items-wrap{
		
		padding-bottom: 29.47%;
		height: 0;
	}	
	#worth .mint-swipe-items{
		
	}
	
	/*促销专场*/
	#worth .cu-box{
		width: 100%;
		padding: 12px 8px;
		background: linear-gradient(to bottom, #f78b8a 0%,#fcdddc 100%);
	}
	#worth .cu-dl dt{
		margin-bottom: 5px;
		font-size: 1.1rem;
		color: #fff;
	}
	#worth .cu-dl dt span{
		float: right;
		margin-right: 5px;
		font-size: .8px;
	}
	#worth .p-ul{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	#worth .p-ul li{
		width: 20%;
	}
	#worth .pi-ul{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}
	#worth .pi-ul li{
		width: 31.6%;
		text-align: center;
		background-color: #fff;
		margin: 3px 3px;
		padding: 3px 0px 5px;
		border-radius: 8px;
	}
	#worth .pi-ul li p{
		margin-top: 5px;
	}
	
	#worth .pi-ul li p:nth-of-type(2){
		color:#943dff;
		font-size: .8rem;
		margin-bottom: 10px;
	}
	#worth .pi-ul li img{
		width:60%;
	}
	
	/*秒杀*/
	#worth .miao-box{
		width: 100%;
		padding: 12px 8px;
		background: lightcoral;
		/*background: linear-gradient(to bottom, #ff5350 0%,#fe7946 100%);*/
	}
	#worth .miao-box dd{
		overflow: auto;
	}
	#worth ul.miao-ul{
		display: flex;
		flex-wrap: nowrap;
		width: 200%;
	}
	#worth ul.miao-ul li{
		flex: 1;
		width: 33.33%;
	}
	
	
	#worth .icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
</style>