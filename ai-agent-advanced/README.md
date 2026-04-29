# 🤖 AI Agent Pro System

一个演示 **多智能体协同工作** 的 Web 应用，模拟真实 AI 开发流程：  
**Planner → Coder → Debugger**，全程自动化。

## 🚀 核心能力

- **多 Agent 架构**：Planner 规划、Coder 生成、Debugger 校验，三者流水线协作
- **AI 模拟调用**：`coderAgent` 模拟 AI 代码生成，可直接替换为 OpenAI / DeepSeek / 豆包 API
- **自动化工作流**：用户输入需求 → Agent 自主分析 → 生成可执行代码 → 可视化展示
- **Canvas 实时渲染**：生成结果直接在页面上运行验证

## 📁 项目结构
├── index.html # 主页面（输入需求 + 运行按钮）
├── main.js # 核心 Agent 逻辑
├── coder.js # Coder Agent 封装
├── debugger.js # Debugger Agent 封装
├── planner.js # Planner Agent 封装
├── mock_api.js # 模拟 AI 返回（可替换真实 API）
├── style.css # 样式
└── README.md


## 🛠 使用方法

1. 克隆仓库 / 下载所有文件
2. 用浏览器打开 `index.html`
3. 在输入框输入需求（例：「生成一个移动方块」）
4. 点击「运行 Agent」，观察三个 Agent 顺序执行
5. Canvas 中自动运行生成的代码

## 🔌 扩展真实 AI API

修改 `coderAgent` 中的模拟部分，替换为真实 API 调用：

```js
// 示例：调用 OpenAI
const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${YOUR_API_KEY}`
  },
  body: JSON.stringify({
    model: "gpt-4",
    messages: [{ role: "user", content: task }]
  })
});

;
🎯 演示要点
展示 Agent 协作流程
展示 AI 代码生成与自动执行
展示 前端可视化验证

📄 License
MIT