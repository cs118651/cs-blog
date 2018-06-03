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
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
  .cs-navbar {
    background: #36465d;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .1);
  }
  .navbar-item {
    color: #fff;
  }
  .navbar-item:hover {
    background: #415167;
    color: #fff;
  }
  .main-title-container {
    color: #000;
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
</style>
