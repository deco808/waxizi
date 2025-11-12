// xixi游戏 - 完整脚本
class XIXIGame {
    constructor() {
        this.currentScene = 0;
        this.memories = new Set();
        this.playerName = "勇者";
        this.init();
    }

    init() {
        console.log("🎮 xixi游戏初始化...");
        this.fixImagePaths();
        this.bindEvents();
        this.showScene(0);
    }

    // 修复图片路径问题
    fixImagePaths() {
        console.log("🖼️ 检查图片路径...");
        
        const images = [
            { id: 'character-xiaoxiao', filename: 'xiaoxiao.png' },
            { id: 'character-xinxin', filename: 'xinxin.png' }
        ];
        
        images.forEach(img => {
            const imgElement = document.getElementById(img.id);
            if (imgElement) {
                // 尝试多种可能的路径
                const possiblePaths = [
                    img.filename,                          // 直接文件名
                    './' + img.filename,                   // 当前目录
                    'assets/' + img.filename,              // assets文件夹
                    './assets/' + img.filename             // ./assets文件夹
                ];
                
                let found = false;
                for (let path of possiblePaths) {
                    console.log(`尝试加载: ${path}`);
                    imgElement.src = path;
                    // 如果图片存在，onload会触发
                }
                
                // 图片加载失败时的处理
                imgElement.onerror = () => {
                    console.warn(`❌ 图片加载失败: ${img.filename}`);
                    this.createImagePlaceholder(imgElement, img.id);
                };
                
                imgElement.onload = () => {
                    console.log(`✅ 图片加载成功: ${imgElement.src}`);
                    found = true;
                };
            }
        });
    }

    // 创建图片占位符
    createImagePlaceholder(imgElement, characterId) {
        const name = characterId.includes('xinxin') ? '心心' : '潇潇';
        const color = characterId.includes('xinxin') ? 
            'linear-gradient(45deg, #ff9ff3, #f368e0)' : 
            'linear-gradient(45deg, #74b9ff, #0984e3)';
        
        imgElement.style.background = color;
        imgElement.style.border = '3px dashed #2d6a4f';
        imgElement.style.borderRadius = '20px';
        imgElement.style.display = 'flex';
        imgElement.style.alignItems = 'center';
        imgElement.style.justifyContent = 'center';
        imgElement.style.color = 'white';
        imgElement.style.fontSize = '24px';
        imgElement.style.fontWeight = 'bold';
        imgElement.style.textAlign = 'center';
        imgElement.innerHTML = `${name}<br><small style="font-size: 16px;">(图片加载中)</small>`;
        
        console.log(`🎨 为 ${name} 创建了占位符`);
    }

    bindEvents() {
        document.getElementById('next-btn').addEventListener('click', () => {
            this.next();
        });
        
        // 添加键盘支持
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                this.next();
            }
        });
    }

    // 游戏场景数据 - 直接从勇者接任务开始
    get scenes() {
        return [
            // 场景0: 直接开始 - 勇者已经到达异世界
            {
                background: 'chapter1',
                characters: [],
                name: '系统',
                text: '一阵光芒闪过，你发现自己站在一个陌生的小镇上。这就是传说中的初心镇吗？',
                nextScene: 1
            },
            {
                background: 'chapter1',
                characters: [],
                name: '镇长老者',
                text: '啊！勇者大人，您终于来了！黑暗森林中的邪恶力量正在蔓延，两位黑暗女巫控制了整个森林。',
                nextScene: 2
            },
            {
                background: 'chapter1',
                characters: [],
                name: '镇长老者',
                text: '心心女巫在森林外围设下了重重障碍，而潇潇女王则在城堡深处守护着黑暗核心。我们需要您击败她们！',
                nextScene: 3
            },
            {
                background: 'chapter1',
                characters: [],
                name: '系统',
                text: '你获得了基础装备，准备向黑暗森林进发。第一个目标是击败黑暗女巫·心心！',
                nextScene: 4
            },

            // 第二章：迷雾森林探索 - 低语河川
            {
                background: 'chapter2',
                characters: [],
                name: '系统',
                text: '你来到了低语河川，河水似乎在诉说着什么...河中的遗忘泥怪挡住了去路！',
                nextScene: 5
            },
            {
                background: 'chapter2',
                characters: [],
                name: '系统',
                text: '经过一番战斗，你击败了遗忘泥怪，发现了一个发光的记忆碎片。',
                nextScene: 6,
                onEnter: () => this.collectMemory('memory1')
            },
            {
                background: 'chapter2',
                characters: [],
                name: '记忆碎片',
                text: '"今天和潇潇在地铁站存包，她居然把背包密码忘了！我们笑了整整一下午..."',
                nextScene: 7
            },

            // 巨菇沼泽
            {
                background: 'chapter2',
                characters: [],
                name: '系统',
                text: '继续前进，你来到了巨菇沼泽。在沼泽深处，你发现了一个熟悉的背包...',
                nextScene: 8,
                onEnter: () => this.collectMemory('backpack')
            },
            {
                background: 'chapter2',
                characters: [],
                name: '背包内容',
                text: '背包里有一张电影票根，日期是你们第一次一起看电影的日子。还有一些零食包装...这真的是邪恶女巫会有的东西吗？',
                nextScene: 9
            },

            // 回声山谷 - 玩具熊谜题
            {
                background: 'chapter2',
                characters: [],
                name: '巨大玩具熊',
                text: '站住！想要通过回声山谷，必须说出正确的暗号！',
                nextScene: 10
            },
            {
                background: 'chapter2',
                characters: [],
                name: '系统',
                text: '你记得曾经和朋友们有一个关于高楼玩具熊的暗号...',
                choices: [
                    { text: '说出暗号："熊熊守护者"', nextScene: 11 },
                    { text: '尝试强行通过', nextScene: 12 },
                    { 
                        text: '展示收集到的记忆碎片', 
                        nextScene: 13,
                        condition: () => this.memories.size >= 2
                    }
                ]
            },
            {
                background: 'chapter2',
                characters: [],
                name: '巨大玩具熊',
                text: '暗号正确！看来你确实是我们的朋友。你可以通过了！',
                nextScene: 14
            },
            {
                background: 'chapter2',
                characters: [],
                name: '巨大玩具熊',
                text: '强行通过是不可能的！不过看在你这么勇敢的份上...算了，你过去吧。',
                nextScene: 14
            },
            {
                background: 'chapter2',
                characters: [],
                name: '巨大玩具熊',
                text: '这些记忆...你居然都保存着。看来你真的是我们等待的人。直接前进吧！',
                nextScene: 14
            },

            // 心心BOSS战开始
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '哼哼~终于来了吗，勇者大人？想要见到潇潇女王，先过我这一关！',
                nextScene: 15
            },
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '让我们来玩个游戏吧！猜拳还是回答问题？选一个吧！',
                choices: [
                    { text: '猜拳', nextScene: 16 },
                    { text: '回答问题', nextScene: 19 },
                    { 
                        text: '展示所有收集的回忆', 
                        nextScene: 22,
                        condition: () => this.memories.size >= 2
                    }
                ]
            },

            // 猜拳路线
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '石头剪刀布！我出...布！你出什么？',
                choices: [
                    { text: '✊ 石头', nextScene: 17 },
                    { text: '✌️ 剪刀', nextScene: 18 },
                    { text: '✋ 布', nextScene: 18 }
                ]
            },
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '啊！你赢了...不过这只是运气好而已！',
                nextScene: 25
            },
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '你输了哦~不过看你这么可爱，我就放你过去吧！',
                nextScene: 25
            },

            // 回答问题路线
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '那么请听题：我最喜欢的"梦中情人"是什么样的？',
                choices: [
                    { text: '卖炸串的肌肉帅哥', nextScene: 20 },
                    { text: '外表8岁实际20+的成熟小男孩', nextScene: 21 },
                    { text: '金发碧眼的王子', nextScene: 20 }
                ]
            },
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '不对哦~看来你还不够了解我呢！',
                nextScene: 25
            },
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '哇！你居然知道！看来你对我们很了解嘛...',
                nextScene: 25
            },

            // 展示记忆路线
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '这些记忆...地铁站的存包，电影票，还有我们的暗号...你都还记得？',
                nextScene: 23
            },
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '也许...你真的是我们等待的那个人。',
                nextScene: 24
            },
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '直接去找潇潇吧，她在城堡的最深处。要小心，她比我厉害多了！',
                nextScene: 25,
                onEnter: () => this.collectMemory('heart-touched')
            },

            // 心心放行
            {
                background: 'chapter2',
                characters: [{ id: 'character-xinxin', position: 'center' }],
                name: '黑暗女巫·心心',
                text: '好吧，你可以过去了。记住，有些事情并不像表面看起来那样...',
                nextScene: 26,
                onEnter: () => this.collectMemory('defeated-xinxin')
            },

            // 第三章：潇潇BOSS战
            {
                background: 'chapter3',
                characters: [{ id: 'character-xiaoxiao', position: 'center' }],
                name: '黑暗女王·潇潇',
                text: '你终于来了，勇者。心心那个傻丫头，果然还是心软放你过来了。',
                nextScene: 27
            },
            {
                background: 'chapter3',
                characters: [{ id: 'character-xiaoxiao', position: 'center' }],
                name: '黑暗女王·潇潇',
                text: '但是，我不会像她那样天真。如果你想要摧毁这个结界，就先证明你的决心！',
                choices: [
                    { text: '战斗！', nextScene: 28 },
                    { text: '尝试说服她', nextScene: 29 },
                    { text: '展示所有收集的回忆', nextScene: 30 }
                ]
            },
            {
                background: 'chapter3',
                characters: [{ id: 'character-xiaoxiao', position: 'center' }],
                name: '黑暗女王·潇潇',
                text: '战斗？你确定要这样做吗？我们曾经是那么好的朋友...',
                nextScene: 31
            },
            {
                background: 'chapter3',
                characters: [{ id: 'character-xiaoxiao', position: 'center' }],
                name: '黑暗女王·潇潇',
                text: '说服我？那你告诉我，为什么要破坏我们珍视的这一切？',
                nextScene: 31
            },
            {
                background: 'chapter3',
                characters: [{ id: 'character-xiaoxiao', position: 'center' }],
                name: '黑暗女王·潇潇',
                text: '这些回忆...你居然都保存着...',
                nextScene: 31
            },

            // 真相揭示
            {
                background: 'chapter4',
                characters: [
                    { id: 'character-xiaoxiao', position: 'left' },
                    { id: 'character-xinxin', position: 'right' }
                ],
                name: '黑暗女王·潇潇',
                text: '其实...这里不是什么黑暗森林。这是我们为了保护珍贵回忆而创造的结界。',
                nextScene: 32
            },
            {
                background: 'chapter4',
                characters: [
                    { id: 'character-xiaoxiao', position: 'left' },
                    { id: 'character-xinxin', position: 'right' }
                ],
                name: '潇潇',
                text: '所谓的"黑暗"是被距离阻隔的思念，"怪物"是想要挽留友谊的不安。',
                nextScene: 33
            },
            {
                background: 'chapter4',
                characters: [
                    { id: 'character-xiaoxiao', position: 'left' },
                    { id: 'character-xinxin', position: 'right' }
                ],
                name: '心心',
                text: '我们只是...不想被现实的距离分开，不想忘记这些美好的回忆...',
                nextScene: 34
            },

            // 最终选择
            {
                background: 'chapter4',
                characters: [
                    { id: 'character-xiaoxiao', position: 'left' },
                    { id: 'character-xinxin', position: 'right' }
                ],
                name: '系统',
                text: '现在，了解了真相的你，请做出选择：',
                choices: [
                    { text: '摧毁核心 - 回归现实但淡忘友谊', nextScene: 35 },
                    { text: '拥抱黑暗 - 永远沉浸在这美好回忆中', nextScene: 36 },
                    { text: '照亮黑暗 - 珍惜友谊，接受现实的变化', nextScene: 37 }
                ]
            },

            // 各种结局
            {
                background: 'chapter1',
                characters: [],
                name: '结局A：遗忘',
                text: '你摧毁了核心，回到了现实世界。但关于潇潇和心心的记忆逐渐模糊...生活继续，但总觉得失去了什么重要的东西。',
                nextScene: -1
            },
            {
                background: 'chapter4',
                characters: [],
                name: '结局B：永恒的回忆',
                text: '你选择永远留在结界中。每一天都是快乐的回忆，但现实世界的时光仍在流逝...这真的是你想要的吗？',
                nextScene: -1
            },
            {
                background: 'chapter2',
                characters: [
                    { id: 'character-xiaoxiao', position: 'left' },
                    { id: 'character-xinxin', position: 'right' }
                ],
                name: '结局C：珍贵的现在',
                text: '你们约定，即使现实中的距离变远，友谊永远不会改变。结界消失了，但真正的联系更加牢固。这才是最珍贵的宝藏！',
                nextScene: -1
            }
        ];
    }

    showScene(sceneIndex) {
        if (sceneIndex === -1) {
            this.showEnding();
            return;
        }

        const scene = this.scenes[sceneIndex];
        if (!scene) {
            console.error(`场景 ${sceneIndex} 不存在`);
            this.showEnding();
            return;
        }

        this.currentScene = sceneIndex;
        
        // 执行场景进入时的特殊函数
        if (scene.onEnter) scene.onEnter();
        
        // 更新背景
        this.updateBackground(scene.background);
        
        // 更新角色
        this.updateCharacters(scene.characters);
        
        // 更新对话框
        this.updateDialog(scene.name, scene.text);
        
        // 处理选项或继续按钮
        if (scene.choices) {
            this.showChoices(scene.choices);
        } else {
            this.hideChoices();
        }
        
        console.log(`🎭 显示场景 ${sceneIndex}`);
    }

    updateBackground(bgClass) {
        const background = document.getElementById('background');
        background.className = '';
        background.classList.add(bgClass);
    }

    updateCharacters(characters) {
        // 隐藏所有角色
        document.querySelectorAll('.character').forEach(char => {
            char.classList.remove('show');
        });
        
        // 显示当前场景的角色
        characters.forEach(char => {
            const charElement = document.getElementById(char.id);
            if (charElement) {
                charElement.classList.add('show');
                charElement.classList.add(char.position);
                
                // 确保图片可见
                charElement.style.display = 'block';
            }
        });
    }

    updateDialog(name, text) {
        const nameElement = document.getElementById('character-name');
        const textElement = document.getElementById('dialog-text');
        
        nameElement.textContent = name;
        textElement.textContent = text;
    }

    showChoices(choices) {
        const choiceContainer = document.getElementById('choice-container');
        const dialogContainer = document.getElementById('dialog-container');
        
        choiceContainer.innerHTML = '';
        const choiceBox = document.createElement('div');
        choiceBox.className = 'choice-box';
        
        choices.forEach(choice => {
            // 检查条件
            if (choice.condition && !choice.condition()) {
                return; // 不显示不符合条件的选项
            }
            
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.addEventListener('click', () => {
                this.showScene(choice.nextScene);
            });
            choiceBox.appendChild(btn);
        });
        
        choiceContainer.appendChild(choiceBox);
        choiceContainer.classList.remove('hidden');
        dialogContainer.classList.add('hidden');
    }

    hideChoices() {
        const choiceContainer = document.getElementById('choice-container');
        const dialogContainer = document.getElementById('dialog-container');
        
        choiceContainer.classList.add('hidden');
        dialogContainer.classList.remove('hidden');
    }

    next() {
        const currentScene = this.scenes[this.currentScene];
        if (currentScene && currentScene.nextScene !== undefined) {
            this.showScene(currentScene.nextScene);
        } else {
            console.warn('没有下一个场景了');
            this.showEnding();
        }
    }

    collectMemory(memoryId) {
        this.memories.add(memoryId);
        this.updateInventory();
        
        // 显示获得回忆的提示
        this.showMemoryGetPrompt(memoryId);
    }

    updateInventory() {
        const inventory = document.getElementById('memory-items');
        inventory.innerHTML = '';
        
        this.memories.forEach(memory => {
            const item = document.createElement('div');
            item.className = 'memory-item collected';
            item.textContent = '★';
            item.title = this.getMemoryName(memory);
            inventory.appendChild(item);
        });
    }

    getMemoryName(memoryId) {
        const memoryNames = {
            'memory1': '地铁站存包记忆',
            'backpack': '潇潇的背包',
            'defeated-xinxin': '心心的认可',
            'heart-touched': '心灵的触动'
        };
        return memoryNames[memoryId] || '未知回忆';
    }

    showMemoryGetPrompt(memoryId) {
        // 简单的获得提示
        console.log(`🎁 获得了回忆: ${this.getMemoryName(memoryId)}`);
    }

    showEnding() {
        // 游戏结束，显示重新开始按钮
        const choiceContainer = document.getElementById('choice-container');
        choiceContainer.innerHTML = `
            <div class="choice-box">
                <h3>🎉 游戏结束 🎉</h3>
                <p>感谢你体验xixi的故事！</p>
                <button class="choice-btn" onclick="location.reload()">重新开始游戏</button>
            </div>
        `;
        choiceContainer.classList.remove('hidden');
        document.getElementById('dialog-container').classList.add('hidden');
    }
}

// 启动游戏
window.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 启动xixi游戏...");
    new XIXIGame();
});