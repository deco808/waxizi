<template>
  <main class="catalog-container">
    <div class="cover-placeholder">
      <!-- 这里可以放置漫画封面图片 -->
      <span class="cover-text">[漫画封面]</span>
    </div>
    <h1 class="catalog-title">鹫巢外传</h1>
    <p class="desc">一部由个人汉化的日漫作品，欢迎阅读与交流。</p>
    <h2 class="chapter-title">章节目录</h2>
    <ul class="chapter-list">
  <li v-for="chapter in chapters" :key="chapter.id">
    <template v-if="chapter.external">
      <a :href="chapter.url" target="_blank" rel="noopener" class="external-link">{{ chapter.title }}</a>
    </template>
    <template v-else>
      <router-link :to="`/reader/${chapter.id}`">{{ chapter.title }}</router-link>
    </template>
  </li>
</ul>
  </main>
</template>

<script setup>
const chapters = [
  {
    id: '1-15',
    title: '第1-15话（外部阅读）',
    external: true,
    url: 'https://m.dm5.com/chapterlist8594/' // TODO: 替换为实际链接
  },
  ...Array.from({ length: 53 - 15 }, (_, i) => ({
    id: i + 16,
    title: `第${i + 16}话`,
    external: false
  }))
]
</script>

<style scoped>
.catalog-container {
  min-height: 100vh;
  background: #fff;
  color: #222;
  padding: 32px 12px 16px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cover-placeholder {
  width: 220px;
  height: 320px;
  background: #f2f2f2;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px #0001;
}
.cover-text {
  color: #aaa;
  font-size: 1.1rem;
}
.catalog-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.desc {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #666;
}
.chapter-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
}
.chapter-list {
  width: 100%;
  max-width: 600px;
  list-style: none;
  padding: 0;
  margin: 0 0 2.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}
.chapter-list li {
  margin: 0;
}
.chapter-list a {
  color: #222;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.7em 0;
  border-radius: 8px;
  transition: background 0.2s;
  display: block;
  text-align: center;
}
.chapter-list a:hover {
  background: #f2f2f2;
}
.external-link {
  color: #1976d2;
  border: 1px dashed #1976d2;
  background: #f7faff;
}
</style>
