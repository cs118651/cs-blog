<template>
  <div class="article-container">
    <div class="content-container">

      <!-- 文章内容区 -->
      <section class="post-content">
        <div
          class="markdown-body"
          v-html="markdownArticleContent">
        </div>
        <div class="pv-content">
          <div class="text">阅读量 {{ articleData.pv }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import eventScheduler from '@/utils/eventScheduler'
import articleAction from '@/action/articleAction'
import MarkdownIt from 'markdown-it'
const { getArticleDetail } = articleAction
const md = new MarkdownIt({ breaks: true })
export default {
  data () {
    return {
      articleData: {
        pv: 0
      },
      markdownArticleContent: ''
    }
  },
  created () {
    window.scrollTo(0, 0)
    const articleId = this.$route.params.id
    getArticleDetail(articleId).then(res => {
      if (res.ok) {
        this.articleData = res.body.article
        const articleContent = this.articleData.content
        this.markdownArticleContent = md.render(articleContent)
        eventScheduler.$emit('current-banner-data', {
          picUrl: this.articleData.picUrl,
          title: this.articleData.title,
          meta: this.articleData.meta
        })
      }
    })
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
    margin-top: 30px;
  }
  .post-content {
    background: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 45px;
    padding-bottom: 25px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
  }
  .pv-content {
    padding-top: 20px;
    text-align: end;
  }
  .pv-content .text {
    color: #008b8b;
  }

  @media (max-width: 768px) {
    .post-content {
      padding: 15px;
    }
  }
</style>
