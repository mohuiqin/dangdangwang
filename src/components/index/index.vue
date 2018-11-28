<template>
	<main class="index">
		<div class="header">
			<div class="head-l">
				<img src="../../assets/images/index/DangDanglogo.gif" style="width: 5rem;height: 2.5rem;margin-left: .6rem;"/>
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
		<!--轮播图，使用mint-ui组件库-->
		<mt-swipe :auto="5000">
		  <mt-swipe-item>
		  	<img src="../../assets/images/index/swiper1.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/index/swiper2.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/index/swiper3.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/index/swiper4.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/index/swiper5.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/index/swiper6.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../../assets/images/index/swiper7.jpg" alt="sorry，该图片不存在" title="点击显示详情"/>
		  </mt-swipe-item>
		</mt-swipe>
		
		<div class="oneimg">
			<img src="../../assets/images/index/per.jpg" />
		</div>
		<!--排行榜-->
		<ul class="pang">
			<li>
				<router-link to="./books"><img src="../../assets/images/index/li1.png" /></router-link>
			</li>
			<li>
				<img src="../../assets/images/index/li2tongshu.png" />
			</li>
			<li>
				<img src="../../assets/images/index/li3xiaoshuobang.png" />
			</li>
			<li>
				<img src="../../assets/images/index/li4wenxuebang.png" />
			</li>
			<li>
				<img src="../../assets/images/index/li5lishibang5.png" />
			</li>
			<li>
				<img src="../../assets/images/index/li6fuzhuang.png" />
			</li>
			<li>
				<img src="../../assets/images/index/li7chaosh.png" />
			</li>
			<li>
				<img src="../../assets/images/index/li8pintuan.png" />
			</li>
			<li>
				<img src="../../assets/images/index/li9lingquanzhongxin.png" />
			</li>
			<li>
				<img src="../../assets/images/index/li10qiandao.png" />
			</li>
		</ul>
		<!--促销-->
		<div class="xiao">
			<div class="cuxiao">
				<img src="../../assets/images/index/cuxiao.png"/>
			</div>
			<!--向上滑动轮播   js-->
			<div class="xiao-m">
				<ul id="moslide">
					<li>
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-qiang"></use>
						</svg>
						<span>1家居好货，满199减88</span>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-manjianzhekou"></use>
						</svg>
						<span>2巴拉巴拉，3折起</span>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-manjian"></use>
						</svg>
						<span>3抢100元，满199-99叠加</span>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-remai1"></use>
						</svg>
						<span>4零点开抢，买一送一</span>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-manjian"></use>
						</svg>
						<span>5巴拉巴拉，3折起</span>
					</li>
					<li>
						<svg class="icon" aria-hidden="true">
						  <use xlink:href="#icon-remai1"></use>
						</svg>
						<span>1家居好货，满199减88</span>
					</li>
				</ul>
			</div>
		</div>
		
		<img src="../../assets/images/mine/pingpaijie.jpg" />
		<div class="pinpaijie-box">
			<!--轮播图，使用mint-ui组件库-->
			<mt-swipe :auto="5000" class="twoswip">
			  <mt-swipe-item>
			  	<ul class="pinpaijie-ul">
					<li><img src="../../assets/images/mine/en-s10.png"></li>
					<li><img src="../../assets/images/mine/en-s11.png"></li>
					<li><img src="../../assets/images/mine/en-s12.png"></li>
					<li><img src="../../assets/images/mine/en-s13.png"></li>
				</ul>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<ul class="pinpaijie-ul">
					<li><img src="../../assets/images/mine/en-s21.png"></li>
					<li><img src="../../assets/images/mine/en-s22.png"></li>
					<li><img src="../../assets/images/mine/en-s23.png"></li>
					<li><img src="../../assets/images/mine/en-s24.png"></li>
				</ul>
			  </mt-swipe-item>
			</mt-swipe>
			
			<mt-swipe :auto="5000" class="twoswip" style="margin:10px 0">
			  <mt-swipe-item>
			  	<ul class="pinpaijie-ul">
					
					<li><img src="../../assets/images/mine/en-s15.png"></li>
					<li><img src="../../assets/images/mine/en-s16.png"></li>
					<li><img src="../../assets/images/mine/en-s30.png"></li>
					<li><img src="../../assets/images/mine/en-s17.png"></li>
				</ul>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<ul class="pinpaijie-ul">
					<li><img src="../../assets/images/mine/en-s27.png"></li>
					<li><img src="../../assets/images/mine/en-s28.png"></li>
					<li><img src="../../assets/images/mine/en-s29.png"></li>
					<li><img src="../../assets/images/mine/en-s30.png"></li>
				</ul>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<!--倒计时，用mounted，定时器，实现现-->
		<div class="pic-two"><img src="../../assets/images/mine/two.jpg"  alt="" title=""/></div>
		<img src="../../assets/images/mine/miaosha.jpg" alt="" title=""/>
		<p class="miaosha">
			<span>{{hours}}</span>时
			<span>{{minutes}}</span>分
			<span>{{seconds}}</span>秒
		</p>
		
		<div class="tushu-box"><ul class="tushu-ul">
			<li>
				<img src="../../assets/images/mine/books_10.jpg">
				<p class="name">40片装暖贴宝宝贴暖身贴大号保暖贴发热贴关节贴宫暖贴足暖宝贴热帖</p>
				<span class="num"><span class="iconfont icon-renminbi"></span>17.9</span>
				<span class="discount"><span class="iconfont icon-renminbi"></span>79.00</span>
			</li>
			<li>
				<img src="../../assets/images/mine/books_11.jpg">
				<p class="name">儿童文学名家经典全套10册彩色注音版 一二年级课外读物6-7-8-9-10岁故事书爷爷的小木屋、彩虹国奇遇记等儿童童话故事书</p>
				<span class="num"><span class="iconfont icon-renminbi"></span>39.8</span>
				<span class="discount"><span class="iconfont icon-renminbi"></span>168.00</span></span></p>
			</li>
			<li>
				<img src="../../assets/images/mine/books_12.jpg">
				<p class="name">【10W+女神的选择】爆款力荐 | 加绒加厚毛衣女2018新款冬季半高领针织打底衫女长袖贴身保暖上衣</p>
				<span class="num"><span class="iconfont icon-renminbi"></span>39.8</span>
				<span class="discount"><span class="iconfont icon-renminbi"></span>168.00</span></span></p>
			</li>
			<li>
				<img src="../../assets/images/mine/books_13.jpg">
				<p class="name">【10W+女神的选择】爆款力荐 | 加绒加厚毛衣女2018新款冬季半高领针织打底衫女长袖贴身保暖上衣</p>
				<span class="num"><span class="iconfont icon-renminbi"></span>39.8</span>
				<span class="discount"><span class="iconfont icon-renminbi"></span>168.00</span></span></p>
			</li>
			<li><img src="../../assets/images/mine/books_14.jpg"></li>
			<li><img src="../../assets/images/mine/books_15.jpg"></li>
			<li><img src="../../assets/images/mine/books_16.jpg"></li>
			<li><img src="../../assets/images/mine/books_17.jpg"></li>
			<li><img src="../../assets/images/mine/books_18.jpg"></li>
			<li><img src="../../assets/images/mine/books_19.jpg"></li>
			<li><img src="../../assets/images/mine/books_20.jpg"></li>
		</ul></div>
		<div class="pic-three">
			<img src="../../assets/images/mine/pic_three.jpg" />
		</div>
		<ul class="fri-ul">
			<li>
				<img src="../../assets/images/mine/fri_1.jpg">
				<p class="title">黑五主会场</p><p class="discount">低至9.9元</p>
			</li>
			<li>
				<img src="../../assets/images/mine/fri_2.jpg">
				<p class="title">黑五主会场</p><p class="discount">低至9.9元</p>
			</li>
			<li>
				<img src="../../assets/images/mine/fri_3.jpg">
				<p class="title">黑五主会场</p><p class="discount">低至9.9元</p>
			</li>
			<li>
				<img src="../../assets/images/mine/fri_4.jpg">
				<p class="title">黑五主会场</p><p class="discount">低至9.9元</p>
			</li>
			<li>
				<img src="../../assets/images/mine/fri_5.jpg">
				<p class="title">黑五主会场</p><p class="discount">低至9.9元</p>
			</li>
			<li>
				<img src="../../assets/images/mine/fri_6.jpg">
				<p class="title">黑五主会场</p><p class="discount">低至9.9元</p>
			</li>
			<li>
				<img src="../../assets/images/mine/fri_7pg.jpg">
				<p class="title">黑五主会场</p><p class="discount">低至9.9元</p>
			</li>
			<li>
				<img src="../../assets/images/mine/fri_8.jpg">
				<p class="title">黑五主会场</p><p class="discount">低至9.9元</p>
			</li>
			<li>
				<img src="../../assets/images/mine/fri_9.jpg">
				<p class="title">黑五主会场</p><p class="discount">低至9.9元</p>
			</li>
		</ul>
		<img src="../../assets/images/mine/pic_4.jpg" style="margin-top: 10px;"/>
		<ul class="bg-back">
			<li>当当书城<svg class="icon cirsvg" aria-hidden="true"><use xlink:href="#icon-arr-right"></use></svg></i></li>
			<li>电子书<svg class="icon cirsvg" aria-hidden="true"><use xlink:href="#icon-arr-right"></use></svg></i></li>
			<li>精选童书<svg class="icon cirsvg" aria-hidden="true"><use xlink:href="#icon-arr-right"></use></svg></li>
		</ul>
		<img src="../../assets/images/mine/pic_5.jpg" style="margin-top: 20px;"/>
		<ul class="fivedis-box">
			<li>
				<p class="wenyi">文艺畅品</p><span class="fivecount">五折封顶</span>
				<img src="../../assets/images/mine/bookstore_1.jpg" title="" alt="" />
			</li>
			<li>
				<p class="wenyi">电子书</p><span class="fivecount">美满30减</span>
				<img src="../../assets/images/mine/bookstore_2.jpg" title="" alt="" />
			</li>
			<li>
				<p class="wenyi">精选童书</p><span class="fivecount">五折封顶</span>
				<img src="../../assets/images/mine/bookstore_3.jpg" title="" alt="" />
			</li>
			<li>
				<p class="wenyi">精选童书</p><span class="fivecount">五折封顶</span>
				<img src="../../assets/images/mine/bookstore_4.jpg" title="" alt="" />
			</li>
			<li>
				<p class="wenyi">精选童书</p><span class="fivecount">五折封顶</span>
				<img src="../../assets/images/mine/bookstore_5.jpg" title="" alt="" />
			</li>
			<li>
				<p class="wenyi">精选童书</p><span class="fivecount">五折封顶</span>
				<img src="../../assets/images/mine/bookstore_6.jpg" title="" alt="" />
			</li>
			<li>
				<p class="wenyi">精选童书</p><span class="fivecount">五折封顶</span>
				<img src="../../assets/images/mine/bookstore_7.jpg" title="" alt="" />
			</li>
			<li>
				<p class="wenyi">精选童书</p><span class="fivecount">五折封顶</span>
				<img src="../../assets/images/mine/bookstore_8.jpg" title="" alt="" />
			</li>
			<li>
				<p class="wenyi">精选童书</p><span class="fivecount">五折封顶</span>
				<img src="../../assets/images/mine/bookstore_9.jpg" title="" alt="" />
			</li>
		</ul>
		<img src="../../assets/images/mine/pic_6.jpg" style="margin-top: 10px;"/>
		<ul class="twoliul">
			<li>服装品牌榜单<svg class="icon cirsvg" aria-hidden="true"><use xlink:href="#icon-arr-right"></use></svg></i></li>
			<li>服装上心<svg class="icon cirsvg" aria-hidden="true"><use xlink:href="#icon-arr-right"></use></svg></i></li>
		</ul>
		<ul class="cloth-ul">
			<li>
				<img src="../../assets/images/mine/coloth_2.jpg" />
			</li>
			<li>
				<img src="../../assets/images/mine/coloth_3.jpg" />
			</li>
			<li>
				<img src="../../assets/images/mine/coloth_4.jpg" />
			</li>
			<li>
				<img src="../../assets/images/mine/coloth_1.jpg" />
			</li>
			<li>
				<img src="../../assets/images/mine/coloth_5.jpg" />
			</li>
			<li>
				<img src="../../assets/images/mine/coloth_6.jpg" />
			</li>
			<li>
				<img src="../../assets/images/mine/coloth_7jpg.jpg" />
			</li>
			<li>
				<img src="../../assets/images/mine/coloth_8.jpg" />
			</li>
			<li>
				<img src="../../assets/images/mine/coloth_9.jpg" />
			</li>
		</ul>
	</main>
</template>

<script>

	var num=0;
	var timer;
	function gogo(){
		timer=setInterval(function(){
			num++;
			if(num>5) num=0;
			else{
				moslide.style.top=-num*56+'px';
			}
		},3000)
	}
	gogo();
	
	export default{
		data(){
			return{
				hours:'',
				minutes:'',
				seconds:'',
				endtimes:''
			}
		},
		mounted(){
			var a=this;//箭头函数和定时器的this指向window
			setInterval(function(){
				let endtimes=24*60*60//结束的秒数
				let date=new Date();//现在的时间
				let nowseconds=date.getSeconds();
				let nowminutes=date.getMinutes();
				let nowhours=date.getHours();
				let nowtimes=nowseconds+nowminutes*60+nowhours*60*60;//现在的秒数
				let times=endtimes-nowtimes;//剩余的秒数
				a.hours=Math.floor(times/(60*60));//剩余的小时数
				a.minutes=Math.floor((times%(60*60))/60);//剩余的分钟数
				a.seconds=times%(60*60)%60+1;
			},1000)
		}
	}
</script>

<style>
	.index{
		padding-bottom:50px;
	}
	.index .header{
		position: relative;
		top: 0;
		line-height: 5.5rem;
	}
	.index .head-l{
		position: absolute;
		top: 0;
		left: 0;
		width: 3.75rem;
		height:4.5rem;
	}
	.index .head-m{
		position: relative;
		top: 0;
		margin-left: 3.75rem;
		margin-right: 3.75rem;
		height: 4.5rem;
		color: #b5bec5;
	}
	.index form{
		margin-left: .4rem;
		line-height: 3rem;
		background:#e8ecf0;
	}
	.index form>div{
	    position: absolute;
    	top: .7rem;
    	width: 100%;
    	height: 70%;
    	background: #e8e8e8;
		border-radius: 1.8rem;
	}
	.index form input{
		width: 70%;
		background: #e8e8e8;
		border: none;
		outline: none;
		line-height: 3rem;
		text-align: center;
	}
	.index .head-r{
		position: absolute;
		top: 0;
		right: 0;
		width: 3.75rem;
		height: 4.5rem;
		line-height: 4.5rem;
	}
	.index .icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	/*轮播*/
	.index .mint-swipe-indicators{
		display: none;
	}
	.index .mint-swipe{
		height: 100%;
		position: relative;
	}
	.index .mint-swipe-items-wrap{
		padding-bottom:29.47%;
		height:0px;
	}
	.index img{
		width: 100%;
	}
	.index .mint-swipe-indicator{
		opacity: 0.7;
		background: #fff;
	}
	.index .is-active{
		opacity: 1;
		background: #f50 !important;
	}
	
	.index .oneimg{
		width:100%;
		padding-bottom: 42.2%;
		height: 0;		
	}
	
	/*排行榜*/
	.index ul.pang{
		width: 100%;
		zoom: 1;
	}
	.index ul.pang::after{
		content: '';
		display: block;
		clear: both;
	}
	.index ul.pang li{
		float: left;
		width: 20%;
	}
	/*促销*/
	.xiao{
		width: 100%;
		height: 3.5rem;
		position: relative;
	}
	.index .cuxiao{
		position:absolute;
		left: 0;
		top: 0;
		width: 28%;
	}
	
	.xiao-m{
		margin-left: 28%;
		margin-right: 1rem;
		height: 3.5rem;
		position: relative;
		overflow: hidden;
	}
	.xiao-m ul{
		position: absolute;
		/*top: 1rem;*/
		width: 100%;
		height: 30rem;
	}
	.xiao-m ul li{
		line-height: 3.5rem;
		height: 3.5rem;
		font-size: 1.2rem;
		vertical-align: middle;
		text-align: left;
		color: #f60;
	}
	.xiao-m ul li svg{
		font-size: 1.8rem;
		margin-top: 1rem;
		margin-right: .3rem;
	}
	.pic-two{
		width: 100%;
		height: 0;
		padding-bottom: 27%;
		margin:10px auto;
	}
	
	/*拼牌街*/
	.pinpaijie-box{
		width: 100%;
		height: 20%;
		overflow: auto;
	}
	.pinpaijie-ul{
		position:relative;
		width: 300%;
		height: 100%;
		overflow: hidden;
	}
	.pinpaijie-ul li{
		float: left;
		width: 8.5%;
	}
	.twoswip .mint-swipe-items-wrap{
		padding-bottom:13%;
		border: none;
	}
	/*秒杀*/
	.miaosha{
		font-size: 1.3rem;
	}
	.miaosha span{
		display: inline-block;
		width: 2rem;
		height: 2.3rem;
		line-height: 2.3rem;
		background: #666;
		color: #fff;
		font-size: 1.4rem;
		border-radius: 8px;
		margin: 0 8px;
		background-color:#ff1e6e;
	}
	
	.tushu-box{
		width: 100%;
		overflow: auto;
	}
	.tushu-ul{
		width: 9999px;
		overflow: hidden;
	}
	.tushu-ul li{
		float: left;
		width: 7rem;
		margin:10px 5px;
	}
	.tushu-ul li{
		font-size: .8rem;
	}
	.tushu-ul li p{
		display: -webkit-box;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	    overflow: hidden;
	}
	.tushu-ul li .num,
	.tushu-ul li .discount{
		display: block;
		text-align: left;
	}
	.tushu-ul li .num{
		color: red;
	}
	.pic-three{
		width: 100%;
		margin: 10px auto;
	}
	.fri-ul{
		display: flex;
		width: 100%;
        flex-wrap: wrap;
        margin-top: 5px;
	}
	.fri-ul li{
		text-align: center;
		width: 33.33%;
		box-sizing: border-box;
		padding:7px 15px;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.fri-ul li .title{
		font-size: .9rem;
	}
	.fri-ul .discount{
		font-size: .6px;
		color: #E31A52;
	}
	.bg-back{
		display: flex;
		width: 100%;
	}
	.bg-back li{
		flex: 1;
		text-align: center;
	}
	.cirsvg{
		display: inline-block;
		width: 17px;
		height: 17px;
		background: #333;
		border-radius: 50%;
		margin-left: 4px;
		color: #fff;
	}
	/*books*/
	.fivedis-box{
		margin-top: 10px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.fivedis-box li{
		width: 33%;
		padding: 8px 6px;
		box-sizing: border-box;
	}
	.fivecount{
		color: #ef2933;
	}
	.twoliul{
		display: flex;
		width: 100%;
	}
	.twoliul li{
		flex: 1;
		width: 40%;
		margin: 0 auto;
	}
	.cloth-ul{
		margin-top: 6px;
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.cloth-ul li{
		width: 30%;
		margin:8px 5px
	}
</style>
