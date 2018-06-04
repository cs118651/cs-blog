<template>
  <header id="header">

    <!-- 导航栏 -->
    <nav class="navbar is-fixed-top cs-navbar">
      <div class="navbar-brand">
        <a href="javacript:void(0);" class="navbar-item">
          <img src="@/assets/logo.png" alt="hello">
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">About</a>
          <a class="navbar-item">Extra</a>
        </div>
        <div class="navbar-end">
          <a class="navbar-item">Login</a>
          <a class="navbar-item">Logout</a>
        </div>
      </div>
    </nav>

    <!-- 大标题 -->
    <div class="main-title-container">
      <div class="main-title-wrap">
        <div class="title">一方净土</div>
        <br>
        <div class="subtitle">Life is Art.</div>
      </div>
    </div>

    <!-- 返回顶部按钮 -->
    <div class="return-top" @click="scrollToTop(30)" v-show="returnTopBtnVisible">
      <i class="fas fa-arrow-up"></i>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      returnTopBtnVisible: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.documentElement.scrollTop > 30
        ? this.returnTopBtnVisible = true
        : this.returnTopBtnVisible = false
      window.addEventListener('scroll', this.listenScroll)
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
    background: rgba(58, 74, 96, 0.95);
    box-shadow: 0 2px 12px rgba(0, 0, 0, .1);
  }
  .cs-navbar .navbar-item {
    color: #fff;
  }
  .cs-navbar .navbar-item:hover {
    background: #415167;
    color: #fff;
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

  @media screen and (max-width: 768px) {
    .return-top {
      display: none;
    }
  }
</style>
