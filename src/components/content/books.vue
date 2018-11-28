<template>
	<main>
		<div class="header">
			<div class="head-l">
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-dangdangwang"></use>
				</svg>
			</div>
			<div class="head-m">
				<ul class="app">
					<li>下载当当购物app</li>
					<li>在此页打开app</li>
				</ul>
			</div>
		</div>
		<p class="h1">
			<svg class="icon floatl" aria-hidden="true" @click="back()">
			  <use xlink:href="#icon-fanghui"></use>
			</svg>
			<strong>图书畅销榜</strong>
			<svg class="icon floatr" aria-hidden="true">
			  <use xlink:href="#icon-gengduo1"></use>
			</svg>
		</p>
		
		<div class="leaderbox">
			<ul class="leaderboard">
				<li v-for="v in leaderboard">{{v}}</li>
			</ul>
		</div>
		<p class="btn">
			<button class="active">总榜</button>
			<button>中小学辅书</button>
			<button>童书</button>
			<button>小说</button>
		</p>
		
		<ul class="books-list">
			<li>
				<router-link to="booksdetails" v-for="(v,i) in bookdetails">
					<div class="img-box">
						<span class="listnum">{{i+1}}</span>
						<img :src="v.img" alt="" />
						<img src="../../assets/images/mine/books_01.jpg">
					</div>
					<div class="infor-box">
						<p class="book-title">{{v.title}}</p>
						<p class="book-autor">{{v.autor}}</p>
						<p class="book-publish">{{v.publish}}</p>
						<p class="span"><span class="span1">{{v.dangdang[0].dang1}}</span><span class="span2">{{v.dangdang[1].dang2}}</span></p>
						<p class="price"><span class="price1">￥{{v.price[0].price1}}</span><span class="price2">￥{{v.price[1].price2}}</span></p>
						<p class="electric"><span class="version">{{v.electric[0].version}}</span><span class="cash">{{v.electric[1].cash}}</span></p>
						<p>
							<span class="red-star" v-for="i in 5"></span>
							<span class="critic">{{v.critic}}</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
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
	ul.app{
		display: flex;
	}
	.app li{
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
	.app li:nth-last-of-type(1){
		/*background: #dedede;*/
		background:lightcyan;
		color:#000;
		border:0.5px solid #777;
	}
	.app li:nth-last-of-type(2){
		background:lightcyan;
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
		line-height: 2.3rem;
		height: 2.3rem;
		padding-top: .3rem;
		border-bottom: .3px solid #ddd;
	}
	p.h1 svg{
		z-index: 9;
		display: inline-block;
		position: absolute;
		width: 1.5rem;
		height: 2rem;
	}
	.floatl{
		position: absolute;
		left: 1rem;
	}
	.floatr{
		float:right;
		right: 1rem;
	}
	
	.leaderbox{
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}	
	ul.leaderboard{
		width: 200%;
		height: 2.4rem;
		overflow: hidden;
		line-height: 2.4rem;
		border-bottom: .2px solid #ddd;
	}
		
	.leaderboard li{
		float: left;
		text-align: center;
		font-size: .85rem;
		width: 12.5%;
	}
	
	.btn{
		width: 100%;
		height: 2.5rem;
		border-bottom: .2px solid #ddd;
		overflow: hidden;
	}
	.btn button{
		border-radius: 10px;
		margin: .5rem .8rem;
		background:#fff;
		border: .1px solid #999;
		padding: 3px 10px;
		color:#888;
	}
	button.active{
		background: #ccc;
		color:#fff;
		font-weight: bold;
		border: 1px solid #fff;
	}
	
	.books-list{
		width: 100%;
	}
	.books-list li{
		width: 100%;
		height:11rem;
		position: relative;
		border-bottom: .1px solid #ddd;
		box-sizing: border-box;
	}
	.books-list li a{
		width: 100%;
		height: 100%;
		display: block;
	}
	.img-box{
		position: absolute;
		left: 0;
		width: 33%;
		height:100%;
		overflow: hidden;
	}
	.img-box img{
		margin:auto 1rem ;
		height: 50%;
		margin-top: 2.75rem;
	}
	.listnum{
		position: absolute;
		left: 0;
		top: 0;
		width: 18px;
		height: 18px;
		background: red;
		color: #fff;
	}
	.infor-box{
		position: absolute;
		right: 0;
		width: 67%;
		height: 100%;
		padding-top: 9px;
		box-sizing: border-box;
		text-align: left;
	}
	.book-title{
		color: #555;
		line-height:1.4rem;
	}
	.book-publish,.book-autor{
		color:#888;
		font-size: .8rem;
	}
	.span1{
		color: red;
		border: 1px solid red;
		background: #fff;
		font-size: .8rem;
		padding: 2px 3px;
	}
	.span2{
		color: #fff;
		border: 1px solid #fff;
		background: #f40;
		font-size: .8rem;
		padding: 2px 3px;
		box-sizing: border-box;
		margin-left: 6px;
	}
	.price{
		font-size: .8em;
		font-weight: bolder;
	}
	.price1{
		color: red;
	}
	.price2{
		color:#999;
		margin-left: 10px;
		text-decoration: line-through;
	}
	.electric{
		font-size: .6rem;
		color: #f50;
	}
	.electric span:nth-of-type(2){
		margin-left: 10px;
	}
	.red-star{
		display: inline-block;
		background: url('../../assets/images/mine/red_star.png') no-repeat;
		width: 1rem;
		height: 1rem;
		background-size: 1rem 1rem;
		vertical-align: middle;
	}
	.critic{
		margin-left: 10px;
		font-size: .6rem;
		color:#999;
	}
	.infor-box p{
		margin:2px auto;
	}
</style>