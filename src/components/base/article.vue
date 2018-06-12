<template>
  <div class="article-container">
    <div class="content-container">

      <!-- 文章内容区 -->
      <section class="post-content">
        <div
          class="markdown-body"
          v-html="markdownArticleContent">
        </div>
      </section>
    </div>
    <div
      class="loading-container"
      v-show="loadingStatus">
      <div class="loading-text">loading...</div>
    </div>
  </div>
</template>

<script>
import eventScheduler from '@/utils/eventScheduler'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({ breaks: true })
export default {
  data () {
    return {
      loadingStatus: false,
      markdownArticleContent: ''
    }
  },
  created () {
    window.scrollTo(0, 0)
    eventScheduler.$emit('current-banner-data', {
      id: 1,
      picUrl: '/images/article1.jpg',
      title: '高同理心是如何炼成的？',
      meta: {
        createAt: '2018.05.16 10:36 pm',
        updateAt: ''
      },
      pv: 40
    })
    this.markdownArticleContent = md.render('# ES6小技巧\n\n> 文章部分摘自 [ES6 的几个小技巧](https://juejin.im/post/5ab9a8196fb9a028b86e0615) \n\n### 1. 数组方法reduce妙用\n\n相对于map、forEach、filter等函数，我平时用到reduce的场景几乎没有，因为不熟悉，觉得平时用其他的方法就够用了，今日看了掘金上的一篇文章深受启发：\n\n##### 用reduce代替 map + filter\n\n设想你有这么个需求：要把数组中的值进行计算后再滤掉一些值，然后输出新数组。很显然我们一般使用 map 和 filter 方法组合来达到这个目的，但这也意味着你需要迭代这个数组两次。\n\n来看看我们如何使用 reduce 只迭代数组一次，来完成同样的结果。下面这个例子我们需要把数组中的值乘 2 ，并返回大于 50 的值：\n\n```javascript\nconst numbers = [10, 20, 30, 40];\nconst doubledOver50 = numbers.reduce((finalList, num) => {\n  \n  num = num * 2; //double each number (i.e. map)\n  \n  //filter number > 50\n  if (num > 50) {\n    finalList.push(num);\n  }\n  return finalList;\n}, []);\n\ndoubledOver50; // [60, 80]\n```\n\nreduce函数在mdn的定义如下：\n\n![reduce函数定义](http://oxx2s9vy2.bkt.clouddn.com/reduce%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89.png)\n\n将reduce函数的迭代初始值指定为一个空数组(即第二个参数)来存储满足条件的元素集合。\n\n### 使用 reduce 检测括号是否对齐封闭\n\n需求：实现一个接受一个字符串并判断括号是否对齐的函数\n\n思路：考虑使用reduce，将迭代初始值指定为数值0，每次迭代遇到 `(` 时accumulator加1，反之遇到 `)` 时accumulator减1，如果括号是封闭的话，最终返回值应该是0。\n\n```javascript\n//Returns 0 if balanced.\nconst isParensBalanced = (str) => {\n  return str.split}')
  },
  destroyed () {
    eventScheduler.$emit('current-change-to-default', true)
  }
}
</script>

<style>
  .content-container {
    max-width: 900px;
    margin-left: auto;
    margin: auto;
    width: 90%;
  }
  .content-container .post-content {
    padding-top: 30px;
  }
  .markdown-body {
    background: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 45px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
  }

  @media (max-width: 768px) {
    .markdown-body {
      padding: 15px;
    }
  }
</style>
