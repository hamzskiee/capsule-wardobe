import { supabase } from './config.js';
import { handleLogin, handleRegister } from './auth.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Inisialisasi Icon
    if (window.lucide) window.lucide.createIcons();

    // 2. Proteksi Halaman & Cek Sesi
    const { data: { session } } = await supabase.auth.getSession();
    const isAuthPage = window.location.pathname.includes('auth.html');

    if (session && isAuthPage) {
        window.location.href = 'dashboard.html';
    } else if (!session && window.location.pathname.includes('dashboard.html')) {
        window.location.href = 'auth.html';
    }

    // 3. Event Listeners untuk Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    const registerForm = document.getElementById('register-form');
    if (registerForm) registerForm.addEventListener('submit', handleRegister);

    // 4. Logout Handler
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.onclick = async () => {
            await supabase.auth.signOut();
            window.location.href = 'auth.html';
        };
    }
});