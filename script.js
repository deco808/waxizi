// 当前日期
document.getElementById('update-date').textContent = new Date().toLocaleDateString('zh-CN');

// 导航切换
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 更新活动链接
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
        
        // 显示对应部分
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});

// 默认显示首页
document.querySelector('nav a[href="#home"]').classList.add('active');
document.getElementById('home').classList.add('active');

// 加载章节数据
function loadChapters() {
    fetch('chapters.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('chapters-list');
            container.innerHTML = '';
            
            // 显示最新章节在首页
            const latestChapter = data.chapters[data.chapters.length - 1];
            document.getElementById('latest-chapter-info').innerHTML = `
                <div class="chapter-card">
                    <div class="chapter-number">第${latestChapter.number}话</div>
                    <div class="chapter-title">${latestChapter.title}</div>
                    <a href="${latestChapter.url}" target="_blank">阅读最新话</a>
                </div>
            `;
            
            // 生成所有章节
            data.chapters.forEach(chapter => {
                const chapterElement = document.createElement('div');
                chapterElement.className = 'chapter-card';
                
                // 标记最近3章为"新"
                const isNew = data.chapters.length - chapter.number < 3;
                
                chapterElement.innerHTML = `
                    ${isNew ? '<span class="new-badge">NEW</span>' : ''}
                    <div class="chapter-number">第${chapter.number}话</div>
                    <div class="chapter-title">${chapter.title}</div>
                    <a href="${chapter.url}" target="_blank">阅读</a>
                `;
                
                container.appendChild(chapterElement);
            });
        })
        .catch(error => {
            console.error('加载章节数据失败:', error);
            document.getElementById('chapters-list').innerHTML = 
                '<p>加载章节失败，请稍后刷新页面。</p>';
        });
}

// 搜索功能
document.getElementById('search-btn').addEventListener('click', searchChapters);
document.getElementById('search-input').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') searchChapters();
});

function searchChapters() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (!searchTerm) {
        loadChapters();
        return;
    }
    
    fetch('chapters.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('chapters-list');
            container.innerHTML = '';
            
            const filtered = data.chapters.filter(chapter => 
                chapter.title.toLowerCase().includes(searchTerm) || 
                chapter.number.toString().includes(searchTerm)
            );
            
            if (filtered.length === 0) {
                container.innerHTML = '<p>没有找到匹配的章节。</p>';
                return;
            }
            
            filtered.forEach(chapter => {
                const chapterElement = document.createElement('div');
                chapterElement.className = 'chapter-card';
                chapterElement.innerHTML = `
                    <div class="chapter-number">第${chapter.number}话</div>
                    <div class="chapter-title">${chapter.title}</div>
                    <a href="${chapter.url}" target="_blank">阅读</a>
                `;
                container.appendChild(chapterElement);
            });
        });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    loadChapters();
    
    // 处理页面加载时的锚点
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        document.querySelector(`nav a[href="#${targetId}"]`).click();
    }
});
