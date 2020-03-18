# Touch Vision 指间视界
**Touch Vision**是一套开箱即用的移动端开发模版。本模版除了解决了最核心的适配问题以外，还提供了其他的移动端常见问题的解决方案、安全通信以及常用的组件等功能。

## TOC

- [使用](#使用)
- [适配](#适配)
- [1px问题](#1px问题)
- [代理](#代理)
- [模版](#模版)
- [组件](#组件)
- [按需引入](#按需引入)
- [安全](#安全)
- [es-lint和prettier集成](#es-lint和prettier集成)
- [其他](#其他)
- [TODO](#TODO)
  
## 使用

### 获取模版
```bash
git clone https://github.com/wuyax/touch-vision.git
```
### 安装依赖
```bash
cd touch-vision
npm install
```

### 编译并进行开发
```bash
npm run serve
```

### 编译生产环境版本
```bash
npm run build
```

### 编译测试环境版本
```bash
npm run build:dev
```
NOTE：在该版本和生产环境版本最重要的不同是，该版本保留调试信息`console`。

## 适配
移动端适配是本模版的基础功能，也是核心功能。本模版摒弃了传统的`rem`适配方案，采用了`vw`适配方案。
目前设计师出的视觉设计稿，一般都是使用`750px`宽度的，那么`100vw = 750px`，即`1vw = 7.5px`。那么我们可以根据设计图上的`px`值直接转换成对应的`vw`值。手动计算非常繁琐，因此引入了`postcss-px-to-viewport`插件。正确配置该插件以后实现`px`在编译以后转换为`vw`。也就是说，在实际开发过程中，开发者不需要进行任何的计算，直接在代码中写`px`，大大节省了开发时的计算时间。
### 插件的配置
插件的配置文件在`.postcssrc.js`中，它的基本配置如下：
```js
'postcss-px-to-viewport': {
  viewportWidth: 750, // (Number) The width of the viewport.
  viewportHeight: 1334, // (Number) The height of the viewport.
  unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
  viewportUnit: 'vw', // (String) Expected units.
  selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
  minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
  mediaQuery: false // (Boolean) Allow px to be converted in media queries.
}
```
开发这可以根据自己的设计稿和需求修改对应的参数。
源代码：
```css
.vw-test {
  border: .5px solid black;
  border-bottom-width: 4px;
  font-size: 14px;
  line-height: 20px;
  position: relative;
}
```
编译后：
```css
.vw-test {
  border: .5px solid #000;
  border-bottom-width: .533vw;
  font-size: 1.867vw;
  line-height: 2.667vw;
  position: relative;
}
```
### 禁止转换
在不需要把`px`转换为`vw`的时候，在对应的元素`（html）`中添加配置中指定的类名`.ignore`或`.hairlines`(`.hairlines`一般用于设置`border-width:0.5px`的元素中)，该类的`px`不会被转换为`vw`：

html
```html
<div class="box ignore"></div>
```
源代码：
```css
.box {
  width: 180px;
  height: 300px;
}
.ignore {
  margin: 10px;
  background-color: red;
}
.hairlines {
  border-bottom: 0.5px solid red;
}
```
编译后：
```css
.box {
  width: 24vw;
  height: 40vw;
}
.ignore {
  margin: 10px; /*.box元素中带有.ignore类名，在这个类名写的px不会被转换*/
  background-color: red;
}
.hairlines {
  border-bottom: 0.5px solid red;
}
```
### 第三方UI框架的适配
该模版已经集成了优秀的第三方UI框架`Vant`，并且做好了适配，开发者不需要再为第三方UI框架的适配问题发愁了。

**关于Vant样式重置的问题：**
1. `Vant`的`viewport`是基于`375px`设计的，因此我们在`postcss`的配置中做了特殊的配置。
2. 基于第一条，因此请不要在项目中新建名字中带有`vant`的文件和文件夹。
3. 所有公共的`Vant`重置样式都应该写在`css/vui-reset.scss`文件中。
4. 重置的样式请按照`viewport = 750px`计算。

### 例外
开发者可以配置`exclude: ['node_modules']`来排除第三方组件从`px`转换为`vw`。更复杂的规则可以移步`.postcssrc.js`。

## 1px问题
在移动端开发中不可避免的会遇到一些基本的概念，如:视窗 viewport、物理像素(physical pixel)、设备独立像素(density-independent pixel)、CSS像素、屏幕密度、设备像素比(device pixel ratio)，我就不赘述了，感兴趣的可以访问这个页面（[https://github.com/amfe/article/issues/17](https://github.com/amfe/article/issues/17)）了解跟详细的信息。

正是因为有以上这些概念，因此，设计稿上的`1px`是无法直接实现的。本模版也集成了**一像素问题**的解决方案。

### postcss-write-svg方案
`postcss-write-svg`插件主要用来处理移动端`1px`的解决方案。该插件主要使用的是`border-image`和`background`来做`1px`的相关处理。

源代码：
```css
@svg 1px-border {
  height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
}
.example {
  border: 1px solid transparent;
  // 并不是所有的设备都支持
  border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch;
}
```
编译后：
```css
.example {
  border: 1px solid transparent;
  border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='2px'%3E%3Crect fill='%2300b1ff' width='100%25' height='50%25'/%3E%3C/svg%3E") 2 2 stretch;
}
```
### transform: scale(0.5) 方案
1. 设置`height: 1px`，根据媒体查询结合`transform`缩放为相应尺寸。
```css
div {
  height:1px;
  background:#000;
  transform: scaleY(0.5);
  transform-origin:0 0;
  overflow: hidden;
}
```
2. 用`::after`和`::befor`,设置`border-bottom：1px solid #000;`,然后在缩放`-webkit-transform: scaleY(0.5);`可以实现两根边线的需求
```css
div:after{
  display: inherit;
  content:'';
  width:100%;
  border-bottom:1px solid #000;
  transform: scaleY(0.5);
}
```
3. 用`::after`设置`border：1px solid #000; width:200%; height:200%;`,然后再缩放`scaleY(0.5)` 优点可以实现圆角，缺点是按钮添加`active`比较麻烦。
```css
.div::after {
  content: '';
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  transform: scale(0.5,0.5);
  transform-origin: top left;
}
```
4. 媒体查询 + `transfrom` 对方案1的优化
```css
/* 2倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
    .border-bottom::after {
    transform: scaleY(0.5);
    }
}
/* 3倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
    .border-bottom::after {
     transform: scaleY(0.33);
    }
}
```
每种方案都有自身的缺陷和优点，开发者根据自身的需求和不同的开发情况合理选用。

## 代理
开发环不可避免的会遇到跨域问题，关于跨域问题的本质原因网上有很多资料，不再赘述。`vue-cli`提供的代理就很好的帮助我们解决了这个问题。在`vue.config.js`添加如下的配置：
```js
devServer: {
  proxy: {
    '/api': {
      target: 'http://192.168.1.200:8080/', // 接口地址，按需修改
      changeOrigin: true, //是否跨域
      pathRewrite: {
        '^/api': '/api' //需要rewrite重写,
      },
      cookiePathRewrite: {
        //重写cookie路径 按需修改
        '/api': '/'
      }
    }
  }
}
```

## 模版
为了规范团队代码，避免在团队写作中出现迷之BUG，该项目模版提供了一套最佳实践的最小化的模版。开发者可以将该模版添加到VScode的代码片段中。开发者可以在`src/components/base/vue-template.vue`中看到如下代码片段。
```js
<template>
  <div class="class-name">
    <!-- your code goes here -->
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'YourComponentName',
  components: {},
  model: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
< /script>
<style lang="scss" scoped>
</style>
```

## 组件
Accessibility支持良好的移动端组件既能减少开发者`hack`的时间，也能提升用户体验。该模版持续添加有些有用的小组件。
### Select
市面上流通的`select`组件中，绑定值没办法实现`placeholder`的效果，该组件提供了一种思路和解决方案，开发者掌握核心代码以后可以自行修改，以符合项目需求。

### 自动行高的textarea
行高根据用户输入内容自动调整，而且解决了需要使用输入法 (如中文、日文、韩文等) 的语言，在输入法组合文字过程中就得到更新的问题。

以上两个组件你都可以在`components/base/`目录下找到。

## 按需引入
按需引入至少并不是万能的，但是它至少能在一定程度上解决`package`太大的问题，优化加载速度、节省带宽。
### lodash-es
项目抛弃常见的`lodash`而使用符合`ES`模块化标准的`lodash-es`。
```js
// bad
import _ from 'lodash'
// worse
import * as _ from 'lodash-es'
```
```js
// good
import { xor } from 'lodash-es'
```
### Echarts
例如代码中只用到了柱状图，提示框和标题组件，因此在引入的时候也只需要引入这些模块，可以有效的将打包后的体积从<q>400</q> 多 KB 减小到<q>170</q> 多 KB。</p>

```js
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts')
// 引入图表
require('echarts/lib/chart/bar')
// 引入组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
```

Echarts的所图表和有组件都可以在[这里](https://github.com/apache/incubator-echarts/blob/master/index.js)找到。

## 安全

### 前端安全
在处理好常见的前端问题的基础上，该模版还集成了代码加密和代码混淆的功能。开发者可以根据项目实际需求开启或者关闭给功能，也可以对制定文件进行加密和混淆。
更多配置可以访问`vue.config.js`。

**注意⚠️**：开启代码混淆会明显增加代码体积，在流量敏感的环境谨慎开启。
### 交互安全
在和后台服务交互过程中不可避免的会传输数据，为了解决敏感数据在网络中明文传输的问题，该模版提供了加密传输的解决方案。
该方案采用了`AES`加密的方案，对敏感数据加密后再传输给后台服务。

模版提供了两个基本的加密和解密方法，开发者务必根据项目需要和后台服务接口进行**二次封装**。
```js
import CryptoJS from 'crypto-js'
// 加密
function encrypt(word, key) {
  if (!word || !key) {
    return null
  }
  let parsedkey = CryptoJS.enc.Utf8.parse(key)
  let srcs = CryptoJS.enc.Utf8.parse(word)
  let encrypted = CryptoJS.AES.encrypt(srcs, parsedkey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  let d = encrypted.toString()
  return d
}
// 解密
function decrypt(word, key) {
  if (!word || !key) {
    return null
  }
  let parsedkey = CryptoJS.enc.Utf8.parse(key)
  let decrypt = CryptoJS.AES.decrypt(word, parsedkey, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  let d = CryptoJS.enc.Utf8.stringify(decrypt).toString()
  return d
}
```
## `es-lint`和`prettier`集成
模版集成了`es-lint`和`prettier`方便开发者规范代码格式和团队协作，保障代码质量。

## 其他
- 解决移动端双击缩放问题
- 解决iOS中键盘收起后页面底部有留白的问题`<input type='text' v-rpage />`
- 为iSO中应用切换到后台后倒计时暂停的问题提供解决方案

## TODO
- 组件示例编写
- 文档发布部署
