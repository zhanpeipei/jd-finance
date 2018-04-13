## vue+webpack,京东金融spa

> 这个作品是通过vue-cli自动构建webpack打造的京东金融单页面作品，为手机自适应项目，请用手机观看。（可扫描二维码体验读）

![]（https://github.com/zhanpeipei/jd-finance/blob/master/wx.png）

> 这个作品中主要用到了以下几个技术：

1. 通过vue中的vue-router实现单页面跳转；

2.通过hotcss.js实现viewport自动计算；

3. 通过postcss-px2rem实现自适应；

4. vue-router的mode为默认设置：hash;

> 以下是我对这次学习过程的一个总结：

1. 在vue-router注册路由中，一个地址最多可以注册三个组件；

2. hotcss可以在entry中进行设置导入；

3. postcss-px2rem中的remUnit代表的是计算根元素字体大小的依据，可通过查看hotcss在对应大小下的根元素字体大小来设置；

在4. router-link上添加本组件事件，需要添加.native修饰符；
