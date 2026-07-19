# 英语岛大冒险 · 项目记忆

## 技术栈
- 原生 HTML/CSS/JS + Service Worker PWA
- Python Playwright E2E 测试
- Node.js 单元测试 (`node --test`)
- 本地 `python -m http.server 4173` 开发服务
- 进度存储：`localStorage` + `english-island-adventure-state` key

## 架构概要
- `game-core.js` — 核心状态机（关卡解锁、进度计算、语音活动检测）
- `levels.js` — 28 关关卡数据 + 世界观配置
- `app.js` — UI 渲染与交互（DOM 操作、语音合成/识别、父区面板）
- `index.html` — 单页入口，包含浮动粒子层、SVG 品牌标记、三个 modal
- `styles.css` — 完整主题样式，约 3060 行

## 库洛米视觉体系
- 命名：`英语岛大冒险 · 库洛米甜酷版`
- 分支隔离：`feature/kuromi-frontend`（GitHub: Kevin-hr/english-island-adventure）
- 配色：黑紫深色底（`#1a1025` / `#0d0814`）+ Sanrio 热粉（`#ff5aa6` / `#ff3d8a`）
- 品牌元素：浮动粒子 (🎀💜✦🌙💀)、jester-collar 锯齿领、mini-kuromi-face
- 吉祥物：`assets/kuromi-mascot.webp`（替代早期内联 SVG）
- 顶部 SVG 微标仍保留简化版库洛米头像（14 行 viewBox）

## 缓存策略
- HTML、JS、manifest 统一加 `?v=15` 版本戳
- Service Worker 注册在 `sw.js`，离线安装可选
- PWA manifest theme_color 和 background_color 分开设置

## 启动方式
```powershell
powershell -ExecutionPolicy Bypass -File .\start.ps1
```
默认端口 4173，局域网 IP 在启动窗口黄色显示。

## 平板访问
- 华为 Pad 从第 9 关继续：`http://<LAN_IP>:4173/?v=15&resume=9`
- 先双击 `启用平板访问.cmd` 开放防火墙规则
- 华为浏览器可能限制麦克风权限

## 测试命令
```powershell
node --test tests/game-core.test.js
node --test tests/content.test.js
python tests/e2e.py              # Playwright E2E
python tests/echo-controls.e2e.py
python tests/visual-smoke.py     # 截图验收
```

## 隐私与安全
- 无账号、无广告、无外部分析服务
- 进度仅保存在本机 localStorage
- 录音不保存、语音识别不输出分数（仅检测开口或转写匹配）
- 家长区可一键清除全部数据
