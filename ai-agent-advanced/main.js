const log = document.getElementById("log");
const taskInput = document.getElementById("taskInput");
const statusEl = document.getElementById("status");

function addLog(t, color = "#00f0ff") {
  log.innerHTML += `<div style="color:${color}">> ${t}</div>`;
  log.scrollTop = log.scrollHeight;
}

// ========== Agent 1: Planner ==========
async function plannerAgent(task) {
  addLog("🧠 Planner: 分析需求...", "#ffd700");
  statusEl.textContent = "⏳ Planner 思考中...";
  
  // 模拟分析过程（可接入真实LLM）
  const steps = [`分析「${task}」可行性`, `拆解为3个子任务`, `输出执行方案`];
  for (let s of steps) {
    await sleep(400);
    addLog(`   ↳ ${s}`, "#aaa");
  }
  
  addLog("✅ Planner: 方案生成完毕", "#4CAF50");
  statusEl.textContent = "";
  return task;
}

// ========== Agent 2: Coder ==========
async function coderAgent(task) {
  addLog("💻 Coder: 调用AI生成代码...", "#2196F3");
  statusEl.textContent = "⏳ Coder 生成中...";
  
  await sleep(800);
  
  // 模拟AI返回（替换成真实API调用）
  const aiGeneratedCode = `
// AI自动生成的游戏代码
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let x = 200, y = 200;

document.onkeydown = (e) => {
  if (e.key === "ArrowUp") y -= 15;
  if (e.key === "ArrowDown") y += 15;
  if (e.key === "ArrowLeft") x -= 15;
  if (e.key === "ArrowRight") x += 15;
  draw();
};

function draw() {
  ctx.clearRect(0, 0, 400, 400);
  ctx.fillStyle = "#00f0ff";
  ctx.shadowBlur = 15;
  ctx.shadowColor = "#00f0ff";
  ctx.fillRect(x, y, 25, 25);
}
draw();
`;
  
  addLog("✅ Coder: 代码生成成功", "#4CAF50");
  statusEl.textContent = "";
  return { success: true, code: aiGeneratedCode };
}

// ========== Agent 3: Debugger ==========
function debuggerAgent(result) {
  addLog("🔍 Debugger: 检查代码...", "#FF9800");
  statusEl.textContent = "⏳ Debugger 检查中...";
  
  if (result.success) {
    addLog("✅ Debugger: 代码通过检查，无错误", "#4CAF50");
    statusEl.textContent = "✅ 所有 Agent 执行成功！";
    // 执行生成的代码
    eval(result.code);
  } else {
    addLog("❌ Debugger: 发现错误，自动修复中...", "#f44336");
  }
}

// ========== 主流程 ==========
async function runAgents() {
  log.innerHTML = "";
  statusEl.textContent = "🚀 Agent 系统启动中...";
  
  const userTask = taskInput.value.trim() || "生成一个移动方块游戏";
  
  try {
    const plan = await plannerAgent(userTask);
    const codeResult = await coderAgent(plan);
    debuggerAgent(codeResult);
    addLog("🎉 全部完成！Multi-Agent 流程执行完毕", "#ffd700");
  } catch (err) {
    addLog(`❌ 系统错误: ${err.message}`, "#f44336");
    statusEl.textContent = "⚠️ 执行出错";
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 初始Canvas
function startGame() {
  const c = document.getElementById("game");
  const ctx = c.getContext("2d");
  ctx.fillStyle = "#333";
  ctx.font = "16px Arial";
  ctx.textAlign = "center";
  ctx.fillText("点击「运行 Agent」启动演示", 200, 200);
}
startGame();