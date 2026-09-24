/**
 * FORSKO - Practical Page Access Protection Script
 * Password Validation Engine
 */

// CLIENT-SIDE ACCESS LOCK ONLY.
const PRACTICAL_PASSWORD = "shid2024";
const AUTH_STORAGE_KEY = "forsko_practical_authenticated";

document.addEventListener('DOMContentLoaded', () => {

  const practicalModal = document.getElementById('practicalModal');
  const protectedContent = document.getElementById('protectedContent');
  const practicalAuthForm = document.getElementById('practicalAuthForm');
  const passwordInput = document.getElementById('practicalPasswordInput');
  const toggleVisibilityBtn = document.getElementById('togglePasswordVisibility');
  const eyeIcon = document.getElementById('passwordEyeIcon');
  const errorMessage = document.getElementById('modalErrorMessage');

  // Check if session is authenticated
  function checkAuthentication() {
    try {
      const isAuth = sessionStorage.getItem(AUTH_STORAGE_KEY) === "true";
      if (isAuth) {
        unlockPage();
      } else {
        lockPage();
      }
    } catch (e) {
      lockPage();
    }
  }

  // Unlock Page
  function unlockPage() {
    if (practicalModal) {
      practicalModal.classList.add('hidden');
    }
    if (protectedContent) {
      protectedContent.classList.add('unlocked');
    }
  }

  // Lock Page & Show Modal
  function lockPage() {
    if (practicalModal) {
      practicalModal.classList.remove('hidden');
    }
    if (protectedContent) {
      protectedContent.classList.remove('unlocked');
    }
    if (passwordInput) {
      passwordInput.value = '';
      setTimeout(() => passwordInput.focus(), 200);
    }
  }

  // Toggle Password Eye Icon
  if (toggleVisibilityBtn && passwordInput && eyeIcon) {
    toggleVisibilityBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';

      if (isPassword) {
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  }

  // Submit Password Form
  if (practicalAuthForm) {
    practicalAuthForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPass = passwordInput ? passwordInput.value.trim() : '';

      if (enteredPass === PRACTICAL_PASSWORD) {
        if (errorMessage) errorMessage.classList.add('hidden');
        try {
          sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
        } catch (e) {}

        unlockPage();
      } else {
        if (errorMessage) {
          errorMessage.classList.remove('hidden');
        }
        if (passwordInput) {
          passwordInput.value = '';
          passwordInput.focus();
        }
      }
    });
  }

  // Mobile Menu Navigation Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Initial Run
  checkAuthentication();

});
