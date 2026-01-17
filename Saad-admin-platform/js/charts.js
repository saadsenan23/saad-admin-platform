// بيانات وهمية للشارتات
const revenueData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [{
    label: "Revenue ($)",
    data: [1200, 1900, 1500, 2200, 2800, 3200, 4000],
    borderColor: "#2563eb",
    backgroundColor: "rgba(37, 99, 235, 0.2)",
    fill: true,
    tension: 0.4, // منحنيات ناعمة
    pointBackgroundColor: "#1e40af",
    pointRadius: 5
  }]
};

const usersData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [{
    label: "Users",
    data: [50, 90, 130, 180, 240, 300, 380],
    backgroundColor: "rgba(14, 165, 233, 0.6)",
    borderColor: "#0ea5e9",
    borderWidth: 2,
    borderRadius: 5
  }]
};

// إعدادات الشارت
const commonOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: { font: { size: 14 } }
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#1e3a8a',
      titleColor: '#fff',
      bodyColor: '#fff'
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: "rgba(0,0,0,0.05)" }
    },
    x: {
      grid: { color: "rgba(0,0,0,0.05)" }
    }
  }
};

// إنشاء الشارت
const revenueChart = new Chart(
  document.getElementById('revenueChart'),
  {
    type: 'line',
    data: revenueData,
    options: commonOptions
  }
);

const usersChart = new Chart(
  document.getElementById('usersChart'),
  {
    type: 'bar',
    data: usersData,
    options: commonOptions
  }
);