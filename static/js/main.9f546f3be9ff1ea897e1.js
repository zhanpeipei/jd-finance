webpackJsonp([0],{0:function(t,e,n){n("NHnr"),t.exports=n("cCWZ")},"1E3b":function(t,e){},"2XHO":function(t,e){},"2yDO":function(t,e){},"3a1S":function(t,e,n){t.exports=n.p+"static/img/insure-banner.c17a297.jpg"},"7WX8":function(t,e){},BiRM:function(t,e,n){t.exports=n.p+"static/img/money-banner.7b2c421.png"},BukJ:function(t,e){},DAxl:function(t,e){},I7hV:function(t,e,n){t.exports=n.p+"static/img/help.c98c60a.png"},IVbP:function(t,e){},JKnV:function(t,e){},Kus2:function(t,e){},MeYe:function(t,e){},MtVh:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view",{attrs:{name:"top"}}),this._v(" "),e("router-view",{attrs:{name:"middle"}}),this._v(" "),e("router-view",{attrs:{name:"bottom"}})],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},a,!1,function(t){n("yj38")},null,null).exports,r=n("/ocq"),c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"fix-head"},[e("router-link",{staticClass:"login",attrs:{to:"/mine"}},[e("a",[this._v("注册")]),this._v("\r\n        |\r\n        "),e("a",[this._v("登陆")])]),this._v(" "),e("div",{staticClass:"btn"},[this._v("\r\n      APP下载\r\n    ")])],1),this._v(" "),e("div",{staticClass:"seat"})])},staticRenderFns:[]};var o=n("VU/8")({name:"Head",data:function(){return{}}},c,!1,function(t){n("IVbP")},"data-v-00ef3b10",null).exports,l={name:"navbar",props:{newName:{type:String,default:""},items:{type:Array,default:function(){return[{src:"",alt:"",title:"",link:"/"}]}}},data:function(){return{navbar:"navbar"}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.navbar,t.newName]},t._l(t.items,function(e,i){return n("router-link",{key:e.src,attrs:{to:e.link,tag:"a"}},[n("img",{attrs:{src:e.src,alt:e.alt}}),t._v(" "),n("h4",[t._v(t._s(e.title))])])}))},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(t){n("JKnV")},null,null).exports,p={name:"Footer",components:{Navbar:d},created:function(){var t=this;this.datas.forEach(function(e){return t.old.push(e.src)})},computed:{items2:function(){var t=this;return this.index=this.path.indexOf(this.$route.path),this.old.forEach(function(e,n){t.index==n?t.datas[n].src=t.new[n]:t.datas[n].src=e}),this.datas}},data:function(){return{index:"",path:["/","/money","/debit","/mine"],newName:"bottom-nav",old:[],new:["./static/home2.png","./static/money2.png","./static/debit2.png","./static/home2.png"],datas:[{src:"./static/home.png",alt:"首页",title:"首页",link:"/"},{src:"./static/money.png",alt:"理财",title:"理财",link:"/money"},{src:"./static/debit.png",alt:"白条",title:"白条",link:"/debit"},{src:"./static/mine.png",alt:"我的",title:"我的",link:"/mine"}],items:[{src:"./static/foot-nav1.png",alt:"客户端",title:"客户端",link:"/"},{src:"./static/foot-nav2.png",alt:"触屏版",title:"触屏版",link:"/"},{src:"./static/foot-nav3.png",alt:"电脑版",title:"电脑版",link:"/"}]}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"public-foot"},[n("Navbar",{attrs:{items:t.items}}),t._v(" "),n("p",[t._v("\n    Copyright © 2004-2018 京东JD.com 版权所有\n  ")]),t._v(" "),n("p",[t._v("\n    投资有风险，购买需谨慎\n  ")]),t._v(" "),n("p",[t._v("\n    京东金融平台服务协议\n  ")]),t._v(" "),n("p",[t._v("\n    京东金融隐私政策\n  ")]),t._v(" "),n("Navbar",{staticClass:"bottom-nav",attrs:{items:t.items2,newName:t.newName}})],1)},staticRenderFns:[]};var v=n("VU/8")(p,m,!1,function(t){n("BukJ")},"data-v-069e03f2",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrong"},[e("p",[this._v("\r\n    404,这是一家假页面\r\n  ")])])}]};var h=n("VU/8")({name:"",data:function(){return{}}},f,!1,function(t){n("2yDO")},"data-v-046f9f9d",null).exports,_=n("7QTg"),g=n.n(_),b=(n("v2ns"),{name:"Swiper",components:{swiper:_.swiper,swiperSlide:_.swiperSlide},props:{options:{type:Object,default:function(){return{pagination:{el:".swiper-pagination"},autoplay:!0,speed:300,loop:!0,notNextTick:!0,direction:"horizontal",autoHeight:!0,slidesOffsetBefore:0,slidesOffsetAfter:0,slidesPerView:1,spaceBetween:0}}},items:{type:Array,default:function(){return[{src:"",alt:"",link:""}]}}},data:function(){return{}}}),w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("swiper",{staticClass:"swiper",attrs:{options:this.options,"not-next-tick":this.options.notNextTick}},[this._l(this.items,function(t){return e("swiper-slide",{key:t.src},[e("router-link",{staticClass:"swiper-links",attrs:{to:t.link}},[e("img",{attrs:{src:t.src,alt:t.alt}})])],1)}),this._v(" "),this.options.pagination?e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):this._e()],2)},staticRenderFns:[]};var k=n("VU/8")(b,w,!1,function(t){n("bTu1")},"data-v-776393fe",null).exports,C={name:"Slide",components:{Navbar:d,Swiper:k},data:function(){return{newName:"red",navs:[{src:"./static/homebar1.png",alt:"no1",title:"优惠券",link:"/debit"},{src:"./static/homebar2.png",alt:"no2",title:"领红包",link:"/debit"},{src:"./static/homebar3.png",alt:"no3",title:"抢钢镚",link:"/debit"},{src:"./static/homebar4.png",alt:"no4",title:"白条提额",link:"/debit"}],items:[{src:"./static/banner1.jpg",alt:"第一张图片",link:"/banner"},{src:"./static/banner2.jpg",alt:"第二张图片",link:"/banner"},{src:"./static/banner3.jpg",alt:"第三张图片",link:"/banner"},{src:"./static/banner4.jpg",alt:"第四张图片",link:"/banner"},{src:"./static/banner5.jpg",alt:"第四张图片",link:"/debit"}]}}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-header"},[e("Swiper",{attrs:{items:this.items}}),this._v(" "),e("Navbar",{staticClass:"home-nav",attrs:{items:this.navs,newName:this.newName}})],1)},staticRenderFns:[]};var y=n("VU/8")(C,x,!1,function(t){n("2XHO")},"data-v-2133d403",null).exports,N={name:"panel",props:{title:{type:String,default:""},newName:{type:String,default:""}},data:function(){return{panel:"panel"}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.panel,t.newName]},[t._t("title-right"),t._v(" "),n("h4",{staticClass:"title"},[t._v(" -"+t._s(t.title)+"-")]),t._v(" "),t._t("default")],2)},staticRenderFns:[]};var F=n("VU/8")(N,E,!1,function(t){n("uwY+")},null,null).exports,V={name:"Financing",components:{Panel:F},data:function(){return{title:"精选理财",products:[{name:"定期理财",feature:"90天可质押",rate:"5.50%",intro:"历史年化收益率"},{name:"年年盈",feature:"理财推荐",rate:"5.80%",intro:"综合年化收益率"},{name:"基智账户",feature:"组合投资",rate:"8%-10%",intro:"止盈年化收益率"},{name:"小白基金",feature:"超短期",rate:"5.00%",intro:"7日年化收益率"}]}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{title:t.title}},[n("section",{staticClass:"product-list"},t._l(t.products,function(e){return n("div",{staticClass:"product"},[n("h5",[t._v(t._s(e.name)),n("span",[t._v(t._s(e.feature))])]),t._v(" "),n("p",{staticClass:"rate"},[t._v(t._s(e.rate))]),t._v(" "),n("p",{staticClass:"intro"},[t._v(t._s(e.intro))])])}))])},staticRenderFns:[]};var A={name:"Crowdfunding",components:{Panel:F,Swiper:k},data:function(){return{title:"众筹新品",option:{slidesOffsetBefore:32,slidesOffsetAfter:32,pagination:"",spaceBetween:24,autoplay:!1,slidesPerView:2.5,loop:!1},items:[{src:"./static/newproduct1.jpg",alt:"新品",link:"/banner"},{src:"./static/newproduct2.jpg",alt:"新品",link:"/banner"},{src:"./static/newproduct3.jpg",alt:"新品",link:"/banner"},{src:"./static/newproduct4.jpg",alt:"新品",link:"/banner"}]}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Panel",{attrs:{title:this.title}},[e("router-link",{staticClass:"look-more",attrs:{slot:"title-right",tag:"a",to:{name:"Home"}},slot:"title-right"},[this._v("更多尖货 ")]),this._v(" "),e("Swiper",{staticClass:"product-list",attrs:{items:this.items,options:this.option}})],1)},staticRenderFns:[]};var R={name:"Insurance",components:{Panel:F,Swiper:k},data:function(){return{newName:"panel-padding",title:"保险保障",options:{slidesOffsetBefore:32,slidesOffsetAfter:32,pagination:"",spaceBetween:24,autoplay:!1,slidesPerView:2.2,loop:!1},items:[{src:"./static/insurance1.jpg",alt:"保险保障",link:"/banner"},{src:"./static/insurance2.jpg",alt:"保险保障",link:"/banner"},{src:"./static/insurance3.jpg",alt:"保险保障",link:"/banner"},{src:"./static/insurance4.png",alt:"保险保障",link:"/"},{src:"./static/insurance5.jpg",alt:"保险保障",link:"/"}]}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Panel",{attrs:{title:this.title,newName:this.newName}},[e("Swiper",{attrs:{options:this.options,items:this.items}}),this._v(" "),e("img",{staticClass:"banner",attrs:{src:n("3a1S")}})],1)},staticRenderFns:[]};var j={name:"Insurance",components:{Panel:F,Navbar:d},data:function(){return{title:"有车有钱",newClass1:"home-mix-banner",newClass2:"home-mix-nav",items1:[{src:"./static/mix-1.png",alt:"开新车，去踏青",title:"",link:"/"},{src:"./static/mix-2.jpg",alt:"最高可贷50万元",title:"",link:"/"}],items2:[{src:"./static/mix-icon-1.png",alt:"旅游",title:"旅游",link:"/"},{src:"./static/mix-icon-2.png",alt:"医美",title:"医美",link:"/"},{src:"./static/mix-icon-3.png",alt:"房抵押",title:"房抵押",link:"/"},{src:"./static/mix-icon-4.png",alt:"驾校",title:"驾校",link:"/"},{src:"./static/mix-icon-5.png",alt:"分期用",title:"分期用",link:"/"}]}}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Panel",{attrs:{title:this.title}},[e("Navbar",{attrs:{items:this.items1,newName:this.newClass1}}),this._v(" "),e("Navbar",{attrs:{items:this.items2,newName:this.newClass2}})],1)},staticRenderFns:[]};var W={name:"Home",components:{Slide:y,Financing:n("VU/8")(V,$,!1,function(t){n("MeYe")},"data-v-1ebed196",null).exports,Crowdfunding:n("VU/8")(A,P,!1,function(t){n("TLr/")},"data-v-0e7ddf5f",null).exports,Insurance:n("VU/8")(R,S,!1,function(t){n("DAxl")},"data-v-b284f388",null).exports,Mix:n("VU/8")(j,U,!1,function(t){n("WM8T")},"data-v-ea70e1f2",null).exports},data:function(){return{}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Slide"),this._v(" "),e("Financing"),this._v(" "),e("Crowdfunding"),this._v(" "),e("Insurance"),this._v(" "),e("Mix"),this._v(" "),e("router-link",{staticClass:"help",attrs:{to:"/"}},[e("img",{attrs:{src:n("I7hV")}})])],1)},staticRenderFns:[]};var M=n("VU/8")(W,I,!1,function(t){n("7WX8")},"data-v-44b4bd18",null).exports,T={name:"MoneySlide",components:{Swiper:k},data:function(){return{options:{speed:300},items:[{src:"./static/money-banner1.jpg",alt:"第一张图片",link:"/banner"},{src:"./static/money-banner2.jpg",alt:"第二张图片",link:"/banner"},{src:"./static/money-banner3.jpg",alt:"第三张图片",link:"/banner"}]}}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"money-header"},[e("Swiper",{attrs:{items:this.items}}),this._v(" "),e("img",{staticClass:"money-header-banner",attrs:{src:n("BiRM")}})],1)},staticRenderFns:[]};var B={name:"Financing",components:{Panel:F},data:function(){return{title:"精选推荐",products:[{name:"定期理财",feature:"90天可质押",rate:"5.50%",intro:"历史年化收益率"},{name:"年年盈",feature:"理财推荐",rate:"5.80%",intro:"综合年化收益率"},{name:"基智账户",feature:"组合投资",rate:"8%-10%",intro:"止盈年化收益率"},{name:"小白基金",feature:"超短期",rate:"5.00%",intro:"7日年化收益率"}]}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{title:t.title}},[n("section",{staticClass:"product-list"},t._l(t.products,function(e){return n("div",{staticClass:"product"},[n("h5",[t._v(t._s(e.name)),n("span",[t._v(t._s(e.feature))])]),t._v(" "),n("p",{staticClass:"rate"},[t._v(t._s(e.rate))]),t._v(" "),n("p",{staticClass:"intro"},[t._v(t._s(e.intro))])])}))])},staticRenderFns:[]};var q={name:"Financing",components:{Panel:F},data:function(){return{title:"理财精选",products:[{name:"月度理财",feature:"预期年化收益率4.50%",src:"./static/money-icon1.png",link:"/"},{name:"季度理财",feature:"历史年化回报率5.50%",src:"./static/money-icon2.png",link:"/"},{name:"一年理财",feature:"历史年化回报率5.80%",src:"./static/money-icon3.png",link:"/"}]}}},z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{title:t.title}},[n("section",{staticClass:"product-choice"},t._l(t.products,function(e){return n("div",{staticClass:"product"},[n("img",{staticClass:"product-icon",attrs:{src:e.src}}),t._v(" "),n("h4",{staticClass:"product-title"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"product-feature"},[t._v("\n        "+t._s(e.feature)+"\n      ")]),t._v(" "),n("router-link",{staticClass:"product-links",attrs:{tag:"a",to:e.link}},[t._v("去赚钱")])],1)}))])},staticRenderFns:[]};var D={name:"Money",components:{Slide:n("VU/8")(T,O,!1,function(t){n("bfTW")},"data-v-00f32442",null).exports,Intro:n("VU/8")(B,H,!1,function(t){n("eq4x")},"data-v-3b0e2372",null).exports,Financing:n("VU/8")(q,z,!1,function(t){n("uCw4")},"data-v-2e3a9f17",null).exports},data:function(){return{}}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"money"},[e("Slide"),this._v(" "),e("Intro"),this._v(" "),e("router-link",{staticClass:"money-middle-banner",attrs:{tag:"a",to:"/"}},[e("img",{attrs:{src:n("gUNQ")}})]),this._v(" "),e("Financing")],1)},staticRenderFns:[]};var J=n("VU/8")(D,L,!1,function(t){n("xYsA")},"data-v-c51f7a62",null).exports,Y={name:"Financing",components:{Panel:F},data:function(){return{title:"白条福利",products:[{name:"开通白条",feature:"送百元礼包",src:"./static/take.jpg",link:"/",ref:"立即查看"},{name:"白条提额",feature:"金融app专享提额礼包",src:"./static/give.jpg",link:"/",ref:"去提额"}]}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Panel",{attrs:{title:t.title}},[n("section",{staticClass:"borrow-weal"},t._l(t.products,function(e){return n("div",{staticClass:"product"},[n("img",{staticClass:"product-icon",attrs:{src:e.src}}),t._v(" "),n("h4",{staticClass:"product-title"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"product-feature"},[t._v("\n        "+t._s(e.feature)+"\n      ")]),t._v(" "),n("router-link",{staticClass:"product-links",attrs:{tag:"a",to:e.link}},[t._v(t._s(e.ref))])],1)}))])},staticRenderFns:[]};var X={name:"Insurance",components:{Panel:F,Navbar:d},data:function(){return{title:"精品活动",newClass:"home-mix-banner",items:[{src:"./static/debit-middle-banner1.png",alt:"开新车，去踏青",title:"",link:"/home"},{src:"./static//debit-middle-banner2.png",alt:"最高可贷50万元",title:"",link:"/home"}]}}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Panel",{attrs:{title:this.title}},[e("Navbar",{attrs:{items:this.items,newName:this.newClass}})],1)},staticRenderFns:[]};var Q={name:"Insurance",components:{Panel:F,Navbar:d},data:function(){return{title:"更多服务",newClass:"nav-pb",items1:[{src:"./static/debit-icon1.png",alt:"小白卡",title:"小白卡",link:"/home"},{src:"./static/debit-icon2.png",alt:"白条商城",title:"白条商城",link:"/home"},{src:"./static/debit-icon3.png",alt:"消费分期",title:"消费分期",link:"/home"},{src:"./static/debit-icon4.png",alt:"借钱",title:"借钱",link:"/home"}],items2:[{src:"./static/debit-icon5.png",alt:"白条提额",title:"白条提额",link:"/home"},{src:"./static/debit-icon6.png",alt:"白条闪付",title:"白条闪付",link:"/home"},{src:"./static/debit-icon7.png",alt:"小白会玩",title:"小白会玩",link:"/home"},{src:"./static/debit-icon8.png",alt:"钢镚",title:"钢镚",link:"/home"}]}}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Panel",{attrs:{title:this.title}},[e("Navbar",{attrs:{items:this.items1,newName:this.newClass}}),this._v(" "),e("Navbar",{attrs:{items:this.items2,newName:this.newClass}})],1)},staticRenderFns:[]};var tt={name:"money",components:{Weal:n("VU/8")(Y,K,!1,function(t){n("kHOg")},"data-v-6af0be23",null).exports,Activity:n("VU/8")(X,Z,!1,function(t){n("1E3b")},"data-v-1befc4c2",null).exports,MoreServer:n("VU/8")(Q,G,!1,function(t){n("Kus2")},"data-v-c6867baa",null).exports},data:function(){return{}}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"debit"},[e("router-link",{staticClass:"debit-banner",attrs:{tag:"a",to:"./"}},[e("img",{attrs:{src:n("ktwL")}})]),this._v(" "),e("Weal"),this._v(" "),e("Activity"),this._v(" "),e("MoreServer"),this._v(" "),e("router-link",{staticClass:"help",attrs:{to:"/"}},[e("img",{attrs:{src:n("I7hV")}})])],1)},staticRenderFns:[]};var nt=n("VU/8")(tt,et,!1,function(t){n("MtVh")},"data-v-fdb2ece0",null).exports,it={name:"Login",methods:{change:function(t){this.isAccount=t},history:function(){window.history.go(-1)},changeType:function(){var t=this.$refs.password.type;this.$refs.password.type="password"===t?"text":"password",console.log(this.$refs.password.type)}},data:function(){return{account:"",password:"",isAccount:"true"}}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("header",{staticClass:"login-header"},[n("span",{staticClass:"go-back",on:{click:t.history}}),t._v(" "),n("h4",{staticClass:"login-header-title"},[t._v("京东登陆")])]),t._v(" "),n("section",{staticClass:"login-chunck"},[n("div",{staticClass:"login-dt"},[n("div",[n("span",{class:{active:t.isAccount},on:{click:function(e){t.change(!0)}}},[t._v("账号密码登陆")])]),t._v(" "),n("div",[n("span",{class:{active:!t.isAccount},on:{click:function(e){t.change(!1)}}},[t._v("短信验证码登陆")])])])]),t._v(" "),n("section",{staticClass:"login-wrap"},[n("keep-alive",[t.isAccount?n("div",{staticClass:"login-dd-item"},[n("div",{staticClass:"login-dd-chunk"},[n("label",{attrs:{for:"login-account"}},[t._v("账号")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{id:"login-account",type:"text",placeholder:"用户名/邮箱/已验证手机号"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"login-dd-chunk"},[n("label",{attrs:{for:"login-password"}},[t._v("密码")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],ref:"password",attrs:{id:"login-password",type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("span",{staticClass:"check-type",on:{click:t.changeType}})])]):n("div",{staticClass:"login-dd-item"},[n("div",{staticClass:"login-dd-chunk"},[n("input",{staticClass:"tel-test",attrs:{placeholder:"请输入手机号",type:"tel",maxlength:"11"}}),t._v(" "),n("router-link",{staticClass:"get-test",attrs:{tag:"span",to:"/404"}},[t._v("获取验证码")])],1),t._v(" "),n("div",{staticClass:"login-dd-chunk"},[n("input",{attrs:{placeholder:"请输入收到的验证码",type:"text",maxlength:"4"}})])])]),t._v(" "),n("router-link",{staticClass:"login-btn",attrs:{tag:"a",to:"/404"}},[t._v("登陆")]),t._v(" "),n("router-link",{staticClass:"login-quick",attrs:{tag:"a",to:"/404"}},[t._v("一键登录")]),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"quick-nav"},[e("a",{staticClass:"quick-reg",attrs:{href:"/404"}},[this._v("手机快速注册")]),this._v(" "),e("a",{staticClass:"forget-password",attrs:{href:"/404"}},[this._v("忘记密码")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"other-login"},[e("h4",[this._v("\r\n          其他登陆方式\r\n        ")]),this._v(" "),e("a",{staticClass:"qq",attrs:{href:"/404"}}),this._v(" "),e("a",{staticClass:"weixin",attrs:{href:"/404"}}),this._v(" "),e("p",[this._v("\r\n          登陆即代表您已同意京东隐私政策\r\n        ")])])}]};var st=n("VU/8")(it,at,!1,function(t){n("uZD+")},"data-v-1ac9b4c3",null).exports,rt={name:"Banner",components:{Navbar:d},data:function(){return{newName:"banner-banner",items:[{src:"./static/banner-img1.png",link:"/"},{src:"./static/banner-img2.png",link:"/"},{src:"./static/banner-img3.png",link:"/"},{src:"./static/banner-img4.png",link:"/"}]}}},ct={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"banner"},[this._m(0),this._v(" "),e("Navbar",{attrs:{items:this.items,newName:this.newName}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-top"},[e("div",{staticClass:"banner-top-moon"}),this._v(" "),e("div",{staticClass:"banner-top-light"}),this._v(" "),e("div",{staticClass:"banner-top-main"})])}]};var ot=n("VU/8")(rt,ct,!1,function(t){n("vI3N")},"data-v-a23149f8",null).exports;i.a.use(r.a);var lt=new r.a({linkActiveClass:"links",linkExactActiveClass:"active",routes:[{path:"/",name:"home",components:{top:o,middle:M,bottom:v}},{path:"/home",name:"Home2",components:{top:o,middle:M,bottom:v}},{path:"/money",name:"Money",components:{top:o,middle:J,bottom:v}},{path:"/debit",name:"Debit",components:{top:o,middle:nt,bottom:v}},{path:"/mine",name:"Mine",components:{top:st}},{path:"/404",name:"Wrong",components:{top:h}},{path:"/banner",name:"Banner",components:{top:ot}}]});i.a.use(g.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:lt,components:{App:s},template:"<App/>"})},"TLr/":function(t,e){},WM8T:function(t,e){},bTu1:function(t,e){},bfTW:function(t,e){},cCWZ:function(t,e){!function(t,e){"use strict";var n={};!function(){var i=e.querySelector('meta[name="viewport"]'),a=e.querySelector('meta[name="hotcss"]'),s=t.devicePixelRatio||1,r=540,c=0;if(s=s>=3?3:s>=2?2:1,a){var o=a.getAttribute("content");if(o){var l=o.match(/initial\-dpr=([\d\.]+)/);l&&(s=parseFloat(l[1]));var u=o.match(/max\-width=([\d\.]+)/);u&&(r=parseFloat(u[1]));var d=o.match(/design\-width=([\d\.]+)/);d&&(c=parseFloat(d[1]))}}e.documentElement.setAttribute("data-dpr",s),n.dpr=s,e.documentElement.setAttribute("max-width",r),n.maxWidth=r,c&&e.documentElement.setAttribute("design-width",c),n.designWidth=c;var p=1/s,m="width=device-width, initial-scale="+p+", minimum-scale="+p+", maximum-scale="+p+", user-scalable=no";i?i.setAttribute("content",m):((i=e.createElement("meta")).setAttribute("name","viewport"),i.setAttribute("content",m),e.head.appendChild(i))}(),n.px2rem=function(t,e){return e||(e=parseInt(n.designWidth,10)),320*parseInt(t,10)/e/20},n.rem2px=function(t,e){return e||(e=parseInt(n.designWidth,10)),20*t*e/320},n.mresize=function(){var i=e.documentElement.getBoundingClientRect().width||t.innerWidth;if(n.maxWidth&&i/n.dpr>n.maxWidth&&(i=n.maxWidth*n.dpr),!i)return!1;e.documentElement.style.fontSize=20*i/320+"px",n.callback&&n.callback()},n.mresize(),t.addEventListener("resize",function(){clearTimeout(n.tid),n.tid=setTimeout(n.mresize,33)},!1),t.addEventListener("load",n.mresize,!1),setTimeout(function(){n.mresize()},333),t.hotcss=n}(window,document)},eq4x:function(t,e){},gUNQ:function(t,e,n){t.exports=n.p+"static/img/money-middle-banner.43b4d39.png"},kHOg:function(t,e){},ktwL:function(t,e,n){t.exports=n.p+"static/img/debit-banner.bb8b696.jpg"},uCw4:function(t,e){},"uZD+":function(t,e){},"uwY+":function(t,e){},v2ns:function(t,e){},vI3N:function(t,e){},xYsA:function(t,e){},yj38:function(t,e){}},[0]);
//# sourceMappingURL=main.9f546f3be9ff1ea897e1.js.map