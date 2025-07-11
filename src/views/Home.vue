<template>
  <main class="home-container">
    <h1 class="title">鹫巢外传</h1>
    <p class="desc">一部由个人汉化的日漫作品，欢迎阅读与交流。</p>
    <router-link class="catalog-link" to="/catalog">进入章节目录</router-link>
  </main>
</template>

<script setup>
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #222;
  padding: 32px 12px;
}
.title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
}
.desc {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  color: #666;
}
.catalog-link {
  display: inline-block;
  padding: 0.7em 2em;
  background: #222;
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background 0.2s;
}
.catalog-link:hover {
  background: #444;
}
</style>
