// register.js
import { auth, translations } from '/static/js/script.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');
  if (!registerForm) return;

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!email || !password || !confirmPassword) {
      alert(translations[localStorage.getItem('language') || 'ru']['register-fill-fields']);
      return;
    }

    if (password !== confirmPassword) {
      alert(translations[localStorage.getItem('language') || 'ru']['passwords-not-match']);
      return;
    }

    if (password.length < 6) {
      alert(translations[localStorage.getItem('language') || 'ru']['password-too-short']);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert(translations[localStorage.getItem('language') || 'ru']['register-success']);
        window.location.href = './Login.html';
      })
      .catch((error) => {
        alert(translations[localStorage.getItem('language') || 'ru']['register-error'] + ' ' + error.message);
      });
  });
});