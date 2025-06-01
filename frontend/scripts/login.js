// login.js
import { auth, translations } from '/static/js/script.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (!loginForm) return;

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert(translations[localStorage.getItem('language') || 'ru']['login-fill-fields']);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert(translations[localStorage.getItem('language') || 'ru']['login-success']);
        window.location.href = './Profile.html';
      })
      .catch((error) => {
        alert(translations[localStorage.getItem('language') || 'ru']['login-error'] + ' ' + error.message);
      });
  });
});