<template>
  <header id="header">

    <!-- 导航栏 -->
    <nav
      :class="[currentHeaderStatus === 'article' ? 'article-header' : 'homepage-header', 'navbar', 'is-fixed-top', 'cs-navbar']">
      <div class="navbar-brand">
        <a href="javacript:void(0);" class="navbar-item">
          <img src="@/assets/logo.png" alt="hello">
        </a>
        <div
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
          @click="isMobile = !isMobile">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        :class="[ isMobile ? 'is-active' : '', 'navbar-menu']">
        <div class="navbar-start">
          <a class="navbar-item" href="#/">Home</a>
          <a class="navbar-item" href="#/about">About</a>
          <a class="navbar-item">Extra</a>
        </div>
        <div class="navbar-end">
          <a class="navbar-item">Login</a>
          <a class="navbar-item">Logout</a>
        </div>
      </div>
    </nav>

    <!-- 主页大标题 -->
    <div
      class="main-title-container"
      v-show="currentHeaderStatus === 'other'">
      <div class="main-title-wrap">
        <div class="title">一方净土</div>
        <br>
        <div class="subtitle">Life is Art.</div>
      </div>
    </div>

    <!-- 文章背景 -->
    <div
      class="article-bk-container"
      v-show="currentHeaderStatus === 'article'"
      :style="{backgroundImage: `url(${bkImage})`}">
      <div class="article-title-wrapper">
        <div class="article-title">
          {{ articleTitle }}
        </div>
        <div class="article-subtitle">
          {{ articleSubtitle }}
        </div>
      </div>
    </div>

    <!-- 返回顶部按钮 -->
    <div class="return-top" @click="scrollToTop(30)" v-show="returnTopBtnVisible">
      <i class="fas fa-arrow-up"></i>
    </div>
  </header>
</template>

<script>
import eventScheduler from '@/utils/eventScheduler'
export default {
  data () {
    return {
      returnTopBtnVisible: false,
      currentHeaderStatus: 'other', // other | article,
      bkImage: '',
      articleTitle: '',
      articleSubtitle: '',
      isMobile: false
    }
  },
  mounted () {
    // 监听页面滚动事件
    this.$nextTick(() => {
      document.documentElement.scrollTop > 30
        ? this.returnTopBtnVisible = true
        : this.returnTopBtnVisible = false
      window.addEventListener('scroll', this.listenScroll)
    })
    eventScheduler.$on('current-banner-data', (bannerData) => {
      this.currentHeaderStatus = 'article'
      this.bkImage = bannerData.picUrl
      this.articleTitle = bannerData.title
      this.articleSubtitle = bannerData.meta.createAt
    })
  },
  updated () {
    eventScheduler.$on('current-change-to-default', (value) => {
      this.currentHeaderStatus = 'other'
      window.scrollTo(0, 0)
    })
  },
  methods: {
    scrollToTop (speed) {
      const curHeight = document.documentElement.scrollTop
      if (curHeight === 0) return
      let timer = setInterval(() => {
        let top = document.documentElement.scrollTop
        if (top < speed) {
          top = 0
          clearInterval(timer)
        } else {
          document.documentElement.scrollTop -= speed
        }
      }, 1)
    },
    listenScroll () {
      const top = document.documentElement.scrollTop
      if (top > 30) {
        this.returnTopBtnVisible = true
      } else {
        this.returnTopBtnVisible = false
      }
    }
  }
}
</script>

<style scoped>
  .cs-navbar {
    box-shadow: 0 2px 12px rgba(0, 0, 0, .1);
    color: #fff;
  }
  .cs-navbar .navbar-item {
    color: #fff;
  }
  .homepage-header {
    background: rgba(58, 74, 96, 0.95);
  }
  .homepage-header .navbar-item:hover {
    background: #415167;
  }
  .article-header {
    background: rgba(0, 0, 0, 0.4);
  }
  .article-header .navbar-item:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  .main-title-container {
    font-family: 'Lato', sans-serif;
    height: 300px;
    margin-top: 52px;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .main-title-container .main-title-wrap {
    text-align: center;
  }
  .main-title-container .title {
    font-size: 3rem;
    color: #fff;
  }
  .main-title-container .subtitle {
    font-size: 1rem;
    color: #fff;
  }
  .return-top {
    position: fixed;
    bottom: 8%;
    right: 3%;
    z-index: 999;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, .3);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, .3);
  }
  .return-top i {
    font-size: 18px;
  }
  .return-top:hover {
    background-color: rgba(0, 0, 0, .4);
  }
  .article-bk-container {
    background-position: 50%;
    background-size: cover;
    height: 440px;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
  }
  .article-bk-container .article-title-wrapper {
    color: #fff;
    background: linear-gradient(-180deg,transparent,#000 180%);
    padding-bottom: 60px;
  }
  .article-bk-container .article-title-wrapper .article-title {
    font-family: -apple-system,
      BlinkMacSystemFont,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB",STHeiti,"Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;
      font-size: 55px;
      font-weight: 500;
      margin: 0 200px;
  }
  .article-bk-container .article-title-wrapper .article-subtitle {
    color: #fff;
    font-family: Lora,'Times New Roman',serif;
    font-style: italic;
    font-size: 20px;
    margin: 0 200px;
  }

  @media screen and (max-width: 768px) {
    .return-top {
      display: none;
    }
    .navbar-menu {
      background: rgba(58, 74, 96, 0.95);
    }
  }
</style>
