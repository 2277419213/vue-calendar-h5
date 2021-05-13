# 前言

> 额...今天早上，有个 github 的小伙伴告诉我，这个插件在 vue3.0 不能用，瞬间我就有点蒙，因为当初做的时候，都还是用的 vue2.0，还没有上 3.0，于是乎试了一下，还真的不能用，主要原因不是代码不兼容，应该是 install 模式不兼容，所以改用 lib 打包的方式，让这个分支支持 vue3.0,如有问题欢迎提 Issues 告诉我,我会尝试着进行修复,如有志同道合者,欢迎你 fork 项目修改并 pr 给我,最后留下你们小星星,谢谢!

## 地址

###### npm：[https://www.npmjs.com/package/vue-calendar-h5-plus](https://www.npmjs.com/package/vue-calendar-h5-plus)

###### yarn：[https://classic.yarnpkg.com/en/package/vue-calendar-h5-plus](https://classic.yarnpkg.com/en/package/vue-calendar-h5-plus)

###### cnpm：[https://developer.aliyun.com/mirror/npm/package/vue-calendar-h5-plus](https://developer.aliyun.com/mirror/npm/package/vue-calendar-h5-plus)

###### github：[https://github.com/2277419213/vue-calendar-h5/tree/vue3.0](https://github.com/2277419213/vue-calendar-h5/tree/vue3.0)

###### gitee：[https://gitee.com/JuLizhanzhan/vue-calendar-h5/tree/vue3.0](https://gitee.com/JuLizhanzhan/vue-calendar-h5/tree/vue3.0)

## 食用方式

### 安装

```shell
npm install vue-calendar-h5-plus

or

cnpm install vue-calendar-h5-plus
```

### 普通使用

```
<template>
  <div id="app">
    <h5-calendar></h5-calendar>
  </div>
</template>

<script>

// main.js 或者main.ts
import H5Calendar from 'vue-calendar-h5-plus'
`注意差别，不要丢了引入样式`
import "vue-calendar-h5-plus/lib/vue-calendar-h5-plus.css";

createApp(App)`.use(H5Calendar)`.mount("#app");
```

## Dome

```
<template>
  <div>
    <div class="calendardome">
      <h5>原作者版本(加了滑动切换)</h5>
      <H5Calendar lunar :touchthreshold="50"/>
    </div>
    <div class="calendardome">
      <h5>纯展示版本</h5>
      <H5Calendar
        lunar
        :touchthreshold="50"
        :controllable="false"
        versions="juli"
        isshowtoday
      />
    </div>
  </div>
</template>

<style scoped>
.calendardome {
  padding: 0 22px;
}
</style>
```

## 演示网站

###### 可以到[http://www.yi-school.top](http://www.yi-school.top/#/)查看效果演示

## 默认配置

关于配置信息，请查看源文档，感谢原作者 jinzhe 大佬的[vue-calendar](https://github.com/jinzhe/vue-calendar)  
这里这是做了简单的汇总
| 名称 | 功能 | 默认值 |
| :--- | :--- | :--- |
| value | 日历默认值 | [] |
| begin | 限制开始选择日期 | [] |
| end | 限制结束选择日期 | [] |
| range | 你可以选择一个时间段 | false |
| zero | 日期 0 | false |
| lunar | 显示中国农历 | false |
| weeks | 根据系统语言变化或自定义星期显示 | 根据系统选择显示(星期一 or Mon)等 |
| months | 根据系统语言变化或自定义月份显示 | 根据系统选择显示(一月 or January)等 |
| events | 自定义日历事件 | {} |
| multi | 多选模式 | false |
| zero | 是否小于 10 补零 | false |
| disabled | 需要屏蔽的日期 | [] |
| 以上原作者配置,以下新增配置
| controllable | 是否可以点击(纯展示建议为 false) | true |
| versions | 显示版本(为空则原作者版本,'juli'则纯展示版本) | '' |
| isshowtoday | 是否在日期上标注今天 | false |
| touchthreshold | 滑动切换的阈值(number 类型 0 为不开启) | 0 |

## 版本

### 1.0.0

修改构建版本，支持 vue3.0 引用。

### 1.0.1

修改描述，去掉 map 文件。

## 鸣谢

##### 日历组件的原作者 jinzhe

大佬的签名果然比较新颖[一位合格的前端开发者，应对视觉设计感兴趣。](https://github.com/jinzhe),感谢大佬开源了一个这么好的组件,提供了这么好看的样式,大大的节省了开发的时间!比心 ❤

##### 说一下我自己 JuLizhanzhan

更多常见我的 nickname 是居里栈栈,微信 QQ 同名，哈哈哈，其实我也就是一个在不断学习的学者，不断的试错也是成长的一部分，希望大家共同进步，学有所成，最后祝大家新年快乐啦，外带提一句寻找高薪工作（h5,web,小程序）和诚接外包项目，有兴趣的朋友们记得找我聊聊，WeChat:812936565(备注 GitHub)
