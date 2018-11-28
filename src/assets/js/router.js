import VueRouter from 'vue-router'
import index from '../../components/index/index.vue'
import sorts from '../../components/index/sorts.vue'
import worth from '../../components/index/worth.vue'
import sortcar from '../../components/index/sortcar.vue'
import mine from '../../components/index/mine.vue'

import more from '../../components/index/more.vue'

import login from '../../components/mine/login.vue'

import books from '../../components/content/books.vue'
import booksdetails from '../../components/content/books.vue'
export default new VueRouter({
	routes:[
	 {
	 	path:'/index',component:index
	 },
	  {
	 	path:'/sorts',component:sorts
	 },
	  {
	 	path:'/worth',component:worth
	 },
	  {
	 	path:'/sortcar',component:sortcar
	 },
	  {
	 	path:'/mine',component:mine
	 },
	 {
	 	path:'/more',component:more
	 },
	 {
	 	path:'/login',component:login
	 },
	 {
	 	path:'/books',component:books
	 },
	 {
	 	path:'/booksdetails',component:booksdetails
	 },
	 {
	 	path:'/',redirect:'/index'
	 }
	]
})
