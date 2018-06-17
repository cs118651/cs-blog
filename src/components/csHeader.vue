<template>
  <header id="header">

    <!-- 导航栏 -->
    <nav
      :class="[currentHeaderStatus === 'article' ? 'article-header' : 'homepage-header', 'navbar', 'is-fixed-top', 'cs-navbar']">
      <div class="navbar-brand">
        <a href="#/" class="navbar-item">
          <img src="@/assets/logo.png" alt="hello">
        </a>
        <div
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
          @click="isDropDown = !isDropDown">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        :class="[ isDropDown ? 'is-active' : '', 'navbar-menu']">
        <div class="navbar-start">
          <a class="navbar-item" href="#/" @click="handleClick">Home</a>
          <a class="navbar-item" href="#/about"  @click="handleClick">About</a>
          <!-- <a class="navbar-item">Extra</a> -->
        </div>
        <div class="navbar-end">
          <!-- <a class="navbar-item">Login</a> -->
          <!-- <a class="navbar-item">Logout</a> -->
        </div>
      </div>
    </nav>

    <!-- 主页大标题 -->
    <div
      class="main-title-container"
      v-show="currentHeaderStatus === 'other'">
      <div class="main-title-wrap">
        <div class="title">不忘初心</div>
        <br>
        <div class="subtitle">Life is Art.</div>
      </div>
    </div>

    <!-- 文章背景 -->
    <div
      class="article-bk-container"
      v-show="currentHeaderStatus === 'article'"
      :style="{backgroundImage: `url(${hostname}${bannerData.picUrl})`}">
      <div class="article-title-wrapper">
        <div class="article-title">
          {{ bannerData.title }}
        </div>
        <div class="article-subtitle">
          {{ timeFormat(bannerData.meta.createAt) }}
        </div>
      </div>
    </div>

    <!-- 返回顶部按钮 -->
    <div class="return-top" @click="goTop(30)" v-show="returnTopBtnVisible">
      <i class="fas fa-arrow-up"></i>
    </div>
  </header>
</template>

<script>
import eventScheduler from '@/utils/eventScheduler'
import { scrollToTop } from '@/utils'
export default {
  data () {
    return {
      returnTopBtnVisible: false,
      currentHeaderStatus: 'other', // other | article,
      bannerData: {
        picUrl: '',
        title: '',
        meta: {
          createAt: ''
        }
      },
      isDropDown: false,
      hostname: ''
    }
  },
  created () {
    this.hostname = `${location.protocol}//${location.hostname}:3000`
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
      this.bannerData = bannerData
    })
  },
  updated () {
    eventScheduler.$on('current-change-to-default', (value) => {
      this.currentHeaderStatus = 'other'
      window.scrollTo(0, 0)
    })
  },
  methods: {
    goTop (speed) {
      return scrollToTop(speed)
    },
    listenScroll () {
      const top = document.documentElement.scrollTop
      if (top > 30) {
        this.returnTopBtnVisible = true
      } else {
        this.returnTopBtnVisible = false
      }
    },
    handleClick () {
      this.isDropDown = false
    },
    timeFormat (timeStr) {
      const dateObj = new Date(timeStr)
      return dateObj.toLocaleString().replace(/\//g, '-')
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
    .article-bk-container .article-title-wrapper .article-title {
      font-size: 30px;
      margin: 0 50px;
    }
    .article-bk-container .article-title-wrapper .article-subtitle {
      margin: 0 50px;
    }
  }
</style>
