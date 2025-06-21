let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

const params = new URLSearchParams(window.location.search);
let username = params.get("name");

// 限制用户名长度，避免页面样式崩坏
const maxLength = 20;
const safeUsername = username ? username.substring(0, maxLength) : "???";

// 防止 `null` 变成 `"null"`
if (username) {
  questionText.innerText = questionText.innerText + safeUsername;
}

let clickCount = 0; // 记录点击 No 的次数
let yesclickCount = 0; // 记录点击 yes的次数
// No 按钮的文字变化
const noTexts = [
  "愿你成为自己的山，找寻到自己的海",
  "将生活当成指南针，迷路时先学会停泊而不是赶路",
  " 你每天攒下的努力都是未来惊喜的零钱",
  "人生如国宴，当下只是你品尝的第一道菜",
  "无事值得悲观 幸福直到永远",
];
// yes 按钮的文字变化
const yesTexts = [  
"随风奔跑，自由是方向",  
"心平能愈三千疾",  
"凛冬割破蝴蝶的翅膀，眼里尽是亘古春 ",  
"通往夏天的隧道，是再见的出口",  
"如果你开心，那么一切都无所谓",
];
// No 按钮点击事件
noButton.addEventListener("click", function () {
  clickCount++;

 

 

  // No 文案变化（前 5 次变化）
  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 图片变化（前 5 次变化）
  if (clickCount === 1) mainImage.src = "images/shocked.png"; // 震惊
  if (clickCount === 2) mainImage.src = "images/think.png"; // 思考
  if (clickCount === 3) mainImage.src = "images/angry.png"; // 生气
  if (clickCount === 4) mainImage.src = "images/crying.png"; // 哭
  if (clickCount >= 5) mainImage.src = "images/crying.png"; // 之后一直是哭
});
// yes按钮点击事件
yesButton.addEventListener("click", function () {  
yesclickCount++;
 
 
  // yes文案变化（前 5 次变化）  
if (yesclickCount <= 5) {    
yesButton.innerText = yesTexts[yesclickCount - 1];  
}
  // 图片变化（前 5 次变化）  
if (yesclickCount === 1) mainImage.src = "images/shocked.png"; // 震惊  
if (yesclickCount === 2) mainImage.src = "images/think.png"; // 思考  
if (yesclickCount === 3) mainImage.src = "images/angry.png"; // 生气  
if (yesclickCount === 4) mainImage.src = "images/crying.png"; // 哭  
if (yesclickCount >= 5) mainImage.src = "images/crying.png"; // 之后一直是哭
});
