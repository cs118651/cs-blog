<template>
  <div id="body">
    <div class="content-area container">

      <!-- 文章列表 -->
      <div class="article-block">
        <article
          class="article-card"
          v-for="(article, key) in articleData"
          :key="key">
          <div
            class="cover-img"
            :style="{backgroundImage: `url(${require(`@/assets/articleImg/article${key + 1}.jpg`)})`, backgroundSize: 'cover', backgroundPosition: '50%'}">
            <div class="info-mask">
              <div class="content-wrapper">
                <h2 class="article-title">
                  {{ article.title }}
                </h2>
                <div class="article-info">
                  <span class="create-time">
                    {{ article.meta.createAt }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- 分页组件 -->
      <nav class="pagination is-centered home-page-pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li
            v-for="(page, key) in totalPages"
            :key="key">
            <a
              class="pagination-link"
              :class="{ 'is-current': page === currentPage }"
              v-on:click="goToPage(page)">
                {{ page }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleData: [],
      totalPages: 4,
      currentPage: 1
    }
  },
  created () {
    for (let i = 0; i < 4; i++) {
      this.articleData.push({
        picUrl: `@/assets/articleImg/article${i + 1}.jpg`,
        test: '@/assets/articleImg/article1.jpg',
        title: `博文${i + 1}`,
        meta: {
          createAt: 'Wed, 23 May 2018 14:24:27 GMT',
          updateAt: ''
        },
        pv: 40
      })
    }
  },
  methods: {
    goToPage (page) {
      this.currentPage = page
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
  /* 竖屏 */
  @media screen and (max-width: 768px) {
    .pagination.home-page-pagination .pagination-list {
      margin-top: 1rem;
    }
  }
</style>
