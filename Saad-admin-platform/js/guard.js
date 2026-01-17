document.addEventListener('DOMContentLoaded', () => {

  const loginForm = document.getElementById('loginForm');
  if (!loginForm) return;

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // ⛔ منع إعادة تحميل الصفحة

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // تحقق بسيط (Front-end)
    if (email === '' || password === '') {
      alert('Please fill all fields');
      return;
    }

    // محاكاة تسجيل دخول ناجح
    localStorage.setItem('auth', 'true');
    localStorage.setItem('userEmail', email);

    // تحويل على الداشبورد
    window.location.href = 'dashboard.html';
  });

});