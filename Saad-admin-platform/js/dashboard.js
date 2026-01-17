const revenueCanvas = document.getElementById("revenueChart");
const usersCanvas = document.getElementById("usersChart");

function drawLine(ctx, data) {
  const max = Math.max(...data);
  const stepX = ctx.canvas.width / (data.length - 1);
  const stepY = ctx.canvas.height / max;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.beginPath();
  ctx.strokeStyle = "#8b5cf6";
  ctx.lineWidth = 3;

  data.forEach((val, i) => {
    const x = i * stepX;
    const y = ctx.canvas.height - val * stepY;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });

  ctx.stroke();
}

drawLine(revenueCanvas.getContext("2d"), [1200, 1800, 1500, 2600, 3200, 4100]);
drawLine(usersCanvas.getContext("2d"), [50, 90, 140, 220, 300, 420]);

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
  
});

closeMenu.addEventListener("click", closeSideMenu);
overlay.addEventListener("click", closeSideMenu);

function closeSideMenu() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
}
const users = [
  { name: "Admin", email: "admin@test.com", role: "Admin" },
  { name: "User", email: "user@test.com", role: "User" }
];

const body = document.getElementById("usersBody");

users.forEach(u => {
  body.innerHTML += `
    <tr>
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>${u.role}</td>
      <td><button>Delete</button></td>
    </tr>
  `;
});

