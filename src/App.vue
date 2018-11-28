<template>
  <main id="app">
    <ul>
    	<li><router-link to="./index">
    		<svg id="ico" class="icon" aria-hidden="true">
				  <use xlink:href="#icon-shouye1"></use>
				</svg>首页
    	</router-link></li>
    	<li><router-link to="./sorts">
    		<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-jifenfenlei"></use>
				</svg>分类
    	</router-link></li>
    	<li><router-link to="./worth">
    		<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-zhidemai2"></use>
				</svg>值得买
    	</router-link></li>
    	<li><router-link to="./sortcar">
    		<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-cart-2"></use>
				</svg>购物车
    	</router-link></li>
    	<li><router-link to="./mine">
    		<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-dangdangwang1"></use>
				</svg>我的当当
    	</router-link></li>
    </ul>
    <router-view></router-view>
  </main>
</template>

<script>
	export default {
	  name: 'app',
	  data () {
	    return {
	      msg: 'App'
	    }
	  }
	}
</script>

<style scoped>
	/*iconfont*/
	.icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
	ul svg{
		display: block;
		font-size: 32px;
		margin: 0 auto;
	}
	.router-link-active,li .router-link-active svg.icon{
		color:#aa0915;
	}
	
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	}
	
	h1, h2 {
	  font-weight: normal;
	}
	
	ul {
		z-index:99;
	  position: fixed;
	  left: 0;
	  bottom: 0;
	  display: flex;
	  width: 100%;
	  border-top: 0.5px solid #bbb;
	  background: #fff;
	  opacity: 1;
	  margin-top: 3rem;
	}
	
	ul li {
		font-size: .7rem;
	  flex: 1;
	  text-align: center;
	}
	
	a {
	   color: #4d525d;
	}
</style>
