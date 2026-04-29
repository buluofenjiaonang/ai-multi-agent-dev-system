const log = document.getElementById("log");

function addLog(t){log.innerHTML += "<div>> "+t+"</div>";}

async function planner(){
addLog("Planner: 分析需求...");
return "生成游戏+AI优化";
}

async function coder(task){
addLog("Coder: 调用AI生成代码...");
let res = await fetch("api/mock_api.js");
return {success:true,data:await res.text()};
}

function debuggerAgent(r){
if(r.success){addLog("Debugger: 无错误");}
else{addLog("Debugger: 修复中");}
}

async function runAgents(){
log.innerHTML="";
let t = await planner();
let r = await coder(t);
debuggerAgent(r);
startGame();
}

function startGame(){
const c=document.getElementById("game");
const ctx=c.getContext("2d");
let x=200,y=200;

document.onkeydown=e=>{
if(e.key==="ArrowUp")y-=10;
if(e.key==="ArrowDown")y+=10;
if(e.key==="ArrowLeft")x-=10;
if(e.key==="ArrowRight")x+=10;
draw();
};

function draw(){
ctx.clearRect(0,0,400,400);
ctx.fillStyle="#00f0ff";
ctx.fillRect(x,y,20,20);
}
draw();
}
