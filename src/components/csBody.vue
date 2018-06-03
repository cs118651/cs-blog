<template>
  <div id="body">
    <div class="content-area container">
      <img src="@/assets/articleImg/article1.jpg" alt="">
      <div class="test" :style="{backgroundImage: `url(${require('@/assets/articleImg/article1.jpg')})`}"></div>
      <!-- 文章列表 -->
      <div class="article-block">
        <article
          class="article-card"
          v-for="(article, key) in articleData"
          :key="key">
          <div
            class="cover-img"
            :style="{backgroundImage: `url(${article.picUrl})`}">
            <div class="info-mask">
              <div class="mask-wrapper">
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleData: [
        // {
        //   picUrl: '', // 图片链接
        //   title: '', // 标题
        //   meta: {
        //     createAt: '', // 创建时间
        //     updateAt: '' // 更新时间
        //   },
        //   pv: 40 // 访问量
        // },
      ]
    }
  },
  created () {
    for (let i = 0; i < 4; i++) {
      this.articleData.push({
        picUrl: `../../static/articleImg/article${i + 1}.img`,
        title: `博文${i + 1}`,
        meta: {
          createAt: 'Wed, 23 May 2018 14:24:27 GMT',
          updateAt: ''
        },
        pv: 40
      })
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
    height: 200px;
  }
</style>
