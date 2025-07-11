document.addEventListener('DOMContentLoaded', function() {
    // 读取进度
    const chapter = getChapterFromURL();
    const lastPosition = localStorage.getItem(`chapter_${chapter}_progress`);
    
    if (lastPosition) {
        window.scrollTo(0, parseInt(lastPosition));
    }
    
    // 点击图片显示/隐藏标题
    document.querySelectorAll('.comic-page').forEach(img => {
        img.addEventListener('click', toggleHeaderVisibility);
    });
    
    // 滚动时隐藏标题
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (Math.abs(currentScroll - lastScrollTop) > 50) {
            document.getElementById('header').classList.add('hidden');
            lastScrollTop = currentScroll;
        }
        
        // 显示参与人员表
        if (isScrolledToBottom()) {
            document.getElementById('credits').style.display = 'block';
        }
        
        // 保存阅读进度
        localStorage.setItem(`chapter_${chapter}_progress`, currentScroll);
    });
    
    // 导航按钮功能
    document.getElementById('prev-chapter').addEventListener('click', goToPrevChapter);
    document.getElementById('back-to-index').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    document.getElementById('next-chapter').addEventListener('click', goToNextChapter);
    
    // 双击显示导航菜单
    document.body.addEventListener('dblclick', function() {
        const overlay = document.getElementById('nav-overlay');
        overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
    });
});

function toggleHeaderVisibility() {
    const header = document.getElementById('header');
    header.classList.toggle('hidden');
}

function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
}

function getChapterFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('chapter');
}

function goToPrevChapter() {
    const currentChapter = parseInt(getChapterFromURL());
    if (currentChapter > 16) {
        window.location.href = `chapter${currentChapter - 1}.html`;
    }
}

function goToNextChapter() {
    const currentChapter = parseInt(getChapterFromURL());
    window.location.href = `chapter${currentChapter + 1}.html`;
}
