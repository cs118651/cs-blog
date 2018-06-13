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
    this.markdownArticleContent = md.render('### 如何理解函数传参是按值传递的？\n\n网上看到一个很经典的js面试题：\n\n```\nfor (var i = 0; i < 5; i++) {\n setTimeout(function() {\n  console.log(new Date, i);\n }, 1000);\n}\n\nconsole.log(new Date, i);\n```\n\n约定用箭头表示其前后的两次输出之间有 1 秒的时间间隔，而逗号表示其前后的两次输出之间的时间间隔可以忽略，代码实际运行的结果如下：\n\n```\n5 -> 5,5,5,5,5\n```\n\n修改上述代码，期望输出为 `5 -> 0,1,2,3,4` ，重点是如何让中间执行输出的代码能拿到每次循环的`i` 值，除了使用 `声明即执行` 的函数表达式：\n\n```\nfor (var i = 0; i < 5; i++) {\n (function(j) { // j = i\n  setTimeout(function() {\n   console.log(new Date, j);\n  }, 1000);\n })(i);\n}\n\nconsole.log(new Date, i);\n```\n\n还有一种更符合直觉的做法，那就是利用JS中 **函数传参都是按值传递** 这一特性：\n\n```\nvar output = function (i) {\n setTimeout(function() {\n  console.log(new Date, i);\n }, 1000);\n};\n\nfor (var i = 0; i < 5; i++) {\n output(i); // 这里传过去的 i 值被复制了\n}\n\nconsole.log(new Date, i);\n```\n\n看到这里我突然开始疑问：函数传参按值传递这个概念好熟悉又好陌生，众所周知，js访问变量有按值和按引用两种方式，基本变量类型如 `Number`  `String` 是按值传递，而引用类型如 `Array` `Object` 则是按引用传递的。\n\n下面这段代码会影响很多人对 \'函数按值传参\' 这一结论的判断：\n\n```\nfunction setName(obj) {\n obj.name = \"Nicholas\";\n}\nvar person = new Object();\nsetName(person);\nalert(person.name); //\"Nicholas\" \n```\n\n这里定义了一个 `setName` 函数，又声明了一个 `person` 空对象，将 `person` 作为参数传递给 `setName` 函数，发现 `person` 对象的 `name` 属性改变了，这里很容易产生一种错误的思维就是 **在局部作用域中修改的对象会在全局作用域中反映出来，就说明参数是按引用传递的** 。\n\n为了证明参数按值传递，下面来看另一个例子：\n\n```\nfunction fn(obj) {\n\tobj = new Object();\n \tobj.name = \"Greg\"; \n}\nvar person = new Object();\nperson.name = \"landmine\";\nfn(person);\nalert(person.name);     //landmine\n```\n\n如果参数按引用传递的话，fn 函数内部的代码会使 person 对象变为空对象， 然而结果却是 person 对象并未有任何变化，结论是：\n\n> ECMAScript 中所有函数的参数都是按值传递的。基本类型值的传递如同基本类型变量的复制一样，而\n> 引用类型值的传递，则如同引用类型变量的复制一样。\n\n如何理解引用类型值的传递就如同引用类型变量的复制呢？\n\n就像上一个例子那样，**在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量** ，也就是说当函数执行时，函数内部变量 `obj` 和 `person` 在内存中的关系就像下图中 `obj1` 和 `obj2` 的关系\n\n![](http://oxx2l7d61.bkt.clouddn.com/%E5%87%BD%E6%95%B0%E4%BC%A0%E5%8F%82%E6%8C%89%E5%80%BC%E4%BC%A0%E9%80%92_01.png)\n\n可以这样理解，他们本身是两个引用类型的数据(在内存中的不同位置)，但是引用类型的变量包含地址这一属性，他们的地址属性是相同的。\n\n')
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
