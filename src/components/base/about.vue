<template>
  <div class="about-me container">

    <div class="card about-card">
      <div class="card-content">
        <p class="title">
          “享受创造的乐趣。”
        </p>
        <div class="content">
          <p>Name: <a class="tag is-warning">蔡帅</a></p>
          <p>I'm: <a class="tag is-link">male</a></p>
          <p>Age: <a class="tag is-link">21</a></p>
          <p>Emotion: <a class="tag is-danger">Single</a></p>
          <p>Current Status: <a class="tag is-danger">Busy</a></p>
          <p>Hobit: <a class="tag is-info">lol</a></p>
          <p>Dream: <a class="tag is-primary">be great.</a></p>
          <p>Email: <a class="tag is-white" href="mailto:timrchen@foxmail.com">csdefault1997@gmail.com</a></p>
          <p>GitHub: <a class="tag is-white" href="https://github.com/cs118651" target="_blank">https://github.com/cs118651</a></p>
          <p>Time: <a class="tag">2018.06.01</a></p>
          <p>
            <strong>"Programming is the art of telling another human what one wants the computer to do."</strong>
          </p>
        </div>
      </div>
    </div>

    <section class="hero is-dark about-card">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle">
            欢迎来访小站，个人的一亩三分地，辛苦耕耘，谢谢关注.
          </h2>
          <a class="button is-dark is-inverted is-outlined github-btn" href="https://github.com/cs118651" target="_blank">
            <span class="icon">
              <i class="fab fa-github"></i>
            </span>
            <span>Follow</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .about-card {
    margin-bottom: 50px;
    border-radius: 5px;
  }
  .about-card .tag {
    margin-left: 5px;
  }
  /* 竖屏 */
  @media screen and (max-width: 768px) {
    .about-card {
      margin-bottom: 0;
      border-radius: 0;
    }
  }
</style>
