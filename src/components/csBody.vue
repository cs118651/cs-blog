<template>
  <div id="body">
    <div class="content-area container">

      <!-- 文章列表 -->
      <div class="article-block">
        <article
          class="article-card"
          v-for="(article, key) in articleData"
          :key="key">
          <router-link
            :to="{name: 'article', params: {id: article._id}}">
            <div
              class="cover-img"
              :style="{backgroundImage: `url(${hostname}${article.picUrl})`, backgroundSize: 'cover', backgroundPosition: '50%'}">
              <div class="info-mask">
                <div class="content-wrapper">
                  <h2 class="article-title">
                    {{ article.title }}
                  </h2>
                  <div class="article-info">
                    <span class="create-time">
                      {{ timeFormat(article.meta.createAt) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </article>
      </div>

      <!-- 分页组件 -->
      <nav class="pagination is-centered home-page-pagination">
        <a class="pagination-previous" @click="goToPage('back')">上一页</a>
        <a class="pagination-next" @click="goToPage('next')">下一页</a>
        <ul class="pagination-list">
          <li
            v-for="(page, key) in totalPages"
            :key="key">
            <a
              class="pagination-link"
              :class="{ 'is-current': page === currentPage }"
              @click="goToPage(page)">
                {{ page }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import articleAction from '@/action/articleAction'
import { scrollToTop } from '@/utils'
const { getArticleList, getPage } = articleAction
export default {
  data () {
    return {
      articleData: [],
      articleSum: 4,
      currentPage: 1,
      hostname: ''
    }
  },
  created () {
    this.hostname = `${location.protocol}//${location.hostname}:3000`
    getArticleList().then(res => {
      if (res.ok) {
        console.log(res)
        this.articleSum = res.body.articleSum
        this.articleData = res.body.articles
      }
    })
  },
  methods: {
    goToPage (page) {
      let pageNum
      const { currentPage } = this
      if (typeof page === 'string') {
        if (page === 'back') {
          if (currentPage === 1) return
          this.currentPage = pageNum = currentPage - 1
        } else {
          if (currentPage === this.totalPages) return
          this.currentPage = pageNum = currentPage + 1
        }
      } else {
        if (page === currentPage) return
        this.currentPage = pageNum = page
      }
      scrollToTop(30)
      getPage(pageNum).then(res => {
        if (res.ok) {
          this.articleSum = res.body.articleSum
          this.articleData = res.body.articles
        }
      })
    },
    timeFormat (timeStr) {
      const dateObj = new Date(timeStr)
      return dateObj.toLocaleString().replace(/\//g, '-')
    }
  },
  computed: {
    totalPages () {
      const { articleSum } = this
      return Math.ceil(articleSum / 4)
    }
  }
}
</script>

<style scoped>
  #body .container {
    max-width: 900px;
    margin-left: auto;
    margin: auto;
    width: 90%;
  }
  .article-card {
    position: relative;
    margin-bottom: 30px;
    box-shadow: 10px 10px 14px #253345;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
  }
  .article-card .cover-img {
    height: 340px;
  }
  .article-card .info-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent linear-gradient(180deg,transparent 0,rgba(0,0,0,.4)) repeat scroll 0 0;
  }
  .article-card:hover .info-mask {
    background: transparent linear-gradient(180deg,transparent 0,rgba(0,0,0,.8)) repeat scroll 0 0;
  }
  .article-card .content-wrapper {
    position: absolute;
    bottom: 10px;
    color: #fff;
    left: 20px;
    right: 20px;
  }
  .article-card .content-wrapper .article-title {
    font-family: 'Lato', sans-serif;
    font-size: 36px;
    font-weight: 200;
    line-height: 1.4;
    color: #fff;
  }
  .article-card:hover .content-wrapper .article-title {
    color: greenyellow;
  }
  .article-card .content-wrapper .article-info {
    font-size: 14px;
    font-family: exoregular;
  }
  .pagination.home-page-pagination {
    margin: 0;
  }
  .pagination.home-page-pagination a {
    background: #fff;
  }
  .pagination.home-page-pagination .pagination-link.is-current {
    background: #3273dc;
  }
</style>
